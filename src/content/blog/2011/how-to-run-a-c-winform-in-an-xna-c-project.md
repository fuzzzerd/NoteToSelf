---
title: "How to run a C# winform in an XNA C# project"
description: "My answer to \"How to run a C# winform in an XNA C# project\" on Stack Overflow"
date: 2011-08-23
author:
  name: Nate Bross
tags:
  - c#
  - xna
  - pdfsharp
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/7166484"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/7166440):*

> I am trying to use the PDFsharp library in an XNA game. The example code I am trying to get to work is:
> 
> ```
>  static void Main() 
>     {
>       Renderer renderer = new Renderer();
>       PreviewForm form = new PreviewForm();
>       form.RenderEvent = new PagePreview.RenderEvent(renderer.Render);
>       Application.Run(form);
>     }
> 
> ```
> 
> But I don't know how to get this to run in XNA.
> 
> Is it possible to pass the graphics that are passed to the winform to the XNA graphics engine instead?

## update 2

It appears that the original links to MSDN have been broken, I can't seem to find them on MSDN anymore, if someone does, please update the post. In the mean time you may want to check out this codeproject article -- [http://www.codeproject.com/Articles/21330/Easy-Rendering-with-XNA-Inside-a-Windows-Form](http://www.codeproject.com/Articles/21330/Easy-Rendering-with-XNA-Inside-a-Windows-Form)

**update** after a quick check, looks like the first link at (See also: [XNA and WinForms](https://stackoverflow.com/questions/5317562/xna-and-winforms)) is the same one I found.

I recommend you look into mixing winforms and XNA, try this: [http://create.msdn.com/en-US/education/catalog/sample/winforms\_series\_1](http://create.msdn.com/en-US/education/catalog/sample/winforms_series_1)

<details>
<summary>Notable comments</summary>

**Nate** (0 upvotes): @user1306322 I have updated my post with another link and a request for anyone who finds the new location of the broken link to update the post.

</details>

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/7166484) — 0 upvotes *(accepted answer)*. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
