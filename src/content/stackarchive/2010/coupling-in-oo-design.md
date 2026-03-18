---
title: "Coupling in OO design"
description: "My answer to \"Coupling in OO design\" on Stack Overflow"
date: 2010-12-27
author:
  name: Nate Bross
tags:
  - coupling
  - oop
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/4540083"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/4540037):*

> I have two objects. A Meeting object and an Action object (action raised in a meeting). An Action can also exist independent of a Meeting. I have two ways of linking the Action raised to the Meeting:
> 
> 1.  have a method on Meeting where I pass in the Action object such as "addToMeeting(Action action)". WIthin the internals of Meeting I then link the action to the meeting. For this approach though the Meeting object needs to know about and use the methods on the Action object so becomes coupled.
> 2.  have a method on Meeting where I just pass the action number to be linked such as "addToMeeting(int actionID)". Great now Meeting object does not need to know anything about Action but......now the code adding the action to the meeting needs to know how to get the action ID so has turned from this "meeting.addToMeeting(action)" to this "meeting.addToMeeting(action.getID())".
> 
> For good OO design, which approach should be used? Or is there a third way....

I would go with option #1 -- coupling is not a bad thing, in your case, since there is a clear relation between objects. I would go with option #1. This gives you the option for a meeting to have a property of `MeetingActions[]` or something similar.

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/4540083) — 0 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
