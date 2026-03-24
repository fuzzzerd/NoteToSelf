---
title: "How do i call WCF services in Silverlight?"
description: "My answer to \"How do i call WCF services in Silverlight?\" on Stack Overflow"
date: 2010-08-24
author:
  name: Nate Bross
tags:
  - silverlight
  - wcf
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/3553828"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/3553771):*

> Can anybody tell me why is this not working. I have created a WCF service which returns a list of customers from Northwind database.
> 
> ```
> using System;
> using System.Collections.Generic;
> using System.Linq;
> using System.Runtime.Serialization;
> using System.ServiceModel;
> using System.Text;
> using System.ServiceModel.Activation;
> 
> namespace WCFSilverlight.Web
> {
>     // NOTE: You can use the "Rename" command on the "Refactor" menu to change the class name "Customers" in code, svc and config file together.
>     [AspNetCompatibilityRequirements(RequirementsMode = AspNetCompatibilityRequirementsMode.Allowed)]
> 
>     public class Customers : ICustomers
>     {
> 
>         IEnumerable<Customer> ICustomers.GetAllCustomers()
>         {
>             NorthwindEntities objNorthwindEntities = new NorthwindEntities();
>             var query = from cust in objNorthwindEntities.Customers
>                         select cust;
>             return query.ToList();
>         }
>     }
> }
> 
> ```
> 
> And this is my App.xaml.cs code fragment :-
> 
> ```
> private void Application_Startup(object sender, StartupEventArgs e)
> {
>     this.RootVisual = new MainPage();
>     CustomersClient objCustomersClient = new CustomersClient();
>     objCustomersClient.GetAllCustomersCompleted += new EventHandler<GetAllCustomersCompletedEventArgs>(client_GetNameCompleted);
>     objCustomersClient.GetAllCustomersAsync();
> }
> 
> void client_GetNameCompleted(object sender, GetAllCustomersCompletedEventArgs e)
> {
>     MessageBox.Show(e.Result.ToString());      
> }
> 
> ```
> 
> If I am not wrong the methods in Silverlight are called asynchronously. So I have added a event handler to handle it and then called the method to retrieve customers. But I don't get anything in Messagebox. Further when I try to keep a breakpoint on `client_GetNameCompleted`, it never executes. But if I keep it in `Application_Startup` it does execute. What can be the problem?
> 
> Also explain me am I doing it correct? I've seen one example where one person directly defines the function using some strange symbols like `=>`.
> 
> **EDIT 1:-** Kindly also explain me what is e.UserState in e. What does it contain and what can I possibly do with it?
> 
> **EDIT 2 :-** :- I get this error [http://img178.imageshack.us/img178/9070/53923202.jpg](http://img178.imageshack.us/img178/9070/53923202.jpg)
> 
> The WCF service is working perfectly i have tested the link query. So there is no problem with Sql Server connection or WCF. Something is wrong with my client only.
> 
> This is my ServiceReference.ClientConfig :-
> 
> ```
> <configuration>
>     <system.serviceModel>
>         <bindings>
>             <basicHttpBinding>
>                 <binding name="BasicHttpBinding_ICustomers" maxBufferSize="2147483647"
>                     maxReceivedMessageSize="2147483647">
>                     <security mode="None" />
>                 </binding>
>             </basicHttpBinding>
>         </bindings>
>         <client>
>             <endpoint address="http://localhost:50622/Customers.svc" binding="basicHttpBinding"
>                 bindingConfiguration="BasicHttpBinding_ICustomers" contract="CustomerServ.ICustomers"
>                 name="BasicHttpBinding_ICustomers" />
>         </client>
>     </system.serviceModel>
> </configuration>
> 
> ```
> 
> Can you now tell me what is wrong?
> 
> Thanks in advance :)
> 
> **Update :-** I read in google you need to set serialization mode to unidirectional. But where do i set this? What do i write where?

*I posted the following answer, which was chosen as the accepted answer and received 2 upvotes:*

1.  You are correct, All network calls in Silverlight are done asynchronously.
2.  The `=>` syntax you mention is shorthand for defining a delegate method, its called a lambda. (see below)
3.  You should be able to set a break-point in the Completed event handler, if not try restarting Visual Studio (I've seen it act strangly before).
4.  `e.UserState` will have a reference to whatever object you put in the UserState variable for the async call (note the extra overload).

Code:

```
objCustomersClient.GetAllCustomersCompleted = delegate(object Sender, GetAllCustomersCompletedEventArgs e) 
{
    MessageBox.Show(e.Result.ToString());        
}; 

// is the same as

objCustomersClient.GetAllCustomersCompleted += new EventHandler<GetAllCustomersCompletedEventArgs>(client_GetNameCompleted); 
void client_GetNameCompleted(object sender, GetAllCustomersCompletedEventArgs e) 
{ 
    MessageBox.Show(e.Result.ToString());       
} 

// which is same as

objCustomersClient.GetAllCustomersCompleted += (sender, e) => { MessageBox.Show(e.Result.ToString());  }; 

```

<details>
<summary>Notable comments</summary>

**Nate** (0 upvotes): If you are using Linq-To-SQL you'll need to set Seralization mode on the entities via the Linq-To-SQL designer. Select the table and view its properties. Serialization will be one of them.

</details>

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/3553828) — 2 upvotes *(accepted answer)*. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
