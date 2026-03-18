---
title: "Not all e-mails being sent using SmtpClient in an ASP.NET MVC getting delivered. Why? How to resolve?"
description: "My answer to \"Not all e-mails being sent using SmtpClient in an ASP.NET MVC getting delivered. Why? How to resolve?\" on Stack Overflow"
date: 2010-02-16
author:
  name: Nate Bross
tags:
  - asp.net
  - asp.net-mvc
  - smtpclient
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/2275588"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/2275547):*

> Here is the set-up:
> 
> 1.  I have a Notifications controller that is called from task scheduler 1x/day
> 2.  The action method pulls upwards of 300 addresses, loops thru them and uses the SmtpClient class to send an individual e-mail to each recepient.
> 
> From what I can tell the process runs fine with no exceptions ... _except_ that not all e-mails are being delivered. Anyone have any ideas on what is going on and how to resolve?
> 
> Here is the code:
> 
> ```
> foreach (var emp in division.Users)
> {
>     var fromAddress = "myfromaddress";
>     var mailServer = "mymailserver";
> 
>     var toEmail = emp.EmailAddress;
> 
>     var message = new MailMessage(fromAddress, toEmail)
>                     {
>                         Subject = subject,
>                         Body = "<body style='font:normal 13px tahoma,arial,helvetica;'>" + body + "</body>",
>                         IsBodyHtml = true
>                     };
> 
>     var client = new SmtpClient(mailServer);
>     client.Send(message);
> }
> 
> ```
> 
> **UPDATE:**
> 
> Adding a pause in between sending e-mails resolves the problem. But why does this work? And is there a better way (e.g. using Async()) that would equally resolve the issue in a better way???
> 
> Updated code ...
> 
> ```
> foreach (var emp in division.Users)
> {
>     var fromAddress = "myfromaddress";
>     var mailServer = "mymailserver";
> 
>     var toEmail = emp.EmailAddress;
> 
>     var message = new MailMessage(fromAddress, toEmail)
>                     {
>                         Subject = subject,
>                         Body = "<body style='font:normal 13px tahoma,arial,helvetica;'>" + body + "</body>",
>                         IsBodyHtml = true
>                     };
> 
>     var client = new SmtpClient(mailServer);
>     client.Send(message);
> 
>     Thread.Sleep(3000); // Wait 3s until sending next message
> }
> 
> ```

If you are not having any exceptions I'd check SPAM folders and email addresses. I'd also try sending an email manually from your outlook to one of the addresses that didn't recieve a message.

On a side note, unless you are using different mail servers, I think you can change this code to

```
var client = new SmtpClient(mailServer); 
var mailServer = "mymailserver";

foreach (var emp in division.Users) 
{ 
    var fromAddress = "myfromaddress"; 


    var toEmail = emp.EmailAddress; 

    var message = new MailMessage(fromAddress, toEmail) 
                    { 
                        Subject = subject, 
                        Body = "<body style='font:normal 13px tahoma,arial,helvetica;'>" + body + "</body>", 
                        IsBodyHtml = true 
                    }; 


    client.Send(message); 
} 

```

You might also try SendAsync method of the SmtpClient class, like this:

```
// setup the callback method when the send finishes
client.SendCompleted += SendComplete; //new SendCompletedEventHandler(smtpSender_SendCompleted);

// send the email
client.SendAsync(message, null);



private void SendComplete(object sender, System.ComponentModel.AsyncCompletedEventArgs e)
{
    // do stuff on complete
}

```

<details>
<summary>Notable comments</summary>

**Nate** (0 upvotes): No, it is a windows service... but that should not make a difference since the code is mostly the same. Try using the Async method and then investigate the AsyncCompletedEventArgs object to see if any errors are happening.

**Nate** (0 upvotes): I have a similar application using the SendAsync method and it sends 100s of emails without issues...

</details>

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/2275588) — 0 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
