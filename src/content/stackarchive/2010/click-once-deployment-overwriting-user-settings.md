---
title: "Click-Once Deployment Overwriting User Settings"
description: "My answer to \"Click-Once Deployment Overwriting User Settings\" on Stack Overflow"
date: 2010-02-04
author:
  name: Nate Bross
tags:
  - .net
  - vb.net
  - deployment
  - settings
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/2203788"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/2203775):*

> Click-once deployments are suppose to maintain user settings, but on this one application we have the user settings are overwritten to the Visual Studio default every time we publish an update. Any ideas of what might be happening?

*I posted the following answer, which received 1 upvote:*

I have seen this happen when you make a change to the structure of the settings/config file.

If you publish an update w/out changing the structure of the file the settings on end user's machines should be preserved.

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/2203788) — 1 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
