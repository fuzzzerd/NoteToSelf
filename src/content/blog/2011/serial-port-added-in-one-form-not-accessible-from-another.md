---
title: "serial port added in one form not accessible from another class vb.net"
description: "My answer to \"serial port added in one form not accessible from another class vb.net\" on Stack Overflow"
date: 2011-04-19
author:
  name: Nate Bross
tags:
  - .net
  - vb.net
  - serial-port
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/5711584"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/5711468):*

> I added a serial port com1 to my vb.net form. I created a new class and wrote a method to open the com1 and created its object in the main form and called the method and its opening.
> 
> THen i created another class wrote a method to write data to the com and same way created an object and called it but i am getting the error as port is closed. What am i doing wrong.
> 
> To open the port
> 
> public class openport public sub opencom mainform.com1.open end sub end class
> 
> //in the mian form
> 
> dim cc as openport
> 
> cc.opencom
> 
> 'The above stuff works
> 
> But when i do same thing in another class for writing using
> 
> mainform.com1.write(data)
> 
> i am getting an error as port closed.

*I posted the following answer, which was chosen as the accepted answer and received 1 upvote:*

It looks like you are defining one comport, then opening a different one. Check that, if you still have issues post your complete code.

```
'Form1
public SP as SerialPort;
' Form1 Load Event
SP = New SerialPort("COM##", ...)
' Form1 Loads New Form
dim newForm as New Form2()
newForm.OldForm = Me
newForm.Show();

'Form2
public OldForm as Form1
'Form2 Minipulate COM port
OldForm.SP.Write(data) 

```

<details>
<summary>Notable comments</summary>

**Nate** (0 upvotes): I don't understand the problem.. can you be more specific?

</details>

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/5711584) — 1 upvotes *(accepted answer)*. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
