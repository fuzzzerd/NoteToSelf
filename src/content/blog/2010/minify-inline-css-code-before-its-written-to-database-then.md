---
title: "Minify inline css code before its written to database, then unminify it when editing"
description: "My answer to \"Minify inline css code before its written to database, then unminify it when editing\" on Stack Overflow"
date: 2010-07-02
author:
  name: Nate Bross
tags:
  - wordpress
  - minify
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/3167003"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/3166646):*

> My theme has a custom css code block where I allow the site owner to add any custom css they need directly to the head section of the theme. This inserts whatever they've placed in this block into the wordpress database as a custom option insert.
> 
> I then retrieve this content into header.php and output it between an inline style tag like so...
> 
> ```
> <style type="text/css">
> .test h1 {}
> .testcss2, .somecss {}
> </style>
> 
> ```
> 
> This works perfectly fine, however, I would like to clean up and minify the markup when its written to the database. I suppose a regex is needed to do this? If so, what would that be?
> 
> The result I'm looking for, when the code is written into the page's markup is...
> 
> ```
> <style type="text/css">.test h1{}.testcss2,.somecss{}</style>
> 
> ```
> 
> I'd also like to reverse the minified markup when its presented back to the user to edit in my theme options. In that view, I just want to reformat the minified css code so that each directive is back on its own line.

*I posted the following answer, which was chosen as the accepted answer and received 2 upvotes:*

It depends what you want achieve by doing this. I agree with @thomasfedb that you will likely messup the style of most peoples CSS by doing this transformation and will likely cause more trouble than its worth.

It's my suggestion that you keep the data exactly as the user entered it, and then 'minify' it when you render it to the page.

This will not save you and storage in your database, and it will increase your CPU usage per page render, but it will save you the bandwidth of all the extra new-line characters.

Another option, presuming database storage is not much of a concern, is to store the data twice, once where the user edits, and once minified. Then simply minify and copy the user-editable field into the minified field whenever the user makes any changes.

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/3167003) — 2 upvotes *(accepted answer)*. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
