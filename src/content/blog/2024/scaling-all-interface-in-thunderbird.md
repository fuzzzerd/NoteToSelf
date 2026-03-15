---
title: Scaling the UI in Thunderbird, including messages list et al.
date: 2024-03-28
lastMod: 2024-03-28
author: 
  name: Nate Bross
tags: 
  - software
  - configuration
---

I use a lot of software on a lot of devices. Sometimes the defaults just don't work for me. Thunderbird is a great mail application, but using it on Ubuntu with a high dpi screen, the messages list was tiny.

There is an advanced setting that allows you to scale the UI, but was difficult to find how to actually change it. This [old support forum](https://support.mozilla.org/en-US/questions/1140652) explains how to do it in an older version, and [this Super User post](https://superuser.com/a/1660653/45028) gets you close. 

The bottom line is that you need to get to the [Configuration Editor.](https://support.mozilla.org/en-US/kb/config-editor) to edit

> layout.css.devPixelsPerPx

The default value was -1.0, but its a scaling setting that you can dial in to get the exact size you want. For my situation, 2.25 seems to work well, but the change is immediate so you can quickly get a sense of what's going to work for you.
