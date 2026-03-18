---
title: "&lt;NewEventHandler&gt; in Visual Studio Not Showing Up"
description: "My answer to \"&lt;NewEventHandler&gt; in Visual Studio Not Showing Up\" on Stack Overflow"
date: 2013-09-24
author:
  name: Nate Bross
tags:
  - c#
  - xaml
  - visual-studio-2012
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/18992853"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/18992707):*

> I was just doing a bit of Visual Studio 2012 for Windows Phone 8, but when I started typing Click="" in the .xaml file, no thing showed up in a dropdown list. It used to show up but now it isn't!

Have you tried restarting your computer? That often fixes these types of issues (sometimes just restart Visual Studio does the trick).

That said, you can always generate your own event handlers. Intellisense is great; but not having it should not cripple you. The below should work, adjusting for your button name.

```
//code-behind
private void btnYourButton_Click(object sender, EventArgs e)
{
    //do stuff
}

<!--xaml-->
<Button x:Name="btnYourButton" Click="btnYourButton_Click"/>

```

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/18992853) — 0 upvotes *(accepted answer)*. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
