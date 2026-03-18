---
title: "JavaScript Loop issue with variable scope"
description: "A question I asked on Stack Overflow"
date: 2011-06-16
author:
  name: Nate Bross
tags:
  - javascript
  - jquery
  - variables
  - scope
  - each
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/q/6378406"
---

*I [asked this on Stack Overflow](https://stackoverflow.com/q/6378406):*

So, I have this jQuery `.each` loop, and for the most part its working as intended; there is one issue, but first the loop:

```
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" >
    <head>
        <script type="text/javascript" src="http://ajax.aspnetcdn.com/ajax/jQuery/jquery-1.6.1.min.js"></script>
        <script type="text/javascript">
            function Pushpin(){}
            Pushpin.prototype.XZX = {
                site: null,
                getHtmlDescription: function () {
                    var html  = '<b id="infoboxTitle" style="position:absolute; top:10px; left:10px; width:220px;">' + this.site.Name + '</b>';
                        html += '<a id="infoboxDescription" style="position:absolute; top:30px; left:10px; width:220px; height:120px;">{0}</a>';

                    var description = 'Headcount: ' + this.site.Headcount + '<br />';
                    description += 'Leases: ' + this.site.LeaseCount + '<br />';

                    html = html.replace('{0}', description);

                    return html;
                }
            };

            var data = [
                    {"Address":{"City":"Atlanta","Country":"USA","County":"","Latitude":33.9882404987503,"Longitude":-84.1629638209203,"Region":"Southeast","State":"GA","StreetAddress":"Atlanta 177","ZipCode":"30096"},"Headcount":0,"ImageBytes":null,"ImageRefPath":"","LeaseCount":1,"Leases":null,"Name":"Atlanta","NextExpire":"\/Date(1495083600000-0500)\/","Number":"1052","PrimaryUse":"Garage","PropertyID":"OMNI","RecID":32839,"RecordID":1004,"RentableSquareFootage":22000,"SiteRecordID":"DEMO_29626","SiteTotalDollars":0,"Status":null,"Type":"LSE"},
                    {"Address":{"City":"Bellevue","Country":"USA","County":"","Latitude":47.6043250620083,"Longitude":-122.14236047437,"Region":"Northwest","State":"WA","StreetAddress":"Seattle 51","ZipCode":"98007"},"Headcount":0,"ImageBytes":null,"ImageRefPath":"","LeaseCount":1,"Leases":null,"Name":"Bellevue","NextExpire":"\/Date(1260424800000-0600)\/","Number":"1078","PrimaryUse":"Tower","PropertyID":"OMNI","RecID":32865,"RecordID":1027,"RentableSquareFootage":7652,"SiteRecordID":"DEMO_275651","SiteTotalDollars":0,"Status":null,"Type":"LSE"}
                ]; 

            var mylist = []; 
             $.each(data, function (i, item) { 
                try {
                    var pin = new Pushpin();  
                    pin.XZX.site = item;
                    mylist.push(pin); 
                } catch (e) { alert (e); } 
             });
            $(document).ready(function() {
                $('#btnAlert').click(function () { 
                    $('#content').html(mylist[$('#index').val()].XZX.getHtmlDescription());
                } );
            });
        </script>
    </head>
    <body >
        <div style="margin-left:auto; margin-right:auto; width:300px;">
            <div style="position:relative; width:250px;">
                <select id="index">
                    <option>0</option>
                    <option>1</option>
                </select> 

                <input type="submit" id="btnAlert"/>
            </div>
            <div id="content" style="position:relative;width:250px;"></div>
        </div>
    </body>
</html>

```

Also available on jsfiddle: [http://jsfiddle.net/M8YS2/](http://jsfiddle.net/M8YS2/)

At the end of the loop, `mylist[x].site` for any `x` all point to the same instance of my data item, how can I get around this?

---

> [user166390 answered](https://stackoverflow.com/a/6378448) (4 upvotes):
>
> The issue is that each `pin.XYZ` is the _same_ object -- namely `Pushpin.prototype.XYZ`.
> 
> The simple "fix" is to use:
> 
> ```
> var pin = new Pushpin(...)
> pin.XYZ = {
>    site: item
>    // the following will get tedious fast, consider one of the "property copy"
>    // implementations floating about -- including jQuery.extend   
>    getHtmlDescription: Pushpin.prototype.XYZ.getHtmlDescription
> }
> 
> ```
> 
> Which will assign a _new_ object to the `XYZ` property of each _new_ Pushpin object. Of course, this could be designed differently as well :)
> 
> At the very least, move `XYZ` off the Pushpin.prototype object -- this will allow it to treated nicely as an object (the way that `this` is passed about actually makes it nigh-impossible for a function dangling off an object of a prototype to access instance data of the object to which the prototype applies); the end-code might look something like:
> 
> ```
> // We .. "wrap" the real Pushpin constructor
> // somewhere global after Bing Mapi JS loaded
> Pushpin = (function (bingPushpin) {
>    return function Pushpin (...) {
>        var pin = new bingPushpin(...)
>        pin.XYZ = new XYZ()
>        // trick of "returning" from ctor
>        return pin
>    }
> })(PushPin)
> // ...
> var pin = new Pushpin(...)
> pin.XYZ.site = item
> 
> ```
> 
> Happy coding.
> 
> * * *
> 
> Pre-update answer:
> 
> This actually isn't a scoping issue -- there are no inadvertent closures created and each expression is strictly evaluated.
> 
> I suspect there is another problem, such as unexpected input (data contains a bunch of the _same item_) or flawed assumption (such that objects are magically cloned) or something unrelated.
> 
> Happy coding.
> 
> * * *
> 
> Analysis:
> 
> ```
>  var mylist = [];
>  $.each(data, function (i, item) {
>      // creates new object
>      var pin = new Pushpin(x, y);
>      // property of new object assigned
>      // remember that no "duplication" is occurring
>      pin.site = item;
>      // new object pushed to array
>      mylist.push(pin);
>  });
> 
> ```
> 
> Therefor, no `pin` will be the same _but it is possible that `item` evaluates to the same object each loop_. (The _only exception_ to this is if the Pushpin constructor uses `return` to return an existing object, which would be a fun fine indeed.)

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/q/6378406) — 3 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
