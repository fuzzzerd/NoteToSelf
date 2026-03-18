---
title: "Relative Paths in Javascript in an external file"
description: "A question I asked on Stack Overflow"
date: 2010-02-02
author:
  name: Nate Bross
tags:
  - javascript
  - html
  - asp.net-mvc
  - css
  - path
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/q/2188218"
---

*I [asked this on Stack Overflow](https://stackoverflow.com/q/2188218):*

So I'm running this javascript, and everything works fine, except the paths to the background image. It works on my local ASP.NET Dev environment, but it does NOT work when deployed to a server in a virtual directory.

This is in an external .js file, folder structure is

```
Site/Content/style.css
Site/Scripts/myjsfile.js
Site/Images/filters_expand.jpg
Site/Images/filters_colapse.jpg

```

then this is where the js file is included from

```
Site/Views/ProductList/Index.aspx

$("#toggle").click(function() {
    if (left.width() > 0) {
        AnimateNav(left, right, 0);
        $(this).css("background", "url('../Images/filters_expand.jpg')");
    }
    else {
        AnimateNav(left, right, 170);
        $(this).css("background", "url('../Images/filters_collapse.jpg')");
    }
});

```

I've tried using `'/Images/filters_collapse.jpg'` and that doesn't work either; however, it seems to work on the server if I use `'../../Images/filters_collapse.jpg'`.

Basically, I want have the same functionallity as the ASP.NET tilda -- `~`.

**update**

Are paths in external .js files relative to the Page they are included in, or the actual location of the .js file?

---

> [Juraj Blahunka answered](https://stackoverflow.com/a/2188506) (146 upvotes):
>
> ## JavaScript file paths
> 
> When in script, **paths are relative to displayed page**
> 
> to make things easier you can print out a simple js declaration like this and using this variable all across your scripts:
> 
> Solution, which was employed on **StackOverflow** around Feb 2010:
> 
> ```
> <script type="text/javascript">
>    var imagePath = 'http://sstatic.net/so/img/';
> </script>
> 
> ```
> 
> If you were visiting this page around 2010 you could just have a look at **StackOverflow's html source**, you could find this badass one-liner \[formatted to 3 lines :) \] in the `<head />` section

<details>
<summary>Notable comments</summary>

**Nate** (0 upvotes): Are paths in external .js files relative to the Page they are included in, or the actual location of the .js file?

**Nate** (0 upvotes): I'm using javascript to dynamically change the background image of a div tag. I'd like to avoid putting the code back into the master page file, since it's much more clean its own external .JS file...

**Nate** (0 upvotes): That is exactly the problem! Depending on where the virtual directory is located, I don't want to have to update my javascript every time I switch from dev to production...

</details>

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/q/2188218) — 97 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
