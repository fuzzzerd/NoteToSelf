---
title: "moving emails from google apps to microsoft exchange 2010"
description: "My answer to \"moving emails from google apps to microsoft exchange 2010\" on Server Fault"
date: 2011-06-27
author:
  name: Nate Bross
tags:
  - windows-server-2008
  - exchange-2010
  - g-suite
  - exchange-migration
source: "Server Fault"
sourceUrl: "https://serverfault.com/a/284634"
---

*Someone [asked on Server Fault](https://serverfault.com/q/284623):*

> We have our emails hosted with Google Apps at the moment and would like to migrate to an in-house solution with Microsoft Exchange 2010 server. How would i go about migrating all the emails from Google Apps to MS Exchange 2010?
> 
> Is there an option in Exchange to do so?

*I posted the following answer, which was chosen as the accepted answer and received 1 upvote:*

I don't know of any automated tool; however, if you connect Outlook to the new Exchange account and the Google Apps account through IMAP, you can drag/drop emails and folders from the old Google Apps to the new Exchange accounts.

You could probably write an Outlook Macro to do this automatically, but I have not delt with VSTO or Outlook Macros, so thats just speculation.

---
*Originally posted on [Server Fault](https://serverfault.com/a/284634) — 1 upvotes *(accepted answer)*. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
