---
title: ".NET Azure Database Upload"
description: "My answer to \".NET Azure Database Upload\" on Stack Overflow"
date: 2018-02-07
author:
  name: Nate Bross
tags:
  - c#
  - asp.net
  - .net
  - asp.net-mvc
  - azure
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/48672742"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/48668856):*

> This is my connection string for my azure database:
> 
> ```
> Server=tcp:linkofy.database.windows.net,1433;Initial Catalog=Linkofy;Persist Security Info=False;User ID={your_username};Password={your_password};MultipleActiveResultSets=False;Encrypt=True;TrustServerCertificate=False;Connection Timeout=30;
> 
> ```
> 
> my .NET database connection string is:
> 
> ```
> Data Source=|DataDirectory|Linkofy-Release.sdf
> 
> ```
> 
> In the Package/Publish SQL do I just add my azure connection string to the destination database with my username and password, will this upload my database to azure?
> 
> What would my web.config transformation connection string then be?

I would get the database up to Azure myself. I recommend you look into the [Data Migration Assistant.](https://learn.microsoft.com/en-us/sql/dma/dma-overview)

Once on Azure, you can use the [Azure App service App Settings](https://learn.microsoft.com/en-us/azure/app-service/web-sites-configure) to specify [the connection string](https://azure.microsoft.com/en-us/blog/windows-azure-web-sites-how-application-strings-and-connection-strings-work/) your application should use instead of web.config transformations.

<details>
<summary>Notable comments</summary>

**Nate** (0 upvotes): @Lucie No problem. Good luck.

</details>

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/48672742) — 1 upvotes *(accepted answer)*. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
