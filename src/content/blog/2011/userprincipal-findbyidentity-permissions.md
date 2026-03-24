---
title: "UserPrincipal.FindByIdentity Permissions"
description: "My answer to \"UserPrincipal.FindByIdentity Permissions\" on Stack Overflow"
date: 2011-03-01
author:
  name: Nate Bross
tags:
  - c#
  - .net
  - active-directory
  - ldap
  - directoryservices
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/5159633"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/3579588):*

> I'm attempting to use the .NET `System.DirectoryServices.AccountManagement` library to obtain the UserPrincipal for a particular Active Directory user.
> 
> I've got the following code:
> 
> ```
> PrincipalContext context = new PrincipalContext(ContextType.Domain, "DomainName");
> userPrincipal = UserPrincipal.FindByIdentity(context, IdentityType.SamAccountName, username);
> 
> ```
> 
> This code is running as a valid domain user, but when I execute it I get the following exception:
> 
> > System.DirectoryServices.DirectoryServicesCOMException (0x8007052E): Logon failure: unknown user name or bad password.
> 
> What's interesting is that I can make the following call, using the same context, without a problem:
> 
> ```
> context.ValidateCredentials(username, password, ContextOptions.Negotiate)
> 
> ```
> 
> Ideas?

*I posted the following answer, which was chosen as the accepted answer and received 13 upvotes:*

You need to use the the `PrincipalContext` constructor that takes username and password.

The reason that Validate works is because its using the provided credentials to bind to the directory.

<details>
<summary>Notable comments</summary>

**Nate** (0 upvotes): As far as I know, that _shouldn't_ be any different between Windows 2008 and Windows 2003 domains. If you're only reading data, you delegation may not be necessary.

**Nate** (1 upvotes): In the Active Directory Users and Computers (on the domain controller) you need to select the Organizational Unit you want to manage, and "Delegate Control" in the delegate wizard, put in the credentials that your service is running as.

**Nate** (0 upvotes): I think you misunderstood, ValidateCredentials uses the credentials provided in the parameter list for ValidateCredentials -- the Context you've defined has no credentials associated with it besides the ones of the current thread. I suspect your issues is in the configuration/deployment of the server. Make sure the account running the service has been delegated to within the domain.

</details>

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/5159633) — 13 upvotes *(accepted answer)*. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
