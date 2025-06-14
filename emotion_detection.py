from fer import FER
import matplotlib.pyplot as plt 
import cv2
import os 
import eel
#import light

eel.init('Web')

def grab_face():
    print("[DEBUG] Starting webcam...")
    camera = cv2.VideoCapture(0)

    if not camera.isOpened():
        print("[ERROR] Could not open webcam.")
        return False

    #discarding the initial black frames
    for _ in range(5):
        ret, image = camera.read()

    ret, image = camera.read()
    if ret:
        cv2.imshow("Captured Image", image)
        cv2.waitKey(1000)  # wait 1 sec
        cv2.destroyAllWindows()
        cv2.imwrite('photo.jpg', image)
        print("[DEBUG] Photo saved as photo.jpg")
    else:
        print("[ERROR] Failed to read from webcam.")

    camera.release()
    print("[DEBUG] Webcam released.")
    return ret

@eel.expose
def getEmotion():
    print("[DEBUG] Emotion detection triggered.")
    
    if not grab_face():
        return "WebcamError"

    img = cv2.imread("photo.jpg")
    if img is None:
        print("[ERROR] Failed to read image file.")
        return "ImageReadError"

    detector = FER(mtcnn=True)
    emotions = detector.detect_emotions(img)
    
    if not emotions:
        print("[ERROR] No face detected.")
        return "NofaceDetected"

    #Showing all detected emotions and scores
    print("\n[DEBUG] All detected emotion scores:")
    for face in emotions:
        for emotion, score in face["emotions"].items():
            print(f"{emotion}: {score:.2f}")
        print("-" * 30)

    #Getting the top emotion from the first detected face
    emotion_scores = emotions[0]['emotions']
    top_emotion = max(emotion_scores, key=emotion_scores.get)
    score = emotion_scores[top_emotion]
    print(f"\n[DEBUG] Top detected emotion: {top_emotion}, score: {score:.2f}")

    return str(top_emotion)

eel.start('main.html', size=(800, 600))

#cd "C:\Users\Sreekar\OneDrive\Documents\Emotion[1]\Emotion"