---
title: "IIS disable authentication in subfolder"
description: "My answer to \"IIS disable authentication in subfolder\" on Stack Overflow"
date: 2018-02-06
author:
  name: Nate Bross
tags:
  - asp.net
  - iis
  - web-config
  - authorization
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/48651011"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/48650232):*

> In my web.config in application is:
> 
> ```
> <authentication mode="Forms">
>   <forms loginUrl="app/Login.aspx" name=".ASPXFORMSAUTH" protection="All" slidingExpiration="true" timeout="10"/>
> </authentication>
> <authorization>
>   <deny users="?"/>
>   <allow users="*"/>
> </authorization>
> 
> ```
> 
> In web.config in app folder is:
> 
> ```
> <configuration>
>   <system.webServer>
>     <validation validateIntegratedModeConfiguration="false" />
>     <directoryBrowse enabled="false"/>
>     <defaultDocument enabled="true">
>       <files>
>         <clear/>
>         <add value="Default.aspx"/>
>       </files>
>     </defaultDocument>
>     <handlers accessPolicy="Read, Script, Execute"/>
>     <staticContent enableDocFooter="false">
>       <clientCache cacheControlMode="UseMaxAge" cacheControlMaxAge="00:00:00"/>
>     </staticContent>
>     <asp enableParentPaths="false" scriptLanguage="VBScript" bufferingOn="true">
>       <limits scriptTimeout="00:01:30"/>
>       <session allowSessionState="true" timeout="00:20:00"/>
>     </asp>
>     <security>
>       <authentication>
>         <anonymousAuthentication enabled="true" password="" userName="IUSR"/>
>         <basicAuthentication enabled="false" realm="" defaultLogonDomain=""/>
>         <windowsAuthentication enabled="false"/>
>         <digestAuthentication enabled="false" realm=""/>
>       </authentication>
>     </security>
>     <httpLogging dontLog="true"/>
>   </system.webServer>
> </configuration>
> 
> ```
> 
> This working, but I want to give access to my\_public folder for anonymous users. In my\_public folder is site about.aspx.
> 
> In web.config in my\_public folder is:
> 
> ```
> <configuration>
>   <system.webServer>
>     <validation validateIntegratedModeConfiguration="false" />
>     <directoryBrowse enabled="false"/>
>     <defaultDocument enabled="true">
>       <files>
>         <clear/>
>         <add value="Default.aspx"/>
>       </files>
>     </defaultDocument>
>     <handlers accessPolicy="Read, Script, Execute"/>
>     <staticContent enableDocFooter="false">
>       <clientCache cacheControlMode="UseMaxAge" cacheControlMaxAge="00:00:00"/>
>     </staticContent>
>     <asp enableParentPaths="false" scriptLanguage="VBScript" bufferingOn="true">
>       <limits scriptTimeout="00:01:30"/>
>       <session allowSessionState="true" timeout="00:20:00"/>
>     </asp>
>     <security>
>       <authentication>
>         <anonymousAuthentication enabled="true" password="" userName="IUSR"/>
>         <basicAuthentication enabled="false" realm="" defaultLogonDomain=""/>
>         <windowsAuthentication enabled="false"/>
>         <digestAuthentication enabled="false" realm=""/>
>       </authentication>
>     </security>
>   </system.webServer>
>   <system.web>
>     <authorization>     
>     <allow roles="*"/>
>   </authorization>
> </system.web>
> </configuration>
> 
> ```
> 
> When user go to my\_public/about.aspx always is redirect to app/login.aspx. User should redirect to my\_public/about.aspx when is annonymus.

Change the authorization section on the public web.config to

```
<authorization>
  <allow users="?"/>
</authorization>

```

This will allow anonymous access.

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/48651011) — 0 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
