---
title: "Insert Data using Linq from C#"
description: "My answer to \"Insert Data using Linq from C#\" on Stack Overflow"
date: 2010-12-27
author:
  name: Nate Bross
tags:
  - c#
  - linq
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/4540450"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/4540410):*

> I have version table which contains version number and version ID. I need to get the version ID based on the Version number. How to achieve this in more efficient way ?
> 
> ```
>         using (PatchSyncDBDataContext patchSyncDB = new PatchSyncDBDataContext())
>         {
>             int versionID = (from version in patchSyncDB.AppPM_Versions
>                              where version.StatusID != 0 &&
>                              version.VersionNumber == versionNumber
>                              select version.VersionId).First();
> 
>             int customerID = (from reqID in patchSyncDB.MasterRepTables
>                               where reqID.rep_email == dtLoginUser
>                               select reqID.rep_id).First();
> 
>             AppPM_Patch AppPM_Patches = new AppPM_Patch()
>             {
>                 PatchId = patchID,
>                 IncidentId = incidentID,
>                 VersionId = versionID,
>                 RequestedUserId = customerID,
>                 Emails = emailTo,
>                 StartDateTime = dateTimes,
>                 PatchStatus = patchStatus,
>                 StatusID = 1,
>                 SelectedProjects = selectedProjects
>             };
>             patchSyncDB.AppPM_Patches.InsertOnSubmit(AppPM_Patches);
>             patchSyncDB.SubmitChanges();
>         }
> 
> ```

*I posted the following answer:*

Assuming this is the code you're wondering about:

```
int versionID = (from version in patchSyncDB.AppPM_Versions
                 where version.StatusID != 0 &&
                 version.VersionNumber == versionNumber
                 select version.VersionId).First();

```

I don't see any better way to do the query, you might do a slightly more direct syntax using the `.Where()` and `.Select()` extension methods, but if your query parameters are `VersionNumber = parm` and `StatusID != 0` I don't see a better query for it, save maybe a stored procedure that returns `VersionId`

<details>
<summary>Notable comments</summary>

**Nate** (0 upvotes): @Randy I am suggesting that there isn't a more efficient way to do that query, which is the question the OP submitted. With more information, maybe a better answer could be provided.

</details>

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/4540450) — 0 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
