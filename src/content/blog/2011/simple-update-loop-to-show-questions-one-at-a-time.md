---
title: "Simple Update loop to show questions one at a time"
description: "My answer to \"Simple Update loop to show questions one at a time\" on Game Development"
date: 2011-04-21
author:
  name: Nate Bross
tags:
  - xna
  - xml
source: "Game Development"
sourceUrl: "https://gamedev.stackexchange.com/a/11460"
---

*Someone [asked on Game Development](https://gamedev.stackexchange.com/q/11446):*

> I have two lists which work with an XML file which holds questions and answers. At the moment the project displays all the questions at the same time so they "flicker" on the screen and iterate between each item in the list.
> 
> Whats the easiest way (coding) to pause the random generated list on any particular questions?
> 
> Question class:
> 
> ```
> class question
> {
>     public string questionString;
>     public string apple;
>     public string pear;
>     public string orange;
> 
>     //the ? indicate the int can be nullable so it can accept the string item
>     int? correctAnswer;
> 
>     public question(string newquestionString)
>     {
>         parseQuestion(newquestionString);
>     }
> 
>     public void parseQuestion(string newquestionString)
>     {
>         List<string> questionComponents = newquestionString.Split('|').ToList<string>();
> 
>         questionString = questionComponents[0];
>         apple = questionComponents[1];
>         pear = questionComponents[2];
>         orange = questionComponents[3];
> 
>         correctAnswer = Int32.Parse(questionComponents[4]);
> 
>     }
> 
> ```
> 
> In Game1:
> 
> ```
>     Random q = new Random();
>     int i = q.Next(questions.Count);
> 
> 
> 
>     spriteBatch.Begin();
>     spriteBatch.DrawString(myfont, questions[i], new Vector2(100 + 100 *i, 100), Color.Black);
>     spriteBatch.DrawString(myfont, myQuestions[i].questionString, new Vector2(100 + 100, 100), Color.Black);
>     spriteBatch.DrawString(myfont, myQuestions[i].apple, new Vector2(100 + 100, 200), Color.Black);
>     spriteBatch.DrawString(myfont, myQuestions[i].orange, new Vector2(100 + 100, 300), Color.Black);
>     spriteBatch.DrawString(myfont, myQuestions[i].pear, new Vector2(100 + 100, 400), Color.Black);
>     spriteBatch.End();
> 
> ```

*I posted the following answer, which was chosen as the accepted answer and received 3 upvotes:*

Does the code labeled "Game1" occur in the `Draw(GameTime gameTime)` method? If so, the problem looks as though you draw a different question each frame not that you need to draw slower. If you draw the same thing every frame, there should be no flicker; I would adjust the code like this:

```
// private class level variable
int currentQuestion = 0;


// in the Update(GameTime gameTime) method
if(userChoseAnswer) // check input and see if you should advance to the next question
{
    Random q = new Random();
    // might want to add code here to avoid showing 
    // questions already shown? unless that wont help your game
    currentQuestion = q.Next(questions.Count);  
}


// in the Draw(GameTime gameTime) method
spriteBatch.Begin();
spriteBatch.DrawString(myfont, questions[currentQuestion], new Vector2(100 + 100 *i, 100), Color.Black);
spriteBatch.DrawString(myfont, myQuestions[currentQuestion].questionString, new Vector2(100 + 100, 100), Color.Black);
spriteBatch.DrawString(myfont, myQuestions[currentQuestion].apple, new Vector2(100 + 100, 200), Color.Black);
spriteBatch.DrawString(myfont, myQuestions[currentQuestion].orange, new Vector2(100 + 100, 300), Color.Black);
spriteBatch.DrawString(myfont, myQuestions[currentQuestion].pear, new Vector2(100 + 100, 400), Color.Black);
spriteBatch.End();

```

<details>
<summary>Notable comments</summary>

**Nate** (0 upvotes): @Roy a good point on keypress.

</details>

---
*Originally posted on [Game Development](https://gamedev.stackexchange.com/a/11460) — 3 upvotes *(accepted answer)*. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
