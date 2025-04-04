from fastapi import APIRouter
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from datetime import datetime
import ccxt

app = FastAPI()

# Allow CORS (for frontend or bot access)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Change this to your frontend URL in production
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Initialize Binance
exchange = ccxt.binance()

# Crypto pairs to track
symbols = [
    'BTC/USDT', 'ETH/USDT', 'SOL/USDT', 'DOGE/USDT', 'ADA/USDT',
    'XRP/USDT', 'AVAX/USDT', 'DOT/USDT', 'LINK/USDT',
    'LTC/USDT', 'TRX/USDT', 'NEAR/USDT', 'UNI/USDT', 'INJ/USDT',
    'OP/USDT', 'BCH/USDT', 'APT/USDT', 'SUI/USDT', 'PEPE/USDT'
]

router = APIRouter( tags=["CCXT"])

@router.get("/")
def get_prices():
    prices = []
    for symbol in symbols:
        try:
            ticker = exchange.fetch_ticker(symbol)
            prices.append({
                "symbol": symbol,
                "price": round(ticker["last"], 6),
                "timestamp": datetime.utcnow().isoformat() + "Z"
            })
        except Exception as e:
            prices.append({
                "symbol": symbol,
                "error": str(e)
            })

    return {"timestamp": datetime.utcnow().isoformat() + "Z", "data": prices}
