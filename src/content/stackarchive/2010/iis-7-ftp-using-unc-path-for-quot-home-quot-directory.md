---
title: "IIS 7 FTP Using UNC Path for &quot;home&quot; directory Anonymous users Home Directory cannot login"
description: "A question I asked on Server Fault"
date: 2010-04-08
author:
  name: Nate Bross
tags:
  - iis-7
  - ftp
  - windows-server-2008-r2
source: "Server Fault"
sourceUrl: "https://serverfault.com/q/130643"
---

*I [asked this on Server Fault](https://serverfault.com/q/130643):*

Using User Isolation to isolate users, so I have folder like this

```
\FTP\LocalUser
\FTP\LocalUser\Public
\FTP\domain\me
\FTP\domain\bob

```

The domain users are able to authenticate, login and see their home directory, but Anonymous users attempt to login as `anonymous` and then are given the error `User cannot log in, home directory inaccessible.`

**update**

Using Process Monitor, I was able to determine that I'm getting access denied errors. Which makes sense, because domain users have access to the UNC Path via Active Directory, but anonymous will not, and its telling me it is impersonating NT AUTHORITY\\IUSR -- how can I setup IIS FTP to impersonate a specific user if the access type is anonymous?

**update 2**

Is there a way to allow an IUSR account from MachineA to access a share on MachineB?

---

> [Nate answered](https://serverfault.com/a/130664) (0 upvotes):
>
> I ended up adding
> 
> `<anonymousAuthentication enabled="true" userName="LimitedAccessDomainuser" password="pw" />`
> 
> to the
> 
> `applicationHost.config`
> 
> file located at
> 
> `c:\windows\system32\inetsrv\config\`

---
*Originally posted on [Server Fault](https://serverfault.com/q/130643) — 0 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
