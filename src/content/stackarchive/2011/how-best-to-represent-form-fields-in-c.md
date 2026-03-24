---
title: "How best to represent form fields in C#"
description: "My answer to \"How best to represent form fields in C#\" on Stack Overflow"
date: 2011-06-27
author:
  name: Nate Bross
tags:
  - c#
  - windows-phone-7
  - dictionary
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/6499342"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/6499241):*

> I'm starting to learn C# for WP7, I'm making an app to scrape various sites and display a couple of items of info off the page.
> 
> I'm going to allow the user to create multiple "accounts" on the phone - each is a set of login details for a particular site. For example, if I was to use stackoverflow as an example, I'd have a class:
> 
> ```
> public abstract class MyBaseClass
> {
>     public Dictionary<string, string> fields;
> }
> 
> public class StackOverflow : MyBaseClass 
> {
>    public StackOverflow()
>    {
>        fields.Add("Username", "Default Username");
>        fields.Add("Password", "");
>    }
> }
> 
> ```
> 
> The class will do all the work, I want people to be able to submit new classes for inclusion in later releases.
> 
> The application will iterate over each of the fields, displaying the appropriate form field to the user. Once completed, the UI will update the dictionary, ready to start scraping.
> 
> Using a dictionary seemed ok to start, but I hadn't thought about how to represent the data type - I want to define whether the input should be text, number, or password.
> 
> How would I best include that data?

*I posted the following answer, which received 2 upvotes:*

Given that screen-scraping is bad at best and disasterous at worst, I must recommend that you only include sites (or serviecs) that provide a public documented API and then use that reference to define the data types that you are storing.

That said, if you're on C#/.NET 4 you might want to use the [Tuple](http://msdn.microsoft.com/en-us/library/system.tuple.aspx) data type.

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/6499342) — 2 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
