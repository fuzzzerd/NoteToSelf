---
title: "C# Launch default browser with a default search query"
description: "My answer to \"C# Launch default browser with a default search query\" on Stack Overflow"
date: 2013-05-16
author:
  name: Nate Bross
tags:
  - c#
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/16592514"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/16592424):*

> What I need to do is launch the default browser with a default search. The default search is what happens when you type search terms in the URL navigation text box. For example, in Chrome and Firefox, by default, typing "puppies" into the nav text box will lead you to the Google results for "puppies". In IE, it will do the same thing, just on Bing.
> 
> Normally, you can invoke the default browser just by doing something like:
> 
> ```
> Process.Start("http://google.com");
> 
> ```
> 
> But I can't assume the default search provider is Google.
> 
> Is there a way to invoke this behavior via C#? The only thing I can figure to do is to try and determine which browser is the default and then execute it directly with the search terms.
> 
> Anyone know of any other (preferably easier) way?
> 
> **Update:** Just found code to find the default browser [here](https://stackoverflow.com/questions/13621467/how-to-find-default-web-browser-using-c).

I just tested IE, by typing this in to the Start -> Run prompt:

> "c:\\Program Files\\Internet Explorer\\iexplore.exe" "stack overflow"

It fired up Internet Explorer and searched for stack overflow with my default search provider. Since your search terms are not a standard url starting with `http://` there is no way for `Process.Start` to know to fire up the browser if you don't provide the specific executable you want started.

You can identify the default browser by inspecting `HKEY_CLASSES_ROOT\http\shell\open\command` Then you can fire up this browser with the search terms as a query parameter and it should then use that browsers default search provider.

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/16592514) — 1 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
