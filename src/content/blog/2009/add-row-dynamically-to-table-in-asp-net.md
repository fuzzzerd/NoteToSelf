---
title: "Add row dynamically to table in ASP.NET?"
description: "My answer to \"Add row dynamically to table in ASP.NET?\" on Stack Overflow"
date: 2009-12-23
author:
  name: Nate Bross
tags:
  - asp.net
  - vb.net
  - system.web.ui.webcontrols
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/1954615"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/1954590):*

> I'm trying to add rows dynamically to a System.Web.UI.WebControls.Table control in ASP.NET. I found some [sample code](http://forums.asp.net/t/1219583.aspx) that does what I'm seeking, but it only adds a single row.
> 
> It seems like the table row count does not carry from one page load to the next. The user should be able to add as many rows as desired, and I need to capture the data from each row.
> 
> What am I missing? Code below.
> 
> ```
> <%@ Page Language="VB" %>
> <script runat="server">
> 
>     Sub btnAddEmail_Click(ByVal Sender As Object, ByVal e As EventArgs)
> 
>         Dim tr As New TableRow
>         Dim tcLabel As New TableCell
>         Dim tcTextBox As New TableCell
>         Dim newLabel As New Label
>         Dim newTextBox As New TextBox
> 
>         Dim i As Integer = Table1.Rows.Count + 1
> 
>         newLabel.ID = "Email" + Convert.ToString(i)
>         newLabel.Text = "Email" + Convert.ToString(i)
> 
>         newTextBox.ID = "txtEmail" + Convert.ToString(i)
> 
>         tcLabel.Controls.Add(newLabel)
>         tcTextBox.Controls.Add(newTextBox)
> 
>         tr.Cells.Add(tcLabel)
>         tr.Cells.Add(tcTextBox)
> 
>         Table1.Rows.Add(tr)
> 
>     End Sub
> 
> </script>
> 
> <form id="form1" runat="server">
> <div>
>     <asp:Button runat="server" Text="Add Email" ID="btnAddEmail"
>         onclick="btnAddEmail_Click" />
>     <asp:Table ID="Table1" runat="server">
>         <asp:TableRow>
>             <asp:TableCell>
>                 <asp:Label ID="Email1" runat="server" Text="Email1"></asp:Label></asp:TableCell>
>             <asp:TableCell>
>                 <asp:TextBox ID="txtEmail1" runat="server"></asp:TextBox></asp:TableCell>
>         </asp:TableRow>
>     </asp:Table>
> </div>
> </form>
> 
> ```

ASP.NET is stateless -- you need to persist any data you want between pages loads into a Session variable.

You'll need to store the DataTable/DataSet in a session variable, and assign the Datasource property of Table1 to that DataSet in your "PageLoad" event. Then, in your "Click" event, add the row to the DataSet in your Session variable.

**update**

You maybe able to set `ViewState="true"` on the control you wish to have persist data through postbacks.

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/1954615) — 4 upvotes *(accepted answer)*. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
