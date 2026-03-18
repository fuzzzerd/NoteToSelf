---
title: "Building an application to do a task periodically on a server"
description: "My answer to \"Building an application to do a task periodically on a server\" on Stack Overflow"
date: 2010-07-27
author:
  name: Nate Bross
tags:
  - .net
  - process
  - automation
  - scheduling
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/3344879"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/3232711):*

> I'm looking for some guidance on the overall architecture of this little system I'm building.
> 
> Currently, I have an app that is deployed (and updated) via xcopy to a few servers. This works well for updating the code, but it does not work well for updating the period of the code's execution, since it is setup as a windows scheduled task to run every hour. The xcopy replace works well, because I can run an update from my local machine, and push the new exe file to all the servers. And the next hour, the task scheduler will run the new exe.
> 
> I'd like to change it to work this way.
> 
> My app runs as a Windows Service and uses System.Threading.Timer to wait a given duration, and then execute the code. This way, part of the process could check the database and if necessary reduce the period of execution for a given server.
> 
> The issue there, is that since the .exe would be running as a service, it would not allow for easy updaing via xcopy since the file will be in use all the time.
> 
> Any thoughts on how I should set this up to be able to do easy xcopy updates, while running as a windows service? Is that even possible?

I ended up using a bit of @Decker97's solution, coupled with some powershell magic :)

```
function global:new-process()
{
    param ([string]$computer, [string]$commandline=$(throw "Command line required."))

    $path = "\\$computer\root\cimv2:Win32_Process"
    $mc = new-object System.Management.ManagementClass $path

    $cmdargs = $commandline,$null,$null,0

    $ret = $mc.InvokeMethod("Create", $cmdargs)
    if ($ret -eq 0) {
        write-host "Created Process ID: $($cmdargs[3])"
    }
    else {
        write-host "Error $ret creating process."
    }

    $mc.Dispose()
}

$serverNames = Get-Content C:\temp\servers.txt

foreach ($server in $serverNames) 
{   
    write-host Updating $server

    c:\windows\system32\sc.exe \\$server STOP Service

    $source = "C:\Projects\Service\bin\Debug"
    $dest = "\\" + $server + "\C$\Program Files\TargetFolder\TargetFolder"
    ROBOCOPY.exe $source $dest /MIR /W:5 /R:1

    new-process $server 'c:\WINDOWS\Microsoft.NET\Framework\v2.0.50727\Installutil.exe /i  /LogFile=install.out "C:\Program Files\TargetFolder\TargetFolder\serviceExecutable.exe"'

    c:\windows\system32\sc.exe  \\$server START Service
}

```

The script uses service control to try to stop the service.

Then it copies the files to the server with robocopy.

Then use WMI and Powershell to invoke "installutil" remotly on the server.

Then use service control to start up the service.

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/3344879) — 0 upvotes *(accepted answer)*. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
