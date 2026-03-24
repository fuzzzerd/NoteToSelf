---
title: "Powershell array robocopy"
description: "A question I asked on Server Fault"
date: 2009-08-11
author:
  name: Nate Bross
tags:
  - windows
  - powershell
source: "Server Fault"
sourceUrl: "https://serverfault.com/q/52974"
---

*I [asked this on Server Fault](https://serverfault.com/q/52974):*

I have a batch file that does a robocoy from serverA to serverB and it works very well.

I have a list of server names. I'd like to load this list into a powershell array and then enumerate over this array and run the robocopy using the path.

This is my working robocopy batch file:

```
ROBOCOPY C:\Websites\ \\serverB\C$\Websites\ /MIR

```

What I'd like to do is replace "serverB" with the value from the array. I've never really used powershell before, so I don't even know where to begin besides installing powershell on the machine ;)

In theory, this is what I'd like to have (psudo-code):

```
$serverNames = ("serverA","serverB", "serverC")
foreach ($server in $serverNames ) 
{ 
    "ROBOCOPY C:\Websites\ \\" + $server + "\C$\Websites\ /MIR"
}

```

I guess, the question is, how do I execute what would normally be a batch command from within powershell?

Thanks for any help!

---

> [EBGreen answered](https://serverfault.com/a/53003) (2 upvotes):
>
> ```
> $serverNames = ("serverA","serverB", "serverC")
> foreach ($server in $serverNames ) 
> { 
>     ROBOCOPY.exe C:\Websites\ \\$server\C$\Websites\ /MIR
> }
> 
> ```
> 
> Make sure that Robocopy is in the path. Remeber that the current working is not part of the path in PS so if robocopy is in the current working directory, prepend it with .\\ (.\\Robocopy.exe...). For executeables you need to specify the .exe on the file name.
> 
> If your list of servers is not too long you can one line it too (this one assumes robocopy is in the current working dir):
> 
> ```
> ("serverA","serverB", "serverC") | %{.\Robocopy.exe C:\Websites\ \\$_\Websites\ /MIR}
> 
> ```

---
*Originally posted on [Server Fault](https://serverfault.com/q/52974) — 0 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
