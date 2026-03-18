---
title: "What&#39;s the quickest way to write a simple browser client to talk to a REST server"
description: "My answer to \"What&#39;s the quickest way to write a simple browser client to talk to a REST server\" on Stack Overflow"
date: 2010-03-19
author:
  name: Nate Bross
tags:
  - javascript
  - client
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/2479329"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/2479285):*

> I'd like to create a simple browser client that I'll to demo the REST API we have implemented on a server. I need basic functionality like
> 
> 1.  Create an item on server using POST: client fills up a few parameters and posts
> 2.  Get list and display using GET: client sends a query, gets an XML list of items and displays them
> 
> I don't need any fancy UI, this just for an internal quick demo, a reasonable UI is totally OK.
> 
> I know C++, Java, and Perl, but no Javascript. Is JS the easiest way to do this (I am time constrained, have about half a day to implement this)? If so, can you point me to a good resource where I can just pick up the pieces I need?

If you want to write javascript and html/css UI to run in a browser, you could use jQuery and its [ajax](http://api.jquery.com/category/ajax/) methods.

```
$(document).ready(function() {
    $.get("your/restful/url/here", function(data) { // do stuff with data here});
    $.post("your/restful/url/here", function(data) { // do stuff with data here});
});

```

You could extend the above even further like this:

```
$(document).ready(function() {
    $("post").click(function() { 
        $.post("/restful/?parm1=" + $("#input1").val() + "&parm2=" + $("#input2").val() , function(data) { // do stuff with data here});
    });
});

<input type="text" id="input1" />
<input type="text" id="input2" />
<input type="submit" id="post">Post</input>

```

Also, as pointed out in the comments, you could also just simply use your browser to open your RESTful urls.

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/2479329) — 2 upvotes *(accepted answer)*. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
