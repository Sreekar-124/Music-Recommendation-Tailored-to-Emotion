Music-Recommendation-Tailored-to-Emotion 🎧😄😢😠
A Python + JavaScript music player that plays songs based on detected emotion, with the help of ML.
This is a music player that uses Python (FER + OpenCV + MTCNN) to detect your facial emotion and plays a suitable song based on that emotion. It also supports random mode and manual song queueing.

🛠 Tech Stack
Python: FER, OpenCV, MTCNN, Eel, NumPy, TensorFlow

Frontend: HTML, CSS, JavaScript

Audio: MP3 songs categorized by emotion

🎵 Features
1. Detects face using webcam and identifies emotion
2. Plays a song matching your detected emotion
3. Allows manual addition of songs to a queue
4. Supports random song mode
5. Interactive and user-friendly UI

🚀 How to Run
1️⃣ Install the required packages:
pip install opencv-python opencv-contrib-python eel numpy tensorflow fer
(And any other dependencies required by fer.)

2️⃣ Run the Python code:
python emotion_detection.py

3️⃣ This will open main.html in your browser.

📂 Folder Structure
projectFolder/
├── Web/
│   ├── main.html
│   ├── music.html
│   ├── background.css
│   ├── header.css
│   ├── player.css
│   ├── code.js
├── emotion_detection.py
