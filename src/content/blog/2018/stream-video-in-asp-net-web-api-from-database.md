---
title: "stream video in asp.net web api from database"
description: "My answer to \"stream video in asp.net web api from database\" on Stack Overflow"
date: 2018-02-05
author:
  name: Nate Bross
tags:
  - c#
  - asp.net
  - html
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/48628798"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/48623761):*

> i want to stream video from database through asp.net web api controller. i have done it from static file in my server(below code), but i can't accomplish the database mode. here is my code (which i got from searching through web)
> 
> ```
> public class VideosController : ApiController
> {
>     // GET api/values
>     public HttpResponseMessage Get(string filename)
>     {
>         var filePath = HttpContext.Current.Server.MapPath("~") + filename;
>         if (!File.Exists(filePath))
>             return new HttpResponseMessage(HttpStatusCode.NotFound);
> 
>         var response = Request.CreateResponse();
>         response.Headers.AcceptRanges.Add("bytes");
> 
>         var streamer = new FileStreamer();
>         streamer.FileInfo = new FileInfo(filePath);
>         response.Content = new PushStreamContent(streamer.WriteToStream, "video/mp4");
> 
>         RangeHeaderValue rangeHeader = Request.Headers.Range;
>         if (rangeHeader != null)
>         {
>             long totalLength = streamer.FileInfo.Length;
>             var range = rangeHeader.Ranges.First();
>             streamer.Start = range.From ?? 0;
>             streamer.End = range.To ?? totalLength - 1;
> 
>             response.Content.Headers.ContentLength = streamer.End - streamer.Start + 1;
>             response.Content.Headers.ContentRange = new ContentRangeHeaderValue(streamer.Start, streamer.End,
>                 totalLength);
>             response.StatusCode = HttpStatusCode.PartialContent;
>         }
>         else
>         {
>             response.StatusCode = HttpStatusCode.OK;
>         }
>         return response;
>     }
> 
> 
>     class FileStreamer
>     {
>         public FileInfo FileInfo { get; set; }
>         public long Start { get; set; }
>         public long End { get; set; }
> 
>         public async Task WriteToStream(Stream outputStream, HttpContent content, TransportContext context)
>         {
>             try
>             {
>                 var buffer = new byte[65536];
>                 using (var video = FileInfo.OpenRead())
>                 {
>                     if (End == -1)
>                     {
>                         End = video.Length;
>                     }
>                     var position = Start;
>                     var bytesLeft = End - Start + 1;
>                     video.Position = Start;
>                     while (position <= End)
>                     {
>                         // what should i do here?
>                         var bytesRead = video.Read(buffer, 0, (int)Math.Min(bytesLeft, buffer.Length));
>                         await outputStream.WriteAsync(buffer, 0, bytesRead);
>                         position += bytesRead;
>                         bytesLeft = End - position + 1;
>                     }
>                 }
>             }
>             catch (Exception ex)
>             {
>                 // fail silently
>             }
>             finally
>             {
>                 outputStream.Close();
>             }
>         }
>     }
> }
> 
> ```
> 
> this is my HTML code:
> 
> ```
>     <video width="640" height="480" controls="controls">
>         <source src="/api/Videos/?filename=sample.mp4" type="video/mp4">
>     </video>
> 
> ```
> 
> there is a method ready for me (written by someone else) to get a range of file from engine (database) and its code is like this :
> 
> ```
> public byte[] Engine.DownloadStreamFile(Guid fileId, long from, long length)
> 
> ```
> 
> i tried to read from this method and write on response output stream, but i couldn't. it seems i can't handle _From_ and _To_ receiving from google chrome. Any thoughts?

Based on the information you've provided, and assuming the method in your Engine class does what one would assume it does by name and signature, you should try replacing the file system stuff with your Engine.DownloadStreamFile method:

```
// what should i do here?
var bytesRead = video.Read(buffer, 0, (int)Math.Min(bytesLeft, buffer.Length));
// becomes
var bytesRead = Engine.DownloadStreamFile(this.fileId, this.Start, this.End);

```

You will obviously need to add a fileId field/property to your class instead of the FileInfo you have today.

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/48628798) — 1 upvotes *(accepted answer)*. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
