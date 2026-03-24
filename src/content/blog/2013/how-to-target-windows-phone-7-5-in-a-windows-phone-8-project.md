---
title: "How to target Windows Phone 7.5 in a Windows Phone 8 project"
description: "My answer to \"How to target Windows Phone 7.5 in a Windows Phone 8 project\" on Stack Overflow"
date: 2013-09-20
author:
  name: Nate Bross
tags:
  - .net
  - windows-phone-7
  - visual-studio-2012
  - windows-phone-8
  - windows-phone
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/18925803"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/18925418):*

> I have build an app using `Visual Studio 2012 for Windows Phone` and when I started developing I selected `Windows Phone 8.0` as target.
> 
> Now that the app has been deployed I have customers asking to provide a `7.5` version. Is there a way to "downgrade" the target of a project in `Visual Studio 2012`?
> 
> I have checked some questions here that talk about supporting both `7.5` and `8` but none is about downgrading an existing project.

*I posted the following answer, which was chosen as the accepted answer and received 3 upvotes:*

You will need to install the Windows Phone 7.1 SDK (Which is to consumers v7.5). You'll also need to create a new Project and target Windows Phone 7.1.

If you are not using Windows Phone 8 exclusive APIs, you can probably just "Add As Link" all the files in your Windows Phone 8 project to the Windows Phone 7.1 project and just re-compile. Even if you are, you can still use this approach, you will just need to use compiler directives to fix whatever API issues you find at compile time.

Here is an article that explains the different ways to target both WP7.1 and WP8. The one I'm suggesting is the last in this list: [How to target multiple versions with your app for Windows Phone](http://msdn.microsoft.com/en-us/library/windowsphone/develop/jj206997%28v=vs.105%29.aspx)

<details>
<summary>Notable comments</summary>

**Nate** (0 upvotes): That is correct. You will need one project per "output" type, in this case, WP7 and WP8. Like I said though, that doesn't necessarily mean fully duplicate code though.

</details>

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/18925803) — 3 upvotes *(accepted answer)*. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
