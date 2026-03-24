---
title: "ASP.NET database connection and queries"
description: "My answer to \"ASP.NET database connection and queries\" on Stack Overflow"
date: 2011-06-24
author:
  name: Nate Bross
tags:
  - asp.net
  - asp.net-mvc-3
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/6469481"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/6469419):*

> I'm used to PHP style MVC frameworks which are a little different from the way ASP's MVC frameworks work.
> 
> Is there a built in database class? Or do I need to code my own database class using a web.conf connection string?
> 
> With PHP's MVC frameworks you simply add your database connection information into a database and then query it with something like:
> 
> ```
> $results = $this->db->query("select * from table");
> 
> ```

*I posted the following answer, which was chosen as the accepted answer and received 2 upvotes:*

It is not quite that simple, but you have a lot more flexibility. Check this link out: [http://www.dotnetperls.com/sqlconnection](http://www.dotnetperls.com/sqlconnection) -- It has some getting started for doing exactly what you've outlined (though I HIGHLY recommend you use sprocs or at a minimum, paramaterized sql, not direct sql).

With that said, I suggest you look into [Linq-To-SQL](https://stackoverflow.com/q/3657533/86860) or [Entity Framework](https://stackoverflow.com/q/62110/86860). Any on-line sampels you find will probably use one of these technologies, and they do make things very nice and simple.

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/6469481) — 2 upvotes *(accepted answer)*. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
