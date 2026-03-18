---
title: "Azure Worker Role returns XML instead of JSON"
description: "My answer to \"Azure Worker Role returns XML instead of JSON\" on Stack Overflow"
date: 2014-05-21
author:
  name: Nate Bross
tags:
  - c#
  - json
  - azure
  - azure-worker-roles
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/23794558"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/23793620):*

> I've been following a [blog post](http://www.bradygaster.com/post/json-based-wcf-in-azure) from Brady Gaster to create a Azure worker role to create a JSON endpoint.
> 
> All is going well, create a worker role and deployed to Azure with no problem except it returns XML instead of JSON.
> 
> It returns the following result:
> 
> ```
> <ArrayOfMessage xmlns="http://schemas.datacontract.org/2004/07/Backend.Contracts" xmlns:i="http://www.w3.org/2001/XMLSchema-instance"><Message><Id>5de2ed85-1eb1-4306-aace-645ea9202f26</Id></Message></ArrayOfMessage>
> 
> ```
> 
> While I expected just a GUID something like:
> 
> ```
> {
>   Id: '5de2ed85-1eb1-4306-aace-645ea9202f26'
> }
> 
> ```
> 
> Not sure whats wrong, followed the code examples from the blog post. Unfortunately his codesamples weren't available for download so I can't compare specific configuration...
> 
> Any ideas?

Are you sending the JSON accept header with your request?

Different clients will send different accept headers by default, and you may need to override them to get the type of response that you're looking to get.

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/23794558) — 1 upvotes *(accepted answer)*. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
