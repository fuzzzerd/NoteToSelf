---
title: "VB6 ActiveX Controls in a C#/ASP.NET Based Website"
description: "My answer to \"VB6 ActiveX Controls in a C#/ASP.NET Based Website\" on Stack Overflow"
date: 2010-09-28
author:
  name: Nate Bross
tags:
  - .net
  - vb6
  - activex
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/3817751"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/3817700):*

> We have a website that is based on C# and ASP.NET, I have a barcode scanner with a .dll file to control it that I can get to work in VB6. Before I dig deeper in exactly how to do this I wanted a quick answer on if it is even possible to do what I want first.
> 
> Can I write an activex control in VB6 that will allow me to control the barcode scanner and implement that activex control in our .NET based website?
> 
> Just to be clear, not asking HOW to do it, just asking if it can be done. I haven't done any ActiveX programming before and haven't touched VB6 in a long time.
> 
> Thanks!

*I posted the following answer, which was chosen as the accepted answer:*

I believe it should be possible; but you will probably need to implement it with JavaScript and ActiveX objects. This will require that the user's browser is setup to allow your web site to interact with ActiveX objects. A simple example of this, is using a link to start a program (like remote desktop client):

```
<script type="text/javascript">
    function runMstsc() {
        var command="mstsc.exe /v:127.0.0.1 /w:1024 /h:768";
        var scriptHost = new ActiveXObject("WScript.Shell");
        scriptHost.run(File);
    }
</script>

```

Assuming that your application is a valid ActiveX control, you should be able to minipulate it in a similar fashion to WScript.Shell.

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/3817751) — 0 upvotes *(accepted answer)*. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
