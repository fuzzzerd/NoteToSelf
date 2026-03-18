---
title: "Access Windows Share under Network Service account"
description: "My answer to \"Access Windows Share under Network Service account\" on Stack Overflow"
date: 2009-12-23
author:
  name: Nate Bross
tags:
  - c#
  - windows-services
  - credentials
  - network-share
  - windows-share
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/1953883"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/1953861):*

> I have two computers with Windows Server 2003. One computer has some shared folders on the network, and the other has a Windows Service (written in C#, running under the Network Service account) that needs to access those shared folders.
> 
> The following code works fine as a logged-in user, but throws an exception when executed under the Network Service account.
> 
> ```
> File.WriteAllText(@"C:\temp\temp.txt", File.ReadAllLines(@"\\NetworkServer\Test\test.txt")[0]);
> 
> ```
> 
> The exception message is `Logon failure: unknown user name or bad password`. How do I get this code to work under the Network Service account? Is it a setting in Windows Server 2003, or do I need to add some code to this to make it work?

On the network share, you'll need to add permissions for the "Network Service" account on the server running the service. While this will work, @nicholas points out that this may provide an overly broad group of users access to the share.

Another option, and in my opinion **_the better option_**, is to create a domain account and then give that account read/write permission on the share. Then you configure the service to "run as" the domain account with proper permissions.

<details>
<summary>Notable comments</summary>

**Nate** (0 upvotes): @nicholas Yes, I believe so. Creating a domain account is, IMHO, the best way to go. I've edited to make that clear.

</details>

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/1953883) — 3 upvotes *(accepted answer)*. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
