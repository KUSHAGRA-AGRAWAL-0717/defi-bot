# server/routers/news.py
from fastapi import APIRouter, Query
import requests
from bs4 import BeautifulSoup
import os

router = APIRouter()

GENAI_API_KEY = os.getenv("GENAI_API_KEY")
DEEPSEEK_API_KEY = os.getenv("DEEPSEEK_API_KEY")

def scrape_coindesk():
    res = requests.get("https://www.coindesk.com/")
    soup = BeautifulSoup(res.content, "html.parser")
    headlines = soup.find_all("h4")
    return [h.text.strip() for h in headlines[:3]]

def summarize_with_ai(text: str, model: str = "gemini") -> str:
    try:
        if model == "gemini":
            headers = {"Authorization": f"Bearer {GENAI_API_KEY}"}
            payload = {
                "contents": [{"parts": [{"text": f"Summarize this news:\n{text}"}]}]
            }
            response = requests.post(
                "https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent",
                headers=headers,
                json=payload,
            )
            data = response.json()
            return data["candidates"][0]["content"]["parts"][0]["text"]
        else:
            headers = {
                "Authorization": f"Bearer {DEEPSEEK_API_KEY}",
                "Content-Type": "application/json",
            }
            payload = {
                "model": "deepseek-chat",
                "messages": [{"role": "user", "content": f"Summarize this news:\n{text}"}]
            }
            response = requests.post(
                "https://api.deepseek.com/v1/chat/completions",
                headers=headers,
                json=payload,
            )
            data = response.json()
            return data["choices"][0]["message"]["content"]
    except Exception as e:
        return f"Error summarizing: {e}"

@router.get("/")
def summarize_news(source: str = Query("coindesk")):
    if source == "coindesk":
        headlines = scrape_coindesk()
    else:
        return {"error": "Only 'coindesk' is supported currently."}

    summaries = [summarize_with_ai(h, model="gemini") for h in headlines]
    return {"source": source, "summaries": summaries}
