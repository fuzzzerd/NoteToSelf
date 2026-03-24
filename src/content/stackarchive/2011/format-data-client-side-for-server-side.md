---
title: "Format data (client-side) for (server-side)"
description: "My answer to \"Format data (client-side) for (server-side)\" on Stack Overflow"
date: 2011-07-13
author:
  name: Nate Bross
tags:
  - javascript
  - jquery
  - .net
  - asp.net
  - vb.net
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/6681187"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/6681066):*

> Using the following script:
> 
> ```
> $("#some_button").click(function() {
> 
>     var changed = [];
> 
>     $( 'input[id$="_0"]' ).each(function() {
> 
>         var new_id = this.id.replace( '_0', '_1' );
> 
>         if ( $(this).val() !== $( 'input#' + new_id ).val() ) {
> 
>             changed.push(new_id);
>             // send back id, new value from _0, and old value from _1
> 
>         }
> 
>     });
> 
>     console.log(changed);
> 
> });
> 
> ```
> 
> I need to send back the `id`, the old value from `_1` and the new value from `_0` back to the server. What is the best way to format this data so I can easily extract the data from the server side so I can easily email someone for example to let them know which textboxes have changed, what the old values were, and what the new values are
> 
> At the serverside level, I am using .NET-3.5 (VB).
> 
> I know how to send the data bacl. and how to email the data, I just wanted to know how to best format the data at clientside before sending it back.
> 
> * * *
> 
> I could have upto 50 sets of id, old, and new values to send back. Sorry for not making that clear earlier.
> 
> * * *
> 
> **Example:**
> 
> How can I modify the script above to generate this?
> 
> ```
> [
>     {
>         "id": "name_0",
>         "new": "text",
>         "old": "text"
>     },
>     {
>         "id": "age_0",
>         "new": "text",
>         "old": "text"
>     },
>     {
>         "id": "dept_0",
>         "new": "text",
>         "old": "text"
>     }
> ]
> 
> ```

*I posted the following answer:*

[JSON](http://json.org/) is a very nice, lean data exchange format.

Something like this, might work:

```
var changed = [];

$( 'input[id$="_0"]' ).each(function() {
    var thisItemChanges = { id: this.id, newid = this.id.replace('_0', '_1') };
    changed.push(thisItemChanges);
});

$.post('UrlToPostTo', changed,  function(serverResponse) { // do something with return from server });

```

See also, [jQuery.post](http://api.jquery.com/jQuery.post/) for more info on sending data to servers with javascript.

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/6681187) — 0 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
