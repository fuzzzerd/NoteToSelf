---
title: "WCF - How to Increase Message Size Quota"
description: "My answer to \"WCF - How to Increase Message Size Quota\" on Stack Overflow"
date: 2009-05-19
author:
  name: Nate Bross
tags:
  - .net
  - asp.net
  - wcf
  - .net-3.5
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/884248"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/884235):*

> I have a WCF Service which returns 1000 records from database to the client. I have an ASP.NET WCF client (I have added service reference in asp.net web application project to consume WCF).
> 
> I get the following message when I run the client application:
> 
> > The maximum message size quota for incoming messages (65536) has been exceeded. To increase the quota, use the MaxReceivedMessageSize property on the appropriate binding element.
> 
> Any help? How to increase message size quota?

You'll want something like this to increase the message size quotas, in the _App.config_ or _Web.config_ file:

```
<bindings>
    <basicHttpBinding>
        <binding name="basicHttp" allowCookies="true"
                 maxReceivedMessageSize="20000000" 
                 maxBufferSize="20000000"
                 maxBufferPoolSize="20000000">
            <readerQuotas maxDepth="32" 
                 maxArrayLength="200000000"
                 maxStringContentLength="200000000"/>
        </binding>
    </basicHttpBinding>
</bindings>

```

And use the binding name in your endpoint configuration e.g.

```
...
bindingConfiguration="basicHttp"
...

```

The justification for the values is simple, they are sufficiently large to accommodate most messages. You can tune that number to fit your needs. The low default value is basically there to prevent DOS type attacks. Making it 20000000 would allow for a distributed DOS attack to be effective, the default size of 64k would require a very large number of clients to overpower most servers these days.

<details>
<summary>Notable comments</summary>

**Nate** (0 upvotes): @R.Anandan This is something configured on the server, if you are consuming the service its not something you will be able to change.

**Nate** (5 upvotes): @Slauma It would need to be changed on the server if that incoming parameter was too large; otherwise (and more likely) the change needs to be made in the client configuration file, since it is the response of the service (not its parameter) that is too large.

**Nate** (0 upvotes): @Joshua I'm afraid I don't understand your question. Could you elaborate a little on what you're trying to do and what isn't working? Possibly open a new question and link it here?

**Nate** (0 upvotes): @NeilBarnwell This is a configuration option on both the client and the server.

**proudgeekdad** (19 upvotes): For others who are interested, I read on another blog that the maximum size is 2147483647. 20000000 is a bit smaller than this number, so using the smallest number you can get away with without interrupting service makes sense.

**Nate** (9 upvotes): Its sufficently large to accomidate most messages. You can tune that number to fit your needs. It is basically there to prevent DOS type attacks. Making it 20000000 would allow for a distributed DOS attack to be effective, the default size of 64k would require a very large number of clients to overpower most servers these day.s

**Brian Vander Plaats** (4 upvotes): Any particular reason for the message size of 20000000?

**Nate** (8 upvotes): You may also need to change it on the server -- in the event you need to send in a large dataset as a parameter to a WCF Method.

**bugBurger** (22 upvotes): Thanks..This change is needs to be made in web.config file of client application.

</details>

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/884248) — 650 upvotes *(accepted answer)*. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
