---
title: "XNA : WP7 vs PC"
description: "My answer to \"XNA : WP7 vs PC\" on Stack Overflow"
date: 2011-02-07
author:
  name: Nate Bross
tags:
  - wcf
  - windows-phone-7
  - xna
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/4925860"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/4922570):*

> I'm currently developing a turn by turn multi player game for a proof of concept. What I want is that a player from a WP7 can play against a PC player. I'm using the push notification to contact the phone, that's ok for this part.
> 
> But I'm hitting a wall when I want to contact the PC. I wanted to use the same approach, but the Push Notification Server Side Library is using the Windows.Phone DLL, which is unavailable on PC-XNA.
> 
> Any ideas of how I should proceed or suggestions?
> 
> Thanks for your time.

*I posted the following answer:*

I would follow this [How-To](http://msdn.microsoft.com/en-us/library/ff402545\(v=VS.92\).aspx) to get push notifications working from server --> phone. That should not be all that difficult, and it sounds like you may already have that working.

What you need to do is setup a polling mechanism on the PC game in order to update the state. You could simulate push style notifications with some type of [long-polling](https://stackoverflow.com/questions/1700917/how-does-a-wcf-server-inform-a-wcf-client-about-changes-better-solution-then-si), since you're using .NET/XNA I presume you'd also be using WCF.

A combination of these two approaches should get all of your clients talking to the server, and the server correctly dishing out responses, either pushing them to WP7 and/or long-poll responses to the PC.

<details>
<summary>Notable comments</summary>

**Nate** (0 upvotes): That looks good too. Check out the link on long-polling for the desktop version of your game.

</details>

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/4925860) — 0 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
