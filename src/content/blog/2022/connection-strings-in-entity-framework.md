---
title: "Connection strings in Entity Framework"
description: "My answer to \"Connection strings in Entity Framework\" on Stack Overflow"
date: 2022-04-29
author:
  name: Nate Bross
tags:
  - c#
  - entity-framework
  - web-config
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/72060227"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/72059474):*

> I am referencing 2 databases in ASP.NET using Entity Framework.
> 
> In my `web.config` file, I can see the connection strings for the 2 databases:
> 
> ```
> <connectionStrings>
>     <add name="RContext" 
>          connectionString="metadata=res://*/Models.RModel.csdl|res://*/Models.RModel.ssdl|res://*/Models.RModel.msl;provider=System.Data.SqlClient;provider connection string=&quot;data source=localhost\SQLEXPRESS;initial catalog=RStreamline;integrated security=True;MultipleActiveResultSets=True;App=EntityFramework&quot;" 
>          providerName="System.Data.EntityClient" />
>     <add name="CEntities" 
>          connectionString="metadata=res://*/Models.CModel.csdl|res://*/Models.CModel.ssdl|res://*/Models.CModel.msl;provider=System.Data.SqlClient;provider connection string=&quot;data source=localhost\SQLEXPRESS;initial catalog=RStreamline;integrated security=True;MultipleActiveResultSets=True;App=EntityFramework&quot;" 
>          providerName="System.Data.EntityClient" />
> </connectionStrings>
> 
> ```
> 
> Can I somehow implement alternate connection strings where the datasource refers to the prod server for the release?

*I posted the following answer, which was chosen as the accepted answer and received 1 upvote:*

This is typically handled with [web.config transforms](https://learn.microsoft.com/en-us/previous-versions/aspnet/dd465326\(v=vs.110\)).

In your project you would have:

*   web.config
*   web.Release.config

For example in your web.Release.config transform you would have something like this:

```
<?xml version="1.0"?>
<configuration xmlns:xdt="https://schemas.microsoft.com/XML-Document-Transform">
  <connectionStrings>
    <add name="RContext" 
      connectionString="RContext-Prod-Connection-String" 
      xdt:Transform="SetAttributes" xdt:Locator="Match(name)"/>
    <add name="CEntities" 
      connectionString="CEntities-Prod-Connection-String" 
      xdt:Transform="SetAttributes" xdt:Locator="Match(name)"/>
  </connectionStrings>
</configuration>

```

You'll notice the `xdt:Transform="SetAttributes" xdt:Locator="Match(name)"` bit, which says, in the main web.config find the connectionString by name and replace its attributes with the ones defined here.

This will automatically happen when you publish the application.

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/72060227) — 1 upvotes *(accepted answer)*. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
