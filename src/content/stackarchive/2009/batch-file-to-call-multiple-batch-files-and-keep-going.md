---
title: "Batch file to call multiple batch files and keep going after errors"
description: "A question I asked on Server Fault"
date: 2009-08-26
author:
  name: Nate Bross
tags:
  - batch
  - windows-command-prompt
  - command
  - command-line-interface
source: "Server Fault"
sourceUrl: "https://serverfault.com/q/59080"
---

*I [asked this on Server Fault](https://serverfault.com/q/59080):*

I have a batch file like this, the issue that I have is that if the first batch file fails, the second one never gets started, how can I get them to both keep going?

```
@echo off
MapNetworkDrive_J.cmd
MapNetworkDrive_Y.cmd

```

I have tried this:

```
@echo off
start MapNetworkDrive_J.cmd
start MapNetworkDrive_Y.cmd

```

however, this starts two new command windows which after they are done remain open in the users session.

---

> [MattB answered](https://serverfault.com/a/59086) (3 upvotes):
>
> Use the call command:
> 
> ```
> 
> @echo off
> call MapNetworkDrive_J.cmd
> call MapNetworkDrive_Y.cmd
> 
> ```

---
*Originally posted on [Server Fault](https://serverfault.com/q/59080) — 2 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
