---
title: "Classic ASP and ASP.NET MVC2 Integration"
description: "My answer to \"Classic ASP and ASP.NET MVC2 Integration\" on Stack Overflow"
date: 2011-05-27
author:
  name: Nate Bross
tags:
  - asp.net
  - asp.net-mvc-2
  - asp-classic
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/6158018"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/6143550):*

> I have inherited a Classic ASP application with a Delphi COM layer. I am tasked with migrating the app to ASP.NET MVC2 and C# with web services replacing the Delphi. Due to the amount of users of the application and the fact that I'm the third developer this company has hired to do this, the company would like to migrate sections at a time. That leaves us with a mixed hybrid of Classic ASP and ASP.NET MVC2 sections. My guys and I have built the first section of the app and are ready for integrating the apples and oranges. My question is, has anyone done this? If so, how? The first attempt is creating a sub-folder in the classic app and inserting the MVC stuff into there. Doing it this way, I cannot get any urls to work. It's probably some ignorance in the MVC pathing but if anyone has any tips at all on this, combining ASP and MVC2 I would love some help.
> 
> Thanks and I apologize if this is a bit vague, I'd really just like to start a conversation or connect with someone that's done this before.

*I posted the following answer, which was chosen as the accepted answer and received 2 upvotes:*

First, you need to make the subfolder in the classic app a Virtual Directory or Wep Application for MVC to work, it wont work simply dropped in a subfolder of an IIS website.

Second, if the app is authenticated, you need to figure out a way to share the authuthentication so users don't have to login every time they switch sections of the app. (Unless thats an acceptable situation, which I doubt). Sharing this authentication may involve making some changes to the existing application, or possibly not.

I wonder what is the scope of this project and why it cannot be done in one felswoop? I'm not saying doing it in phases is bad, but if that is a requirement, you'll need to address the above issues.

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/6158018) — 2 upvotes *(accepted answer)*. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
