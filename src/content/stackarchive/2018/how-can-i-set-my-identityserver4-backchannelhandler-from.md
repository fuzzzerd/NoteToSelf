---
title: "How can I set my IdentityServer4 BackChannelHandler from within an xUnit integration test using WebApplicationFactory?"
description: "A question I asked on Stack Overflow"
date: 2018-10-23
author:
  name: Nate Bross
tags:
  - c#
  - .net
  - oauth
  - identityserver4
  - openid-connect
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/q/52953732"
---

*I [asked this on Stack Overflow](https://stackoverflow.com/q/52953732):*

Update: After correcting the certificate issue, I'm now getting a 500 response form the test, with this message:

> InvalidOperationException: IDX20803: Unable to obtain configuration from: '[http://localhost/.well-known/openid-configuration](http://localhost/.well-known/openid-configuration)'.

That appears to be similar to this issue: [https://github.com/IdentityServer/IdentityServer4/issues/685](https://github.com/IdentityServer/IdentityServer4/issues/685); however, I can't come up with a way to set the backchannel client or handler from my test -- it seems like a chicken and egg situation.

* * *

This issue was fixed by using a real certificate/.pfx file. That lead to the above issue.

I'm using `WebApplicationFactory` to do integration tests over my API, and I think I've covered all the bases with getting the http clients configured correctly. I'm getting an error when calling an action in my API.

This is the error when executing a get against the api with a token:

> WWW-Authenticate: Bearer error="invalid\_token", error\_description="The signature key was not found"

Here's a simple test class that demonstrates this problem:

```
public class EntityControllerShould : IClassFixture<WebApplicationFactory<Startup>>
{
    private readonly WebApplicationFactory<Startup> _factory;

    public EntityControllerShould(WebApplicationFactory<Startup> factory)
    {
        _factory = factory;
    }

    [Fact]
    public async Task ReturnListOfEntities_ForGet()
    {
        // arrange
        _factory.CreateClient();

        var handler = _factory.Server.CreateHandler();

        var client = new HttpClient(handler) { BaseAddress = new System.Uri("http://localhost/") };

        // discover endpoints from metadata
        var dc = new DiscoveryClient(client.BaseAddress.ToString(), handler);
        var disco = await dc.GetAsync();
        if (disco.IsError)
        {
            Assert.True(false);
        }
        // request token
        var tokenClient = new TokenClient(disco.TokenEndpoint, "api_client", "secret", handler);
        var tokenResponse = await tokenClient.RequestClientCredentialsAsync("api1");

        if (tokenResponse.IsError)
        {
            Assert.True(false);
        }

        client.SetBearerToken(tokenResponse.AccessToken);

        // act
        var response = await client.GetAsync("api/entity/?id=123");
        // response code is 401 with the above quoted error in the header
        response.EnsureSuccessStatusCode();

        var responseString = await response.Content.ReadAsStringAsync();

        // assert
        Assert.NotNull(responseString);
    }
}

```

Snip from Startup.cs in the API project:

```
services.AddIdentityServer()
            .AddSigningCredential(myCertificate)
            .AddSigningCredential()
            .AddClientStore<CustomClientStore>()
            .AddInMemoryIdentityResources(IdentityServerConfig.IdentityResources)
            .AddInMemoryApiResources(IdentityServerConfig.Apis);

```

*   I am hosting the IdentityServer4 and the API in the same project.
*   When I manually perform integration tests, through a browser, it works just fine
*   I have found [this which seems very similar](https://github.com/IdentityServer/IdentityServer4/issues/399)

Is there something I need to account for when running in the context of an xunit test that I am not?

---

> [Nate answered](https://stackoverflow.com/a/53949025) (1 upvotes):
>
> The only solution I've come up with, is to setup a static Handler on the Startup class of the API project and then override it from within each unit test.
> 
> Specifically:
> 
> ```
> // startup.cs
> public static HttpMessageHandler Handler { get; set; }
> 
> // snip from configureservices
> .AddJwtBearer(jwt =>
>  {
>       // defaults as they were
>       jwt.Authority = "http://localhost:5000/";
>       jwt.RequireHttpsMetadata = false;
>       jwt.Audience = "api1";
>       // if static handler is null don't change anything, otherwise assume integration test.
>       if(Handler == null)
>       {
>           jwt.BackchannelHttpHandler = Handler;
>           jwt.Authority = "http://localhost/";
>       }
>   });
> 
> ```
> 
> Complete listing from IdSvrAndApi project:
> 
> ```
>  public class Startup
>  {
>      public Startup(IConfiguration configuration)
>      {
>          Configuration = configuration;
>      }
> 
>      public IConfiguration Configuration { get; }
>      public static HttpMessageHandler Handler { get; set; }
> 
>      public void ConfigureServices(IServiceCollection services)
>      {
>          services.AddMvc();
> 
>          services.AddIdentityServer()
>              .AddDeveloperSigningCredential()
>              .AddInMemoryIdentityResources(Config.IdentityResources)
>              .AddInMemoryClients(Config.Clients)
>              .AddInMemoryApiResources(Config.Apis)
>              .AddTestUsers(TestUsers.Users);
> 
>         services.AddAuthentication()
>            .AddJwtBearer(jwt =>
>            {
>                jwt.BackchannelHttpHandler = Handler;
>                jwt.Authority = "http://localhost/";
>                jwt.RequireHttpsMetadata = false;
>                jwt.Audience = "api1";
>            });
>             .AddJwtBearer(jwt =>
>             {
>                 // defaults as they were
>                 jwt.Authority = "http://localhost:5000/";
>                 jwt.RequireHttpsMetadata = false;
>                 jwt.Audience = "api1";
>                 // if static handler is null don't change anything, otherwise assume integration test.
>                 if(Handler == null)
>                 {
>                     jwt.BackchannelHttpHandler = Handler;
>                     jwt.Authority = "http://localhost/";
>                 }
>             });
>     }
> 
> ```
> 
> A fully working sample of this can be seen here: [https://github.com/fuzzzerd/IdentityServerAndApi](https://github.com/fuzzzerd/IdentityServerAndApi).
> 
> I have not received a definitive answer on if this is the recommended way to acheive this, but I did open an issue on the project here: [https://github.com/IdentityServer/IdentityServer4/issues/2877](https://github.com/IdentityServer/IdentityServer4/issues/2877)

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/q/52953732) — 0 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
