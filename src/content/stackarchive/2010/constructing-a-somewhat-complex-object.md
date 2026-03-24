---
title: "Constructing a (somewhat) complex object"
description: "My answer to \"Constructing a (somewhat) complex object\" on Stack Overflow"
date: 2010-08-24
author:
  name: Nate Bross
tags:
  - c#
  - .net
  - constructor
  - dns
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/3558964"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/3558916):*

> When I create classes, simple constructors tend to be the norm. On one of my current projects, a movie library, I have a `Movie` domain object. It has a number of properties, resulting in a constructor as follows:
> 
> ```
> public Movie(string title, int year, Genre genre, int length, IEnumerable<string> actors)
> {
>     _title = title;
>     _year = year;
>     _genre = genre;
>     _length = length;
>     _actors = new List<string>(actors);
> }
> 
> ```
> 
> This isn't terrible, but it's not simple either. Would it be worthwhile to use a factory method (`static Movie CreateMovie(...)`), or a perhaps an object builder? Is there any typical pattern for instantiating domain classes?
> 
> **UPDATE:** thanks for the responses. I was probably overthinking the matter initially, though I've learned a few things that will be useful in more complex situations. My solution now is to have the title as the only required parameter, and the rest as named/optional parameters. This seems the all round ideal way to construct this domain object.

*I posted the following answer, which received 1 upvote:*

This is perfectly acceptable, IMHO. I know static methods are sometimes frowned upon, but I typically drop that code into a static method that returns an instance of the class. I typically only do that for objects that are permitted to have null values.

If the values of the object can't be null, add them as parameters to the constructor so you don't get any invalid objects floating around.

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/3558964) — 1 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
