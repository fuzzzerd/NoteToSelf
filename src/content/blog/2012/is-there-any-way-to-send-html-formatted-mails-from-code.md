---
title: "Is there any way to send HTML formatted mails from code directly on a Windows Phone 7 device?"
description: "My answer to \"Is there any way to send HTML formatted mails from code directly on a Windows Phone 7 device?\" on Stack Overflow"
date: 2012-02-02
author:
  name: Nate Bross
tags:
  - c#
  - windows-phone-7
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/9118411"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/9118372):*

> I have an app where the user can send some data via email, sort of like a report. This works fine but I would like some more formatting. The best thing would be if it was possible to create some HTML code and add it to the mail. Is this possible?

*I posted the following answer, which was chosen as the accepted answer and received 3 upvotes:*

With Windows Phone 7 you can only start the [EmailComposeTask](http://msdn.microsoft.com/en-us/library/hh394003%28v=VS.92%29.aspx) which does not have any way to include HTML based email. You will need to send this from a web service, which in all honesty is probably the better option anyway, as you'll be able to log who sent what when, etc.

<details>
<summary>Notable comments</summary>

**Nate** (0 upvotes): Again, to include an attachment, a web service is the way to go.

</details>

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/9118411) — 3 upvotes *(accepted answer)*. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
