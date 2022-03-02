---
title: Fix for Remote Desktop Connection Manager (RDCMan) on High DPI Devices
description: If you're like me, you probably find yourself needing to remote into servers from time to time. Again, if you're like me, you probably got tired of doing it manually and found a tool to help you. I know did, I found and live by RDCMan.
date: 2017-11-28
author: 
  name: Nate Bross
tags: 
  - tools
---
If you're like me, you probably find yourself needing to remote into servers from time to time. Again, if you're like me, you probably got tired of doing it manually and found a tool to help you. I know did, I found and live by RDCMan.

One of the many beautiful features, is it gives you the ability to store an encrypted file with all your connection, display, settings along with credentials. So you're only a short double click away from being on the remote desktop you need to be on.

Its been working for me for years. In the last few years, High-DPI devices have become more common and RDCMan didn't play well. That is, by default. One simple operating system setting/configuration was all it took to get sorted out.

    Simply go to the properties of your shortcut, on the compatibility tab, change the HighDPI drop down from Application to System.

<content-image
  src="blog/archive/2017-11-28-14_31_02-remote-desktop-connection-manager-properties.png"
  alt="rdcman connection properties"></content-image>

I'm rather disappointed it took me this long to figure out, but now that I have it working its fantastic and my remote sessions are no longer scaled way down to fit.
