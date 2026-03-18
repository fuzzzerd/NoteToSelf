---
title: "IIS7 permit access only to local network"
description: "My answer to \"IIS7 permit access only to local network\" on Stack Overflow"
date: 2010-05-07
author:
  name: Nate Bross
tags:
  - windows
  - iis-7
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/2789347"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/2789330):*

> I am having a problem with the IIS 7 on a Win 2008 server. I only want to have access to it inside my network and denied access from anyone outside the network. I had created a rule to permit access to the group of computers with the IP: 192.168.0.1 (255.255.255.0). In the IIS6 this was enougth to prevent access of any IP that don't belong to the network. Any idea of how can I block these access? Thanks!

The same rule should work in IIS7, you may need to install the component for IP Filtering though via the Role Manager.

In addition to the built-in request filtering, there is an addon for dynamic filtering -- [http://www.iis.net/download/DynamicIPRestrictions](http://www.iis.net/download/DynamicIPRestrictions)

<details>
<summary>Notable comments</summary>

**Nate** (0 upvotes): IIRC it is not an additional download, but a checkbox you need to check during the edit server roles wizard.

</details>

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/2789347) — 1 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
