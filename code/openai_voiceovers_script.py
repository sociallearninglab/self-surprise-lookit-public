import openai
import pandas as pd
import os
import re
import time

# config (REPLACE)
API_KEY = "Y"
VOICE = ""
MODEL = ""
CSV_FILE = ""
TEXT_COLUMN = "" 
FILENAME_COLUMN = ""
OUTPUT_DIR = ""

# setup
openai.api_key = API_KEY
os.makedirs(OUTPUT_DIR, exist_ok=True)

def clean_text(text_input):
    processed_text = str(text_input)
    processed_text = re.sub(r'\[.*?\]', '', processed_text)
    processed_text = re.sub(r'\(.*?\)', '', processed_text)
    return processed_text.strip()

try:
    df = pd.read_csv(CSV_FILE)
except FileNotFoundError:
    print(f"Error: The CSV file '{CSV_FILE}' was not found.")
    exit(1)
except Exception as e:
    print(f"Error: Could not load CSV file '{CSV_FILE}'. {e}")
    exit(1)


for index, row in df.iterrows():
    try:
        text_to_speak = clean_text(row[TEXT_COLUMN])
        output_filename = str(row[FILENAME_COLUMN])
        

        if not text_to_speak or not output_filename:
            continue

        full_output_path = os.path.join(OUTPUT_DIR, output_filename)
        
        response = openai.audio.speech.create(
            model=MODEL,
            voice=VOICE,
            input=text_to_speak
        )
        
        with open(full_output_path, "wb") as f:
            f.write(response.content)
        
        time.sleep(1.2)

    except KeyError as e:
        print(f"Row {index}: Skipping due to missing column: {e}. Ensure '{TEXT_COLUMN}' and '{FILENAME_COLUMN}' exist in '{CSV_FILE}'.")
    except Exception as e:
        filename_context = row.get(FILENAME_COLUMN, "N/A")
        print(f"Row {index}: Error processing (File: {filename_context}): {e}")

