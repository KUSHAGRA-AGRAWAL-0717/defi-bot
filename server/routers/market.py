# routers/market.py

from fastapi import APIRouter, Query
from ccxt import binance
from pycoingecko import CoinGeckoAPI
from datetime import datetime

router = APIRouter()
cg = CoinGeckoAPI()

@router.get("/")  # Changed from /market-insights to /
def get_market_insights(token: str = Query("ETH")):
    try:
        # CCXT price fetch
        binance_client = binance()
        ticker = binance_client.fetch_ticker(f"{token}/USDT")
        price = ticker["last"]

        # DeFi trend scraping
        defi_data = cg.get_coins_markets(vs_currency="usd", category="decentralized-finance-defi")
        top_defi_tokens = [coin["name"] for coin in defi_data[:5]]

        return {
            "timestamp": datetime.utcnow().isoformat() + "Z",
            "price": {"token": token, "price": price},
            "defi_trends": {"top_defi_tokens": top_defi_tokens}
        }

    except Exception as e:
        return {"error": str(e)}
