---
title: "Getting results from a stored procedure to populate a GridView"
description: "My answer to \"Getting results from a stored procedure to populate a GridView\" on Stack Overflow"
date: 2011-03-04
author:
  name: Nate Bross
tags:
  - asp.net
  - data-binding
  - gridview
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/5199596"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/5199534):*

> I have a windows aspx form that I have a `TextBox`, `Button` and a `GridView`. The `TextBox` is stored as a variable @subschedule and passed to a stored procedure. What I'd like to do is to populate the results of that procedure into my `GridView`. Can anyone suggest a way to do this?
> 
> Thank you

You'll need to use the `DataSource` property:

```
DataTable dt = new DataTable();

// Open the connection 
using (SqlConnection cnn = new SqlConnection( 
       "Data Source=.\sqlexpress;Initial Catalog=AcmeRentals;Integrated Security=True")) 
{ 
    cnn.Open();

    // Define the command 
    using (SqlCommand cmd = new SqlCommand()) 
    { 
        cmd.Connection = cnn; 
        cmd.CommandType = CommandType.StoredProcedure; 
        cmd.CommandText = storedProcedureName;

        // Define the data adapter and fill the dataset 
        using (SqlDataAdapter da = new SqlDataAdapter(cmd)) 
        { 
            da.Fill(dt); 
        } 
    } 
} 

// This is the key code; you can set the DataSource to "collection"
gridView.DataSource = dt.DefaultView;
gridView.DataBind();

```

Source: [http://msmvps.com/blogs/deborahk/archive/2009/07/07/dal-retrieve-a-datatable-using-a-stored-procedure.aspx](http://msmvps.com/blogs/deborahk/archive/2009/07/07/dal-retrieve-a-datatable-using-a-stored-procedure.aspx)

<details>
<summary>Notable comments</summary>

**Nate** (0 upvotes): Check my edit, basically `gridView.DataSource = dt.DefaultView;`

**Nate** (0 upvotes): You may need to use the `.DefaultView` property of the data table.

</details>

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/5199596) — 0 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
