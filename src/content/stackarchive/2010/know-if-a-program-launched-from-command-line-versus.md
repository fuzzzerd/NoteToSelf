---
title: "Know if a program launched from command line versus clicking on the .exe in vb.net?"
description: "My answer to \"Know if a program launched from command line versus clicking on the .exe in vb.net?\" on Stack Overflow"
date: 2010-01-08
author:
  name: Nate Bross
tags:
  - vb.net
  - command-line
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/2031099"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/2031062):*

> Hi I'm writing a program in vb.net. The program can be started from another program by passing some arguments or it can be lauched by clicking .exe. I'd like to show the user some options depending on where he is coming. Is the below approach correct?
> 
> ```
> Private Sub Main_Load(ByVal sender As Object, ByVal e As System.EventArgs) Handles Me.Load
> 
>     If Environment.GetCommandLineArgs(0).ToString = "SomeArgument" Then
>       'Do some events
>     Else
>       'Do some other events
>     End If
> 
> End Sub
> 
> ```
> 
> Thanks for your help.

*I posted the following answer:*

Unless I don't understand what you want, you should iterate over the CommandLine Args collection and only prompt for the ones not provided. This will solve the problem of the user starting your app from the commandline w/out any arguments. This way, you only ever prompt for the arguments that aren't explicitly passed on the commandline.

Like this:

```
Dim someArgument as String = String.Empty
Dim myArgument as String = String.Empty


For Each arg as String In Environment.GetCommandLineArgs()
    If arg.StartsWith("SomeArgument") Then
        someArgument = arg
    End If
    If arg.StartsWith("MyArgument") Then
        myArgument = arg
    End If
    ' Continue for each extra argument
Next


If String.IsNullOrEmpty(someArgument) Then
    ' prompt for someArgument
End If

If String.IsNullOrEmpty(myArgument) Then
    ' prompt for myArgument
End If

```

The only tricky part here, is parsing out the value of "arg" in the for loop, since it will be something like "SomeArgument=someValue". My code doesn't split them out, you'll likely want to do that.

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/2031099) — 0 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
