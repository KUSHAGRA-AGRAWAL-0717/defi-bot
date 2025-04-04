# # server/routers/watchlist.py
# from fastapi import APIRouter, Request
# import firebase_admin
# from firebase_admin import credentials, firestore

# router = APIRouter()

# cred = credentials.Certificate("firebase.json")  # service account key
# firebase_admin.initialize_app(cred)
# db = firestore.client()

# @router.post("/add")
# async def add_token_to_watchlist(request: Request):
#     data = await request.json()
#     user_id = data.get("user_id")
#     token = data.get("token")

#     if not user_id or not token:
#         return {"error": "Missing user_id or token"}

#     db.collection("watchlists").document(user_id).set({
#         "tokens": firestore.ArrayUnion([token])
#     }, merge=True)

#     return {"message": f"Added {token} to watchlist"}

# @router.get("/get")
# def get_watchlist(user_id: str):
#     doc = db.collection("watchlists").document(user_id).get()
#     if doc.exists:
#         return {"tokens": doc.to_dict().get("tokens", [])}
#     return {"tokens": []}
