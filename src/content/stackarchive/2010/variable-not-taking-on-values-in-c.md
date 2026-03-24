---
title: "Variable not taking on values in C#"
description: "My answer to \"Variable not taking on values in C#\" on Stack Overflow"
date: 2010-12-20
author:
  name: Nate Bross
tags:
  - c#
  - xml
  - variables
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/4491659"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/4491599):*

> I have the following problem -
> 
> ```
> rec = new Record(name, age, dob, sex, country );
> webservicename.function[] test = new webservicename.function[1];
> test[0].name = rec.name;
> test[i].age = rec.age;
> test[i].dob = dob;
> test[i].sex = sex;
> test[i].country = country;
> 
> ```
> 
> When I start debugging it stops on the first test\[0\] line with a 'NullReferenceException was uhandled' message. When I hover mouse over the rec.Account it shows the value from the csv file that I have read from, however when I hover over test\[0\] its value is null. For some reason the variable array is not taking on values, How can I sort this?
> 
> Thanks for your time.

*I posted the following answer:*

You need to initialize the instance first:

```
rec = new Record(name, age, dob, sex, country ); 
webservicename.singlesummary[] test = new webservicename.singlesummary[1]; 
test[0] = new webservicename.singlesummary(); // extra line for your code
test[0].name= rec.name; 
test[0].age = rec.age; 
test[0].dob = dob; 
test[0].sex = sex; 
test[0].country = country; 

```

Obvously, if you need an array and you have length greater than one, you could replace all but lines one and two above inside a for...next loop and index to the `ith` element.

I notice though, that you're indexing into the array with `[0]` (and creating an array of length 1) which seems pointless to me, you might as well use a single instance:

```
rec = new Record(name, age, dob, sex, country ); 
webservicename.singlesummary test = new webservicename.singlesummary(); 
test.name= rec.name; 
test.age = rec.age; 
test.dob = dob; 
test.sex = sex; 
test.country = country; 

```

If the reason you're using an array of length one is because the service you call only accepts an array/list of items, you can always create one during the call:

```
wbsvcProxy.MethodCall(new List<singlesummary>() { test });

```

In my opinion, this is more readable throughout your code, since you only build the array/list when you're calling the method and removes all of the funky `[0].` syntax from the rest of your code (If your method doesn't require it, then never mind this last bit)

<details>
<summary>Notable comments</summary>

**Nate** (0 upvotes): I have seen your edit, review my code. I'm doing two things, first I initialize the array, second I initialize the zeroth `[0]` item in the array as well. You need to do both steps if you're using an array.

</details>

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/4491659) — 0 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
