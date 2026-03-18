---
title: "C#: get information about computer in domain"
description: "My answer to \"C#: get information about computer in domain\" on Stack Overflow"
date: 2009-06-09
author:
  name: Nate Bross
tags:
  - c#
  - .net
  - network-programming
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/971342"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/971321):*

> What classes should I use in C# in order to get information about a certain computer in my network? (Like who is logged on that computer, what Operating System is running on that computer, what ports are opened etc)

Checkout [System.Management](http://msdn.microsoft.com/en-us/library/system.management\(loband\).aspx) and [System.Management.ManagementClass](http://msdn.microsoft.com/en-us/library/system.management.managementclass.aspx). Both are used for accessing WMI, which is how to get the information in question.

**Edit:** Updated with sample to access WMI from remote computer:

```
ConnectionOptions options;
options = new ConnectionOptions();

options.Username = userID;
options.Password = password;
options.EnablePrivileges = true;
options.Impersonation = ImpersonationLevel.Impersonate;

ManagementScope scope;
scope = new ManagementScope("\\\\" + ipAddress + "\\root\\cimv2", options);
scope.Connect();

String queryString = "SELECT PercentProcessorTime, PercentInterruptTime, InterruptsPersec FROM Win32_PerfFormattedData_PerfOS_Processor";

ObjectQuery query;
query = new ObjectQuery(queryString);

ManagementObjectSearcher objOS = new ManagementObjectSearcher(scope, query);

DataTable dt = new DataTable();
dt.Columns.Add("PercentProcessorTime");
dt.Columns.Add("PercentInterruptTime");
dt.Columns.Add("InterruptsPersec");

foreach (ManagementObject MO in objOS.Get())
{
    DataRow dr = dt.NewRow();
    dr["PercentProcessorTime"] = MO["PercentProcessorTime"];
    dr["PercentInterruptTime"] = MO["PercentInterruptTime"];
    dr["InterruptsPersec"] = MO["InterruptsPersec"];

    dt.Rows.Add(dr);
}

```

_Note: userID, password, and ipAddress must all be defined to match your environment._

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/971342) — 9 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
