---
title: "ASP.NET to call my method every hour"
description: "My answer to \"ASP.NET to call my method every hour\" on Stack Overflow"
date: 2018-01-31
author:
  name: Nate Bross
tags:
  - asp.net
  - .net
  - asp.net-mvc
  - asp.net-core
  - .net-core
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/48546338"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/48545105):*

> I want to send email remainder. I created a method that will send emails to the users that have an appointment in the next hour. Right now i have to call my method manually. But i want to use HangFire( or if you have a better suggestion) to call my method every hour( 3:00 PM, 4:00 PM, and so on). I don't want to use Windows task scheduler because i won't have access to the server in the future.
> 
> ```
>   //[HttpPost("lll/reminder")]
>     public IActionResult EventReminder()
>     {
>         var date = DateTime.Now;
>         var events = eventRepository.GetEventsByDateTimeNow();
>         foreach(Event evnt in events)
>         {
>             var usr = userRepository.GetUserById(evnt.AttendeeId);
> 
>             var message = new MimeMessage();
>             message.From.Add(new MailboxAddress("", ""));
>             message.To.Add(new MailboxAddress("User", usr.Email));
>             message.Subject = "Remainder";
>             message.Body = new TextPart("html")
>             {
>                 Text = "message"
> 
>             };
>             using (var client = new SmtpClient())
>             {
>                 client.Connect("smtp.gmail.com", 587, false);
>                 client.Authenticate("", "");
> 
>                 client.Send(message);
> 
>                 client.Disconnect(true);
>             }               
>         }
>         return Ok();
>     }
> 
> ```
> 
> This is the method. It's working but i have to call it manually. So, any ideas?

As you've already mentioned, HangFire can help you with this. [They have several examples directly on their home page.](https://www.hangfire.io) The one you want is probably the 'recurring job':

> **Recurring jobs**
> 
> Recurring jobs fire **many times** on the specified **CRON schedule**.
> 
> ```
> RecurringJob.AddOrUpdate(
>     () => Console.WriteLine("Recurring!"),
>     Cron.Daily);
> 
> ```

You can setup and configure hangfire a variety of ways, but the most simple is to simply add it to your Startup.cs file.

I'd recommend you [follow the quick start guide,](http://docs.hangfire.io/en/latest/quick-start.html) since your use case appears fairly straight forward, running the 'server' in the web app is probably good enough for many small sites/apps and use cases.

[There are ways to help improve running the server in the web app itself.](http://docs.hangfire.io/en/latest/deployment-to-production/making-aspnet-app-always-running.html) That said, if you need something extremely robust, [setting up the 'server' as a Windows Service or other 'out of process' process](http://docs.hangfire.io/en/latest/background-processing/placing-processing-into-another-process.html) is probably time well spent and something hangfire easily supports as well.

<details>
<summary>Notable comments</summary>

**Nate** (0 upvotes): Good luck. I've been using it in production (with the out of process server) and it works really well. The dashboard is a nice touch too for monitoring whats going on.

</details>

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/48546338) — 2 upvotes *(accepted answer)*. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
