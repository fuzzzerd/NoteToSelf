---
title: "Duplicating a website in IIS 7"
description: "My answer to \"Duplicating a website in IIS 7\" on Server Fault"
date: 2011-07-07
author:
  name: Nate Bross
tags:
  - iis-7
  - windows-server-2008-r2
source: "Server Fault"
sourceUrl: "https://serverfault.com/a/287992"
---

*Someone [asked on Server Fault](https://serverfault.com/q/287982):*

> I've set up an integration website in IIS 7 on Windows Server 2008 r2.
> 
> Now, I'd like to create copies of this site with different bindings and physical paths so that each developer can work on his own copy of the site.
> 
> On a previous project, I simply created a new site in IIS and then manually recreated all the necessary configuration changes. But this project's site has some fairly complicated configuration, and I'd rather not have to go through all that a second (let alone third or fourth!) time.
> 
> Is there a way to duplicate a site in IIS 7?

*I posted the following answer, which was chosen as the accepted answer and received 1 upvote:*

Could [IIS Export](http://www.iis.net/community/default.aspx?tabid=34&g=6&i=1252) be the tool you're looking for?

Additionally, this StackOverflow post may be useful: [https://stackoverflow.com/questions/841547/how-can-i-duplicate-a-websites-settings-in-iis7](https://stackoverflow.com/questions/841547/how-can-i-duplicate-a-websites-settings-in-iis7)

Effectivly, all settings are stored in the web.config file, so you should be able to simply duplicate that after you have used the IIS GUI to make your configuration changes.

---
*Originally posted on [Server Fault](https://serverfault.com/a/287992) — 1 upvotes *(accepted answer)*. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
