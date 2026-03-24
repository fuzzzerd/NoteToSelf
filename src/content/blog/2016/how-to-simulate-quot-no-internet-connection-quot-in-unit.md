---
title: "How to simulate &quot;No Internet Connection&quot; in Unit/Integration test in C#"
description: "My answer to \"How to simulate &quot;No Internet Connection&quot; in Unit/Integration test in C#\" on Stack Overflow"
date: 2016-08-03
author:
  name: Nate Bross
tags:
  - c#
  - unit-testing
  - network-programming
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/38752574"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/38751786):*

> I have a component that (by part) uses an internet connection. I wrote some UnitTests to ensure that to component is working. However, I would like to test the behaviour of the component without internet connections.
> 
> So, my goal is to somehow temporary disable internet, or the whole internet connection, and reactivate after test.

*I posted the following answer, which was chosen as the accepted answer and received 3 upvotes:*

There are many ways in which the system could have "No Internet" and the answer really depends on what you mean.

As the [accepted other answer](https://stackoverflow.com/a/38752035/86860) suggests, you could simply disable the network interface. That guarantees you have no internet, but the computer also will know it has no network either.

A couple other options are

1.  To remove your Default Gateway (this may require setting static IP settings in the control panel, though [I'm sure you could do it programmatically as well](https://stackoverflow.com/a/209983/86860))

This way, the computer still thinks it's connected, but it won't have any network access except on the local subnet

2.  Remove DNS server settings, see above link.

This way, the computer has direct IP based access but to a regular user it would appear as if there was "no internet."

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/38752574) — 3 upvotes *(accepted answer)*. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
