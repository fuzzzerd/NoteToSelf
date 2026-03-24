---
title: "Programmatically access document properties for Word 2007 documents"
description: "My answer to \"Programmatically access document properties for Word 2007 documents\" on Stack Overflow"
date: 2010-04-14
author:
  name: Nate Bross
tags:
  - powershell
  - ms-word
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/2638447"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/2638358):*

> Is there a way in which I can programmatically access the document properties of a Word 2007 document?
> 
> I am open to using any language for this, but ideally it might be via a PowerShell script.
> 
> My overall aim is to traverse the documents somewhere on a filesystem, parse some document properties from these documents, and then collate all of these properties back together into a new Word document.
> 
> I essentially want to automatically create a document which is a list of all documents beneath a certain folder of the filesystem; and this list would contain such things as the _Title_, _Abstract_ and _Author_ document properties; the _CreateDate_ field; etc. for each document.

*I posted the following answer, which received 1 upvote:*

My guess is that your best bet is [VB or C#](http://www.microsoft.com/express) and the [Office Interop Assemblies](http://msdn.microsoft.com/en-us/library/15s06t57\(VS.80\).aspx). I'm unaware of a native way (within Powershell) to do what you want.

That said, if you use VB or C#, you could write a [powershell cmdlet](http://msdn.microsoft.com/en-us/magazine/cc163293.aspx) to what you are the collation. But at that point, it might be more simple to just write a console app that runs as a scheduled task instead.

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/2638447) — 1 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
