---
title: "Sharing assemblies in .NET"
description: "My answer to \"Sharing assemblies in .NET\" on Stack Overflow"
date: 2009-05-28
author:
  name: Nate Bross
tags:
  - .net
  - assemblies
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/923459"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/923435):*

> Our applications use lot of custom built and third party libraries and right now each application has a private reference to these assemblies which means that the bin folder of each of these applications has the referenced assemblies copied. For e.g. Application A references log4net.dll, CustomLibA.dll, CustomLibB.dll and Application B also references log4net.dll, CustomLibA.dll, CustomLibB.dll and these assemblies are stored in the following structured.
> 
> D:\\Inetpub\\wwwroot\\ApplicationA\\bin D:\\Inetpub\\wwwroot\\ApplicationB\\bin
> 
> I have the following questions about this arrangement:
> 
> 1.  I think this will create performance issues as the number of applications and the references grows, because, every application will load all these assemblies which will result in virtual address fragmentation. Is my assumption right?
>     
> 2.  Can I organize the applications such that all these applications reference the assemblies from a common folder and doesn't have a private copy in the bin folder? For e.g. the assemblies log4net.dll, CustomLibA.dll, CustomLibB.dll are organized in the following folder
>     
> 
> D:\\Inetpub\\wwwroot\\Apps\\Common
> 
> and reference by the applications which are organized as follows:
> 
> D:\\Inetpub\\wwwroot\\Apps\\ApplicationA D:\\Inetpub\\wwwroot\\Apps\\ApplicationB
> 
> The bin folder within these applications will not have the common assemblies.
> 
> Will this work? I tried to do this by setting copy local to false, but I get 'Could not load file or assembly xxxx'.
> 
> I know that I can use GAC, but I want to avoid GAC for certain custom built libraries due to the nature of our deployment process.
> 
> Thanks, Hari Krishnan.

I think the GAC is your best bet for common class libraries. You can still have custom libraries deployed to the local \\bin directory.

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/923459) — 1 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
