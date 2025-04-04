from fastapi import APIRouter, Query
import requests
from bs4 import BeautifulSoup
import os

router = APIRouter()

# Load GENAI API key from environment
GENAI_API_KEY = os.getenv("GENAI_API_KEY", "AIzaSyDZmRzy3RtNsMytVDDFbaAqYpEZYzvwDWM")  # replace with your dev key for testing

# ---------------------- Scraping ---------------------- #

def scrape_coindesk():
    try:
        print("[DEBUG] Starting CoinDesk scraping...")

        res = requests.get("https://www.coindesk.com/")
        if res.status_code != 200:
            print(f"[ERROR] CoinDesk returned status code: {res.status_code}")
            return []

        soup = BeautifulSoup(res.content, "html.parser")

        # Check structure by inspecting actual class names — here's a robust fallback
        articles = soup.select("a.card-title, a.card-article-title, h4")  # Try multiple selectors
        headlines = []

        for article in articles:
            text = article.get_text(strip=True)
            if text and len(text.split()) > 3:  # Filter out junk
                headlines.append(text)

        headlines = list(dict.fromkeys(headlines))  # Remove duplicates

        print(f"[DEBUG] Found {len(headlines)} headlines.")
        return headlines[:3] if headlines else []

    except Exception as e:
        print(f"[ERROR] Failed to scrape CoinDesk: {e}")
        return []



# ---------------------- Summarization ---------------------- #

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
            print("[DEBUG] Gemini response:", data)

            if "candidates" in data and data["candidates"]:
                return data["candidates"][0]["content"]["parts"][0]["text"]
            else:
                return "[ERROR] Invalid Gemini response format."

        else:
            return "[ERROR] Only Gemini model is supported right now."

    except Exception as e:
        return f"[ERROR] Exception during summarization: {e}"

# ---------------------- API Route ---------------------- #

@router.get("/")
def summarize_news(source: str = Query("coindesk")):
    if source != "coindesk":
        return {"error": "Only 'coindesk' is supported currently."}

    headlines = scrape_coindesk()
    if not headlines:
        return {"error": "No headlines found from CoinDesk."}

    summaries = [summarize_with_ai(h, model="gemini") for h in headlines]
    return {"source": source, "summaries": summaries}
