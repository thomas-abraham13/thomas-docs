---
sidebar_position: 2
title: Philips Titan OS
description: Add an app to the Titan OS sandbox, pair a Philips TV, and enable remote debugging.
---

# Philips Titan OS

This guide explains how to add an app to the Titan OS sandbox, pair a Philips TV for testing, and inspect an app remotely with Chrome DevTools.

## Add apps to the sandbox

1. Create an account or sign in to the [Titan OS Partner Portal](https://partners.titanos.tv/). If you need the existing development account, retrieve its details from the team password manager.

2. Navigate to **DevView**. If you do not have access, request it through the portal. Approval can take up to two days. Alternatively, ask to have your account added to the existing organisation.

   ![DevView in the Titan OS Partner Portal](/img/titan-os/partner-portal-devview.png)

3. Add the apps you want to test to your sandbox by selecting the button in the top-right corner.

   ![Add an app to the Titan OS sandbox](/img/titan-os/sandbox-add-app.png)

4. Fill in the required app information and save it.

   ![Titan OS sandbox app details form](/img/titan-os/sandbox-app-details.png)

## Pair a device

1. On the TV, search for and open the **DevView** app. Install it if necessary.

   ![DevView app on a Philips TV](/img/titan-os/devview-app.png)

2. In the partner portal, open **Device Management** and select **Add new device** in the top-right corner.

   ![Device Management in the Titan OS portal](/img/titan-os/device-management.png)

3. Enter the access code displayed on the TV to pair it with your account.

   ![Titan OS device pairing code form](/img/titan-os/device-pairing-code.png)

4. Select an app candidate and start it on the paired device.

   ![App candidates available to a paired Titan OS device](/img/titan-os/app-candidates.png)

## Debug a Philips 2024 TV

1. Ensure the TV and development computer are connected to the same network.
2. Open `chrome://inspect/devices` in Chrome.
3. Enable **Discover network targets**, then select **Configure**.
4. Add the TV's IP address with port `9222`, for example `192.168.132.121:9222`.
5. When Chrome displays the URL open on the TV, select **inspect** to launch Chrome DevTools.
