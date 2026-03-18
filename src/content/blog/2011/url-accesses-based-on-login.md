---
title: "URL accesses based on login"
description: "My answer to \"URL accesses based on login\" on Stack Overflow"
date: 2011-11-18
author:
  name: Nate Bross
tags:
  - c#
  - asp.net
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/8190073"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/8189969):*

> Hello everyone I have a question that I will describe as good as I can. I have project that resides in the folder on my server the path for url is like
> 
> www.domain.com\\project now what I am trying to achieve is to have a \\project directory be only accessible if user is login. scenario would be the user opens the url www.domain.com and he see the login screen if he logins path \\project will be accessible if he does not and try's to go to any file in the direcoty or directory it should give him an error and redirect him back to login screen. I am using MVC3 in my project but I can write the login screen in asp.net web forms. I am also want to authorization be based in db a table with user logins so when the user logins it validates based on the information in the table. I am not looking for roles or privileges just a straight access to url based on login. If someone can show an example or a code sample on how to achieve this I will be greatly appreciated it.

In your web.config try this:

```
<system.web>
    ... other stuff
    <authentication mode="Forms">
        <forms loginUrl="~/Account/LogOn" timeout="2880" />
    </authentication>
    ... other stuff
</system.web>    
... more stuff
// secure only one directory [goes at the same level as your standard <system.web>]
<location Path="Project">
    <system.web>
        <authorization>
            <deny users="?"/>
        </authorization>
    </system.web>
</location>

```

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/8190073) — 2 upvotes *(accepted answer)*. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
