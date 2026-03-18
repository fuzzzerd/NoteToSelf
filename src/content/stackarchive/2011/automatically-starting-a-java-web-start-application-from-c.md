---
title: "Automatically starting a java-web-start application from C# and .NET, .WaitForExit(); doesn&#39;t work as desired"
description: "A question I asked on Stack Overflow"
date: 2011-02-07
author:
  name: Nate Bross
tags:
  - c#
  - .net
  - java-web-start
  - system.diagnostics
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/q/4927818"
---

*I [asked this on Stack Overflow](https://stackoverflow.com/q/4927818):*

I'm using a C# application to launch a java web application. I'd like my C# application to know when the user closes out of the java app. I'm using this code:

```
var javaws = File.Exists(@"C:\Program Files\Java\jre6\bin\javaws.exe") ? @"C:\Program Files\Java\jre6\bin\javaws.exe" : @"C:\Program Files (x86)\Java\jre6\bin\javaws.exe";

var psi = new ProcessStartInfo(javaws, String.Format("http://{0}:/appstart.jnlp", hostAddress));

Process.Start(psi).WaitForExit();

```

This code successfully launches the java program, however, `WaitForExit()` is called and immediately returns. I believe this is because "javaws" simply starts another process called "javaw" and then "javaws" closes. Is there any way to A) wait for all child processes to finish too, or B) wait for a specific child process?

\--

I've discovered this related post: [Are javaws exit codes really broken?](https://stackoverflow.com/questions/3803823/are-javaws-exit-codes-really-broken), though the answer there suggests that 1.6.0\_23 has fixed it, I am seeing the exact same behavior on my development machine with Java 1.6.0\_23. What I am looking for now is a workaround to make the above code work as expected. I need to start this jnlp file, wait for its execution to complete, and then do some additional code in C# program. The Java application is out of my control, so I can't add the functionality there.

\--

For anyone wondering, the final solution looks like this:

```
var javaws = File.Exists(@"C:\Program Files\Java\jre6\bin\javaws.exe") ? @"C:\Program Files\Java\jre6\bin\javaws.exe" : @"C:\Program Files (x86)\Java\jre6\bin\javaws.exe";
var psi = new ProcessStartInfo(javaws, String.Format("http://{0}:/appstart.jnlp", hostAddress));
Process.Start(psi).WaitForExit();

var javaw = Process.GetProcessesByName("javaw");
javaw.Single(ja => ja.StartTime.Equals(javaw.Max(j => j.StartTime))).WaitForExit();

```

This provides the added benefit of only waiting for the most recently started `javaw` process, in the event there are other java web apps running on the machine.

---

> [rotman answered](https://stackoverflow.com/a/5004085) (5 upvotes):
>
> You can get desired process from list of running processes and then wait it for exit:
> 
> ```
> var javaws = File.Exists(@"C:\Program Files\Java\jre6\bin\javaws.exe") ? @"C:\Program Files\Java\jre6\bin\javaws.exe" : @"C:\Program Files (x86)\Java\jre6\bin\javaws.exe";
> var psi = new ProcessStartInfo(javaws, String.Format("http://{0}:/appstart.jnlp", hostAddress));
> 
> // make sure child process is already started
> Process.Start(psi).WaitForExit();
> 
> foreach (Process p in Process.GetProcessesByName("javaw"))
> {
>    p.WaitForExit();
> }
> 
> ```
> 
> To kill not only _javaw_, but all of child processes you need to get process ID of _javaws_ and compare it to parent ID of all running processes. Here is complete code: (extension method comes from [here](https://stackoverflow.com/questions/394816/how-to-get-parent-process-in-net-in-managed-way))
> 
> ```
> class Program
> {
>     static void Main(string[] args)
>     {
>         var javaws = File.Exists(@"C:\Program Files\Java\jre6\bin\javaws.exe") ? @"C:\Program Files\Java\jre6\bin\javaws.exe" : @"C:\Program Files (x86)\Java\jre6\bin\javaws.exe";
>         var psi = new ProcessStartInfo(javaws, String.Format("http://{0}:/appstart.jnlp", hostAddress));
> 
>         var parentProc = Process.Start(psi);
>         parentProc.WaitForExit();
> 
>         foreach (Process p in Process.GetProcesses())
>         {
>             if (p.Parent().Id == parentProc.Id)
>                 p.WaitForExit();
>         }
>     }
> }
> 
> public static class ProcessExtensions
> {
>     private static string FindIndexedProcessName(int pid)
>     {
>         var processName = Process.GetProcessById(pid).ProcessName;
>         var processesByName = Process.GetProcessesByName(processName);
>         string processIndexdName = null;
> 
>         for (var index = 0; index < processesByName.Length; index++)
>         {
>             processIndexdName = index == 0 ? processName : processName + "#" + index;
>             var processId = new PerformanceCounter("Process", "ID Process", processIndexdName);
>             if ((int)processId.NextValue() == pid)
>             {
>                 return processIndexdName;
>             }
>         }
> 
>         return processIndexdName;
>     }
> 
>     private static Process FindPidFromIndexedProcessName(string indexedProcessName)
>     {
>         var parentId = new PerformanceCounter("Process", "Creating Process ID", indexedProcessName);
>         return Process.GetProcessById((int)parentId.NextValue());
>     }
> 
>     public static Process Parent(this Process process)
>     {
>         return FindPidFromIndexedProcessName(FindIndexedProcessName(process.Id));
>     }
> }
> 
> ```

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/q/4927818) — 1 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
