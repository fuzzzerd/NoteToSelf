---
title: "What information should a SVN/Versioned file commit comment contain?"
description: "My answer to \"What information should a SVN/Versioned file commit comment contain?\" on Stack Overflow"
date: 2010-03-24
author:
  name: Nate Bross
tags:
  - svn
  - version-control
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/2511747"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/2511707):*

> I'm curious what kind of content _should_ be in a versioned file commit comment. Should it describe generally what changed (e.g. "The widget screen was changed to display only active widgets") or should it be more specific (e.g. "A new condition was added to the where clause of the fetchWidget query to retrieve only active widgets by default")
> 
> How atomic should a single commit be? Just the file containing the updated query in a single commit (e.g. "Updated the widget screen to display only active widgets by default"), or should that and several other changes + interface changes to a screen share the same commit with a more general description like ("Updated the widget screen: A) display only active widgets by default B) added button to toggle showing inactive widgets")
> 
> I see subversion commit comments being used very differently and was wondering what others have had success with. Some comments are as brief as "updated files", while others are many paragraphs long, and others are formatted in a way that they can be queried and associated with some external system such as JIRA.
> 
> I used to be extremely descriptive of the reason for the change as well as the specific technical changes. Lately I've been scaling back and just giving a general "This is what I changed on this page" kind of comment.

Personally, I try to make a brief summary of what I changed and/or added. Something that will remind me, "Oh yeah, this is \[probably\] where I added that extra rule to the business object." Because I can always run a "diff" to see specifically what changed.

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/2511747) — 3 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
