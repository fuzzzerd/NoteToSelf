---
title: "How Can I Parse CSV in C#"
description: "My answer to \"How Can I Parse CSV in C#\" on Stack Overflow"
date: 2013-03-07
author:
  name: Nate Bross
tags:
  - c#
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/15282517"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/15282447):*

> I have some point coordinates like below:
> 
> > \-123.118069008,49.2761419674,0 -123.116802056,49.2752350159,0 -123.115385004,49.2743520328,0 -123.114912944,49.2738039982,.............. -123.118069008,49.2761419674,0
> 
> Can you please let me know how I can use C# to create something like this:
> 
> ```
> new google.maps.LatLng(-123.118069008,49.2761419674),
> new google.maps.LatLng(-123.116802056,49.2752350159),
> .....
> new google.maps.LatLng(-123.118069008,49.2761419674)];
> 
> ```
> 
> As you can see I need to:
> 
> 1.  Add the "new google.maps.LatLng(),"
> 2.  Remove the 0 from -123.118069008,49.2761419674,0
> 3.  Parse it until the last line which terminate with ;
> 
> Thanks

Untested and not compiled, but this should get you started

```
var items = data.Split(',');
for(int i = 0; i < items.Length; i = i + 2)
{
    var lat = int.Parse(items[i].Replace("0-","-"));
    var lng = int.Parse(items[i+1]);
}

```

You'll want to do array bounds checking, etc, hopefully this still helps.

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/15282517) — 0 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
