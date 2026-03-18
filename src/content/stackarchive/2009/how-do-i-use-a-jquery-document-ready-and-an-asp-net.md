---
title: "How do I use a jQuery $(document).ready and an ASP.NET UpdatePanel together?"
description: "A question I asked on Stack Overflow"
date: 2009-11-17
author:
  name: Nate Bross
tags:
  - .net
  - asp.net
  - jquery
  - asp.net-ajax
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/q/1750368"
---

*I [asked this on Stack Overflow](https://stackoverflow.com/q/1750368):*

I'm rocking this bit of Javascipt in the `<head>` section of my page:

```
<script type="text/javascript">
    $(document).ready(function() {
        $('dl.expander dd').expander
        (
            {   slicePoint: 50,    widow: 2,   expandEffect: 'show', userCollapseText: '[^]' }
        );
    });
</script>

```

This works great the first time the page is loaded; however, when I click an `<asp:button>` that is inside an `<asp:updatepanel>` the page is partially refreshed, but the `$(document).ready` is never called again.

This is important, because this Javascript in the `$(document).ready` section is collapsing and adding a "readmore" option to a list of pararaphs (or dl's with class="expander") on the page, most of which should be collapsed by default.

---

> [Kyle Trauberman answered](https://stackoverflow.com/a/1750420) (9 upvotes):
>
> You will need to add a handler to the AJAX client side endRequest event. See the links below for more information. This "event" is called when the ajax engine completes a request to the server, and is necessary for any javascript running on content that is inside the update panel.
> 
> [http://www.asp.net/ajax/documentation/live/overview/AJAXClientEvents.aspx](http://www.asp.net/ajax/documentation/live/overview/AJAXClientEvents.aspx)
> 
> [http://msdn.microsoft.com/en-us/library/bb383810.aspx](http://msdn.microsoft.com/en-us/library/bb383810.aspx)
> 
> ```
> <script type="text/javascript">
>     $(function() {
>         Sys.WebForms.PageRequestManager.getInstance().add_endRequest(EndRequestHandler);
>     });
> 
>     function EndRequestHandler(sender, args) {
>         // code that you want to run when the request is complete
>     }
> <script>
> 
> ```

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/q/1750368) — 4 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
