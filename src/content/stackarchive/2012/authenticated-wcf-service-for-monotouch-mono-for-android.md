---
title: "Authenticated WCF Service for MonoTouch, Mono for Android and WP7"
description: "My answer to \"Authenticated WCF Service for MonoTouch, Mono for Android and WP7\" on Stack Overflow"
date: 2012-02-10
author:
  name: Nate Bross
tags:
  - c#
  - wcf
  - authentication
  - xamarin.ios
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/9233325"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/9233280):*

> Iam writing a Phone App where the end user should be able to access their own personal messages and other personal content. Does anyone have some good ideas of how to create a service like this, should i use Soap or Rest, should i simply send the username/password with every request or ?
> 
> What would be the best choice for a service i would like to access from all three platforms and that only returns information specific to the authenticate user.

I don't know what the support is like for MonoTouch / MonoDroid, but WCF supports secure services without adding username/password to every request manually (it actually does, but it includes it in the headers).

See this blog post for a great starting point for using WPF Custom Username/Password Validator: [http://blogs.msdn.com/b/pedram/archive/2007/10/05/wcf-authentication-custom-username-and-password-validator.aspx](http://blogs.msdn.com/b/pedram/archive/2007/10/05/wcf-authentication-custom-username-and-password-validator.aspx)

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/9233325) — 0 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
