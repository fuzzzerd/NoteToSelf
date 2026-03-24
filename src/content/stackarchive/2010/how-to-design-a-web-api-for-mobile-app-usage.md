---
title: "How to design a web api for mobile app usage?"
description: "My answer to \"How to design a web api for mobile app usage?\" on Stack Overflow"
date: 2010-09-17
author:
  name: Nate Bross
tags:
  - iphone
  - android
  - authentication
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/3732759"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/3732748):*

> We are building a mobile app, specifically an android app, and it needs to connect to the server to get data. It is not like twitter, we do not need to expose some kind of public apis. We just need to keep it simple and safe because user will exchange some private data with the server.
> 
> My questions is mainly on authentication. Our server will have a user database.
> 
> 1.  How to register and login in my mobile app ? What kind of mechanism should be implemented in the server side and the client side.
> 2.  How to keep the session after login?
> 3.  If I need to let user could login without input his username/password next time when he open the app, What should I do? I just think to store his password in the mobile client is not a good idea.

*I posted the following answer, which received 1 upvote:*

Quick brain dump:

1.  Generate yourself a quick API Key (like a GUID) and communciate with your service via HTTPS.
2.  Huh? How is this different than #3?
3.  Use a simple obfuscation method to store them to local storage for your android app.

If you like, store the username and load it across application sessions and prompt for a password every "session" of your app.

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/3732759) — 1 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
