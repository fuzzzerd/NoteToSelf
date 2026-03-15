---
title: SharpFM a FileMaker Developer Tool
date: 2024-09-04
lastMod: 2024-09-04
author: 
  name: Nate Bross
tags: 
  - development
  - filemaker
  - tool
---

One thing that FileMaker makes difficult, is sharing your work without sharing the whole FileMaker file. Sharing table schema, scripts, calculations, custom functions, etc is all difficult without sharing the complete .fmp12 file which often includes data and other file specific objects.

SharpFM is a utility to make it easy to save these FileMaker objects outside of a FileMaker app.

FileMaker allows you to copy/paste all of these objects from one file to another if you have both files open in the same copy of FileMaker. SharpFM is able to tap into this behavior to allow us to save those objects as raw XML. Essentially tapping into the Clipboard API to receive those objects and convert the raw binary data to XML that can be saved anywhere. In other words, you can't copy a FileMaker script and paste it into Notepad, but you can paste it into SharpFM! Same with tables, layouts, script steps and full scripts. Copy from FileMaker, paste into SharpFM. Then you can do the reverse too, copy from SharpFM and paste into FileMaker!

Once you have pasted the object into SharpFM, it stores them in a folder you select. From there you can save, share, and edit the XML files and then use SharpFM to copy the raw XML back into the same, or a different FileMaker file.

You can download it from GitHub: <https://github.com/fuzzzerd/SharpFM>. Go to Releases and download the latest version.

Feedback is welcome! If you use it, find it interesting, have a question, or want to contribute big fixes or enhancements, [please create an issue](https://github.com/fuzzzerd/SharpFM/issues/new) so we can discuss how to get it done.
