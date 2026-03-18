---
title: "Silverlight WCF Service Cross Domain Question"
description: "A question I asked on Stack Overflow"
date: 2009-09-01
author:
  name: Nate Bross
tags:
  - silverlight
  - web-services
  - service
  - cross-domain
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/q/1364015"
---

*I [asked this on Stack Overflow](https://stackoverflow.com/q/1364015):*

I have a silverlight app (hosted at intranet.mydomain.net) and a WCF service at (webservices.mydomain.net)

Do I need a cross-site policy file? If so, what would it look like to only allow access from intranet.mydomain.net?

---

> [DaveB answered](https://stackoverflow.com/a/1861629) (4 upvotes):
>
> Yes, you will need a clientaccesspolicy.xml file in the ROOT of your service domain(webservices.mydomain.net).
> 
> By default, Silverlight supports calls to Web services on the same domain or site of origin. Same domain means that calls must use the same sub domain, protocol, and port. This is for security reasons and prevents cross-domain forgery.
> 
> Here is an example file:
> 
> ```
> <?xml version="1.0" encoding="utf-8" ?>
> <access-policy>
>   <cross-domain-access>
>     <policy>
>       <allow-from http-request-headers="*">
>         <domain uri="http://intranet.mydomain.net"/>
>       </allow-from>
>       <grant-to>
>         <resource path="/" include-subpaths="true"/>
>       </grant-to>
>     </policy>
>   </cross-domain-access>
> </access-policy>
> 
> ```
> 
> This would allow requests only from intranet.mydomain.net.
> 
> **Edit**
> 
> It has been asked: How would this work if I have two WCF Services? /ServiceA/a.svc and /ServiceB/b.svc and I want ServiceA to to be open to anyone, anywhere, and ServiceB to only work from my intranet?
> 
> Your policy file would look like this:
> 
> ```
> <?xml version="1.0" encoding="utf-8" ?>
> <access-policy>
>   <cross-domain-access>
>     <policy>
>       <allow-from http-request-headers="*">
>         <domain uri="http://*"/>
>       </allow-from>
>       <grant-to>
>         <resource path="/ServiceA/" include-subpaths="true"/>
>       </grant-to>
>     </policy>
> 
>     <policy>
>       <allow-from http-request-headers="*">
>         <domain uri="http://intranet.mydomain.net"/>
>       </allow-from>
>       <grant-to>
>         <resource path="/ServiceB/" include-subpaths="true"/>
>       </grant-to>
>     </policy>
>   </cross-domain-access>
> </access-policy>
> 
> ```

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/q/1364015) — 5 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
