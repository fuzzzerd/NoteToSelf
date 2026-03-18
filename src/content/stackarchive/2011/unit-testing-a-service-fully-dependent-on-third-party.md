---
title: "Unit Testing a Service fully dependent on third-party application"
description: "A question I asked on Stack Overflow"
date: 2011-08-18
author:
  name: Nate Bross
tags:
  - c#
  - .net
  - unit-testing
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/q/7114216"
---

*I [asked this on Stack Overflow](https://stackoverflow.com/q/7114216):*

I am currently writing a Windows Service in C# that will be responsible for hosting a WCF Service. When Service Operations are invoked, my service will execute a command line application, do some data processing on the StandardOutput and return the results. This command line application changes state of other third party services on the server.

This is a rare instance where I'm truely able to start from scratch, so I'd like to set it up correctly and in a way that can be easily unit tested. There is no legacy code, so I have a clean slate. What I'm struggling with is how to make my service unit-testable because it is almost entierly dependent on an external application.

My service operations have a roughly 1:1 ratio with operations the command line application does. If you have not guessed, I'm building a tool to allow remote administration of a service which only provides CLI administration.

Is this just a case where unit-tests are more trouble than they are worth? To provide some context, here's a quick sample from my proof of concept app.

```
    private string RunAdmin(String arguments)
    {
        try
        {
            var exe = String.Empty;
            if (System.IO.File.Exists(@"C:\Program Files (x86)\App\admin.exe"))
            {
                exe = @"C:\Program Files (x86)\App\admin.exe";
            }
            else
            {
                exe= @"C:\Program Files\App\admin.exe";
            }

            var psi = new System.Diagnostics.ProcessStartInfo
            {
                FileName = exe,
                UseShellExecute = false,
                RedirectStandardInput = true,
                RedirectStandardOutput = true,
            };

            psi.Arguments = String.Format("{0} -u {1} -p {2} -y", arguments, USR, PWD);

            var adm= System.Diagnostics.Process.Start(psi);

            var output = fmsadmin.StandardOutput.ReadToEnd();

            return output;
        }
        catch (Exception ex)
        {
            var pth = 
                System.IO.Path.Combine(
                    Environment.GetFolderPath(Environment.SpecialFolder.Desktop),
                    "FMSRunError.txt");

            System.IO.File.WriteAllText(pth, String.Format("Message:{0}\r\n\r\nStackTrace:{1}", ex.Message, ex.StackTrace));

            return String.Empty;
        }
    }

    public String Restart()
    {
        var output = this.RunAdmin("/restart");
        return output; // has cli tool return code
    }

```

Without adding a LOT of "test" code to my RunAdmin method, is there any way to unit-test this? Obviously I could add a lot of code to the RunAdmin method to "fake" output, but I'd like to avoid that if possible. If that is the recommend way, I can probably create a script for myself to create all possible output. Is there another way?

---

> [rsbarro answered](https://stackoverflow.com/a/7115768) (8 upvotes):
>
> IMO, coming up with a way to test the code you are writing will not be more trouble than it is worth. Having good tests makes it easier to get new features to work, to bug fix, and to maintain your application. Based on what you have described, I think you need to decide which tests are better to use in your case: unit tests or integration tests.
> 
> If you want to write true unit tests, then you're going to have to abstract out the command line tool so you can write tests against an entity that will always return the same expected responses for your requests. If you create an interface to wrap the calls to the command line tool, then you can easily mock the responses. If you use this approach, then it is important to remember that what you are testing is that your service responds as expected to the output of the command line tool. You'll have to fake out all of the potential responses the command line tool could put out. Obviously, if the output is wildly complex this might not be an option. If you think you can fake out the responses, then take a look at some of the mocking frameworks out there (I like [Moq](http://code.google.com/p/moq/)). They will make the job much easier.
> 
> Another approach would be to use integration tests. These tests will rely on your service running the command line tool and checking against the real responses your service returns. Testing in this fashion will most likely require you to have a way to reset the machine you are testing on back to its original state, assuming that the command line application will actually make changes to that machine. In my experience these tests will generally run slower and be more difficult to maintain. However, if the data that is returned from the command line tool is too hard to fake out, then integration tests are a way to go.
> 
> Another approach, and probably the one I would go with, is to use a bit of both. When the command line tool is easy to fake out, use unit tests. When it's not, use integration tests. For my projects, I vastly prefer when I can write true unit tests that don't rely on anything external. Unfortunately, since I have to deal with a lot of older code, that's not always possible. However, even when it is I always feel better if I can slap a high level integration test over the whole thing, just for a little added coverage. For example, if I'm writing a web site, I might have 100 unit tests that cover all of the nitty gritty that goes into building a web page, but if I can I'll have 1 or 2 integration tests that do a web request and check the text on the page, just for sanity's sake. Having both types of tests definitely gives me a higher level of confidence that the code is going to work as expected when it goes live.
> 
> Hope that helps.
> 
> **EDIT**  
> I was thinking about this some more, and there might be a relatively easy way to handle unit testing your application. To fake out the input from the command line tool, just run the command line tool for whatever scenario you are trying to test. Save the output as a text file, and then use that text file as the input to your test. If you use an interface and dependency injection your service code will be the same, regardless of whether you are running the tests or the actual application. For example, say we are testing a method that will print out the version number of the CLI:
> 
> ```
> public interface ICommandLineRunner
> {
>     string RunCommand(string command);
> }
> 
> public class CLIService
> {
>    private readonly ICommandLineRunner _cliRunner;
>    public CLIService(ICommandLineRunner cliRunner)
>    {
>        _cliRunner = cliRunner;
>    }
> 
>    public string GetVersionNumber()
>    {
>        string output = _cliRunner.RunCommand("-version");
>        //Parse output and store in result
>        return result;        
>    }
> }
> 
> [Test]
> public void Test_Gets_Version_Number()
> {
>     var mockCLI = new Mock<ICommandLineRunner>();
>     mockCLI.Setup(a => a.RunCommand(It.Is<string>(s => s == "-version"))
>        .Returns(File.ReadAllText("version-number-output.txt"));
> 
>     var mySvc = new CLIService(mockCLI.Object);
>     var result = mySvc.GetVersionNumber();
>     Assert.AreEqual("1.0", result);
> }
> 
> ```
> 
> In this case we're injecting the `ICommandLineRunner` into the `CLIService`, and we're mocking the call to `RunCommand` to return specific output that we've setup beforehand (the contents of our text file). This approach allows us to test that the `CLIService` makes the proper call to the `ICommandLineRunner`, and that it parses the output of that call correctly. If you need me to clarify anything about this approach please let me know.

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/q/7114216) — 3 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
