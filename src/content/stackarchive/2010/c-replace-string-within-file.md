---
title: "c# replace string within file"
description: "My answer to \"c# replace string within file\" on Stack Overflow"
date: 2010-12-02
author:
  name: Nate Bross
tags:
  - c#
  - file-io
  - streamwriter
  - fileinfo
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/4339873"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/4339817):*

> String.Replace doesn't seem to work properly when replacing a portion of an HTML file's content. For example, String.Replace replaces `</body></html>` with `blah blah blah </body></html> html>` - notice the second HTML closing tag is not properly closed and therefore shows up when the page is rendered in the browser by the user.
> 
> Anyone know why it's not working as intended?
> 
> ```
> StreamReader sr = fi.OpenText;
> String fileContents = sr.ReadToEnd();
> sr.close();
> fileContents = fileContents.Replace("<body>", "<body onload='jsFx();' />");
> fileContents = fileContents.Replace("</body>","blah blah blah </body>");
> 
> StreamWriter sw = new StreamWriter(fi.OpenWrite());
> sw.WriteLine(contents);
> sw.close();
> 
> ```

I might rewrite your bit of code like this:

```
var fileContents = System.IO.File.ReadAllText(@"C:\File.html");

fileContents = fileContents.Replace("<body>", "<body onload='jsFx();' />"); 
fileContents = fileContents.Replace("</body>","blah blah blah </body>"); 

System.IO.File.WriteAllText(@"C:\File.html", fileContents);

```

I should note that this solution is fine for files of reasonable size. Depending on hardware, any thing under a few tens of MB. It loads the entire contents into memory. If you have a really large file you may need to stream it through a few hundred KB at a time to prevent an OutOfMemoryException. That makes things a bit more complicated, since you'd need to also check the break between each chunk to see if split your search string.

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/4339873) — 55 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
