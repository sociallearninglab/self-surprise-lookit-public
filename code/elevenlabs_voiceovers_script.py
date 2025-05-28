from dotenv import load_dotenv
import os
import pandas as pd
import requests
import json


load_dotenv()

# config
VOICE_ID = ""
CSV_FILE = ""
OUTPUT_DIR = ""
TEXT_COLUMN = ""
FILENAME_COLUMN = ""

# key
ELEVENLABS_API_KEY = ""

os.makedirs(OUTPUT_DIR, exist_ok=True)

# csv
df = pd.read_csv(CSV_FILE)
print("Available columns:", df.columns.tolist())

def generate_audio(text, voice_id, api_key):
    url = f"https://api.elevenlabs.io/v1/text-to-speech/{voice_id}"
    
    headers = {
        "Accept": "audio/mpeg",
        "Content-Type": "application/json",
        "xi-api-key": api_key
    }
    
    # finetune as needed!
    data = {
        "text": text,
        "model_id": "eleven_multilingual_v2",
        "voice_settings": {
            "stability": 0.3,
            "similarity_boost": 0.7,
            "style": 0.5,
            "use_speaker_boost": True,
            "speed": 0.8
        }
    }
    
    response = requests.post(url, json=data, headers=headers)
    
    if response.status_code == 200:
        return response.content
    else:
        raise Exception(f"API request failed with status code {response.status_code}: {response.text}")

for i, row in df.iterrows():
    text = str(row[TEXT_COLUMN]).strip()
    filename = str(row[FILENAME_COLUMN]).strip()
    if not text or not filename:
        continue

    output_path = os.path.join(OUTPUT_DIR, f"{filename}.mp3")

    try:
        audio = generate_audio(text, VOICE_ID, ELEVENLABS_API_KEY)
        
        with open(output_path, "wb") as f:
            f.write(audio)
            
        print(f"✅ Saved: {output_path}")
    except Exception as e:
        print(f"❌ Error on line {i}: {e}")