---
title: "Copy and delete the file from the FTP SERVER using Windows Service in c#"
description: "My answer to \"Copy and delete the file from the FTP SERVER using Windows Service in c#\" on Stack Overflow"
date: 2010-03-26
author:
  name: Nate Bross
tags:
  - c#
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/2524079"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/2523891):*

> I am trying to implement a windows service that will ping a FTP site and copy its contents once in every 3 hours.
> 
> This service has functions to
> 
> 1.  List all files in the FTP site
>     
> 2.  Copy one file
>     
> 3.  Delete the copied file
>     
> 4.  Repeats step 2 and 3 for all files in the site

*I posted the following answer, which received 1 upvote:*

There are two classes which will be of great value to you for FTP. First, [FtpWebRequest](http://msdn.microsoft.com/en-us/library/system.net.ftpwebrequest.aspx) and second, [FtpWebResponse](http://msdn.microsoft.com/en-us/library/system.net.ftpwebresponse.aspx). As for writing a windows service: [this](http://www.codeproject.com/KB/dotnet/simplewindowsservice.aspx), and [this](https://stackoverflow.com/questions/1560407/c-windows-service-not-appearing-in-services-list-after-install/1560480#1560480) should be helpful as well.

An example lifted from MSDN to delete a file:

```
public static bool DeleteFileOnServer(Uri serverUri)
{
    // The serverUri parameter should use the ftp:// scheme.
    // It contains the name of the server file that is to be deleted.
    // Example: ftp://contoso.com/someFile.txt.
    // 

    if (serverUri.Scheme != Uri.UriSchemeFtp)
    {
        return false;
    }
    // Get the object used to communicate with the server.
    FtpWebRequest request = (FtpWebRequest)WebRequest.Create(serverUri);
    request.Method = WebRequestMethods.Ftp.DeleteFile;

    FtpWebResponse response = (FtpWebResponse) request.GetResponse();
    Console.WriteLine("Delete status: {0}",response.StatusDescription);  
    response.Close();
    return true;
}

```

With a little bit of work you should be able to modify that to do every thing you need in terms of FTP Access.

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/2524079) — 1 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
