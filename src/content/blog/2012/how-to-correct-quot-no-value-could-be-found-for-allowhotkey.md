---
title: "How to correct &quot;No value could be found for (Allowhotkey) that satisfies all lockdown requirements.&quot;?"
description: "My answer to \"How to correct &quot;No value could be found for (Allowhotkey) that satisfies all lockdown requirements.&quot;?\" on Server Fault"
date: 2012-12-21
author:
  name: Nate Bross
tags:
  - windows
  - windows-registry
  - xenapp
  - citrix
source: "Server Fault"
sourceUrl: "https://serverfault.com/a/460121"
---

*Someone [asked on Server Fault](https://serverfault.com/q/460120):*

> After updating a Windows XP SP3 machine to Citrix Receiver v3.3, the user is unable to launch any published applications. The error they got is:
> 
> > No value could be found for (Allowhotkey) that satisfies all lockdown requirements.

*I posted the following answer, which was chosen as the accepted answer and received 1 upvote:*

I struggled with this for quite a while, and I eventually found a solution which involves disabling Citrix Lockdown. I found several link-bait-sites, which were of no use, and a few posts recommending a uninstall and re-install, which did not help.

Eventually after a lot of searching and finding garbage, I found this post [on the Citrix Forums by Simon Burbery.](http://forums.citrix.com/thread.jspa?threadID=306555&tstart=0) In it, he recommends changing all of the `EnableLockdown` values from 1 to 0.

1.  Export HKLM\\Software\\Citrix to a reg file
2.  Find any `EnableLockdown` values (there are a few) and change from 1 to 0
3.  Import the modified reg file
4.  Exit Receiver completely
5.  Launch Published App

I found about three of these values. I simply did a CTRL + F in `regedit` and changed the ones I found and restarted the receiver. I have yet to discover and side effects of this method yet.

---
*Originally posted on [Server Fault](https://serverfault.com/a/460121) — 1 upvotes *(accepted answer)*. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
