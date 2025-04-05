import requests
from telegram import Update
from telegram.ext import Application, CommandHandler, CallbackContext

# Telegram Bot Token
TELEGRAM_BOT_TOKEN = "7499656306:AAH5xgBxfxMyn_x2RnPSjXZacfXOGS6kMR8"
BACKEND_API_URL = "http://127.0.0.1:8000/send_news"

async def news_command(update: Update, context: CallbackContext):
    """Handles /news command and sends a request to the backend"""
    chat_id = update.message.chat_id
    response = requests.post(BACKEND_API_URL, json={"chat_id": chat_id})

    if response.status_code == 200:
        await update.message.reply_text("✅ DeFi news is on its way!")
    else:
        await update.message.reply_text("❌ Failed to send news.")

def main():
    """Main function to run the bot"""
    app = Application.builder().token(TELEGRAM_BOT_TOKEN).build()
    
    # Add command handler for /news
    app.add_handler(CommandHandler("news", news_command))

    print("🤖 Bot is running...")
    app.run_polling()

if __name__ == "__main__":
    main()
