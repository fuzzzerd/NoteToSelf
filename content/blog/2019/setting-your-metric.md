---
title: Setting Your Metric for Hyper-V Wireless Networking 
date: 2019-06-10
author: 
  name: Nate Bross
tags: 
  - troubleshooting
---
I've been struggling to setup Hyper-V networking on a laptop for a while now. Until recently I was able to work around it, and not actually solve the problem.

Its well documented, that sharing a Wireless network card in Hyper-V wont work. Since Windows 10 1709, a nifty 'Default Switch' has been provided to help VMs connect to the network via NAT using the hosts default connection. I could only ever get this to work intermittently. Why? Metric.

I believe this has something to do with my specific setup, so I'll outline that too. I use my laptop in three primary modes. 

1. Docked which has multiple DisplayPort, USB, 3.5mm, and Ethernet ports, but I use wireless networking
2. Totally mobile, not connected to anything but power, obviously wireless.
3. USB-C Dock with HDMI and USB, again wireless networking.

Eventually I came to notice that it worked when I was not docked. As a diagnostic step I disabled the unused Ethernet connection, and things started working. This told me there was some issue with determining which connection the VM should use.

I set the Metric on my Wireless connection to 1, on my Virtual Adapter (VPN) to 2, and my Wired Ethernet to 50. Things have been working great since. Go figure.

> Adapter Settings => IPv4 Properties => Advanced => Uncheck Automatic metric, and specify a value. 

<content-image 
  src="blog/2019/network-metric.png"
  alt="Windows network metric settings panel"></content-image>