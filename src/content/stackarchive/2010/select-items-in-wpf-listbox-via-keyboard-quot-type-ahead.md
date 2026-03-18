---
title: "Select items in WPF Listbox via Keyboard &quot;Type-Ahead&quot; search"
description: "A question I asked on Stack Overflow"
date: 2010-11-17
author:
  name: Nate Bross
tags:
  - wpf
  - listbox
  - selection
  - typeahead
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/q/4209774"
---

*I [asked this on Stack Overflow](https://stackoverflow.com/q/4209774):*

I have a WPF Listbox control and I would like to allow the user to change the selected item by using type-ahead. The behavior I'm looking for is exactly like windows explorer. As you continue to type the text of a folder name, the list will keep selecting the more correct item.

For example assume this folder structure:

```
OtherFolderName
MyFirstFolder
MyFirstFileFolder
MyFirstList

```

If you select `OtherFolderName` with the mouse, then start typing `MyFirstF` the item `MyFirstFolder` will be selected, but if you continue typing `MyFirstFi` the item `MyFirstFileFolder` will be selected.

My WPF Listbox does not exhibit this behavor, I am hoping I can easily enable it, as the old WinForms listbox did just this.

---

> [Ray Burns answered](https://stackoverflow.com/a/4210312) (9 upvotes):
>
> Take a look at the TextSearch class, specifically the TextSearch.TextPath attached property:
> 
> ```
> <ListBox TextSearch.TextPath="FolderName" ... />
> 
> ```
> 
> The TextSearch.TextPath property enables text searching and specifies how to extract the search text from each item. In this case I assumed each of your Folder objects has a property named "FolderName".
> 
> If this doesn't do everything you're looking for, you'll probably have to implement your own search, since the TextSearch feature isn't particularly tweakable. To do this:
> 
> 1.  Handle the TextInput event
> 2.  Compare the time of the current TextInput with the prior TextInput. If close enough together, append to prefix string otherwise set it to the single character typed.
> 3.  Search all Items for the given prefix & if found set SelectedItem.
> 
> I would build this as a separate class using an attached property, similar to the built-in TextSearch class.

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/q/4209774) — 4 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
