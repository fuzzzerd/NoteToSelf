---
title: "Silverlight ListBox Checkbox Selected Item"
description: "A question I asked on Stack Overflow"
date: 2009-09-23
author:
  name: Nate Bross
tags:
  - .net
  - silverlight
  - xaml
  - user-interface
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/q/1468100"
---

*I [asked this on Stack Overflow](https://stackoverflow.com/q/1468100):*

I have a Listbox, that has a Checkbox as part of the item template.

In the click even of the Checkbox, I want to make sure that same list item is selected.

```
ListBoxItem lbi = ((ListBoxItem)listLayers.
                       ContainerFromElement((CheckBox)sender));
lbi.IsSelected = true;

```

The main issue that I'm having is that "ContainerFromElement" is not available in silverlight.

Any help is greatly appreciated.

**Edit**

This is the code I'm running in the click event of a checkbox inside my list:

```
MyObject obj = listLayers.SelectedItem as MyObject;
obj.Visible = true;
obj.Value = "50";

```

Using the RelativeSource binding on the checkboxes along with this code, I end up with obj equal to null.

I have a list of layers that I want to turn on and off via checkboxes, I'm open to another way...

---

> [Sorskoot answered](https://stackoverflow.com/a/1468125) (5 upvotes):
>
> In the selectionChanged event you have to "walk" the visual tree to find the checkbox. You can do this by using the [VisualTreeHelper](http://msdn.microsoft.com/en-us/library/system.windows.media.visualtreehelper\(VS.95\).aspx)
> 
> [This example](http://www.enterpriseetc.com/post/VisualTreeHelper-Class-in-Silverlight.aspx) show what you need to do to get to the checkbox.
> 
> **Below are some other solutions to this problem**
> 
> You should use a RelativeSource binding between the ListboxItem and the CheckBox. The datatemple contains a checkbox. Change it to look like this.
> 
> ```
> <CheckBox 
>   IsChecked="{Binding RelativeSource={RelativeSource TemplatedParent}, 
>     Path=IsSelected, Mode=TwoWay}" />
> 
> ```
> 
> This creates a binding between the _IsSelected_ property of the ListBox and the _IsChecked_ property of the CheckBox. [This](http://blogs.veracitysolutions.com/blog/how-to-create-a-listbox-with-checkboxes-or-radiobuttons-in-silverlight-3/) tutorial explains how with an example.
> 
> If you need more control, you should have a look at [behaviors and triggers](http://www.silverlightshow.net/items/Behaviors-and-Triggers-in-Silverlight-3.aspx). They're a bit more complex but give you you more control.

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/q/1468100) — 2 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
