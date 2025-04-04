import os
import requests
import google.generativeai as genai
from dotenv import load_dotenv
import json 
import requests
from fastapi import APIRouter, HTTPException, Request

load_dotenv()

router = APIRouter()
DEEPSEEK_API_KEY = os.getenv("DEEPSEEK_API_KEY")
GENAI_API_KEY = os.getenv("GENAI_API_KEY")

genai.configure(api_key=GENAI_API_KEY)

def generate_content_with_gemini(prompt):
    try:
        model = genai.GenerativeModel("gemini-1.5-pro-latest") 
        response = model.generate_content(prompt)
        return response.text
    except Exception as e:
        return f"Error with Gemini API: {str(e)}"


def generate_content_with_deepseek(prompt):
    try:
        deepseek_url = "https://api.deepseek.com/v1/chat/completions"
        headers = {"Authorization": f"Bearer {DEEPSEEK_API_KEY}", "Content-Type": "application/json"}
        payload = {
            "model": "deepseek-chat",
            "messages": [{"role": "user", "content": prompt}]
        }
        
        response = requests.post(deepseek_url, headers=headers, json=payload)
        deepseek_data = response.json()  
        
        print("DeepSeek API Response:", json.dumps(deepseek_data, indent=2))  
        
        if "choices" in deepseek_data:
            return deepseek_data["choices"][0]["message"]["content"]
        else:
            return f"DeepSeek API Error: {deepseek_data}"
    
    except Exception as e:
        return f"Error with DeepSeek API: {str(e)}"



@router.post("/")
async def generate_content(topic, format_type):
    prompt = f"Generate a {format_type} about {topic}."
    
    # Call Gemini AI
    gemini_result = generate_content_with_gemini(prompt)
    
    # Call DeepSeek AI
    deepseek_result = generate_content_with_deepseek(prompt)
    
    return {
        "gemini": gemini_result,
        "deepseek": deepseek_result
    }

def summarize_news(news_text):
    return generate_content(news_text, "summary")