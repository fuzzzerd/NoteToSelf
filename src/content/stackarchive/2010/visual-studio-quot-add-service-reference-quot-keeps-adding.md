---
title: "Visual Studio &quot;Add Service Reference&quot; keeps adding &quot;extendedProtectionPolicy&quot; to my config file"
description: "A question I asked on Stack Overflow"
date: 2010-07-14
author:
  name: Nate Bross
tags:
  - c#
  - .net
  - wcf
  - security
  - iis
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/q/3248284"
---

*I [asked this on Stack Overflow](https://stackoverflow.com/q/3248284):*

When I add a Service Reference in Visual Studio to a service, it keeps adding this `extendedProtectionPolicy` to my Security Bindings, which on my Win7 machine it works fine. But when I deploy to Server 2003 it errors out saying unrecognized element in configuration file.

Removing the line `<extendedProtectionPolicy policyEnforcement="Never" />` fixes the error.

This is the entire portion of unwanted web.config generated after an Add Service Reference (client side)

```
<security mode="TransportWithMessageCredential">
    <transport clientCredentialType="None" proxyCredentialType="None"
        realm="">
        <extendedProtectionPolicy policyEnforcement="Never" />
    </transport>
    <message clientCredentialType="UserName" algorithmSuite="Default" />
</security>

```

Here is the behavior my service is using (iis7-host side)

```
<behavior name="GetHttpsIncludeFaults">
  <serviceCredentials>
    <userNameAuthentication 
      userNamePasswordValidationMode="Custom" 
      customUserNamePasswordValidatorType="MyCustomValidator, MyOtherAssembly"/>
  </serviceCredentials>
  <serviceMetadata httpsGetEnabled="true" />
  <serviceDebug includeExceptionDetailInFaults="true" />
</behavior>

```

I'd like to point out a few things. This happens in both VS2010 and VS2008. This happens in Consumer Projects of ASP.NET-MVC flavor AS WELL AS Windows Service / WPF Application.

---

> [Sandor Drie&#235;nhuizen answered](https://stackoverflow.com/a/3248545) (3 upvotes):
>
> As far as I can tell from information found on the internet and on Microsoft Connect more specifically, this is a known issue that has not been fixed yet.
> 
> You can work around this problem by using the Config Transforms feature of Visual Studio 2010. Config Transforms is a very useful feature that allows you to change the contents (such as connection strings) of config files automatically when deploying an application.
> 
> Unfortunately, at the present time Config Transforms are only supported for web.config files. [This blogpost](http://vishaljoshi.blogspot.com/2010/05/applying-xdt-magic-to-appconfig.html) explains how to use the Config Transforms for app.config files however.
> 
> The following transform should fix your problem:
> 
> ```
> <?xml version="1.0"?>
> <!-- For more information on using web.config transformation visit http://go.microsoft.com/fwlink/?LinkId=125889 -->
> <configuration xmlns:xdt="http://schemas.microsoft.com/XML-Document-Transform">
>   <system.serviceModel>
>     <bindings>
>       <netTcpBinding>
>         <binding>
>           <security>
>             <transport>
>                <extendedProtectionPolicy xdt:Transform="Remove" />
>             </transport>
>         </binding>
>       </netTcpBinding>
>     </bindings>
>   </system.serviceModel>
> </configuration>
> 
> ```
> 
> As you can see, it removes the `<extendedProtectionPolicy/>` node when deploying your application.

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/q/3248284) — 4 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
