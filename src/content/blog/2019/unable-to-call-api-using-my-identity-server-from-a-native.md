---
title: "Unable to Call API using my identity server from a native application"
description: "My answer to \"Unable to Call API using my identity server from a native application\" on Stack Overflow"
date: 2019-01-21
author:
  name: Nate Bross
tags:
  - c#
  - docker
  - xamarin
  - identityserver4
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/54294194"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/54293098):*

> I would like to make a Identity server and the API in two separate dockers for a native application (client mobile). It is running on an NGINX Reverse Proxy and Let's Encrypt.
> 
> ```
>                                Dockers
>                      ---------------------------
>                     |       Reverse Proxy       |
>                     |  -----------------------  |
>    --------         | |    ----------------   | |
>   | Mobile | ---------|-> | IdendityServer |  | |
>    --------         | |   |   Port: 5000   |  | |
>        |            | |    ----------------   | |
>        |            | |            |          | |
>        |            | |    ----------------   | |
>        ---------------|-> |      API       |  | |
>                     | |   |   Port: 5001   |  | |
>                     | |    ----------------   | |
>                     |  -----------------------  |
>                     |                           |
>                     |      ----------------     |
>                     |     |   PostgreSQL   |    |
>                     |     |   Port: 5432   |    |
>                     |      ----------------     |
>                      ---------------------------
> 
> ```
> 
> ## With my current configuration:
> 
> *   The Reverse Proxy with Let's Encrypt is well working from the mobile
> *   The call API without \[Authority\] is well working from the mobile
> *   The Identity server connection with the Hybrid flow is working and my user’s claims is listed
> 
> My codes are below.
> 
> ## IdentityServer Dockerfile
> 
> ```
> FROM microsoft/dotnet:2.0-sdk
> COPY is4/* /app/
> WORKDIR /app
> 
> ENV ASPNETCORE_URLS http://*:5000
> EXPOSE 5000
> 
> ENTRYPOINT ["dotnet", "IdentityServer.dll"]
> 
> ```
> 
> ## API Dockerfile
> 
> ```
> FROM microsoft/dotnet:2.0-sdk
> COPY api/* /app/
> WORKDIR /app
> 
> ENV ASPNETCORE_URLS http://*:5001
> EXPOSE 5001
> 
> ENTRYPOINT ["dotnet", "ApiServer.dll"]
> 
> ```
> 
> ## DockerCompose
> 
> ```
> version: '3'
> 
> services:
>   identityserver:
>     image: identityserver
>     build:
>       context: .
>       dockerfile: IdentityServer/Dockerfile
>     container_name: ids
>     restart: always
>     ports:
>       - 5000:5000
> #    expose:
> #      - "5000"
>     environment:
>       ASPNETCORE_ENVIRONMENT: Development
>       VIRTUAL_PORT: 5000
>       VIRTUAL_HOST: ids.mydomain.com
>       LETSENCRYPT_HOST: ids.mydomain.com
>       LETSENCRYPT_EMAIL: myuser@mydomain.com
>       IDENTITY_ISSUER: "https://ids.mydomain.com"
>       IDENTITY_REDIRECT: "com.mobiletest.nativeapp"
>       IDENTITY_CORS_ORIGINS: "https://ids.mydomain.com"
>     depends_on:
>       - db
>   apiserver:
>     image: apiserver
>     build:
>       context: .
>       dockerfile: ApiServer/Dockerfile
>     container_name: api
>     restart: always
>     ports:
>       - 5001:5001
> #    expose:
> #      - "5001"
>     environment:
>       ASPNETCORE_ENVIRONMENT: Development
>       VIRTUAL_PORT: 5001
>       VIRTUAL_HOST: api.mydomain.com
>       LETSENCRYPT_HOST: api.mydomain.com
>       LETSENCRYPT_EMAIL: myuser@mydomain.com
>       IDENTITY_AUTHORITY: "http://identityserver:5000"
>       CLIENT_CORS_ORIGINS: "com.mobiletest.nativeapp"
>     depends_on:
>       - identityserver
>       - db
>     links:
>       - identityserver
>   db:
>     image: postgresql:10
>     build:
>       context: .
>       dockerfile: PostgreSQL/Dockerfile
>     container_name: db
>     restart: always
>     ports:
>       - "5432:5432"
>     volumes:
>       - /www/database:/var/lib/postgresql/data
>     environment:
>       - PGDATA=/var/lib/postgresql/data/pgdata
> 
> networks:
>     default:
>        external:
>          name: nginx-proxy
> 
> ```
> 
> ## IdentityServer Startup Code
> 
> ```
> public void ConfigureServices(IServiceCollection services)
> {
>     services.AddDbContext<ApplicationDbContext>(options =>
>         options.UseNpgsql(Configuration.GetConnectionString("DefaultConnection")));
>     services.AddIdentity<ApplicationUser, IdentityRole>()
>         .AddEntityFrameworkStores<ApplicationDbContext>()
>         .AddDefaultTokenProviders();
> 
>     // Add application services.
>     services.AddTransient<IEmailSender, EmailSender>();
> 
>     services.AddMvc();
> 
>     // Configure identity server with in-memory stores, keys, clients and scopes
>     services.AddIdentityServer(opt =>
>     {
>         opt.IssuerUri = Configuration["IDENTITY_ISSUER"];
>         opt.PublicOrigin = Configuration["IDENTITY_ISSUER"];
>     })
>     .AddCorsPolicyService<InMemoryCorsPolicyService>() // Add the CORS service
>     .AddDeveloperSigningCredential()
>     .AddInMemoryPersistedGrants()
>     .AddInMemoryIdentityResources(Config.GetIdentityResources())
>     .AddInMemoryApiResources(Config.GetApiResources())
>     .AddInMemoryClients(Config.GetClients())
>     .AddAspNetIdentity<ApplicationUser>();
> 
>     services.AddAuthentication();
> 
>     // preserve OIDC state in cache (solves problems with AAD and URL lenghts)
>     services.AddOidcStateDataFormatterCache("aad");
> 
>     // add CORS policy for non-IdentityServer endpoints
>     services.AddCors(options =>
>     {
>         options.AddPolicy("CorsPolicy", policy =>
>         {
>             policy.AllowAnyOrigin().AllowAnyHeader().AllowAnyMethod();
>         });
>     });
> } // ConfigureServices()
> 
> // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
> public void Configure(IApplicationBuilder app, IHostingEnvironment env)
> {
>     if (env.IsDevelopment())
>     {
>         app.UseBrowserLink();
>         app.UseDeveloperExceptionPage();
>         app.UseDatabaseErrorPage();
>     }
>     else
>     {
>         app.UseExceptionHandler("/Home/Error");
>     }
> 
>     app.UseStaticFiles();
> 
>     app.UseIdentityServer();
> 
>     app.UseForwardedHeaders(new ForwardedHeadersOptions
>     {
>         ForwardedHeaders = ForwardedHeaders.XForwardedFor | ForwardedHeaders.XForwardedProto
>     });
> 
>     app.UseMvc(routes =>
>     {
>         routes.MapRoute(
>             name: "default",
>             template: "{controller=Home}/{action=Index}/{id?}");
>     });
> } // Configure()
> 
> ```
> 
> ## IdentityServer Config Code
> 
> ```
> public static IEnumerable<IdentityResource> GetIdentityResources()
> {
>     return new List<IdentityResource>
>     {
>         new IdentityResources.OpenId(),
>         new IdentityResources.Profile()
>     };
> }
> 
> public static IEnumerable<ApiResource> GetApiResources()
> {
>     return new List<ApiResource>
>     {
>         new ApiResource("api1", "My API")
>         {
>             ApiSecrets = { new Secret("secret".Sha256()) }
>         }
>     };
> }
> 
> public static IEnumerable<Client> GetClients()
> {
>     // client credentials client
>     return new List<Client>
>     {
>         new Client
>         {
>             ClientId = "native.hybrid",
>             ClientName = "Native Client (Hybrid with PKCE)",
>             AllowedGrantTypes = GrantTypes.Hybrid,
>             RequirePkce = true,
>             RequireConsent = false,
>             //RequireClientSecret = false,
>             ClientSecrets = { new Secret("secret".Sha256()) },                   
>             RedirectUris = { Configuration["IDENTITY_REDIRECT"] + "://signin-oidc" },
>             PostLogoutRedirectUris = { Configuration["IDENTITY_REDIRECT"] + "://signout-callback-oidc" },
>             AllowedScopes = { "openid", "profile" },
>             AllowedCorsOrigins = { Configuration["IDENTITY_CORS_ORIGINS"] },
>             AllowOfflineAccess = true,
>             //AllowAccessTokensViaBrowser = true
>             RefreshTokenUsage = TokenUsage.ReUse
>         }
>     };
> } // GetClients()
> 
> ```
> 
> ## Api Config code
> 
> ```
> public void ConfigureServices(IServiceCollection services)
> {
>     services.AddMvcCore()
>         .AddAuthorization()
>         .AddJsonFormatters();
>     if (Configuration["CLIENT_CORS_ORIGINS"] == "")
>     {
>         services.AddCors(options =>
>         {
>             options.AddPolicy("CorsPolicy",
>                 builder => builder
>                 .AllowAnyMethod()
>                 .AllowAnyOrigin()
>                 .AllowAnyHeader());
>         });
>     }
>     else
>     {
>         services.AddCors(options =>
>         {
>             options.AddPolicy("CorsPolicy",
>                 builder => builder
>                 .AllowAnyHeader()
>                 .AllowAnyMethod()
>                 .WithOrigins(Configuration["CLIENT_CORS_ORIGINS"]));
>         });
>     }
>     services.AddAuthentication("Bearer");
>     services.AddAuthentication(options => //adds the authentication services to DI
>     {
>         //We are using a cookie as the primary means to authenticate a user (via “Cookies” as the DefaultScheme). We set the DefaultChallengeScheme to “oidc” because when we need the user to login, we will be using the OpenID Connect scheme.
>         options.DefaultScheme = "Cookies";
>         options.DefaultChallengeScheme = "oidc";
>     })
>         .AddCookie("Cookies")       //add the handler that can process cookies
>         .AddOpenIdConnect("oidc", options => //configure the handler that perform the OpenID Connect protocol
>         {
>             options.SignInScheme = "Cookies"; //is used to issue a cookie using the cookie handler once the OpenID Connect protocol is complete
>             options.Authority = Configuration["IDENTITY_AUTHORITY"]; //indicates that we are trusting IdentityServer
>             options.RequireHttpsMetadata = false;
>             options.ClientId = "native.hybrid";
>             options.SaveTokens = true;
>             options.ClientSecret = "secret"; //used to persist the tokens from IdentityServer in the cookie
>             options.ResponseType = "code id_token";
>         });
> 
>     services.AddMvc();
> } // ConfigureServices()
> 
> // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
> public void Configure(IApplicationBuilder app, IHostingEnvironment env)
> {
>     app.UseAuthentication();
> 
>     app.UseCors("CorsPolicy");
> 
>     app.UseForwardedHeaders(new ForwardedHeadersOptions
>     {
>         ForwardedHeaders = ForwardedHeaders.XForwardedFor | ForwardedHeaders.XForwardedProto
>     });
> 
>     app.UseMvc();
> } // Configure()
> 
> ```
> 
> ## API Controller code
> 
> ```
> [Route("api/[controller]")]
> [EnableCors("CorsPolicy")]
> [Authorize]
> public class ValuesController : Controller
> {
>     // GET api/values
>     [HttpGet]
>     public IEnumerable<string> Get()
>     {
>         return new string[] { "testvalue1", "testvalue2" };
>     }
> } 
> 
> ```
> 
> ## On Xamarin for the client mobile
> 
> ```
> var options = new OidcClientOptions
> {
>     Authority = "https://ids4.syladebox.com",
>     ClientId = "native.hybrid",
>     ClientSecret = "secret",
>     //Scope = "openid profile api1 offline_access",
>     Scope = "openid profile offline_access",
>     ResponseMode = OidcClientOptions.AuthorizeResponseMode.Redirect,
> 
>     RedirectUri = "com.mobiletest.nativeapp://signin-oidc",
>     PostLogoutRedirectUri = "com.mobiletest.nativeapp://signout-callback-oidc",
> 
>     //Flow = OidcClientOptions.AuthenticationFlow.Hybrid,
>     //Policy = policy,
> 
>     //Browser = new SFAuthenticationSessionBrowser()
>     // new in iOS 12
>     Browser = new ASWebAuthenticationSessionBrowser()
>     //Browser = new PlatformWebView()
> };
> 
> _client = new OidcClient(options); 
> 
> var result = await _client.LoginAsync(new LoginRequest());
> 
> if (result.IsError)
> {
>     OutputText.Text = result.Error;
>     return;
> }
> 
> if (result.AccessToken != null)
> {
>     var client = new HttpClient();
>     client.SetBearerToken(result.AccessToken);
>     var response = await client.GetAsync("https://api.mydomain.com/api/values");
>     if (!response.IsSuccessStatusCode) 
>     {
>         OutputText.Text = response.ReasonPhrase;
>         return;
>     }
> 
>     var content = await response.Content.ReadAsStringAsync();
>     OutputText.Text = JArray.Parse(content).ToString();
> }
> 
> ```
> 
> ## Problem not resolved:
> 
> The problem is to unable to invoke the API on behalf of my user. It returns either or "No authorized" either or "Bad gateway" after:
> 
> ```
> response = await client.GetAsync("https://api.mydomain.com/api/values"); 
> 
> ```
> 
> These errors are depending of the environment variables in the IdentityServer and Api dockers.
> 
> My current environment variables are:
> 
> IDENTITY\_ISSUER: "[https://ids.mydomain.com](https://ids.mydomain.com)"
> 
> IDENTITY\_REDIRECT: "com.mobiletest.nativeapp"
> 
> IDENTITY\_CORS\_ORIGINS: "[https://ids.mydomain.com](https://ids.mydomain.com)"
> 
> IDENTITY\_AUTHORITY: "[http://identityserver:5000](http://identityserver:5000)"
> 
> CLIENT\_CORS\_ORIGINS: "com.mobiletest.nativeapp"
> 
> The API call ([https://api.mydomain.com/api/values](https://api.mydomain.com/api/values)) returns "Bad gateway".
> 
> I think that IDENTITY\_ISSUER, IDENTITY\_REDIRECT are corrects because the Identity server connexion is successful.
> 
> Is the problem coming from the other environment variables (IDENTITY\_CORS\_ORIGINS, IDENTITY\_AUTHORITY and CLIENT\_CORS\_ORIGINS) or the Identity Server/API codes?
> 
> ## Update January, 26:
> 
> To make sure if my API program works, I redid the API program to the simplest:
> 
> ```
>         public void ConfigureServices(IServiceCollection services)
>         {
>             services.AddMvc();
> 
>             services.AddAuthentication("Bearer")
>                 .AddIdentityServerAuthentication(IdentityServerAuthenticationDefaults.AuthenticationScheme, options =>
>                  {
>                      options.Authority = Configuration["IDENTITY_AUTHORITY"];
>                      options.ApiName = "api";
>                      //options.ApiSecret = "secret";
>                  });
> 
>             // Add CORS policy for non-IdentityServer endpoints
>             services.AddCors(options =>
>             {
>                 options.AddPolicy("api", policy =>
>                 {
>                     policy.AllowAnyOrigin().AllowAnyHeader().AllowAnyMethod();
>                 });
>             });
>         } // ConfigureServices()
> 
>         // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
>         public void Configure(IApplicationBuilder app, IHostingEnvironment env)
>         {
>             app.UseAuthentication();
> 
>             app.UseCors("api");
> 
>             app.UseForwardedHeaders(new ForwardedHeadersOptions
>             {
>                 ForwardedHeaders = ForwardedHeaders.XForwardedFor | ForwardedHeaders.XForwardedProto
>             });
> 
>             app.UseMvc();
>         } // Configure()
> 
> ```
> 
> with the api controller:
> 
> ```
>     [Route("api/[controller]")]
>     [Authorize(AuthenticationSchemes = IdentityServerAuthenticationDefaults.AuthenticationScheme)]
>     public class ValuesController : Controller
>     {
>         // GET api/values
>         [HttpGet]
>         public IEnumerable<string> Get()
>         {
>             return new string[] { "testvalue1", "testvalue2" };
>         }
>      }
> 
> ```
> 
> and I use in my first test the other identity server :
> 
> **demo.identityserver.io**
> 
> For this test, I make the following configuration:
> 
> ```
>   apiserver:
>     ...
>     ports:
>       - 5001:80
>     environment:
>       ...
>       IDENTITY_AUTHORITY: "https://demo.identityserver.io"
>       #CLIENT_CORS_ORIGINS (omitted in the code)
> 
> ```
> 
> My OidcClientOptions in the client code is:
> 
> ```
>             var options = new OidcClientOptions
>             {
>                 Authority = "https://demo.identityserver.io",
>                 ClientId = "native.hybrid",
>                 Scope = "openid profile email api offline_access",
>                 ResponseMode = OidcClientOptions.AuthorizeResponseMode.Redirect,
> 
>                 RedirectUri = "com.mobiletest.nativeapp://callback",
>                 PostLogoutRedirectUri = "com.mobiletest.nativeapp://callback",
>                 Browser = new ASWebAuthenticationSessionBrowser()
>             };
> 
> ```
> 
> The login function is in my first topic.
> 
> *   The Identity server connection with the Hybrid flow is working
> *   The API call is successful!
> 
> As demo.identityserver.io is the demonstration identity server, I have a doubt if it works as the case of production then I tested an other identity server (Okta) with the same API program:
> 
> **dev-xxxxxx.okta.com**
> 
> For this test, I make the following configuration:
> 
> ```
>   apiserver:
>     ...
>     ports:
>       - 5001:80
>     environment:
>       ...
>       IDENTITY_AUTHORITY: "https://dev-xxxxxx.okta.com"
>       #CLIENT_CORS_ORIGINS (omitted in the code)
> 
> ```
> 
> My OidcClientOptions in the client code is:
> 
> ```
>             var options = new OidcClientOptions
>             {
>                 Authority = "https://dev-xxxx.okta.com",
>                 ClientId = "xxxxxxxxxxxxxxxxxxx", // ClientId is hidden in this topic
> 
>                 Scope = "openid profile email offline_access",
>                 ResponseMode = OidcClientOptions.AuthorizeResponseMode.Redirect,
> 
>                 RedirectUri = "com.okta.dev-xxxxxx:/callback",
>                 PostLogoutRedirectUri = "com.okta.dev-xxxxxx:/callback",
> 
>                 Browser = new ASWebAuthenticationSessionBrowser()
>             };
> 
> ```
> 
> *   The Identity server connection with the Hybrid flow is working
> *   The API call isn't working, it returns the message "Unauthorized".
> 
> With the two tests, I can not tell if my API program works well.
> 
> Could you help me? Thank you very much!

Have you tried using `.AddJwtBearer()` in your API instead of just `.AddAuthentication("Bearer")`?

Something like this:

```
services.AddAuthentication("Bearer")
    .AddJwtBearer("Bearer", options =>
    {
        options.Authority = "http://localhost:5000";
        options.RequireHttpsMetadata = false;
        options.Audience = "api1";
    });

```

Source: [http://docs.identityserver.io/en/latest/quickstarts/1\_client\_credentials.html](http://docs.identityserver.io/en/latest/quickstarts/1_client_credentials.html)

While the source is referring to client credentials, I think you probably want to be using Jwt Tokens regardless of the client type.

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/54294194) — 0 upvotes *(accepted answer)*. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
