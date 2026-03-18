---
title: "Sending an email message in WP7 on unhandled exception"
description: "My answer to \"Sending an email message in WP7 on unhandled exception\" on Stack Overflow"
date: 2011-05-09
author:
  name: Nate Bross
tags:
  - windows-phone-7
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/5942724"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/5942640):*

> Is there a way to send a email message with the details when an unhandled exception occurs in a WP7 app?
> 
> I've seen the WCF logging/email sending approach, but I don't have a place to publicly host a service.

The only other option you have is to use the [EmailComposeTask](http://msdn.microsoft.com/en-us/library/microsoft.phone.tasks.emailcomposetask%28VS.92%29.aspx). This leaves you at the mercy of the user to send the message, because it will give you their email address, but its the only way currently to send a mail message without a WCF service.

Example 1:

```
private void emailAddressChooserTask_Completed(object sender, EmailResult e) 
{ 
    if (e.TaskResult == TaskResult.OK) 
    { 
        MessageBox.Show("Selected email :" + e.Email); 

        //in-real world application user expect to select it from his contacts and if not found enter manually. 
        //EmailComposeTask emailComposeTask = new EmailComposeTask(); 
        //emailComposeTask.To = e.Email; 
        //emailComposeTask.To = saveEmailAddressTask.Email; 
        //emailComposeTask.Body = "WP7 Emails Demo"; 
        //emailComposeTask.Cc = "testmail2@test.com"; 
        //emailComposeTask.Subject = "Windows Phone 7"; 
        //emailComposeTask.Show(); 
    } 
} 

```

Example 2:

```
private void composeMail_Click(object sender, RoutedEventArgs e) 
{ 
    EmailComposeTask emailComposeTask = new EmailComposeTask(); 
    emailComposeTask.To = "chris@example.com"; 
    emailComposeTask.To = saveEmailAddressTask.Email; 
    emailComposeTask.Body = "WP7 Emails Demo"; 
    emailComposeTask.Cc = "testmail2@test.com"; 
    emailComposeTask.Subject = "Windows Phone 7"; 
    emailComposeTask.Show(); 
} 

```

Souce: [http://www.windowsphonegeek.com/articles/1-how-to-perform-email-tasks-in-a-wp7-app](http://www.windowsphonegeek.com/articles/1-how-to-perform-email-tasks-in-a-wp7-app)

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/5942724) — 1 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
