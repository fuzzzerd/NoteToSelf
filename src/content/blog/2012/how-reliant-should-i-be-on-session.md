---
title: "How reliant should I be on Session"
description: "My answer to \"How reliant should I be on Session\" on Stack Overflow"
date: 2012-12-28
author:
  name: Nate Bross
tags:
  - c#
  - asp.net-mvc
  - razor
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/14076053"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/14075989):*

> I am using session to do two things:
> 
> 1.  Keep track of which css file to load for a particular company.
> 2.  Keep track of the Company Id Guid that tracks what company we are in.
> 
> I am seeing that this is coming in as null sometimes but I'm not getting a consistent problem to track down. I have no doubt this is probably something in my code that I need to track down but this bring me up to my questions about session...
> 
> 1.  Am I relying on Session to much to pass information between screens?
> 2.  Is it consistent?
> 3.  What could be clearing it between page loads?
> 4.  Is session easily cleared by the user?
> 5.  Should I be using something else more reliable?
> 
> I am worried that I will move this to live usage and have all kinds of problems.
> 
> I'm simply doing this:
> 
> ```
> Session["Css"] = css;
> 
> ```
> 
> and reading it the same way:
> 
> ```
> css = Session["Css"]
> 
> ```
> 
> **UPDATE**
> 
> The session I am using:
> 
> HttpSessionStateBase Controller Session

*I posted the following answer, which was chosen as the accepted answer and received 4 upvotes:*

There are a few types of Session State. InProc, StateServer, and SqlServer. I believe the default is InProc. You can read more about this on MSDN [here](http://msdn.microsoft.com/en-us/library/vstudio/h6bb9cz9%28v=vs.100%29.aspx) and [here](http://technet.microsoft.com/en-us/library/cc776818%28v=WS.10%29.aspx).

Each of these will obey the timeout value for sessionState defined in your web.config file. For a single server setup (which is what I typically do) I usually have my sessionState setup as follows:

```
<sessionState 
    mode="StateServer" 
    stateConnectionString="tcpip=127.0.0.1:42424" 
    timeout="2880" />

```

This is the same default timeout as Forms Auth, so my sessions will stick around as long as my users auth cookie/session. This will require you to set the start up on the ASP.NET State Server to `Automatic`. Below is my high-level pass at explaining the types and their potential drawbacks.

## InProc

This will be reset everytime the application pool recycles the worker process for the web app. I believe this is what is happening to you, and this is why your session variables are null at what appear to be random times.

## StateServer

This will persist state across apppool recycles, but requires that you enable the ASP.NET State Server Service, and change it's start up type to Automatic.

You can run into issues if you have a web farm or multiple web servers handling the website, unless you run a dedicated state server.

This requires that variables stored in session variables are `[Serializable]`.

## SQLServer

This will persist session variables to a SQL database, and is is generally the best approach for a web farm situation.

This requires that variables stored in session variables are `[Serializable]`.

<details>
<summary>Notable comments</summary>

**Nate** (0 upvotes): @ErocM I use them as a quick way to store things during a user's session, such as which .css file to render, etc. I generally use cookies when both server code and javascript need them. Main reason, sessions are easy (with a state server or sql server, they persist). I have never had any problems. That said, others have said they have issues with them, and never use them. Maybe their sites are bigger and used more than mine and stress the session state to its limit, I don't know. I know that I use them. The app I'm working on now uses 3 session variables, so I guess I use them sparingly.

</details>

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/14076053) — 4 upvotes *(accepted answer)*. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
