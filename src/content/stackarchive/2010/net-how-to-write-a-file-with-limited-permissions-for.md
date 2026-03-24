---
title: ".NET: How to write a file with limited permissions for temporary data"
description: "My answer to \".NET: How to write a file with limited permissions for temporary data\" on Stack Overflow"
date: 2010-02-23
author:
  name: Nate Bross
tags:
  - .net
  - isolatedstorage
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/2321679"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/988800):*

> I have a library I am using where the only way to pass in config data is by giving it a filename where it can go to read the data. I am writing another shared library to be used by all of our applications which consumes this, and so I need a way to store some data in a local temp folder, and then delete once I have called the shared library. Is there a simple way of doing this, without knowing the permissions that the application will have? I ma thinking IsolatedStorage because I have seen that used by ClickOnce applications, but I don't know if it allows to get the file path so I can pass it to the library.

*I posted the following answer, which received 1 upvote:*

You can also look at `string tempPath = System.IO.Path.GetTempPath();` as the user should always have full access to that directory.

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/2321679) — 1 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
