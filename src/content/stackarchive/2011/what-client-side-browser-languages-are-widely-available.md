---
title: "What client-side browser languages are widely available?"
description: "My answer to \"What client-side browser languages are widely available?\" on Stack Overflow"
date: 2011-02-09
author:
  name: Nate Bross
tags:
  - java
  - javascript
  - flash
  - browser
  - client-side
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/4949154"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/4949053):*

> I've read a bit on client-side browser languages and tried a few out but I'm not convinced I know of all the options. To make it clear, I'm looking for something that can be processed either through the browser or otherwise on the clients computer with minimal need for additional installations/configurations.
> 
> At the moment I know of JavaScript, Java, and Flash ( I'm aware this isn't actually a language, but seems pertinent to mention it still as an option). If at all possible it seems like avoiding Flash would be best, but it's still a consideration. I know there are various flavors of JS and Java but I don't really know of any that make the end-product that different than just the raw language. Java and JavaScript both seem relatively slow when it comes down to more complex and weighty apps, though performance is always improving as our browsers and libraries get better.
> 
> All this said, is there anything available or about to be available that will do things better?

JavaScript is the main language for client-side browser development that interacts with the elements on the page, does ajax requests (update screen without a full page refresh), etc. Depending on your specific requirements, I would recommend JavaScript, as its most likely the tool that will accomplish your needs.

Java is NOT a client-side browser language, Java is a programming language, you can write apps in Java and embed them in a website, that is called a Java Applet. This will require that all users have a JRE installed on their machine for your applet to work.

Java has nothing to do with Javascript -- they share some similar syntax, and thats about it.

Flash is a browser plugin, if you want to write a flash application, ActionScript is the language it uses. It still requires that anyone going to view your application have the Flash plugin installed.

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/4949154) — 1 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
