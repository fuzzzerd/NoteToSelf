---
title: "How to create Http request URL to accept JSON data from user and send response code as OK using ASP .net with VB"
description: "My answer to \"How to create Http request URL to accept JSON data from user and send response code as OK using ASP .net with VB\" on Stack Overflow"
date: 2018-02-05
author:
  name: Nate Bross
tags:
  - asp.net
  - json
  - vb.net
  - http
  - request
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/48626979"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/48624740):*

> How to create a web application in ASP .net with VB which should accept HTTP request from users in JSON format (Sender should be able to send it in JSON format) and send response code as 200 OK once we received data. Whenever someone sends JSON data web service should send a response.

I'd recommend you [look into ASP.NET Web API.](https://learn.microsoft.com/en-us/aspnet/web-api/overview/getting-started-with-aspnet-web-api/tutorial-your-first-web-api) This link is C#, but it is similar for Visual Basic.

You need to create a controller with an action that accepts the JSON data you anticipate.

Something like this should work:

```
Public Function GetProduct(ByVal input As YourInputObject) As IHttpActionResult
    'process your input 
    Console.WriteLine(input.ToString()) ' or similar

    Return Ok(product) ' HTTP 200
End Function

```

You can use a tool [like Postman to](https://www.getpostman.com) test that its working how you expect.

<details>
<summary>Notable comments</summary>

**Nate** (0 upvotes): @Rameez you can check the documentation for WebAPI, you can use these controller actions to accept GET, PUT, POST, and any other HTTP verb you can dream up. The basic structure should be like what I have here.

</details>

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/48626979) — 0 upvotes *(accepted answer)*. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
