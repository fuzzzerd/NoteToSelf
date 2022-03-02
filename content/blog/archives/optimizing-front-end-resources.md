---
title: Optimizing Front End Resources 
description: Optimizing front-end resources can be lots of fun, if you're using a good framework for it.
date: 2015-12-09
author: 
  name: Nate Bross
tags: 
  - web development
  - nuget
---
Optimizing front-end resources can be lots of fun, if you’re using a good framework for it. For your standard ASP.NET web application WebGrease and the built-in Microsoft tools work pretty darn well. Things get a little bit interesting when you start working with things like LESS or SASS as compilers for these systems can start bundling things up and making minified versions. That’s fine and good, until you need or want managed caching. That’s where server side frameworks come into play.

[Enter: ClientDependency Framework.](https://github.com/Shazwazza/ClientDependency) Its what powers this site. Its a nice simple framework that makes sense. The code speaks for itself, and since it lives in the views it doesn’t get lost in some .cs file.

Firstly, its available as a nuget package. In order to get started, you want to simply punch in these commands:

```
PM> Install-Package ClientDependency
PM> Install-Package ClientDependency-Mvc
```

Then you can jump right into your view code:

```cshtml
@{Html.RequiresCss("~/Content/Site.css");}

@{Html.RequiresJs("~/Scripts/jquery.js");}
```

This makes the view depend on these files, they are not rendered here, but when these views are used, the last call below knows which scripts to include:

```cshtml
<head>
...
@Html.RenderCssHere()
</head>
<body>
...
@Html.RenderJsHere()
</body>
```

ClientDependency Framework handles all the messyness of combining and minifiying these resources, adding query strings to the `<script>` and `<link>` tags so they are cached, but can be invaldiated in future updates. Using this framework properly, you should never have to tell a client, just do a “hard” (CTRL + F5) refresh.
