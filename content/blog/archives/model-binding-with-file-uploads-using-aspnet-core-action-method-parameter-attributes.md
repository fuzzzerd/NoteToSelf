---
title: Model Binding with File Uploads using ASP.NET Core Action Method Parameter Attributes 
description: Started with a simple task. Upload a file to an ASP.NET Core API Controller. The project I’m working on uses a front-end SPA framework, so the file upload is coming from javascript and not directly from an html form post.
date: 2017-04-11
author: 
  name: Nate Bross
tags: 
  - web development
  - dotnet
---
Started with a simple task: Upload a file to an ASP.NET Core API Controller. The project I’m working on uses a front-end SPA framework, so the file upload is coming from javascript and not directly from an html form post.

First lets look at what I was doing wrong and then we can understand why it was wrong.

A quick peek at the client side code that pushes this data to the controller (note this is actually typescript):

```csharp
// note photoFiles is bound to via Aurelia binding.
var form = new FormData() for (let i = 0; i < this.photoFiles.length; i++) {
    form.append(`files[${i}]`, this.photoFiles[i]);
}
this.http.fetch(`/api/photoUpload/${this.targetId}`, {
    method: 'post', 
    body: form, 
    headers: new Headers() 
})
.then(response => { console.log(response); });
```

Since we’re loading our ‘FormData’ object into the ‘body’ of the http post, it made sense to me to wire up the ASP.NET Controller Action as follows:

```csharp
public async Task photoUpload(
     [FromRoute] Guid propertyId,
     [FromBody] IEnumerable files)
{
     foreach (var file in files)
     {
         var name = file.Name;
         Console.WriteLine(name);
     }

    return new ObjectResult(null);
}
```

This would result an an HTTP 415 Unsupported Media Type response, before the action code ever executed.

It turns out `[FromBody]` actually kicks ASP.NET Core into JSON Model Binder mode; which obviously cannot handle the file data that is coming through. More information on Model Binding can be found here on Andrew Lock’s blog.

Easy enough; lets drop the `[FromBody]` attribute since its clearly not helping. Without going through the code again, the method is executed; however the files parameter has a count of zero.

At this point, I’ve been searching around enough to have seen a few blog posts that suggest forgoing the Model Binding and simply use the built in

```csharp
var form = await Request.ReadFormAsync();

var files = form.Files;
```

method. I try this and it does in fact work. I see my uploaded files. Some folks would stop here with a working solution, but I like to know why something I expected to work didn’t. If the data is coming through, it should work as an action parameter as well as directly reading from the form.

Enter the `[FromForm]` attribute, useful in cases when you want to bind to a specific form field. Modify the above code to use `[FromForm]` on the `IEnumerable<IFormFile>` parameter from our action:

```csharp
public async Task photoUpload(
    [FromRoute] Guid propertyId,
    [FromForm] IEnumerable files
)
```

and wait, why isn’t that working? Still getting an empty IEnumerable when the method executes. No Http 415 though, so at least its not a regression.

I went back and compared the ACTUAL http post data that was sent and compared it with a direct form post from a <form method=”post”> and noticed that there was one slight bug in the assembly of the FormData on the front-end:

```csharp
var form = new FormData()
for (let i = 0; i < this.photoFiles.length; i++) {
     form.append(`files`, this.photoFiles[i]);
}
```

The original code was doing something like files[0], files[1], etc for each file uploaded, however, the regular <input type=”file”> control simply uses the same ‘name’ as the input tag.
