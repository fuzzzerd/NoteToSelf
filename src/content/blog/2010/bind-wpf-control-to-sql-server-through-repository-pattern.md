---
title: "Bind WPF control to SQL server through repository pattern"
description: "My answer to \"Bind WPF control to SQL server through repository pattern\" on Stack Overflow"
date: 2010-01-19
author:
  name: Nate Bross
tags:
  - c#
  - sql-server
  - wpf
  - entity-framework
  - repository-pattern
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/2097743"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/2097733):*

> How can I bind a wpf control to a SQL Server property. Like say a Listbox
> 
> ```
>  <ListView>
>         <ListView.View>
>             <GridView>
>                 <GridViewColumn Header="Name">
>                 <GridViewColumn Header="Date Assigned">
>                 <GridViewColumn Header="Date Due">
>             </GridView>
>         </ListView.View>
>         <!-- iterate through all the Names in the database and output under GridViewColumn Name -->
>         <!-- iterate through all the DateAssigned in the database and output under GridViewColumn Date Assigned -->
>         <!-- iterate through all the DateDue in the database and output under GridViewColumn Date Due -->
>     </ListView>
> 
> ```
> 
> I am using the entity framework and the repository pattern. So I'd call all the names to a list by \_repository.ToList();

*I posted the following answer, which was chosen as the accepted answer and received 2 upvotes:*

Try this: `listViewName.ItemsSource = _repository.ToList();`

I'd also simplify the Xaml, like this:

```
<ListBox x:Name="listViewName">
    <ListBox.Resources>
        <DataTemplate>
            <Grid Height="22" Width="Auto">
                <TextBlock Text="{Binding Name}" />
                <TextBlock  Text="{Binding DateAssigned}" />
                <TextBlock Text="{Binding DateDue}" />
            </Grid>
        </DataTemplate>
    </ListBox.Resources>
</ListBox>

```

Where the text after `{Binding` is the name of the property of the item in the collection you return from \_repository.

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/2097743) — 2 upvotes *(accepted answer)*. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
