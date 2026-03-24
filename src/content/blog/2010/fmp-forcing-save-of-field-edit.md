---
title: "FMP - Forcing Save of Field Edit"
description: "My answer to \"FMP - Forcing Save of Field Edit\" on Stack Overflow"
date: 2010-11-24
author:
  name: Nate Bross
tags:
  - filemaker
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/4268843"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/4268821):*

> I'm working on a FileMaker Pro 10 database. On a particular layout ("license"), there are several fields and a button. When the button is clicked, a certificate (layout) is displayed reflecting the data entered in the license layout.
> 
> If I edit a field, then immediately click on the "View Certificate" button, the changes just made to the field do not appear on the certificate. However, if I edit the field, then click on another field, then click "View Certificate," the revised data is displayed on the certificate. Apparently, something about shifting focus to a different field triggers a data save.
> 
> How can I force this data save so that any time the user clicks on the button, the resulting certificate reflects the edits they have made?
> 
> Thank you,  
> Ben

*I posted the following answer, which was chosen as the accepted answer and received 2 upvotes:*

In the script that is called on your "View Cerficiate" button, try adding a "Commit Record/Request" script step.

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/4268843) — 2 upvotes *(accepted answer)*. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
