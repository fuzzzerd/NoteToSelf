---
title: "Is Adobe AIR a good engine as GUI to develop Windows application"
description: "My answer to \"Is Adobe AIR a good engine as GUI to develop Windows application\" on Stack Overflow"
date: 2009-05-07
author:
  name: Nate Bross
tags:
  - user-interface
  - air
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/832803"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/832793):*

> I want to develop a photo browser application in Windows platfrom, the UI should be very cool and has 3D effects,Adobe AIR is a good engine as GUI, but I don't know how to integrate my C and C++ engines which I worte before into Adobe AIR, it seems the engine can't hold ActiveX? What can I do? Thanks.

If you are windows only, something like WPF is probably a better option, since you will be able to leverge any old C/C++ libraries you have throuhg PInvoke.

Air is best suited to using data with web services.

<details>
<summary>Notable comments</summary>

**Nate** (1 upvotes): I have never had issues with the performance of WPF. I've run WPF apps on tricked out gaming rigs and netbooks and never had major issues.

</details>

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/832803) — 4 upvotes *(accepted answer)*. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
