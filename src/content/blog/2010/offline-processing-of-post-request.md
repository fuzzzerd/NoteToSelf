---
title: "Offline Processing of POST Request"
description: "My answer to \"Offline Processing of POST Request\" on Stack Overflow"
date: 2010-09-15
author:
  name: Nate Bross
tags:
  - c#
  - windows-services
  - scheduled-tasks
  - offline
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/3718567"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/3718517):*

> I am developing an Application where I am submitting POST Requests to a .NET Web Service.
> 
> Current implementation is to process the request instantly and give response. In actual deployment, there will be huge amount of data that needs to be processed and thus the request must be processed offline.
> 
> What are the strategies that can have the task accomplished
> 
> Should I implement a Windows Service, or a scheduled task that invokes an application to perform the desired task.

*I posted the following answer, which was chosen as the accepted answer and received 2 upvotes:*

If you have so much data it cannot be processed in real-time, I would probably setup the service to do the following:

ProcessRecordViaPost

1.  Create new record in "Queue" database with UniqueID, and all other info to be processed
2.  Return UniqueID to client immediatly

ReadRecordViaGet

1.  Check queue, if processed return data if not return status code (number of items in queue before it?)

I would also have a windows service that continually grabs the oldest item from the Queue, and processes it and moves on to the next oldest.

<details>
<summary>Notable comments</summary>

**Nate** (0 upvotes): If they are only going to be processed and deleted, then yeah, a database would be overkill. However, since you aren't passing data back immediatly, how will your web service return data when the user finally comes back for it? It seems like you need to store the queue at least until the user makes the second request, no?

</details>

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/3718567) — 2 upvotes *(accepted answer)*. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
