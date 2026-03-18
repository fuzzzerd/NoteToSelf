---
title: "MVC best practice when adding functions to controller?"
description: "My answer to \"MVC best practice when adding functions to controller?\" on Stack Overflow"
date: 2010-04-09
author:
  name: Nate Bross
tags:
  - model-view-controller
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/2608559"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/2608530):*

> I'm writing a function in my controller; this is supposed to take in a form, process it, register the user in DB, send a confirmation email etc etc.
> 
> to avoid this function to be too cluttered, I was thinking of calling some sub-functions (eg:
> 
> ```
> function registration()
> {
>   //process form..
> 
>   _insertInDb($formdata)
> 
>   _send_mail($address);
> 
>   //load confirmation view..
> }
> 
> function _send_mail($to)
> {
>   //code here
> }
> 
> function _insertInDb($formdata)
> {
>   //other code here...
> }
> 
> ```
> 
> I'm not sure whether writing all the functions in the controller would be best practice -maybe I should insert all 'supporting' function (eg send\_mail and insertInDb in this example) in another file and then import them?
> 
> This would probably make the controller much more readable.. what's your view?

MVC is simply a presentation pattern, all of your "business logic" should reside outside of your "MVC" code. Your app should function exactly the same of all of MVC code went away and was replaced with something else.

I'd make a separate class, and have the controller invoke an instance of that class, which will make the necessary DB Inserts, send email alerts, do logging, etc.

**update**

Since CodeIgniter appears to be a php based CMS, I'd recommend starting here for indepth detail -- [http://php.net/manual/en/language.oop5.php](http://php.net/manual/en/language.oop5.php)

Code like this should get you moving the right direction:

```
<?php
class SimpleClass
{
    // property declaration
    public $var = 'a default value';

    // method declaration
    public function displayVar() {
        echo $this->var;
    }
}
?> 

```

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/2608559) — 2 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
