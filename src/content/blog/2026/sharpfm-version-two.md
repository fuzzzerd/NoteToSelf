---
title: "SharpFM Version Two"
date: 2026-08-20
author:
  name: Nate Bross
tags:
  - dotnet
  - filemaker
description: "SharpFM Version Two"
---

I have been working on SharpFM for [quite some time](https://github.com/fuzzzerd/SharpFM/commit/716beccbb3c074e4f629f0e8ad30184364536175). It started as a UWP app and stalled out. A few years back I [converted it to Avalonia](https://www.brosstribe.com/blog/2024/sharpfm-a-tool-for-filemaker-developers) and in the last few months have worked to [add some significant capabilities](https://github.com/fuzzzerd/SharpFM/releases/tag/v2.0.0).

SharpFM can read and write FileMaker Clipboard XML, allowing users to easily get FileMaker Scripts and Script Steps out of FileMaker and into raw XML. From there, SharpFM has a basic script editor that persists back to the raw XML format, so once exported the scripts can be rewritten and then copied back into FileMaker Pro.

This opens up interesting opportunities, specifically the ability to allow users to expose their scripts to AI tooling, like Claude or ChatGPT.

SharpFM is free on GitHub, but I'm offering a paid plugin that exposes all of the rich data from SharpFM to your local AI assistant. That is [SharpFM Pro](https://sharpfm.dev).

I'm welcoming feedback and feature requests, this product is different than some of the other FileMaker AI tools available, as you get to bring your own AI to the party.
