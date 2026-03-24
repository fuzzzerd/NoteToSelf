---
title: "How to embed content of the file in the C# code?"
description: "My answer to \"How to embed content of the file in the C# code?\" on Stack Overflow"
date: 2010-11-09
author:
  name: Nate Bross
tags:
  - c#
  - deployment
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/4137601"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/4137534):*

> ## Problem
> 
> I have a file which contains such text (nothing else)
> 
> 2010-10-05
> 
> I would like to embed this file (content) in the C# code, so I could assign this text to constant (string MyDate), and later use this constant.
> 
> ## Background
> 
> What I try to achieve is keeping information about the program in sync -- both on website and within program.
> 
> The solution has to be:
> 
> *   dead simple
> *   automatic
> *   smooth
> 
> The simplest I thought of, would be keeping file "version" with version (actually release date, because it is more meaningful IMHO), such file can be displayed on website with no problem (PHP). I think I manage writing tiny .bat file to auto-generate such file on each build.
> 
> But how to use it (embed) in C# code?
> 
> I would like to achieve exactly this, or alternative solution but no more complex than this one.
> 
> ### Workarounds
> 
> I already know several workarounds, like:
> 
> *   creating not only file with just date, but small C# piece of code, which could be directly compiled
> *   including this file in installer and after installation reading it, to get the version info
> 
> But both do not feel "clean" too me. I need something more smooth :-)
> 
> ## Background of the background
> 
> My program should notify user "hey, there is newer version of the program" on one hand, on the other hand when browsing website info about release date should be displayed on page.
> 
> ## Facts
> 
> *   version: date of build which is also release date
> *   website: Linux, HTML & PHP
> *   program: VS 2010, C# 4.0, single exe
> *   installer: Advanced Installer
> 
> ## Edit -- solution
> 
> I tried to avoid the problem completely and rely on timestamps of the files -- it could work, because only one weak point would be the case when you build exe before midnight and create installation package after. However, uploading files to ftp server ruins such plan -- you have to make sure ftp server support timestamp modification and you cannot use SFTP protocol.
> 
> So, I ended up creating "version" file and not embedding it (because I don't know how) -- I read the content both by PHP script on website and by C# code when executing.
> 
> _Thank you in advance for your help._

*I posted the following answer, which was chosen as the accepted answer and received 1 upvote:*

To solve the issue of checking for updates you could: use a `WebClient` to load a page from your site, and check the version information.

To solve the issue of displaying version information, you could simply leave a text file called versioninfo.txt in your installer, and load/display that at run time, or as stated by @Daniel you can use a resouce to compile the text file into the binary.

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/4137601) — 1 upvotes *(accepted answer)*. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
