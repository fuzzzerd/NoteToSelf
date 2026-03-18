---
title: "How can I create a new dropdown list only when a certain element is selected in an MVC3 app?"
description: "My answer to \"How can I create a new dropdown list only when a certain element is selected in an MVC3 app?\" on Stack Overflow"
date: 2012-09-13
author:
  name: Nate Bross
tags:
  - c#
  - javascript
  - asp.net-mvc-3
  - client-side
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/12412541"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/12412383):*

> I have a DropDownFor on my View and I'm looking to create another DropDownFor **only if** a particular SelectList item from the first DropDownFor is selected.
> 
> To clarify, if my DropDownFor has two possible choices, "A" and "B", and if "B" is selected, I want another DropDownFor to display on the page. If "A" is selected, I want nothing more to happen to the page.
> 
> How can I implement this?

Something like this should do the trick:

# script (using jQuery)

```
$(document).ready(function() {
    $('#optionOne').change(function (){
        if($(this).val() === 'b') {
            $('#options').append("<select><option>newset</option></select>");
        }            
    });
});​

```

# markup

```
<div id="options">
    <select id="optionOne">
        <option>a</option>
        <option>b</option>
    </select>
​</div>​

```

JSFiddle Example of the above code -- [http://jsfiddle.net/NpSPj/1/](http://jsfiddle.net/NpSPj/1/)

<details>
<summary>Notable comments</summary>

**Nate** (0 upvotes): @MrOBrian I agree. This is a baseline proof of concept. Building the second one based on Ajax request, and/or hiding it initially and showing it on select would both be good options. This solution could be adapted to both options with a bit more effort and specific info based on requirements.

</details>

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/12412541) — 3 upvotes *(accepted answer)*. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
