---
title: "How to authenticate to microsoft active directory through iOS App?"
description: "My answer to \"How to authenticate to microsoft active directory through iOS App?\" on Stack Overflow"
date: 2012-05-30
author:
  name: Nate Bross
tags:
  - ios5
  - active-directory
  - ldap
  - openldap
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/10817045"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/10807467):*

> I am to authenticate username and password credentials to a Active Directory through the iOS App?
> 
> I know that [this post](https://stackoverflow.com/questions/7877233/using-ldap-for-authentication-in-ios) instructs us to include the openldap in the project, BUT [this post](https://stackoverflow.com/questions/7651875/how-to-authenticate-to-active-directory-using-ios-app?answertab=oldest#tab-top) here has indicated that there are inbuilt ldap protocol that I can use to connect with the Active Directory using PHP.
> 
> Can somebody shed light on both of the topics, and pick one which would be useful for the current version of XCode.
> 
> And also, are there any examples of this that any user can share?
> 
> P.S: This is my first question in stackoverflow.

Unless you are exposing your domain on the Internet, you'll need some sort of service layer. If you know php, that is probably a good route to go. Then, from the iOS application, you simply call the operations exposed through your php server. For creating the service, you may want to look into an [ldap library for php](http://adldap.sourceforge.net/).

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/10817045) — 1 upvotes *(accepted answer)*. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
