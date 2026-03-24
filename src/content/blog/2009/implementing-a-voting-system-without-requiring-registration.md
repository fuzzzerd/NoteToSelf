---
title: "Implementing a voting system without requiring registration"
description: "My answer to \"Implementing a voting system without requiring registration\" on Stack Overflow"
date: 2009-06-10
author:
  name: Nate Bross
tags:
  - php
  - database-design
  - cookies
  - project-planning
  - voting-system
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/978385"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/978369):*

> I'd like to implement a voting system on my site, without having to force them to create an account. They would ultimately be voting up/down a piece of content which has a unique ID.
> 
> *   I know that I could store entries in a table with IP/ID, but what if there are more than one user coming from the same IP?
> *   Is there a way to uniquely identify visitors without it being tied to their external ip?
> *   If created a GUID, store it in a cookie on that machine, could it be retrieved later on that same computer with the same IP? A different IP?
> 
> Any thoughts on these questions, or any insight to a better approach would be greatly appreciated.

*I posted the following answer, which was chosen as the accepted answer and received 23 upvotes:*

Yes, you could use a cookie and set the expiration very far into the future; however, there is nothing stopping anyone from clearing their cache and voting again.

Your best bet, is to use the cookie and don't allow votes from the same IP within 15 minutes of each other... without registration thats the best you can do.

<details>
<summary>Notable comments</summary>

**Nate** (5 upvotes): The only time that many users will have the same IP address is when there is NAT involved. This is likely at a place of business, a coffee shop, or even if someone has many computers in their house. And in these situations its unlikely that two people will be on this website trying to up/down vote the same piece of content.

**Nate** (0 upvotes): That is simply not true; each AOL customer will have their own IP address, until they disconenct and are assigned a new IP address. It is unlikely that a user will get an AOL IP address, vote on this website, disconnect and have another user connect to AOL get that same IP address and try to vote on this site. -- as I said in my post without registration, that is the best you can do. Its not fool-proof but it will prevent extreme abuse.

**meade** (3 upvotes): there are many users coming from the same IP (AOL for example) and most people still use IE so storing browser related info will not help. There's also a number of people that don't allow cookies to be saved (not a large amount). It sounds like the voting isn't so rigid, so I would suggest creating a random value that you store in the cookie and DB to uniquely (to the extent you can) identify someone

</details>

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/978385) — 23 upvotes *(accepted answer)*. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
