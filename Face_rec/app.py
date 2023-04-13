from flask import Flask,render_template,Response
import cv2
from tkinter import Tk
from tkinter.filedialog import askopenfilename 
import face_recognition
import urllib.request
import numpy as np
import time

app=Flask(__name__)

Tk().withdraw()
load_video=askopenfilename()
print(load_video)
camera=cv2.VideoCapture(load_video)

Tk().withdraw()
load_image=askopenfilename()
target_image=face_recognition.load_image_file(load_image)

black_link="https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Elon_Musk_Royal_Society_%28crop2%29.jpg/1200px-Elon_Musk_Royal_Society_%28crop2%29.jpg"
urllib.request.urlretrieve(black_link,"black.png") 
black =  face_recognition.load_image_file("black.png")

def findEncodings(imagesList):
    encodeList = []
    for img in imagesList:
        #img = cv2.cvtColor(img, cv2.COLOR_BGR2RGB)
        #print(type(img))
        encode = face_recognition.face_encodings(img)[0]
        encodeList.append(encode)

    return encodeList

image_list=[]
image_list.append(target_image)
image_list.append(black)
print("Encoding ...")
encodeListKnown = findEncodings(image_list)

status="UNDETECTED"
stime=0
etime=0
total_seconds=0
def generate_frames():
    f=0
    # ptime=time.time()
    stime=time.time()
    while True:
        success,frame= camera.read()
        # frame=cv2.resize(frame,(224,224))
        if not success: 
            break
        elif f==5:
            break
        else:
            face_cascade=cv2.CascadeClassifier("haarcascade_frontalface_default.xml")
            faces=face_cascade.detectMultiScale(frame,1.3,5)
            gray=cv2.cvtColor(frame,cv2.COLOR_BGR2GRAY)

            facecurrent=face_recognition.face_locations(frame)
            encodecurface=face_recognition.face_encodings(frame,facecurrent)

            for eFace,faceLoc in zip(encodecurface,facecurrent):
                matches=face_recognition.compare_faces(encodeListKnown,eFace)
                faceDis=face_recognition.face_distance(encodeListKnown,eFace)
                print("matches",matches[0])
                # print("faceDis",faceDis)
                if(matches[0]): 
                #     global status
                #     status="DETECTED"
                #     # ctime=time.time()
                    f+=1
                #     break
                matchIndex=np.argmin(faceDis) #current change
                print("Match Index",matchIndex)
            
            for(x,y,w,h) in faces: #top right bottom left
                cv2.rectangle(frame,(x,y),(x+w,y+h),(0,255,0),3)
            ret,buffer=cv2.imencode('.jpg',frame)
            frame=buffer.tobytes()   
            yield(b'--frame\r\n'
                b'Content-Type: image/jpeg\r\n\r\n' + frame + b'\r\n')
    if f!=0:
        status="DETECTED !"
        print(status)
        etime=time.time()
        total_seconds=etime-stime
        print(total_seconds)
        


@app.route('/')
def index():
    return render_template('index.html')

@app.route('/video')
def video():
    return Response(generate_frames(),mimetype='multipart/x-mixed-replace; boundary=frame')

if __name__=="__main__":
    app.run( use_reloader=False)