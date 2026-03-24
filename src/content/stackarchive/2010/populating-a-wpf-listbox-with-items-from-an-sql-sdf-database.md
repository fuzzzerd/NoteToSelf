---
title: "Populating a WPF listbox with items from an SQL (SDF) database"
description: "My answer to \"Populating a WPF listbox with items from an SQL (SDF) database\" on Stack Overflow"
date: 2010-08-24
author:
  name: Nate Bross
tags:
  - c#
  - sql
  - wpf
  - listbox
  - populate
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/3559028"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/3558945):*

> I have been searching on how to do this for a very long time, and I have not managed to get a straight answer on the subject, so hopefully one of you StackOverflow users will be able to help me here. I have a WPF ListBox named CategoryList and a SDF database called ProgramsList.sdf (with two tables called CategoryList and ProgramsList). What I wish my program to do is get the category names from the CategoryList table and list them in the ListBox control called CategoryList.
> 
> Here's the code that I tried, but it only caused my program to crash.
> 
> ```
>     SqlConnection myConnection = new SqlConnection("Data Source=" + AppDomain.CurrentDomain.BaseDirectory + "ProgramsList.sdf");
>     SqlDataReader myReader = null;
> 
>     myConnection.Open();
>     CategoryList.Items.Clear();
>     SqlDataReader dr = new SqlCommand("SELECT Name FROM CategoryList ORDER BY Name DESC", myConnection).ExecuteReader();
> 
>     while (myReader.Read())
>     {
>         CategoryList.Items.Add(dr.GetInt32(0));
>     }
>     myConnection.Close();
> 
> ```
> 
> Can anyone help me? Thanks in advance!

*I posted the following answer, which received 2 upvotes:*

I'd try something like this:

```
var myConnection = new SqlConnection("Data Source=" + AppDomain.CurrentDomain.BaseDirectory + "ProgramsList.sdf");
var cmd = new SqlCommand("SELECT Name FROM CategoryList ORDER BY Name DESC", myConnection);

myConnection.Open();
CategoryList.Items.Clear();

var sda = new SqlDataAdapter(cmd);
var ds = new DataSet();
sda.Fill(ds);

CategoryList.ItemsSource = ds.Tables["CategoryList"];

myConnection.Close(); 

```

Note, that you will need to setup the correct bindings in your CategoryList object, likely via some XAML like this:

```
<ListBox>
    <ListBox.Resources>
        <DataTemplate x:Key="DataTemplateItem">
            <Grid Height="Auto" Width="Auto">
                <TextBlock x:Name="Name" Text="{Binding Name}" />
            </Grid>
        </DataTemplate>
    </ListBox.Resources>
</ListBox>

```

<details>
<summary>Notable comments</summary>

**Nate** (0 upvotes): Do you have the XAML bindings setup correctly? Have you tried @strattonn's solution?

**Nate** (0 upvotes): Can you do something simple, like just do a messagebox of `SELECT Count(Name)` just to ensure you are able to connect and read data from the db?

**Nate** (0 upvotes): Sounds like your issue is with the connection string then? Are you sure the calculated path is correct?

</details>

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/3559028) — 2 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
