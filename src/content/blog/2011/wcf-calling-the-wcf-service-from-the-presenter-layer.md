---
title: "WCF - Calling the WCF service from the Presenter Layer"
description: "My answer to \"WCF - Calling the WCF service from the Presenter Layer\" on Stack Overflow"
date: 2011-05-02
author:
  name: Nate Bross
tags:
  - .net
  - wcf
  - mvp
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/5860430"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/5859683):*

> I am new to WCF and I'm also learning the MVP design pattern. I have a test project with a working WCF service. I am able to test with the WCF test client and it works fine.
> 
> I need help with how to call the WCF service from my Presenter layer and then have the Presenter pass the data back to the View (winforms). I have a Windows Form with two textboxes named txtProductID and txtDescription. I also have a button named btnGetProductData. I would like the following to happen:
> 
> 1.  I will put a product id in the txtProductID field.
> 2.  I will click the btnGetProductData button and the presenter should call the GetProductData method from the WCF service and return the product description to the txtProductDescription field on my form.
> 
> Here is the pertinent code from the WCF service library:
> 
> ```
> IProductService.cs
> ------------------
> 
> using System;
> using System.Collections.Generic;
> using System.Linq;
> using System.Runtime.Serialization;
> using System.ServiceModel;
> using System.Text;
> 
> namespace MyWCFServices.ProductService
> {
>    [ServiceContract]
>     public interface IProductService
>     {
>         [OperationContract]
>         Product GetProductData(string ProductId);     
>     }
> 
>     [DataContract]
>     public class Product
>     {
>         [DataMember]
>         public string ProductID { get; set; }
>         [DataMember]
>         public string ProductDescription { get; set; }
> 
>     }
> }
> 
> ProductService.cs
> --------------------
> using System;
> using System.Collections.Generic;
> using System.Linq;
> using System.Runtime.Serialization;
> using System.ServiceModel;
> using System.Text;
> using MyWCFServices.ProductEntities;
> using MyWCFServices.ProductBusinessLogic;
> 
> namespace MyWCFServices.ProductService
> {
> 
>     public class ProductService : IProductService
>     {
>         ProductLogic productLogic = new ProductLogic();
> 
>         public Product GetProductData(string ProductId)
>         {
> 
>             ProductEntity productEntity = productLogic.
>                 GetProductData(ProductId);
>             Product product = new Product();
> 
>             TranslateProductEntityToProductContractData(productEntity, 
>                 product);
>             return product;
> 
>         }
> 
>         private Product TranslateProductEntityToProductContractData(
>             ProductEntity productEntity, Product product)
>         {
> 
>             product.ProductID = productEntity.ProductID;
>             product.ProductDescription = productEntity.ProductDescription;
> 
>             return product;                     
>         }        
>     }
> }
> 
> ```

*I posted the following answer, which was chosen as the accepted answer and received 1 upvote:*

I'm not sure where you're having issues, so I'll start at the beginning.

1.  You need to add a "Service Reference" to your Presentation Tier Project (this generates a proxy class you can use to call your service)
2.  You need to create an instance of the generated proxy class
3.  You need to call a method on the proxy class and store its value

From Visual Studio, right click your project and choose "Add Service Reference" and then navigate to the endpoint for your service.

Example Code:

```
// Presentation Tier (button event handler)
var proxy = new ServiceReference1.ProductServiceClient();
var prod = proxy.GetProductData("yourProductID");
txtDescription.Text = prod.Description;
txtProductID.Text = prod.ProductID; // same as passed parameter

```

<details>
<summary>Notable comments</summary>

**Nate** (0 upvotes): Yes, you still need to add a service reference in order to use the proxy class I have defined above and that you are trying to use in the code you just posted.

</details>

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/5860430) — 1 upvotes *(accepted answer)*. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
