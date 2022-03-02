---
title: Debugging Javascript in a FileMaker Web View Control 
date: 2019-04-16
author: 
  name: Nate Bross
tags: 
  - web development
---
Using built in FileMaker tooling, there is no way to see output from console.log, or other diagnostic tools when deploying some web content inside a web view control. I have found a way to do it using some freely available tools.

<!--more-->

Here's a little demonstration of how it works:

<content-image
  src="blog/2019/javascript-console-log.gif"
  alt="console.log shows in visual studio"></content-image>

Using Visual Studio 2017 Community edition (download), it is possible to get access to this information. The process is simple once you know the steps.

**Step 1:** Open your solution to a layout with your web view control.

**Step 2:** Fire up Visual Studio, and use the Debug => Attach To Process menu:

<content-image
  src="blog/2019/visual-studio-menu-1.png"
  alt="Attach To Process Menu Item"></content-image>

**Step 3:** Select debugging type as "Scripting"

<content-image
  src="blog/2019/visual-studio-debug-settings.png"
  alt="Set-Scripting-As-Debug-Attach-To"></content-image>

**Step 4:** Attach to the "FileMaker Pro Advanced.exe" process.

**Step 5:** Use Debug => Window => Script Console.

<content-image
  src="blog/2019/visual-studio-javscript-console.png"
  alt="Debug-Show-Window-Javascript-Console"></content-image>

Once attached, you can view the console output and even script source and hit break points and step through code line by line. Basically anything you can do in the Internet Explorer 11 Developer Tools, you can do through Visual Studio attached to the web view control

It seems to work best if the layout has only one web view control. I've run into an error that Visual Studio was unable to attach to the process, and restarting FileMaker has corrected that.

For reasons I have not yet been able to understand, once you enter layout mode, you cannot attach for debugging to that instance of FileMaker anymore. You have to close FileMaker and start over. If you know why this is, or a way around it please reach out to me. I'd love to update this post with that information.

For reference, the tests above used a single file with a simple layout with a web viewer pointed at a field with this value:

```html
data:text/html,<!DOCTYPE html><head><meta http-equiv="X-UA-Compatible" content="IE=Edge" /></head><body><button id="click">Logs</button><script>document.getElementById('click').addEventListener('click', function() { console.log('logged from click'); }, false)</script></body>
```
