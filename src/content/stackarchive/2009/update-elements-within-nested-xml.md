---
title: "Update elements within Nested Xml"
description: "A question I asked on Stack Overflow"
date: 2009-06-03
author:
  name: Nate Bross
tags:
  - c#
  - .net
  - xml
  - linq-to-xml
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/q/942972"
---

*I [asked this on Stack Overflow](https://stackoverflow.com/q/942972):*

I have Xml which looks like this:

```
<DataMapper xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema">
  <SqlTable />
  <Level_01s>
    <DataParameter>
      <SqlTable>MY-Table-Name</SqlTable>
      <Children>
        <DataParameter>
          <SqlTable>MY-Table-Name</SqlTable>
          <Children>
            <DataParameter>
              <SqlTable>MY-Table-Name</SqlTable>
              <Children>
                <DataParameter>
                  <SqlTable>[All]</SqlTable>
                  <Children />
                </DataParameter>
                <DataParameter>
                  <SqlTable>MY-Table-Name</SqlTable>
                  <Children>
                    <DataParameter>
                      <SqlTable>[All]</SqlTable>
                      <Children />
                    </DataParameter>
                  </Children>
                </DataParameter>
              </Children>
            </DataParameter>
          </Children>
        </DataParameter>
      </Children>
    </DataParameter>
  </Level_01s>
</ DataMapper>

```

What I'd like to do is update all instances of the element. The issue that I have is that the DataParameters may go n-levels deep.

How can I recursivly ensure I update all of these?

I am using this code to update Root-level elements:

```
XDocument xdoc = XDocument.Parse(myxmlstring);
var element = xdoc.Elements("SqlTable").Single();
element.Value = "foo";        
xdoc.Save("file.xml");

```

via [Best way to change the value of an element in C#](https://stackoverflow.com/questions/544310/best-way-to-change-the-value-of-an-element-in-c)

---

> [Brian ONeil answered](https://stackoverflow.com/a/943097) (3 upvotes):
>
> If you use Descendants("SqlTable") instead of Elements("SqlTable").Single() it will get you all of the "SQLTable" elements in the entire document. Then you can just foreach through them and update the elements.
> 
> ```
> var elements = xdoc.Descendants("SqlTable");
> 
> foreach (var sqlTable in elements)
> {
>     sqlTable.Value = "foo";
> }  
> 
> ```
> 
> Or if you want to be terse you can do it all in LINQ syntax
> 
> **Updated based on comment**, Added .Where with predicate to build the list as an example of using a condition.
> 
> ```
> xdoc.Descendants("SqlTable").Where(s => s.Value != "All").ToList().ForEach(p => p.Value = "foo");
> 
> ```

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/q/942972) — 0 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
