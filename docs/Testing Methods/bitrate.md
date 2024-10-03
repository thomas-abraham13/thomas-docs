# Adaptive Bitrate & Testing Achieved Resolution

#### ABR - Adaptive Bitrate

### What is Video Streaming?
The Video is made up of lots of short (e.g. 2 second) segments, which, when played in the right sequence, appear to be a continuous video stream. (Segments can also be called chunks)

<p align="center"> ![bitrate1](https://raw.githubusercontent.com/thomas-abraham13/thomas-docs/refs/heads/main/static/img/bitrate_res/bitrate1.png) </p>

### Adaptive Bitrate

<p align="center"> ![bitrate2](https://raw.githubusercontent.com/thomas-abraham13/thomas-docs/refs/heads/main/static/img/bitrate_res/bitrate2.png) </p>

#### <u>Manifest</u>: An index file which tells the players what the short video segment files are called and what order to play them for a programme

### How do you determine the resolution of the video being played?

Start by connecting to the device's devtools and open up the console tab. If the option to see media events exists then you should see something similar to the image below:

<p align="center"> ![bitrate3](https://raw.githubusercontent.com/thomas-abraham13/thomas-docs/refs/heads/main/static/img/bitrate_res/bitrate3.png) </p>

It does not matter if this isn't visible as we only require the network logs to verify the contents achieved resolution. Start video playback and head over to the Network tab on the devtools and observe the chunks/segments. You should be able to see a track number along with each of the audio and video chunks.

<p align="center"> ![bitrate4](https://raw.githubusercontent.com/thomas-abraham13/thomas-docs/refs/heads/main/static/img/bitrate_res/bitrate4.png) </p>

Next you’ll need to inspect the manifest file, you can do this by searching for `.mpd` on the Network tab and selecting the corresponding request.

<p align="center"> ![bitrate5](https://raw.githubusercontent.com/thomas-abraham13/thomas-docs/refs/heads/main/static/img/bitrate_res/bitrate5.png) </p>

You'll then need to go to the Request tab where you may encounter this issue:

<p align="center"> ![bitrate6](https://raw.githubusercontent.com/thomas-abraham13/thomas-docs/refs/heads/main/static/img/bitrate_res/bitrate6.png) </p>

The required data isn't visible here because it exceeds the maximum number of characters that can be displayed.

An alternative way to view the Response using Postman is to copy the call as a cURL:

<p align="center"> ![bitrate7](https://raw.githubusercontent.com/thomas-abraham13/thomas-docs/refs/heads/main/static/img/bitrate_res/bitrate7.png) </p>

Go to Postman and import the call

<p align="center"> ![bitrate8](https://raw.githubusercontent.com/thomas-abraham13/thomas-docs/refs/heads/main/static/img/bitrate_res/bitrate8.png) </p>

Press Send and you should be able to see the Response data

<p align="center"> ![bitrate9](https://raw.githubusercontent.com/thomas-abraham13/thomas-docs/refs/heads/main/static/img/bitrate_res/bitrate9.png) </p>

You should now be able to see the various segment tracks

<p align="center"> ![bitrate10](https://raw.githubusercontent.com/thomas-abraham13/thomas-docs/refs/heads/main/static/img/bitrate_res/bitrate10.png) </p>

#### You can now compare the track numbers to the those seen on the video chunks and determine which resolution is being achieved. In the above example, playback is achieved at 1080p.