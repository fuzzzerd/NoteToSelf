---
title: "How to publish WCF service in internet (hosted in wnd service)"
description: "My answer to \"How to publish WCF service in internet (hosted in wnd service)\" on Stack Overflow"
date: 2011-10-07
author:
  name: Nate Bross
tags:
  - c#
  - wcf
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/7689536"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/7689485):*

> I have a windows service on my laptop, which hosts a WCF service. I would like to use these service on my ASP.NET website, which is on external ASP.NET server.
> 
> Could you help me, how to do this?
> 
> Is it necessary a specific laptop configuration for that? What should I configure?
> 
> And binding, what type will adequate? .. Right now, I've got:
> 
> ```
>   <service behaviorConfiguration="WcfServices.InfoBehavior" name="MyProgram.WcfServices.Info.Info">
>     <endpoint address="" binding="wsHttpBinding" contract="MyProgram.WcfServices.Info.IInfo">
>       <identity>
>         <dns value="localhost" />
>       </identity>
>     </endpoint>
>     <endpoint address="mex" binding="mexHttpBinding" contract="IMetadataExchange" />
>     <host>
>       <baseAddresses>
>         <add baseAddress="http://localhost:8732/Info/" />
>       </baseAddresses>
>     </host>
>   </service>
> 
> ```
> 
> UPDATE: Right now, my client app is still on my laptop (it is not publish yet).. This is my client code:
> 
> ```
> <client>
>   <endpoint address="http://localhost:8732/Info/" binding="wsHttpBinding"
>     bindingConfiguration="WSHttpBinding_IInfo" contract="ServiceInfo.IInfo"
>     name="WSHttpBinding_IInfo">
>     <identity>
>       <dns value="localhost" />
>     </identity>
>   </endpoint>
> </client>
> 
> ```
> 
> I don't know, what binding use.. what port, what settings should be changed on my laptop?

If you have a WCF service running on your laptop hosted via `ServiceHost` you'll need to duplicate that configuration in your ASP.NET web.config file, as well as add a "service.svc" file which is referenced to the Interface of your service.

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/7689536) — 0 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
