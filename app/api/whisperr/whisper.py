# script_whisper.py
import whisper
import sys

# Charger le modèle Whisper
model = whisper.load_model("base")  # Tu peux aussi utiliser "small", "medium", "large"

# Charger le fichier audio
audio_path = sys.argv[1]  # Le fichier audio sera passé en argument
result = model.transcribe(audio_path)

# Afficher la transcription
print(result['text'])
