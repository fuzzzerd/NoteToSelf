---
title: "Does C# 4.0 Apps With Embedded Manifest require Digital Certificate or Stong Name to be installed on Client Machines?"
description: "My answer to \"Does C# 4.0 Apps With Embedded Manifest require Digital Certificate or Stong Name to be installed on Client Machines?\" on Stack Overflow"
date: 2011-04-22
author:
  name: Nate Bross
tags:
  - c#
  - .net
  - windows
  - visual-studio-2010
  - wpf-4.0
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/5758311"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/5758034):*

> I have a WPF 4.0 Application which will require stopping and starting our Windows Service, Application is Called Data Service Monitor. Rest of the things this Data Service Monitor App does do not require Elevated UAC permissions.
> 
> So Now I am thinking of creating a Windows Application with No Forms or UI, just to Start or Stop a Windows Service. Thinking of Embedding Manifest for Vista/ Win 7 for UAC prompt. Calling it ServiceController.exe and WPF app will call this ServiceController.exe to Start or Stop Windows Service and that's the only time users will be prompted to Elevate
> 
> So here are the two questions:
> 
> Is this a good idea? (WPF 4.0 app calling exe to start/stop service instead of giving the entire wpf app full trust) ??
> 
> Also for Installing on Clients Machines, Will this require Digital Cert or Strongly Name Assembly? (This WPF app and ServiceController.exe will be installed on XP, Vista and Win 7 machines)

*I posted the following answer:*

Personally, I'd give the whole WPF App full trust, because to an end user, they wont know the difference between giving one of your executables UAC permission over the other. It should make things more simple for your deployment process too.

For the digital certificate, I believe that it will work with a self-signed one, but the user may receive a dialog stating that its not from a trusted certificate authority. Getting a signed cerficiate will make your application look that much more professional, and one can usually be had from GoDaddy or similar for a few hundred dollars.

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/5758311) — 0 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
