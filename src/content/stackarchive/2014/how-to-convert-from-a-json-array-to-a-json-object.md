---
title: "How to convert from a JSON array to a JSON object"
description: "A question I asked on Stack Overflow"
date: 2014-04-09
author:
  name: Nate Bross
tags:
  - javascript
  - json
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/q/22968934"
---

*I [asked this on Stack Overflow](https://stackoverflow.com/q/22968934):*

I have this JSON that I'm getting back from a web service call:

```
{
    "name": "My Name",
    "path": "my path",
    "id": "44",
    "type": "my type",
    "classes": "my classes"
},
{
    "name": "his Name",
    "path": "his path",
    "id": "76",
    "type": "his type",
    "classes": "his classes"
}

```

I then need to convert it to this format

```
{
    "44" : { "name" : "My Name", "path" : "my path" },
    "76" : { "name" : "his Name", "path" : "his path" }
}

```

My initial naive attempt was this:

```
var myData = [];
for (var i = 0; i < rawData.length; i++) {
myData.push({
    rawData[i].id :
    {
        "path": rawData[i].path,
        "name": rawData[i].name
    }
});

```

which fails with syntax errors, so I eventually got to this:

```
var myData = [];
for (var i = 0; i < rawData.length; i++) {
myData.push(rawData[i].id,
{
    "path": rawData[i].path,
    "name": rawData[i].name
});

```

and it mostly works. My array is populated, but the problem is that my `myData` array doesn't have the "44", and "76" part of the object, just the `{ "name" : "", "path" : "" }` part. I expect this is due to a lack of understanding on my part of how JSON and javscript objects work.

---

> [T.J. Crowder answered](https://stackoverflow.com/a/22969047) (1 upvotes):
>
> Your desired output isn't an array, so that's your starting point. The output you've said you want is an _object_, not an array.
> 
> You build your result by creating a blank object and then adding the objects to it using `id` as the key:
> 
> ```
> var myData = {};
> rawData.forEach(function(entry) {
>     myData[entry.id] = {
>         name: entry.name,
>         path: entry.path
>     };
> });
> 
> ```
> 
> Or if you don't want to use `forEach` (it's ES5, but can be shimmed for older browsers), the old-fashioned way:
> 
> ```
> var myData = {};
> var index, entry;
> for (index = 0; index < rawData.length; ++index) {
>     entry = rawData[index];
>     myData[entry.id] = {
>         name: entry.name,
>         path: entry.path
>     };
> }
> 
> ```

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/q/22968934) — 0 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
