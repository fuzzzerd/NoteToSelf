---
title: "Azure Continuous Integration Overwriting App_Data even with WebDeploy file specified to &quot;exclude app data&quot;"
description: "A question I asked on Stack Overflow"
date: 2013-04-22
author:
  name: Nate Bross
tags:
  - deployment
  - azure
  - web-deployment
  - azure-web-app-service
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/q/16156576"
---

*I [asked this on Stack Overflow](https://stackoverflow.com/q/16156576):*

I have a Windows Azure Website and I've setup Azure Continuous Integration with hosted Team Foundation Server. I make a change on my local copy, commit to TFS, and it gets published to Azure. This is great, the problem is that I have an Access database in the ~\\App\_Data\\ folder and when I check-in the copy on Azure gets overwritten.

I setup a web-deploy publish profile to "Exclude App\_Data" and configured the build task to use the web-deploy profile, and now it DELETES my ~\\App\_Data\\ folder.

Is there a way to configure Azure Continuous Integration to deploy everything and leave the App\_Data alone?

<details>
<summary>Notable comments</summary>

**Nate** (0 upvotes): @JasonHaley As noted, I have setup the web deploy to skip the App\_Data folder, but the problem is that after publishing I have NO App\_Data folder, not the one that was there before, and not the one that was in my source control. Its just gone. This is a major pain, and I'm hoping I'm just doing something wrong, but I can't seem to figure out what it is.

</details>

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/q/16156576) — 1 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
