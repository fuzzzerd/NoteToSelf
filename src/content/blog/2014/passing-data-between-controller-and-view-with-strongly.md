---
title: "Passing data between controller and view with strongly typed model"
description: "My answer to \"Passing data between controller and view with strongly typed model\" on Stack Overflow"
date: 2014-06-03
author:
  name: Nate Bross
tags:
  - c#
  - asp.net-mvc-4
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/24017328"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/24017215):*

> I have a little bit of a problem with communicate between the controller and a view.
> 
> **UploadFile** (Class):
> 
> ```
>     public class UploadFile
>     {
>         public string OrignialFilePath { get; set; }
>         public string FilteredFilePath { get; set; }
>         public string Name { get; set; } 
> 
>         public UploadFile(string x, string y, string z)
>         {
>             OrignialFilePath = x;
>             FilteredFilePath = y;
>             Name = z;
>         } 
>     }
> 
> ```
> 
> **Files** (Class):
> 
> ```
>  public class Files
> {
> 
>     public List<UploadFile> list { get; set; }
> 
>     public Files()
>     {
>         list = new List<UploadFile>();
>     }
> }
> 
> ```
> 
> **Controller:** (I get files with HTTP POST to this controller)
> 
> ```
>   Files fileList = new Files();
>         foreach (var file in Files)
>         {
>             UploadFile fu = new UploadFile(file.x, file.y, file.z); 
>             fileList.list.Add(fu);
>         }
> 
>         return RedirectToAction("Result");
> 
> ```
> 
> **Result:** (Strongly-typed view)
> 
> ```
> @model IEnumerable<SelectorITSelectorIT.Models.Files>
> 
> @{
>     ViewBag.Title = "Result";
> }
> 
> <h2>SelectorIT - Result</h2>
> 
> <p>
>     @Html.ActionLink("Create New", "Create")
> </p>
> <table>
>     <tr>
>         <th></th>
>     </tr>
> 
> @foreach ( var item in Model) {
>     <tr>
>         <td>
>             @item.list  ?????
>         </td>
>     </tr>
> }
> 
> </table>
> 
> ```
> 
> In the `foreach var item in model`
> 
> When i write `@item.list` i cant go to the files within some index of the list ( i have there UploadFile instance).
> 
> I need in the `foreach` statement : `foreach var item in model.list` but it doesn't let me, how can i do it?
> 
> My Main goal is to Simply display in a table details about each UploadFile in the list of the model("Files").
> 
> How can i do it ?

Yes, I you need to use the `.list` property that you defined in `Files` and you need to change your view model to simply

```
@model SelectorITSelectorIT.Models.Files

...

@foreach (var item in Model.list) {
    <tr>
        <td>@item.Name</td>
    </tr>
}

```

On the other hand, if you really want an IEnumerable of Files, you need to rewrite your loop similar to this:

```
@foreach (var item in Model) {
    foreach(var file in item.list)
    {
        <tr>
            <td>@file.Name</td>
        </tr>
    }
}

```

But based on your question, I'm thinking you really just want a model of `Files` since it already has the list of `UploadFiles` in it.

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/24017328) — 1 upvotes *(accepted answer)*. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
