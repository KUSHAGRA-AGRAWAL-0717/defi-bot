import asyncio
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from telegram import Bot

# Initialize FastAPI app
app = FastAPI()

# Telegram Bot Token
TELEGRAM_BOT_TOKEN = "7499656306:AAH5xgBxfxMyn_x2RnPSjXZacfXOGS6kMR8"
bot = Bot(token=TELEGRAM_BOT_TOKEN)

# Define request model
class ChatRequest(BaseModel):
    chat_id: int

# DeFi news post
news_post = """🚀 **Breaking DeFi News: Bitcoin ETFs Ignite a Crypto Surge!**  

🔥 **Bitcoin and DeFi markets are soaring** after multiple **Bitcoin ETFs** saw record inflows! With major institutional investors pouring money into crypto, the **DeFi ecosystem is experiencing renewed growth.**  

📈 **Key Highlights:**  
✅ **Bitcoin ETFs** attracted over **$2.5B in a week**  
✅ **Ethereum staking hits an all-time high**  
✅ **DeFi protocols like Aave & Uniswap see TVL increase**  

💡 **What’s Next?**  
With growing institutional adoption, **DeFi is set for another bull run!** Are you bullish? 🚀💰  

#DeFi #BitcoinETF #Ethereum #CryptoNews #Web3  
"""

@app.post("/send_news")
async def send_news(request: ChatRequest):
    """API endpoint to send news to a Telegram user"""
    chat_id = request.chat_id

    try:
        await bot.send_message(chat_id=chat_id, text=news_post)
        return {"message": "✅ News sent successfully!"}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="127.0.0.1", port=8000)
