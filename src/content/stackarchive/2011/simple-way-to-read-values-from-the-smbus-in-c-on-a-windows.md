---
title: "Simple way to read values from the SMBus in C#, on a Windows machine?"
description: "My answer to \"Simple way to read values from the SMBus in C#, on a Windows machine?\" on Stack Overflow"
date: 2011-08-16
author:
  name: Nate Bross
tags:
  - c#
  - hardware
  - monitoring
  - bus
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/7073498"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/7072949):*

> I've been at it for a month, and still can't find a solution to this deceptively difficult problem. Specifically, I would like to read temperatures from the [W83793 chip](http://www.nuvoton-usa.com/products/winbond_products/pdfs/PCIC/W83793Ga.pdf), using C#, on a Windows machine. I have virtually no experience with low-level programming. All I know is that in order to read from this chip, I need to access the SMBus, and that alone will get me started.
> 
> Despite going through every SMBus document I could find online, I am still clueless as to how I should start. I searched for C# SMBus libraries online, but couldn't find anything aside from a few Linux related documents. I don't want to re-invent the wheel here. There's got to be a library, a tutorial, or other resource out there to explain exactly how to access the SMBus in C# on Windows.
> 
> What is a simple way to access the SMBus in C#? If you can help me out to the point where I can pull SOME value, ANY value, out of a slave device on the SMBus, that will get me started.

*I posted the following answer:*

Have you looked at the [Windows Driver Kit](http://msdn.microsoft.com/en-us/windows/hardware/gg487428.aspx)? Searching around the web, it seems like its the place to start when communicating on SMBus from within windows.

<details>
<summary>Notable comments</summary>

**Polynomial** (3 upvotes): To save anyone who sees this the time and effort - Windows has no native SMBus support. It does not communicate with SMBus at all. It leaves everything to the BIOS, which exposes limited functionality to certain SMBus devices over AHCI.

</details>

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/7073498) — 0 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
