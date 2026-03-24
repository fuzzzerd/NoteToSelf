---
title: "How to Setup Java Application to run in Terminal Services"
description: "My answer to \"How to Setup Java Application to run in Terminal Services\" on Server Fault"
date: 2011-06-24
author:
  name: Nate Bross
tags:
  - windows
  - java
  - windows-terminal-services
source: "Server Fault"
sourceUrl: "https://serverfault.com/a/283897"
---

*Someone [asked on Server Fault](https://serverfault.com/q/283640):*

> I have a 'desktop' java application which is in the form of a .jar file.
> 
> How can I:
> 
> 1.  Store this application on a single server.
> 2.  Grant access via Terminal Services to a specific OU to run this application from the central location.
> 3.  Disallow the copying or moving of the application (jar file) to any other location.
> 4.  Allow the saving/copying/moving of the output of the application on an authorized user's local drive.

*I posted the following answer, which was chosen as the accepted answer:*

1.  Deploy the necessary JRE and .jar files to your Remote Desktop Services Server.
2.  AFAIK, you can do this at the Security Group level, not the Organizational Unit level.
3.  Setup File Permissions for Read/Execute (same security group as above I assume).
4.  Terminal Services allows the user to connect their Remote Drives, this is a configuration option during connection to the server, the user will have the same access to these "local" drives as they do outside Terminal Services.

That said, I highly recommend that you check out [Remote App](http://technet.microsoft.com/en-us/library/cc753844%28WS.10%29.aspx), its part of the latest Windows Server OS, but it allows you to deploy the app on the server, while the user simply sees a new icon on their local desktop / start menu. Instead of a full Remote Desktop Session, they have a limited, seamless window for just the "published application."

---
*Originally posted on [Server Fault](https://serverfault.com/a/283897) — 0 upvotes *(accepted answer)*. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
