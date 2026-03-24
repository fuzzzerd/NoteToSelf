---
title: "OpenID + OAuth for Webapp and Desktop/Mobile application Authentication and Authorizaiton"
description: "My answer to \"OpenID + OAuth for Webapp and Desktop/Mobile application Authentication and Authorizaiton\" on Stack Overflow"
date: 2011-06-16
author:
  name: Nate Bross
tags:
  - asp.net
  - security
  - oauth
  - openid
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/6375803"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/6075606):*

> I'd like to use OpenID to authenticate users on my webapp -- similar to how StackExchange does it. I'd also like to enable users of my website to use my Desktop and Mobile Apps using the same account. I've read this requires OAuth (OpenID is purely website only).
> 
> What I don't know is
> 
> *   Is this the correct approach?
> *   What would the workflow for this be?
> *   What data do I need in my database per user/OpenID? Do I store an "account" and then when they've authenticated with OpenID, I allow them to generate an OAuth Token for the mobile app?
> 
> In an ideal world, I would be able to have buttons similar to those on [https://stackoverflow.com/users/login](https://stackoverflow.com/users/login) for both my WebApp and also in my Desktop and Mobile Apps which would simply allow users to login with their google or facebook account, is that possible? Simplicity for users is paramount, because my userbase will not take well anything remotely complex.
> 
> Can I use something like DotNetOpenAuth to provide all of this functionality?
> 
> Would a better solution be to break this up and allow users to authenticate to my site with OpenID and then I provide my own OAuth scheme for my desktop and mobile clients?

*I posted the following answer, which was chosen as the accepted answer:*

This is the workflow that I came up with, and so far I think its working well.

The user is required to authenticate to the website via third party OpenID/Facebook/etc (mobile friendly website is available). Then, in their "profile" they can generate an API "key" which they can copy/paste into their client software. It isn't 100% transparent to the user, but its pretty good.

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/6375803) — 0 upvotes *(accepted answer)*. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
