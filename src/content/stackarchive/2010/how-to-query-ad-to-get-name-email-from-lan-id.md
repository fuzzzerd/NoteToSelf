---
title: "How to query AD to get name email from lan id"
description: "My answer to \"How to query AD to get name email from lan id\" on Stack Overflow"
date: 2010-05-13
author:
  name: Nate Bross
tags:
  - c#
  - .net
  - active-directory
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/2828879"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/2828852):*

> I have some code in asp.net ( kindly given by someone else ) to query AD to get user name and email etc.
> 
> ```
> using System.DirectoryServices;
> using System.DirectoryServices.ActiveDirectory;
> using ActiveDs;
> 
>         DirectorySearcher search = new DirectorySearcher(new DirectoryEntry(), string.Format("(samaccountname={0})", id));
>         if (search == null)
>             return id;
>         if (search.FindOne() == null)
>             return id;
>         DirectoryEntry usr = search.FindOne().GetDirectoryEntry();
>         IADsUser oUsr = (IADsUser)usr.NativeObject;
>         return string.Format("{0} {1}", usr.Properties["givenname"].Value, usr.Properties["sn"].Value);
> 
> ```
> 
> However this requires impersonation with an id that's required to be changed every 2 weeks and then updated in the web.config which is often forgotten
> 
> Is there any non impersonation code to achieve the same result ?
> 
> UPDATE - it's a config tool and it looks up name, email id etc. I like the service a/c idea
> 
> Q - How is it possible to run ( impersonate ) just the AD code with a "service" a/c ? any samples/code ?
> 
> how do you impersona

I don't think so, because you need to bind to the domain with valid credentials in order to read from active directory.

Think of the username/password as part of a connection string to a database. I'd request a complex username and password from your domain administrator and request that they give it limited login permissions and set the password to never expire. Then store and use those in your Web.config file.

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/2828879) — 0 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
