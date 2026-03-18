---
title: "Set credentials for Entity Framework in code, without using Integrated Security and only storing User ID in config file"
description: "A question I asked on Stack Overflow"
date: 2011-07-07
author:
  name: Nate Bross
tags:
  - c#
  - .net
  - database
  - entity-framework
  - connection
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/q/6606020"
---

*I [asked this on Stack Overflow](https://stackoverflow.com/q/6606020):*

So, I went to create an EDMX file today, and while going through the connection options the wizard asked if I wanted to "keep sensitive data out of the .config file and manually set it in code" this makes perfect sense to me (use my own encrypted "appsetting" for connection credentials).

Now, I'm sitting here trying to find out how to specify the credentials to my Entity Framework classes. The only thing I can find is the

```
db.Connection.ConnectionString 

```

property, but I'm not really sure what to do with it all it contains is `name=MyDatabaseName`.

**TL;DR**\-- How does one create and use hard-coded connection for Entity Framework in C#? (I can un-hard code it once its in C#)

---

> [ChristiaanV answered](https://stackoverflow.com/a/6606286) (2 upvotes):
>
> If you cast the Connection object to an [EntityConnection](http://msdn.microsoft.com/en-us/library/system.data.entityclient.entityconnection.aspx) object, you can access the [StoreConnection](http://msdn.microsoft.com/en-us/library/system.data.entityclient.entityconnection.storeconnection.aspx) property which you can programmatically override with your hardcoded connectionstring.
> 
> See the example below:
> 
> ```
> EntityConnection entityConnection = (EntityConnection)context.Connection;
> entityConnection.StoreConnection.ConnectionString = "YourConnectionString";
> 
> ```

<details>
<summary>Notable comments</summary>

**Nate** (0 upvotes): No... but I'd also like to keep it open, to possibly use credentials from the user, so I'd really like to know how to set the credentials (or the whole connection) from code.

</details>

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/q/6606020) — 2 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
