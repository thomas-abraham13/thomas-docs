# DRM

### DRM - Digital Rights Management

- Security measures need to be implemented on content to ensure that studios continue to sell to providers.

- Digital Rights Management encompasses a few approaches to protecting the content. In its simplest form, we encrypt the video so that only people who have logged into a service can decode it. We give them short lived tokens that allow them to decrypt it. This is all done in the background and the viewer should not be aware that it is happening.

- We use a variety of encryption providers as not all devices support the same encryption systems. This adds to the complexity of preparing content so it can be used by as many device types as possible.

- In order for DRM to take effect without any wasted effort it has to happen during the Packaging stage shown below.

<!-- <p align="center"> ![drm1](https://raw.githubusercontent.com/thomas-abraham13/thomas-docs/refs/heads/main/static/img/drm/drm1.png) </p> -->

### DASH & HLS

#### DASH - Dynamic Adaptive Streaming over HTTP

#### HLS - HTTP LIve Streaming

#### HDS - HTTP Dynamic Streaming

<!-- <p align="center"> ![drm1](https://raw.githubusercontent.com/thomas-abraham13/thomas-docs/refs/heads/main/static/img/drm/drm2.png) </p> -->

### Differences:
1. **Encoding formats:** MPEG-DASH allows the use of any encoding standard. HLS, on the other hand, requires the use of [H.264](https://www.cloudflare.com/learning/video/what-is-h264-avc/) or H.265. Manifest files are of type *.mpd* for DASH and *.m3u8* for HLS.
2. **Device support:** HLS is the only format supported by Apple devices. iPhones, MacBooks, and other Apple products cannot play video delivered over MPEG-DASH.
3. **Segment length:** As of 2023 the default segment length for HLS is 6 seconds and 2-10 seconds for MPEG-DASH.
4. **Standardization:** MPEG-DASH is an international standard. HLS is not but is still widely used.

#### DVB-DASH:
It is subset of MPEG DASH with a few extensions, along with a set of requirements for the DASH player in the client.

### DRMs:
1. Widevine - Google
2. Playready - Microsoft
3. Fairplay - Apple
4. Wiseplay - Huawei (Used with HarmonyOS)

## Security Levels

#### [Playready](https://learn.microsoft.com/en-us/playready/overview/security-level)

|Security Level|Purpose|Client Implementation|Version|
|--------------|:-----:|:-------------------:|------:|
|SL150|For clients under development or under test. Not suitable for commercial content in a commercial scenario.|Any implementation is acceptable. Assets, Client Secrets, or Content Secrets are not protected at all against unauthorized use.|Any |
|SL2000|For hardened devices and applications consuming commercial content.|For devices and applications.Assets, Client Secrets, or Content Secrets are protected through software or hardware means.|Any |
|SL3000|For hardened devices with the highest security consuming the highest quality of commercial content.|For devices only.Assets, Client Secrets, and Content Secrets are protected through hardware means, using a Trusted Execution Environment (TEE) of the processor. Conformant to a superset of the Compliance and Robustness requirements.|PlayReady 3.0 or higher |