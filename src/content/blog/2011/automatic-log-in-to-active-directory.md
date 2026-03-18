---
title: "Automatic log in to Active Directory"
description: "My answer to \"Automatic log in to Active Directory\" on Stack Overflow"
date: 2011-02-01
author:
  name: Nate Bross
tags:
  - c#
  - .net
  - active-directory
  - single-sign-on
  - directoryservices
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/4866202"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/4866007):*

> I am having some difficulty with doing an automated login for users in my desktop Active Directory application. I may be trying to do an SSO, but I am under the impression that is only for web applications.
> 
> The code I have, is this:
> 
> ```
> PrincipalContext theContext = new PrincipalContext(ContextType.Domain);
> if (theContext.ValidateCredentials(null, null))
>     Console.WriteLine("Credentials have been validated. Tell your friends.");
> else
>     Console.WriteLine("Invalid credentials");
> UserPrincipal user = new UserPrincipal(theContext, "uatu", "Passw0rd", true);
> user.Save();
> 
> ```
> 
> The PrincipalContext is being created without error, and I am validating the credentials. I assumed this would validate me as the user that logged in to the computer, which is under the Active Directory domain. And I can find users and groups. But as soon as I call user.Save() I get the error "Access is denied." Am I actually getting into Active Directory as a guest user?
> 
> If I set the user name and password in ValidateCredentials, it doesn't help.
> 
> ```
> PrincipalContext theContext = new PrincipalContext(ContextType.Domain);
> if (theContext.ValidateCredentials("<username>", "<password", ContextOptions.Negotiate | ContextOptions.Signing | ContextOptions.Sealing))
>     Console.WriteLine("Credentials have been validated. Tell your friends.");
> else
>     Console.WriteLine("Invalid credentials");
> UserPrincipal user = new UserPrincipal(theContext, "uatu", "Passw0rd", true);
> user.Save();
> 
> ```
> 
> That code still fails on user.Save(). If I explicitly set the username and password to match myself as the logged in user in the PrincipalContext constructor, then I get success.
> 
> ```
> PrinicipalContext  theContext = new PrincipalContext(ContextType.Domain,"<address>", "<domain context>", "<username>", "<password>");
> UserPrincipal user = new UserPrincipal(theContext, "uatu", "Passw0rd", true);
> user.Save();
> 
> ```
> 
> That code succeeds. But I would rather not have the user log in to my application after they have logged into their computer with the exact same credentials.
> 
> I have been hearing a bit about "Affiliate Application", so I'm wondering if I have to let Active Directory know that it can trust my application. I am still hazy on the details through, and don't know if that is the wrong direction.
> 
> Does anyone have an idea as to what I should be doing?

If you are trying to modify `UserPrincipals`, you have a couple options:

1.  User is already authenticated to windows as a user with permission to edit active directory:
    *   Use the Constructor for `PrincipalContext` which doesn't take username/password
        *   This will run the context as the currently logged in user
    *   Run query, `var usr = UserPrincipal.FindByIdentity(ctx, "bob@domain.local");`
    *   Perform manipulations on `usr` object
    *   Call `usr.Save();` on the returned user from the query.
2.  User is authenticated to windows, but you must "impersonate" a user with AD permission
    *   Use the Constructor for `PrincipalContext` which takes username/password
        *   This will run the context as the credentials you passed in
    *   Run query, `var usr = UserPrincipal.FindByIdentity(ctx, "bob@domain.local");`
    *   Perform manipulations on `usr` object
    *   Call `usr.Save();` on the returned user from the query.

Based on your explanation above, I'm presuming you need option #1. `ValidateCredentials();` is only used to validate credentials, it returns a true/false if the credentials you've given it are valid. Calling it has no lasting affect, it only validates. If you need to impersonate a user, you need to use the `PrincipalContext` constructor which takes credentials.

<details>
<summary>Notable comments</summary>

**Nate** (0 upvotes): You may need to delegate if the users doing modifications are not domain admins.

**Nate** (0 upvotes): You may need to "Delegate Control" of a the Organizational Unit that contains the users. When you delegate, you can pick a single user or a security group. Right click on the OU and choose "Delegate Control."

</details>

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/4866202) — 3 upvotes *(accepted answer)*. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
