---
title: "Display Serial Port Information Into Textbox"
description: "My answer to \"Display Serial Port Information Into Textbox\" on Stack Overflow"
date: 2014-01-10
author:
  name: Nate Bross
tags:
  - c#
  - serial-port
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/21033848"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/21033610):*

> In C#, I have the following code:
> 
> ```
> public Form1()
> {
>    InitializeComponent();
>    System.ComponentModel.IContainer components = new System.ComponentModel.Container();
>    serialPort1 = new System.IO.Ports.SerialPort(components);
>    serialPort1.PortName = "COM7";
>    serialPort1.BaudRate = 9600;
>    serialPort1.DtrEnable = true;
>    serialPort1.Open();
>    serialPort1.DataReceived += new SerialDataReceivedEventHandler(DataReceivedHandler);
> }
> private static void DataReceivedHandler(object sender, SerialDataReceivedEventArgs e)
> {
>    SerialPort sp = (SerialPort)sender;
>    string indata = sp.ReadExisting();
> }
> 
> ```
> 
> I have an Arduino sending serial data to the comm port continually, and I would like to put the data received into a textbox (with the new entries coming in on a seperate line).
> 
> I'm trying to understand the whole += concept, but I'm not sure how to use the code I have to enter the serial data into a textbox... can someone please help me understand this.

In your case listed above the `+=` operator is used to subscribe to an event.

```
serialPort1.DataReceived += new SerialDataReceivedEventHandler(DataReceivedHandler);

```

Means that when the DataReceived event is raised, it will call `DataReceivedHandler`. For more information, view [MSDN](http://msdn.microsoft.com/en-us/library/ms366768.aspx). In `DataReceivedHandler` simply add`TextBox.Text += indata + "\r\n";` In order to do that, you will need to remove the `static` modifier in your method signature.

In other cases, like with `int` it is the assignment increment operator, for example these are the same

```
int i = 1;
int j = 5;    
j += i;    
//j == 6

```

For `System.String` it is used to concatenate strings together.

```
string name = "John";
name += "Smith";
//name = "JohnSmith"

```

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/21033848) — 0 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
