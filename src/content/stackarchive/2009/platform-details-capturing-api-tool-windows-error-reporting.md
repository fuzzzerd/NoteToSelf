---
title: "Platform details capturing API/tool -- Windows Error Reporting equivalent"
description: "My answer to \"Platform details capturing API/tool -- Windows Error Reporting equivalent\" on Stack Overflow"
date: 2009-05-18
author:
  name: Nate Bross
tags:
  - c#
  - .net
  - windows
  - error-reporting
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/878894"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/878811):*

> I am developing a .NET based desktop application written in C#. If and when the application crashes, I would like to capture certain details regarding the machine on which the application was running:
> 
> 1.  Operating system details: version, service pack etc.
> 2.  .NET details: Framework version
> 3.  Installed programs
> 4.  Processes running at the time of the crash.
> 5.  Somethings which I'm missing, but should be here.
> 
> Is there a tool or an API set which lets me get all this conveniently? What I would like to do is to invoke the API (when the crash occurs), capture all the details, and let the user be able to report it back to me. Something like the windows error reporting service.
> 
> P.S: Right now, I can't sign up for the [Windows Error Reporting service](http://www.microsoft.com/whdc/winlogo/maintain/StartWER.mspx) itself.

*I posted the following answer, which received 2 upvotes:*

1.  System.OperatingSystem osInfo=System.Environment.OSVersion;
    
2.  [Link](https://web.archive.org/web/20201206020837/http://geekswithblogs.net/lorint/archive/2006/01/30/67654.aspx)
    
3.  ```
         string registryKey = @"SOFTWARE\Microsoft\Windows\CurrentVersion\Uninstall";
    
    ```
    

```
        using (Microsoft.Win32.RegistryKey key = Registry.LocalMachine.OpenSubKey(registryKey)) 
        { 
            var query = from a in 
                            key.GetSubKeyNames() 
                        let r = key.OpenSubKey(a) 
                        select new 
                        { 
                            Application = r.GetValue("DisplayName") 
                        };
            
            foreach (var item in query) 
            { 
                if (item.Application != null)
                    Console.WriteLine(item.Application); 
            }
        }

```

(via [http://www.onedotnetway.com/get-a-list-of-installed-applications-using-linq-and-c/](http://www.onedotnetway.com/get-a-list-of-installed-applications-using-linq-and-c/))

4)

```
Process[] processlist = Process.GetProcesses();

foreach(Process theprocess in processlist)
{
    Console.WriteLine("Process: {0} ID: {1}", theprocess.ProcessName, theprocess.Id);
}

```

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/878894) — 2 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
