# Apple TV with Charles Certificate (Supervised)

Pre-requisites:

- You’ll need Charles up and running with all the required rewrites. Leave it running throughout this process.

- The Charles certificate saved as a .cer.

- You’ll need to know your IP address (Charles Proxy → Help → Local IP)

- A C-type cable if you have an Apple TV 4th Gen device

### Step 1: Reset Apple TV
Go to Settings

<p align="center"> ![appletv1](https://raw.githubusercontent.com/thomas-abraham13/thomas-docs/refs/heads/main/static/img/appletvcharles/appletv1.png) </p>

System

<p align="center"> ![appletv2](https://raw.githubusercontent.com/thomas-abraham13/thomas-docs/refs/heads/main/static/img/appletvcharles/appletv2.png) </p>

Reset

<p align="center"> ![appletv3](https://raw.githubusercontent.com/thomas-abraham13/thomas-docs/refs/heads/main/static/img/appletvcharles/appletv3.png) </p>

Reset & Update

<p align="center"> ![appletv4](https://raw.githubusercontent.com/thomas-abraham13/thomas-docs/refs/heads/main/static/img/appletvcharles/appletv4.png) </p>

This process should take 20+ minutes every time you attempt it, I have found that just a Reset sometimes works on an Apple TV 4th (with C port) but it rarely works on the 5th Gen. In most cases if the device has been setup once before then just a Reset should suffice.

### Step 2: Manual Configuration
After your Apple TV has complete its reset <strong>🔴LEAVE IT ON THE HELLO PAGE🔴</strong> and launch Apple Configurator.

If you have an Apple TV 4th Gen then connect it to your Mac using a C-type cable. If you have a 5th Gen then connect both your Mac and the device to the same network using an Ethernet cable.

Click on the Apple TV device in Apple Configurator

<p align="center"> ![appletv5](https://raw.githubusercontent.com/thomas-abraham13/thomas-docs/refs/heads/main/static/img/appletvcharles/appletv5.png) </p>

Select ‘Manual Configuration’ and tick ‘Supervise devices and 'Allow devices to pair with other computers’ → Click 'Next’

<p align="center"> ![appletv6](https://raw.githubusercontent.com/thomas-abraham13/thomas-docs/refs/heads/main/static/img/appletvcharles/appletv6.png) </p>

Select 'Do not enroll in MDM' → Click 'Next’

<p align="center"> ![appletv7](https://raw.githubusercontent.com/thomas-abraham13/thomas-docs/refs/heads/main/static/img/appletvcharles/appletv7.png) </p>

'Skip' Sign in to Apple School manager

Create new organization (Add a name e.g. ITV_FX) >>> click ‘Next’

<p align="center"> ![appletv8](https://raw.githubusercontent.com/thomas-abraham13/thomas-docs/refs/heads/main/static/img/appletvcharles/appletv8.png) </p>

Choose to 'Generate a new supervision identity’

Select ‘show all steps’ >>> Click 'Prepare’

<p align="center"> ![appletv9](https://raw.githubusercontent.com/thomas-abraham13/thomas-docs/refs/heads/main/static/img/appletvcharles/appletv9.png) </p>

You should now see your AppleTV device sitting in the supervised devices tab of the Apple Configurator app.

<p align="center"> ![appletv10](https://raw.githubusercontent.com/thomas-abraham13/thomas-docs/refs/heads/main/static/img/appletvcharles/appletv10.png) </p>

Now move back to your AppleTV device which will still be sitting at the initial screen after the reset cycle → Complete the setup steps again

🔴IT IS AT THIS POINT YOU NEED TO DOWNLOAD THE REQUIRED APP AS YOU WON’T BE ABLE TO CONNECT TO APP STORE AFTER YOU INSTALL THE NEW PROFILE BELOW🔴

NOTE: I got stuck in a loop where I could not get the TVOS device to be Supervised, but I found the answer to this [here](https://developer.apple.com/forums/thread/89603)

### Step 3: Create a new Profile with your Mac IP and Charles certificate
Go to Apple Configurator → File → New Profile

<p align="center"> ![appletv11](https://raw.githubusercontent.com/thomas-abraham13/thomas-docs/refs/heads/main/static/img/appletvcharles/appletv11.png) </p>

Select 'Global HTTP Proxy' → Click configure → Add Laptop IP :8888 (Port used for Charles Proxy)

<p align="center"> ![appletv12](https://raw.githubusercontent.com/thomas-abraham13/thomas-docs/refs/heads/main/static/img/appletvcharles/appletv12.png) </p>

Select 'Certificates' → Click configure → Add your Locally saved Charles Proxy .cer file

<p align="center"> ![appletv13](https://raw.githubusercontent.com/thomas-abraham13/thomas-docs/refs/heads/main/static/img/appletvcharles/appletv13.png) </p>

Click File → Save → Give it a suitable name → Close Profile Window

### Step 4: Install a new profile to enable Proxying
Double Click the Supervised Apple TV device

Click +Add → Profile → Select Relevant Saved profile from above and ‘Add’ to add the Profile onto the Apple TV device

<p align="center"> ![appletv14](https://raw.githubusercontent.com/thomas-abraham13/thomas-docs/refs/heads/main/static/img/appletvcharles/appletv14.png) </p>

Back on the Apple TV:

Navigate to Settings → General → About → Certificate Trust Settings

<p align="center"> ![appletv15](https://raw.githubusercontent.com/thomas-abraham13/thomas-docs/refs/heads/main/static/img/appletvcharles/appletv15.png) </p>

You should now see traffic in Your Charles Proxy

#### NOTE:
- Once you have done the above steps to get your appleTV device paired with Apple configurator, you should not have to do that again on your next session. The above is all to get the profile loaded onto your AppleTV.

- If you move from one wifi to another then you would have to go through the steps to load on a different profile with the relevant IP addresses.

- Documentation from Apple can be found [here](https://support.apple.com/en-gb/guide/apple-configurator-mac/cada1ba9dab1/mac)