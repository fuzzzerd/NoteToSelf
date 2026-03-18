---
title: "Forbidden to browse WCF svc file?"
description: "My answer to \"Forbidden to browse WCF svc file?\" on Stack Overflow"
date: 2010-09-23
author:
  name: Nate Bross
tags:
  - c#
  - .net
  - wcf
  - visual-studio-2010
  - iis-7
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/3780037"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/3780007):*

> I am using VS2010 + C# + .Net 4.0 + IIS 7.5 + Windows 7. When I open an svc file (in IIS manager, right click the svc file and select browse) for a WCF project in IIS, there is an error like this, any ideas what is wrong?
> 
> ```
> This type of page is not served. 
> Description: The type of page you have requested is not served because it has been explicitly forbidden.  The extension '.svc' may be incorrect.   Please review the URL below and make sure that it is spelled correctly.
> 
> ```
> 
> Here is the content of the web.config file I am using, is it correct?
> 
> ```
> <?xml version="1.0" encoding="UTF-8"?>
> <configuration>
>     <system.webServer>
>         <staticContent>
>             <remove fileExtension=".svc" />
>         </staticContent>
>         <handlers>
>             <remove name="svc-ISAPI-2.0" />
>             <remove name="svc-Integrated" />
>             <add name="svc-ISAPI-2.0" path="*.svc" verb="*" modules="IsapiModule" scriptProcessor="C:\Windows\Microsoft.NET\Framework\v4.0.30319\aspnet_isapi.dll" resourceType="Unspecified" requireAccess="Script" preCondition="classicMode,runtimeVersionv2.0,bitness32" />
>         </handlers>
>     </system.webServer>
> </configuration>
> 
> ```

Its likely the mime types not setup correctly on IIS, try using the [aspnet\_regiis](http://msdn.microsoft.com/en-us/library/k6h9cz8h\(VS.80\).aspx) tool. Failing that, I'd recommend adding a mimetype to your virtual directory in iis for .svc files to be handled by the .NET runtime.

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/3780037) — 1 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
