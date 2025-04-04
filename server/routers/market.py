# routers/market.py
from fastapi import APIRouter, Query
from ccxt import binance  # Corrected 'bimance' to 'binance'
from pycoingecko import CoinGeckoAPI  # Corrected 'nvcoinpecko' to 'pycoingecko'

router = APIRouter()
cg = CoinGeckoAPI()

@router.get("/market-insights")
def get_market_insights(token: str = Query("ETH")):
    binance_client = binance()
    ticker = binance_client.fetch_ticker(f"{token}/USDT")
    price = ticker["last"]

    # Get top DeFi tokens
    defi = cg.get_coins_markets(vs_currency="usd", category="decentralized-finance-defi")
    top_defi_tokens = [coin["name"] for coin in defi[:5]]

    return {"price": {"token": token, "price": price}, "defi_trends": {"top_defi_tokens": top_defi_tokens}}
