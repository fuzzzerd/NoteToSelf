---
title: "WCF is adding an envelope header with a &quot;MustUnderstand&quot; Attribute that a third party service I do not control can&#39;t handle"
description: "A question I asked on Stack Overflow"
date: 2015-09-23
author:
  name: Nate Bross
tags:
  - c#
  - .net
  - wcf
  - soap
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/q/32748721"
---

*I [asked this on Stack Overflow](https://stackoverflow.com/q/32748721):*

I've boiled my problem down to the `<Action s:mustUnderstand="1"` bit below.

```
<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/">
    <s:Header>
        <Action s:mustUnderstand="1" xmlns="http://schemas.microsoft.com/ws/2005/05/addressing/none"></Action>
        <ActivityId CorrelationId="ec9c7c4e-2e7e-4310-8ad1-99e453b29560" xmlns="http://schemas.microsoft.com/2004/09/ServiceModel/Diagnostics">45abb8ea-8d9f-4fc2-aeb7-580884cae02e</ActivityId>
    </s:Header>
    <s:Body>
        [redacted]
    </s:Body>
</s:Envelope>

```

When `mustUnderstand=1` is there the service barfs, and returns a web server 500 error page, not xml; with it `mustUnderstand=0` or the entire `<Action` removed it works like a dream.

I've tried both standard `basicHttpBinding` as well as the following `customBinding` trying to simplify the messages from [here](http://blog.allanglen.com/2010/05/implementing-a-minimal-soap-1-2-binding-in-wcf):

```
<binding name="httpSoap12">
   <textMessageEncoding messageVersion="Soap12" />
   <httpTransport />
</binding>

```

I've seen lots of people struggling with this particular issue; but nobody seems to have a solution that I can find.

Removal of the Action bit wholesale, or setting mustUnderstand="0" both allow the service to process my incoming message. I'd welcome a solution to do either of those, or an alternative I have yet to come up with. I should specify I've done that removal/modification manually. I cannot find a way to do it from my code.

<details>
<summary>Notable comments</summary>

**Nate** (0 upvotes): Thanks @KirkBroadhurst, that link appears dead, I can't find any reference to it, except this post on SO and a few "clone" posts on other sites. The problem isn't the namespaces, its that the Action header is specified with `mustUnderstand`. Using WFC bindings it doesn't work; however, I found it doesn't do that if I do the old-school asmx binding via add web reference. I'd love a way to make WCF set mustUnderstand="0" from my code though, because that seems to correct the issue with the service I'm trying to consume.

</details>

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/q/32748721) — 3 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
