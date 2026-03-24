---
title: "winforms switch between tabs while current one is busy doing processing"
description: "My answer to \"winforms switch between tabs while current one is busy doing processing\" on Stack Overflow"
date: 2011-09-21
author:
  name: Nate Bross
tags:
  - c#
  - .net
  - winforms
  - multithreading
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/7502602"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/7502307):*

> i have winform (c#) with multi-tabs, the current focused tab is busy doing lengthy Async operation and embedded progressbasr "in that tab" showing the progress. i want to let the user be able to navigate to other tabs and perform other tasks in case he/she don't wanna wait. so how i can do that in simple and robust way?
> 
> this is the lengthy op in short:
> 
> ```
> foreach (DataRow _dr in _allDt.Rows)
> {
>    //check if machine is online out of 100 machines list using async approach
>         if (_connectionUtil.ConnectionIsOn(_dr["ipAddress"].ToString()))
>             _onMachineAl.Add(_machineInfo);
>     _progressBar.PerformStep();
> 
>  }
> 
> ```
> 
> do i have to use thread?! or simpler way available? please provide code-segment or helpful source.
> 
> EDIT:
> 
> ```
> //async part:
>  using (TcpClient tcpClient = new TcpClient())
>             {
>                 IAsyncResult result = tcpClient.BeginConnect(ipAddress, 3306, null, null);
>                 WaitHandle timeoutHandler = result.AsyncWaitHandle;
> 
> ```
> 
> thanks,

*I posted the following answer, which was chosen as the accepted answer and received 1 upvote:*

If you are already performing your task asynchronously, then the user should already be able to switch between tabs because the async operations will not be blocking the UI thread.

If you are not really doing your task asynchronously the user will not be able to do much of anything because you are blocking the UI thread.

That being said, I suspect you are in the second camp, so something like this should help you get going:

```
var mi = new MethodInvoker(() =>
{
    foreach(dataRow _dr in _allDt.Rows)
    {
        if(_connectionUtil.ConnectionIsOn(_dr["ipAddress"].ToString()))
            _onMachineAl.Add(_machineInfo);
        this._progressBar.Invoke(() => { _progressBar.PerformStep(); });
    }
});
mi.BeginInvoke(null, null);

```

<details>
<summary>Notable comments</summary>

**Nate** (0 upvotes): You need to define a callback method, and provide it in the `mi.BeginInvoke()` call.

</details>

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/7502602) — 1 upvotes *(accepted answer)*. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
