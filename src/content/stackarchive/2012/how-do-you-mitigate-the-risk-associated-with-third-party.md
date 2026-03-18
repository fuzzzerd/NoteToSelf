---
title: "How do you mitigate the risk associated with third-party Javascript given the prevalence of &quot;social sharing&quot; badges (&quot;Like&quot; buttons, etc)?"
description: "My answer to \"How do you mitigate the risk associated with third-party Javascript given the prevalence of &quot;social sharing&quot; badges (&quot;Like&quot; buttons, etc)?\" on Stack Overflow"
date: 2012-01-30
author:
  name: Nate Bross
tags:
  - javascript
  - facebook
  - security
  - facebook-like
  - google-plus
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/9070738"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/9070320):*

> I've got a marketing team that wants social sharing buttons (Facebook, G+, SU, and so forth) on our site. The security team brought up a point that I'm embarrassed to admit I hadn't really considered before: since 3rd-party JS is an attack vector, we shouldn't load it directly off the third party servers.
> 
> **The risk**
> 
> I'll use Facebook as the example. Someone at FB could add some sneaky backdoor code to watch users or at very least grab their email & name from our site. DNS cache poisoning could be used to serve malicious Javascript instead of the expected FB library. Etc - there are probably many more attack vectors here.
> 
> **Possible solutions**
> 
> \-Host the JS locally (after vetting it for security holes), and run curl+diff on cron to watch for updates -- vetting _those_ updates before hosting. This isn't really viable because FB and g+ both load additional libraries offsite after their primary lib is loaded, and I haven't found a way around that.
> 
> \-Don't use social sharing buttons?
> 
> Is there an accepted best practice here? My first reaction is that, come on, this is Google and Facebook. If something malicious happens to their social sharing buttons, the entire Internet is going to know about it in 0.001 seconds. What say you?

Lets be realistic here. While I know anything _can_ happen, it is much more likely that your site will get hacked than Google/Facebook/Twitter injecting malicious code into your site through a disgruntled employee or something similar. It _could_ happen, but chances are pretty slim.

If the client visiting your site's DNS is compromised, then injecting their own facebook.com A-Record so they can inject javascript into your site is the least of your worries. If I were running a malicious DNS server and had people using it; and I had malicious intent, I'd either be targeting your site specifically and I'd just make a site that looks like yours and takes all user data into my database; or I'd be after banks and financial institutions. Injecting facebook javascripts would not be my primary objective.

Again, it could happen, but in my mind, there are way too many other, lower hanging fruit to make it worth really worrying about. If you have some government regulation that makes you responsible for this type of thing, it might be wise to play it on the safer side and just not use them, or implement your own "like" buttons using the facebook APIs. I'm sure G+ and Twitter have similar non-javascript based ways to do this.

<details>
<summary>Notable comments</summary>

**Nate** (0 upvotes): @SLaks I'm talking about a phishing attack, using a fake DNS server so unless the user knows to check for `https` they may still give the fake site their info since the uri seems the same to them... The point being that if your DNS is compromised, script injection would be the least of my concerns.

</details>

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/9070738) — 1 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
