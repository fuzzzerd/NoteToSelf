---
title: "Is it good practice to use domain objects as keys?"
description: "My answer to \"Is it good practice to use domain objects as keys?\" on Stack Overflow"
date: 2010-06-21
author:
  name: Nate Bross
tags:
  - java
  - oop
  - domain-driven-design
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/3088053"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/3088001):*

> Is is good practice to use domain objects as keys for maps (or "get" methods), or is it better to just use the id of the domain object?
> 
> It's simpler to explain with an example. Let's say I have Person class, a Club class, and a Membership class (that connects the other two). I.e.,
> 
> ```
> public class Person {
>     private int id; // primary key
>     private String name;
> }
> 
> public class Club {
>     private String name; // primary key
> }
> 
> public class Membership {
>     private Person person;
>     private Club club;
>     private Date expires;
> }
> 
> ```
> 
> Or something like that. Now, I want to add a method `getMembership` to Club. The question is, should this method take a Person object:
> 
> ```
> public Membership getMembership(Person person);
> 
> ```
> 
> or, the id of a person:
> 
> ```
> public Membership getMembership(int personId);
> 
> ```
> 
> Which is most idiomatic, which is most convenient, which is most suitable?
> 
> **Edit:** Many very good answers. I went with not exposing the id, because the "Person" (as you might have realized, my real domain does not have anything to do with people and clubs...) instances are easily available, but for now it is internally stored in a HashMap hashed on the id - but at least I am exposing it correctly in the interface.

*I posted the following answer:*

I would typically stick with less is more. The less information required to invoke your method the better. If you know the ID, only require the ID.

If you want, provide extra overloads which accept extra parameters, such as the entire class.

<details>
<summary>Notable comments</summary>

**Nate** (0 upvotes): Why a down vote? I'm curius to see why you think my advise is bad?

</details>

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/3088053) — 0 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
