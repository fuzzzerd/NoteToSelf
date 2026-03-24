---
title: "xml and repeaters"
description: "My answer to \"xml and repeaters\" on Stack Overflow"
date: 2011-03-04
author:
  name: Nate Bross
tags:
  - c#
  - asp.net
  - xml
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/5198789"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/5198540):*

> Do I have to use XPath to link my XML document to a repeater or is there another way.
> 
> here is my some of my code.
> 
> first page loop through data and store as XML:
> 
> ```
> public virtual void Button_Click(object sender, EventArgs args)
>           {
> 
>              TableControl recControls = (TableControl)this.Page.FindControlRecursively("TableControl");
>               if (recControls != null)
>               {
>                   TableControlRow[] rows = recControls.GetSelectedRecordControls();
>                   this.Page.Session["RegistrationTableControl"] = rows;
> 
>                   // create XML writer to 
>                   using(System.Xml.XmlWriter writer = System.Xml.XmlWriter.Create(@"c:\temp\reg.xml"))
>                   {
>                       XmlWriterSettings settings = new XmlWriterSettings();
>                       settings.OmitXmlDeclaration = true;
>                       settings.ConformanceLevel = ConformanceLevel.Fragment;
>                       settings.CloseOutput = false;
> 
> 
> 
>                       writer.WriteStartDocument();
>                       writer.WriteStartElement("SubContractors");
>                       foreach(TableControlRow rec in rows)
>                       {
> 
>                           writer.WriteElementString("SubContrator1", rec.BUSINESSNAME.Text);
>                           writer.WriteElementString("SubContactName1", rec.OWNERNAME.Text);
>                           writer.WriteElementString("SubAddress1", rec.ADDRESS.Text);
>                           writer.WriteElementString("SubCity1", rec.CITY.Text);
>                           writer.WriteElementString("SubState1", rec.STATE.Text);
>                           writer.WriteElementString("SubZipCode1", rec.ZIPCODE.Text);
>                           writer.WriteElementString("SubPhone1", rec.PHONE.Text);
>                           writer.WriteElementString("SubFax1", rec.FAX.Text);
>                           writer.WriteElementString("SubEmail1", rec.EMAIL.Text);
>                           writer.WriteElementString("Status1", "Please enter information");
>                           writer.WriteElementString("Referral", "1");
> 
>                       }
>                       writer.WriteEndElement();
>                       writer.WriteEndDocument();
>                  }
> 
> 
>               }}
> 
> ```
> 
> Which creates my xml document.
> 
> Page 2 Code: I need to take the data in the newly create XML document and populate my table control repeater work with this code.
> 
> on page 2
> 
> ```
> public override void DataBind()
>     {
>         base.DataBind();
> 
> 
>         // Make sure that the DataSource is initialized.
>         if (this.DataSource == null)
>         {
>             return;
>         }
>          // Setup the pagination controls.
>         BindPaginationControls();
> 
>         // Populate all filters data.
> 
>         // Bind the repeater with the list of records to expand the UI.
>         System.Web.UI.WebControls.Repeater rep = (System.Web.UI.WebControls.Repeater)(this.FindControl("TableControlRepeater"));
>         rep.DataSource = this.DataSource;
>         rep.DataBind();
> 
>         int index = 0;
>         foreach (System.Web.UI.WebControls.RepeaterItem repItem in rep.Items)
>         {
> 
>             // Make sure that the DataSource is initialized.
> 
> 
>             // Loop through all rows in the table, set its DataSource and call DataBind().
>             TableControlRow recControl = (TableControlRow)(repItem.FindControl("TableControlRow"));
>             recControl.DataSource = this.DataSource[index];
>             recControl.DataBind();
>             recControl.Visible = !this.InDeletedRecordIds(recControl);
>             index += 1;
>         }
>     }
> 
> ```
> 
> I have take the XML data and place them in page 2 become the data source of the repeater.
> 
> Any help or suggestion is very helpful. I would really not to have to rewrite the code.

*I posted the following answer, which received 1 upvote:*

LINQ-To-XML is probably the most simple way to accomplish this task. See Scott Gu's [post](http://weblogs.asp.net/scottgu/archive/2007/08/07/using-linq-to-xml-and-how-to-build-a-custom-rss-feed-reader-with-it.aspx) on it.

pseudo-code:

```
var xml = XDocument.Load(...);
reapeater.DataSource = from x in xml.Descendents("z") 
    where x.Attributes("y").Equals("select value") 
    select new { Value1 = x.Element("Value1"), Value2 = x.Element("Value2") };
repeater.DataBind();

```

<details>
<summary>Notable comments</summary>

**Nate** (0 upvotes): You'll have to play around with it based on your xml output; however, based on the code you updated with, I might suggest using XML Seralization, since it will be fully automatic.

</details>

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/5198789) — 1 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
