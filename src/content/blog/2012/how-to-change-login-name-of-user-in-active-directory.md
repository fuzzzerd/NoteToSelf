---
title: "How to change login name of user in Active Directory"
description: "My answer to \"How to change login name of user in Active Directory\" on Stack Overflow"
date: 2012-09-17
author:
  name: Nate Bross
tags:
  - c#
  - .net
  - .net-3.5
  - active-directory
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/12467049"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/12466909):*

> I want to change in my .NET application login of user from Active Directory.
> 
> I'm changing it in this way now:
> 
> ```
> DirectoryEntry userToUpdate = updatedUser.GetDirectoryEntry();  
> userToUpdate.Properties["sAMAccountName"].Value = user.NewLogin;  
> userToUpdate.CommitChanges();  
> 
> ```
> 
> But it doesn't work as I expect. When I'm checking in AD "Active Directory Users and Computers" entry for this user then on tab "account" I see that:  
> \- "User logon name" property isn't updated  
> \- "User logon name (pre-Windows 2000)" property is correcly updated.
> 
> How to update correctly login name in AD from C# code? What property should I set in DirectoryEntry, or there is another method to change login name.

There are two logon names in AD:

```
sAMAccountName    = User logon name, (pre-windows 2000) 
    Format/Usage: domain\user.name (note, your code will only populate user.name)

userPrincipalName = User logon name
    Format/Usage: user.name@domain.local

```

You need to update both.

<details>
<summary>Notable comments</summary>

**Nate** (0 upvotes): Correct, but when you login you must type `domain\user` (some apps put in the \`domain\` for you. I updated to make that clear.

</details>

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/12467049) — 7 upvotes *(accepted answer)*. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
