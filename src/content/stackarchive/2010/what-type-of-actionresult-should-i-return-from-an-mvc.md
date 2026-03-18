---
title: "What type of ActionResult should I return from an MVC Action where I want javascript to either redirect or update a div?"
description: "A question I asked on Stack Overflow"
date: 2010-02-15
author:
  name: Nate Bross
tags:
  - javascript
  - asp.net
  - .net
  - asp.net-mvc
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/q/2267141"
---

*I [asked this on Stack Overflow](https://stackoverflow.com/q/2267141):*

Let me first outline my objective from a user's perspective and then the code I have to achieve that goal where its falling short.

I'd like the user to be able to click a button, which brings up a jQuery modal style dialog with a few fields on it and a submit + cancel button. When they successfully commit the record I'd like to have the user redirected to /Records/CustomList/ -- but if there is an error, I'd like the content of the div that is modal to be updated to show the ModelState errors I added and returned.

My question is, since I want to tell my clientside javascript what it should do based on the result of the action, what type should I return from my ActionResult method? I'm thinking a JSON object with two fields, Type and Data so I can write JS like this

```
if(ret.Type == 1) {
    window.location(ret.Data);
}
else {
    ('#modalDiv').html(ret.Data);
}

```

Is that a good approach? Is different option I should check out first?

---

> [Oscar Kilhed answered](https://stackoverflow.com/a/2267432) (1 upvotes):
>
> Sounds about right. However the code will probably get a little bit more readable if you return a JSON object that looks more like this:
> 
> ```
> {
>     type : 1,
>     href : 'uri-to-redirect-to',
>     errormessages : ['error1','error2']
> }
> 
> ```
> 
> And your javascript can look like this
> 
> ```
> if(ret.type === 1){
>     window.location(ret.href);
> }else{
>     //add error messages to modalDiv
> }
> 
> ```
> 
> Also, don't use the == operator. `if(ret.type == true)` will evaluate to the same as `if(ret.type == 1)`. This might not matter in this case, but for future reference, stay away from the == operator unless you're absolutely positive you want this kind of functionality.

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/q/2267141) — 0 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
