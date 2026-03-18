---
title: "How can one handle/modify the outgoing authentication cookie (generated as part of the /signin-oidc redirect) for asp.net core external login?"
description: "My answer to \"How can one handle/modify the outgoing authentication cookie (generated as part of the /signin-oidc redirect) for asp.net core external login?\" on Stack Overflow"
date: 2021-06-18
author:
  name: Nate Bross
tags:
  - c#
  - asp.net
  - asp.net-core
  - iis
  - openid-connect
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/68041625"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/68037388):*

> I have an application that allows users to login using their own Identity Provider. We use the standard `.AddOpenIdConnect(...);` middleware and this works perfectly for most users.
> 
> It is using `.SaveTokens = false`; and the app is requesting `.ResponseType = "code id_token";`.
> 
> There are some users that have an obscene amount of claims, and this causes the following flow
> 
> 1.  User logs in to IDP.
> 2.  `form_post` back to /signin-oidc
> 3.  that returns a 302 redirect to my `ExternalLoginCallback` action in my controller
> 
> The problem is that on #2, the users with a large number of claims generate an authentication [cookie that is > 16kb, which appears to be a hard IIS limit for header request size](https://learn.microsoft.com/en-us/troubleshoot/iis/http-bad-request-response-kerberos#:%7E:text=%20HTTP%20400%20-%20Bad%20Request%20%28Request%20header,increases%20together%20with%20the%20number%20of%20user%20groups.).
> 
> In order for my application to work, I don't need a huge authentication cookie, chances are I can disregard most of those claims as part of the cookie and load if/when needed later. **My question is there a way to modify or intercept the /signin-oidc handler to trim that cookie down before it issues the redirect?**

After hunting around a bit more, I found [this post on the IdentityServer issue tracker](https://github.com/IdentityServer/IdentityServer4/issues/4654) that lead me to the ultimate solution.

There is a `.OnTicketReceived` handler you can listen for, and in there you can modify the response ahead of going out as part of the authentication cookie.

```
.AddOpenIdConnect("oidcScheme", "Open ID Connect Display", options =>
{

    options.Events.OnTicketReceived = (ticketReceived) =>
    {
        // ensure we have an identity
        var identity = ticketReceived.Principal.Identity as ClaimsIdentity;
        if (identity != null)
        {
            // this is where you can add or remove claims, which ultimately go into the authentication cookie that is sent from /signin-oidc.
            identity.RemoveClaim(...);
        }
        
        return Task.CompletedTask;
    };
};

```

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/68041625) — 2 upvotes *(accepted answer)*. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
