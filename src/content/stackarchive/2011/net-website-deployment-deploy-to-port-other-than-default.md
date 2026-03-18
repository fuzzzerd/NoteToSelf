---
title: ".Net Website Deployment - Deploy to port other than Default Web Site"
description: "My answer to \".Net Website Deployment - Deploy to port other than Default Web Site\" on Stack Overflow"
date: 2011-04-22
author:
  name: Nate Bross
tags:
  - .net
  - visual-studio
  - deployment
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/5759349"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/5747838):*

> I have a server that I need to deploy a website too (website already exists on the server, but I have an update to publish), but the website doesn't live under the "Default Web Site" on the server. Instead it lives under a named "Sharepoint - 80" site. Looks like I can't think publish the site via `\\servername\wwwroot$` as it doesn't live there. How do I go about publishing to this other site?

You can check the properties of "Sharepoint - 80" in IIS manager to determine where the physical files are located, then you can publish your update there.

<details>
<summary>Notable comments</summary>

**Nate** (0 upvotes): I just meant that you can check the settings in IIS to locate the local path, and then you can determine what the share path should be from there.

</details>

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/5759349) — 0 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
