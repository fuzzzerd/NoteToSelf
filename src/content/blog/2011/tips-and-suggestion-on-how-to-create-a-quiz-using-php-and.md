---
title: "Tips and Suggestion on how to create a quiz using php and jQuery"
description: "My answer to \"Tips and Suggestion on how to create a quiz using php and jQuery\" on Stack Overflow"
date: 2011-07-28
author:
  name: Nate Bross
tags:
  - php
  - jquery
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/6860117"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/6859966):*

> I do want to create a Quiz like on this site
> 
> > [Quiz](http://www.fatihacet.com/lab/jQuiz/)
> 
> How can I done this using php and jQuery? or is there other way to do this not using flash
> 
> I do got a idea from this and my problem is how to implement the timer with this
> 
> [Creating a Quiz with jQuery](https://stackoverflow.com/questions/4464406/creating-a-quiz-with-jquery/4465616#4465616)
> 
> answer and made by @Fatih

*I posted the following answer, which was chosen as the accepted answer and received 3 upvotes:*

Apparently I don't know my router bits; however, making a quiz can be really easy to build (hard-coded) or really hard to build (database-driven). The first is difficult to change later on while the second is quite easy.

It really depends what you want to do, both are quite doable with php and jQuery.

1.  I would setup a database of questions, answers, and user-responses.
2.  Then I'd createa a few php pages, one for the user to view /quiz.php and one for my jQuery to post data to /ajaxhelp.php (accessed by `$.post()`)
3.  ajaxhelp.php would return JSON data based on the post paramaters. Mabye a question + 4 answers for "nextQuestion" then the jQuery would generate the form with a few radio boxes for each answer
4.  The user picks their answer, and then you `$.post()` it back; ahaxhelp.php checks the database to see if that was marked as the correct answer, and returns the result.
5.  jQuery gets the "nextQuestion" and makes a new form
6.  Display summary of results

**edit**

After your comment about static data, this simple html page should get you started:

```
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
    <head>
        <script type="text/javascript" src="http://ajax.microsoft.com/ajax/jquery/jquery-1.4.2.min.js"></script>

        <script type="text/javascript">
            var q1wa = 
            { 
                Question: 'Question One Text', 
                Answers: 
                [ 
                    { AText: 'Answer1 Text', RightAnswer: true },
                    { AText: 'Answer2 Text', RightAnswer: false },
                    { AText: 'Answer3 Text', RightAnswer: false }
                ]
            };

            $(document).ready(function () {
                $('#question').html(q1wa.Question);
                for(var i = 0; i < q1wa.Answers.length; i++) {
                    $('#answers').append(q1wa.Answers[i].AText + "<br />");
                }

            });
    </script>
    </head>
    <body>
        <div id="question"></div>
        <div id="answers"></div>
    </body> 
</html>

```

It should be noted, that with this method, your "correct" answer is visible to anyone who cares to do a View Source, but this is a good starting point. It would also not be hard to incorporate a php portion to keep the answer secret by doing answer validation server-side instead of client-side.

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/6860117) — 3 upvotes *(accepted answer)*. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
