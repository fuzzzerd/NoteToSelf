---
title: Errors installing SSH Server on domain joined Windows 10 laptop using WSUS
date: 2022-04-07
author: 
  name: Nate Bross
tags: 
  - windows
  - development
---

While attempting to setup SSH access to a Windows 10 machine, following this guide: <https://docs.microsoft.com/en-us/windows-server/administration/openssh/openssh_install_firstuse>, I kept running into a generic Windows install failed error. It became apparent that the issue was because the system was failing to download the optional windows feature.

Turns out that for some reason the WSUS server that the machine was connected to didn't have that optional feature, so a local gpedit was necessary to configure the machine to directly download optional features from Windows Update.

![windows-gpedit-chang](gpedit-settings-for-install-ssh.drawio.svg)

After checking the box here, it was as simple as re-running the install from the Settings app.
