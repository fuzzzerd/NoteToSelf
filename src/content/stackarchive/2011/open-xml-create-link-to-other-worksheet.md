---
title: "Open XML Create Link to other Worksheet"
description: "A question I asked on Stack Overflow"
date: 2011-06-03
author:
  name: Nate Bross
tags:
  - c#
  - .net
  - xml
  - openxml
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/q/6228991"
---

*I [asked this on Stack Overflow](https://stackoverflow.com/q/6228991):*

I'm having a hard time finding out what the XML looks like for adding a link in one worksheet to another. I'd like something like this:

```
MainSheet
    Cell    Cell    Cell
    data    data    LinkToSheet2
    data    data    LinkToSheet3
    data    data    LinkToSheet4

Sheet2
    Cell    Cell    Cell
    ... data ...
Sheet3
    Cell    Cell    Cell
    ... data ...    
Sheet4
    Cell    Cell    Cell
    ... data ...

```

---

> [amurra answered](https://stackoverflow.com/a/6273157) (1 upvotes):
>
> I created a blank Excel file and added in a link in Sheet1 A1 to Sheet2 A1 and here is the XML I got:
> 
> ```
> <x:worksheet xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships" xmlns:x="http://schemas.openxmlformats.org/spreadsheetml/2006/main">
>   <x:dimension ref="A1" />
>   <x:sheetViews>
>     <x:sheetView tabSelected="1" workbookViewId="0" />
>   </x:sheetViews>
>   <x:sheetFormatPr defaultRowHeight="15" />
>   <x:cols>
>     <x:col min="1" max="1" width="19.5703125" customWidth="1" />
>   </x:cols>
>   <x:sheetData>
>     <x:row r="1" spans="1:1">
>       <x:c r="A1" s="1" t="s">
>         <x:v>0</x:v>
>       </x:c>
>     </x:row>
>   </x:sheetData>
>   <x:hyperlinks>
>     <x:hyperlink ref="A1" location="Sheet2!A1" display="LinkToWorkSheet2" />
>   </x:hyperlinks>
>   <x:pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3" />
>   <x:pageSetup orientation="portrait" r:id="rId1" />
> </x:worksheet>
> 
> ```
> 
> You pretty much want to pay attention to the `<x:hyperlinks>` element:
> 
> ```
> <x:hyperlinks>
>     <x:hyperlink ref="A1" location="Sheet2!A1" display="LinkToWorkSheet2" />
> </x:hyperlinks>
> 
> ```

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/q/6228991) — 1 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
