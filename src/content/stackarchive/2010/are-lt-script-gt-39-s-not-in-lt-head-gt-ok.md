---
title: "Are &lt;script&gt;&#39;s not in &lt;head&gt; ok?"
description: "My answer to \"Are &lt;script&gt;&#39;s not in &lt;head&gt; ok?\" on Stack Overflow"
date: 2010-11-30
author:
  name: Nate Bross
tags:
  - javascript
  - html
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/4315996"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/4315982):*

> I have had this question niggling at the curious bit of my mind for a while now and I thought I'd ask your collective expertise for an answer to this question.
> 
> To elaborate on the title, say I have this:
> 
> alert("Some JS outside ");
> 
> Outside the `<head></head>` tags of my HTML file. My question is whether it's ok to do this or not, and how much it is used like this.
> 
> My instincts tell me it's ok - I reckon browsers look through all HTML for `<script>` tags and interpret it when they see it, so it _should_ be ok, but I'm not all that great with how browsers work.
> 
> I'm looking for a definitive (or as close as possible to definitive) answer here - is it fine to do, or not?
> 
> **EDIT:** To save me posting this a bunch of times, I'll say it once here. Thanks very much for all your input people. Up votes to you all! I will have to re-train myself to put JS at the bottom of pages - now that I think about it it's blindingly obvious that scripts at the _bottom_ of the page is way better than the top. Thanks for your help everyone.

*I posted the following answer, which received 13 upvotes:*

Yes. Its OK. Infact, very often it is necessary. In many cases, you may have some long-loading (read: large download) javascript that is not critical to the page, so you want the rest of your page content to load first, so you put the `<script>` for that javascript at the bottom of the `<body>` section.

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/4315996) — 13 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
