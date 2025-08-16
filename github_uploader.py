import os
import requests
from dotenv import load_dotenv

# Load .env file
load_dotenv()

# Read token from environment variable
GITHUB_TOKEN = os.getenv("GITHUB_TOKEN")

if not GITHUB_TOKEN:
    raise ValueError("❌ GitHub token not found. Please add GITHUB_TOKEN to your .env file.")

# Example: Check authentication
def check_auth():
    url = "https://api.github.com/user"
    headers = {"Authorization": f"token {GITHUB_TOKEN}"}
    response = requests.get(url, headers=headers)

    if response.status_code == 200:
        print("✅ Authenticated as:", response.json().get("login"))
    else:
        print("❌ Authentication failed:", response.text)

if __name__ == "__main__":
    check_auth()
