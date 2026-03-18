---
title: "Single huge .css file vs. multiple smaller specific .css files?"
description: "A question I asked on Stack Overflow"
date: 2010-02-25
author:
  name: Nate Bross
tags:
  - css
  - html
  - stylesheet
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/q/2336302"
---

*I [asked this on Stack Overflow](https://stackoverflow.com/q/2336302):*

Is there any advantage to having a single monster .css file that contains style elements that will be used on almost every page?

I'm thinking that for ease of management, I'd like to pull out different types of CSS into a few files, and include every file in my main `<link />` is that bad?

I'm thinking this is better

1.  positions.css
2.  buttons.css
3.  tables.css
4.  copy.css

vs.

1.  site.css

Have you seen any gotchas with doing it one way vs. the other?

---

> [Marc Edwards answered](https://stackoverflow.com/a/12511119) (100 upvotes):
>
> A CSS compiler like Sass or LESS is a great way to go. That way you'll be able to deliver a single, minimised CSS file for the site (which will be far smaller and faster than a normal single CSS source file), while maintaining the nicest development environment, with everything neatly split into components.
> 
> Sass and LESS have the added advantage of variables, nesting and other ways to make CSS easier to write and maintain. Highly, highly recommended. I personally use Sass (SCSS syntax) now, but used LESS previously. Both are great, with similar benefits. Once you've written CSS with a compiler, it's unlikely you'd want to do without one.
> 
> [http://lesscss.org](http://lesscss.org)
> 
> [http://sass-lang.com](http://sass-lang.com)
> 
> If you don't want to mess around with Ruby, this LESS compiler for Mac is great:
> 
> [http://incident57.com/less/](http://incident57.com/less/)
> 
> Or you could use CodeKit (by the same guys):
> 
> [http://incident57.com/codekit/](http://incident57.com/codekit/)
> 
> WinLess is a Windows GUI for comipiling LESS
> 
> [http://winless.org/](http://winless.org/)

<details>
<summary>Notable comments</summary>

**Chase Florell** (4 upvotes): @FrankPresenciaFandos doing this is ok'ish for a low traffic site, but running this script over and over on high traffic sites seems a little off. If you use a build script, you can have the best of both worlds and still maintain a performant web server since it's not running the php script (ever).

</details>

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/q/2336302) — 295 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
