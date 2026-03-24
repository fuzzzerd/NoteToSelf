---
title: "Logging Remote Desktop to Servers via Logon Script or GPO or What?"
description: "A question I asked on Server Fault"
date: 2010-06-15
author:
  name: Nate Bross
tags:
  - active-directory
  - logging
  - login
  - windows
source: "Server Fault"
sourceUrl: "https://serverfault.com/q/151479"
---

*I [asked this on Server Fault](https://serverfault.com/q/151479):*

The objective here is to start a simple .NET application I've written which captures some environment variables (time, username, computername, etc) upon login. This .NET application subscribes to the Windows "User logout" event.

Upon launch, the application captures the above variables, and creates a record in my database, upon logout (which I'm capturing) I update another field in the same record, with the logout time.

The above is working exactly as I would like, when I launch the binary, it makes its initial log entry, then waits for the logout event and updates the same record.

Restrictions, the .NET binary should be able to live on a share point (\\server\\share\\myapp\\v1) so I can update the application to (\\server\\share\\myapp\\v2) and simply update the GPO/Logon script.

My initial thought was to use the \\domaincontroller\\sysvol\\ directory to store the binary and then update all user accounts to include a call to my application. Can you see any flaws in this approach?

My question is this: First, is there anything wrong with my idea above? Second, if so, what is the best way (through group policy or otherwise) to ensure this application launches whenever a session is started on a server?

---

> [sysadmin1138 answered](https://serverfault.com/a/151508) (2 upvotes):
>
> For launching every time a session is started, using a Group Policy based logon script will do it. The one caveat we've found is that such scripts specified in a User GPO seem to execute TWICE if 'loopback processing' is turned on for any Computer Object GPOs that apply. We've had to modify our logon scripts to handle this case as a result.
> 
> I'm not familiar with .NET event subscriptions so I don't know if that means the application file is held open for the entire session. If that's the case, then updating the app will be very difficult due to the open lock problem. If 50 stations are logged in, then the app will have 50 deny-write locks on it, and that makes updating the app harder. This is one instance where keeping the app on sysvol (in the GPO itself, actually) can help, since it handles that case better.
> 
> However, it that just means it re-fires on logout keeping it on a share should be fine.

---
*Originally posted on [Server Fault](https://serverfault.com/q/151479) — 0 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
