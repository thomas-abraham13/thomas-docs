---
sidebar_position: 1
title: Adaptive Bitrate & Achieved Resolution
description: How adaptive bitrate streaming works and how to confirm which resolution a player is actually achieving.
---

# Adaptive Bitrate & Testing Achieved Resolution

**ABR** stands for Adaptive Bitrate.

## What is video streaming?

A video stream is made up of lots of short segments (for example, 2 seconds each), also called chunks. When the player plays them in the right sequence, they appear to be one continuous video.

![A video split into a sequence of short segments](/img/bitrate_res/bitrate1.webp)

## Adaptive bitrate

Each segment is encoded at several bitrates and resolutions. The player picks the best one it can download in time, and switches up or down as network conditions change.

![The same segments encoded at several bitrates, with the player switching between them](/img/bitrate_res/bitrate2.webp)

**Manifest:** an index file that tells the player what the segment files are called, which bitrates and resolutions are available, and the order to play them in.

## How do you determine the resolution being played?

Start by connecting to the device's DevTools and opening the **Console** tab. If the device logs media events, you should see something similar to this:

![Media events logged in the DevTools console](/img/bitrate_res/bitrate3.webp)

It doesn't matter if these aren't visible, because you only need the network logs to verify the achieved resolution. Start video playback, open the **Network** tab, and watch the segment requests. Each audio and video segment URL includes a track number.

![Video and audio segment requests in the Network tab, showing track numbers](/img/bitrate_res/bitrate4.webp)

Next, inspect the manifest. Filter the Network tab for `.mpd` and select the matching request.

![Filtering the Network tab for the .mpd manifest request](/img/bitrate_res/bitrate5.webp)

Open the **Response** tab. You may see a message instead of the manifest content:

![DevTools unable to display the full manifest response](/img/bitrate_res/bitrate6.webp)

This happens when the response is longer than DevTools can display.

To view the full response in Postman instead, right-click the request and choose **Copy as cURL**:

![Copying the manifest request as cURL](/img/bitrate_res/bitrate7.webp)

In Postman, select **Import** and paste the cURL command:

![Importing the cURL command into Postman](/img/bitrate_res/bitrate8.webp)

Select **Send** to see the response:

![The manifest response in Postman](/img/bitrate_res/bitrate9.webp)

The response lists each track (representation) with its resolution:

![Manifest representations showing track IDs and resolutions](/img/bitrate_res/bitrate10.webp)

Compare these track numbers with the ones in the video segment URLs to see which resolution is being achieved. In the example above, playback is at 1080p.
