---
title: "Help Rendering ASP.NET MVC View from a Console App"
description: "My answer to \"Help Rendering ASP.NET MVC View from a Console App\" on Stack Overflow"
date: 2010-11-03
author:
  name: Nate Bross
tags:
  - c#
  - .net
  - asp.net-mvc
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/4088593"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/4035036):*

> I have created an ASP.NET MVC View. On my MVC WebApp, it works great.
> 
> I would like to be able to (from a console app) render the View out as an HTML Email. I'm wondering what the best way to do this is going to be, the part I'm struggling with is Rendering the View.
> 
> Is there any way to do this from a console application?
> 
> The webapp simply calls a web-service and formats the data nicely so the console application will have access to the same web-service; however, the ActionResult on the controller is protected by \[Authorize\] attributes, so not just anyone can get at it.

*I posted the following answer, which was chosen as the accepted answer:*

I ended up using HttpWebRequest and the info provided here: [http://odetocode.com/articles/162.aspx](http://odetocode.com/articles/162.aspx)

From the article:

```
    // first, request the login form to get the viewstate value
    HttpWebRequest webRequest = WebRequest.Create(LOGIN_URL) as HttpWebRequest;         
    StreamReader responseReader = new StreamReader(
         webRequest.GetResponse().GetResponseStream()
      );
    string responseData = responseReader.ReadToEnd();         
    responseReader.Close();

    // extract the viewstate value and build out POST data
    string viewState = ExtractViewState(responseData);       
    string postData = 
         String.Format(
            "__VIEWSTATE={0}&UsernameTextBox={1}&PasswordTextBox={2}&LoginButton=Login",
            viewState, USERNAME, PASSWORD
         );

    // have a cookie container ready to receive the forms auth cookie
    CookieContainer cookies = new CookieContainer();

    // now post to the login form
    webRequest = WebRequest.Create(LOGIN_URL) as HttpWebRequest;
    webRequest.Method = "POST";
    webRequest.ContentType = "application/x-www-form-urlencoded";
    webRequest.CookieContainer = cookies;        

    // write the form values into the request message
    StreamWriter requestWriter = new StreamWriter(webRequest.GetRequestStream());
    requestWriter.Write(postData);
    requestWriter.Close();

    // we don't need the contents of the response, just the cookie it issues
    webRequest.GetResponse().Close();

    // now we can send out cookie along with a request for the protected page
    webRequest = WebRequest.Create(SECRET_PAGE_URL) as HttpWebRequest;
    webRequest.CookieContainer = cookies;
    responseReader = new StreamReader(webRequest.GetResponse().GetResponseStream());

    // and read the response
    responseData = responseReader.ReadToEnd();
    responseReader.Close();

    Response.Write(responseData); 

```

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/4088593) — 0 upvotes *(accepted answer)*. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
