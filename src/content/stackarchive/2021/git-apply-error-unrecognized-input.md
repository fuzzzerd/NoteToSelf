---
title: "Git apply error : unrecognized input"
description: "My answer to \"Git apply error : unrecognized input\" on Stack Overflow"
date: 2021-04-12
author:
  name: Nate Bross
tags:
  - git
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/67065294"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/51542622):*

> ```
>  git diff 4ee42367 8c650199 > changes2.patch
>  git checkout newBranch
>  git apply changes2.patch
>  error: unrecognized input
> 
> ```
> 
> When i tried to apply the changes i'll get the error. What i'm doing wrong?

For those running this form within Powershell, [here is another post](https://stackoverflow.com/a/40098904/86860) with information about the encoding error, and why it is happening.

If you're just looking for an answer, you can edit your powershell profile:

`PS> code $profile`

and add

`$PSDefaultParameterValues['Out-File:Encoding'] = 'utf8'`

This can cause other issues, so use at your own risk.

If you just want to run it for a single instance, you can do this

```
$PSDefaultParameterValues['Out-File:Encoding'] = 'utf8'
git diff > change.patch
git checkout otherbranch
git apply change.patch

```

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/67065294) — 8 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
