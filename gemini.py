import google.generativeai as genai
from flask import Flask, request, jsonify, render_template
from flask_cors import CORS
from pymongo import MongoClient
from bson.objectid import ObjectId

genai.configure(api_key="AIzaSyAfhy0kAFvg5osr3zK7I9WGVo7L4hdXotA")

app = Flask(__name__)
CORS(app)

# 🧠 MongoDB Setup
client = MongoClient("mongodb://localhost:27017/")  # Adjust if hosted elsewhere
db = client["stylezen"]
users_collection = db["user"]

# 🎯 Function to fetch user preferences from MongoDB
def get_user_preferences(user_id):
    try:
        user = users_collection.find_one({"_id": ObjectId(user_id)})
        if user:
            return {
                "name": user.get("name", "User"),
                "size": user.get("size", "M"),
                "favoriteStyles": user.get("favoriteStyles", []),
                "preferredCategories": user.get("preferredCategories", []),
                "previousQueries": user.get("previousQueries", [])
            }
        else:
            return {
                "name": "Guest",
                "size": "M",
                "favoriteStyles": [],
                "preferredCategories": [],
                "previousQueries": []
            }
    except Exception as e:
        print("MongoDB Error:", e)
        return {
            "name": "Guest",
            "size": "M",
            "favoriteStyles": [],
            "preferredCategories": [],
            "previousQueries": []
        }

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/search", methods=["POST"])
def search():
    try:
        data = request.get_json()
        prompt = data.get("query", "")
        user_id = data.get("userId", None)

        if not prompt:
            return jsonify({"error": "Prompt is empty"}), 400

        preferences = get_user_preferences(user_id)

        # Personalized prompt to Gemini
        custom_prompt = f"""
You are a personalized fashion assistant for a user named {preferences['name']} on the StyleZen website.
Their preferences are:
- Style: {', '.join(preferences['favoriteStyles'])}
- Size: {preferences['size']}
- Favorite categories: {', '.join(preferences['preferredCategories'])}
- Frequently searched: {', '.join(preferences['previousQueries'])}

Using this context, help them with the query:
"{prompt}"
"""

        model = genai.GenerativeModel(model_name="models/gemini-1.5-flash-8b-latest")
        response = model.generate_content(custom_prompt)

        return jsonify({"response": response.text})

    except Exception as e:
        print("❌ ERROR:", e)
        return jsonify({"error": str(e)}), 500

if __name__ == "__main__":
    app.run(debug=True)
