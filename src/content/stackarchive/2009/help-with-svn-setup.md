---
title: "Help with SVN Setup"
description: "A question I asked on Stack Overflow"
date: 2009-06-05
author:
  name: Nate Bross
tags:
  - svn
  - tortoisesvn
  - visualsvn
  - visualsvn-server
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/q/957956"
---

*I [asked this on Stack Overflow](https://stackoverflow.com/q/957956):*

I am setting up VisualSVN. It comes with a "Repositories" repo. My question is pretty simple I hope, do I create a single repository under the root and then add a new folder for each project I want to manage? or do I create a new repository under the root "Repositores" for each new project?

---

> [Robert Deml answered](https://stackoverflow.com/a/958012) (2 upvotes):
>
> I have all of my projects in a single repository. Each project gets a folder with a trunk, tags, and branches subfolder. One drawback to this is that any commit increments the revision of the repository, but I don't show the revision number anywhere in my code.

<details>
<summary>Notable comments</summary>

**Nate** (0 upvotes): Many of the projects will be mostly independent; however, I would like to be able to create add projects to the repository from the road w/out access to the server console.

</details>

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/q/957956) — 2 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
