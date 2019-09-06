# twitch-clone

Video Streaming Platform

# Built with : 

  - React
  - Redux
  - React Forms
  - OBS (https://obsproject.com/)
  - Flv.js
  - React Redux Router


# Getting Started :

  1- Install OBS using the instrucations on the website

  2- Open OBS 

  3- Configure A new sence 

  4- Add an audio capture device

  5- Add a screen capture configuration

  6- From OBS open settings and select `Stream` from the right menu choose 
    server : `custom` 
    url : `rtmp://localhost/live`
    Stream Key : `1` (Represents the stream id from the application URL ex: http://localhost:3000/streams/1) 1 is the stream id

  7- Clone the the project (https://github.com/ahmedalaahagag/twitch-clone)

  8- On the the project's 3 Directories (api - rtmpserver - client) run `npm start`
    - api folder : is a json database using 'db.json' file which already has some examples of the recoreds
    - rtmpserver : holds the streaming server
    - client : where you have the channels and users that you want to see and manage your streams/channels

  9- Using your google account login to the platform using the top corner right hand side (sign in with google)

  10- Start streaming and viewing others

# Disclaimer
This project was made for fun copy it on your own risk and have fun ;)

# License
Copyright 2019 ahmedalaahagag

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
