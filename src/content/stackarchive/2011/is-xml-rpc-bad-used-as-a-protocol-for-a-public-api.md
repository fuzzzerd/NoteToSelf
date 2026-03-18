---
title: "Is XML-RPC bad used as a protocol for a public API implementation?"
description: "My answer to \"Is XML-RPC bad used as a protocol for a public API implementation?\" on Stack Overflow"
date: 2011-01-01
author:
  name: Nate Bross
tags:
  - web-services
  - language-agnostic
  - xml-rpc
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/4575499"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/4575463):*

> I need to implement a web API for a project I'm working on in this period. I read there are many standard protocols to do it: XML-RPC, SOAP, REST. Apparently, the XML-RPC one is the easiest one to implement and use from what I saw, but I didn't find anything about using it to implement an API. Instead I found many tutorial about creating a REST API in PHP, for example. Is there any counter-indication for using XML-RPC to implement a public web API?
> 
> Also, more generally speaking, I could (sort of) define a custom protocol for my API, to keep things simpler (i.e. accepting only GET request containing the parameters I need): would this be so bad? Is using a standard protocol a must-do?

To answer your question, I think SOAP or RESTful API would be the best to implement as consumers of your API would likely have more experience with them.

Additionally, your last bit, where you talk about accepting get requests with specific parameters, that is a very large part of designing a RESTful API. If you think that would be easy to implement, I strongly encourage you to do some research on building a RESTful API in your language of choice, because I think you will find it very close to the alternate solution that you proposed.

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/4575499) — 0 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
