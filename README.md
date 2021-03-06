# A JAM Stack e-Commerce with 11ty.js, tailwindcss and Foxy.io

Kickstart your e-commerce with a few clicks.

#### Are you in a rush? Go for it!
Click the `deploy` button bellow and you'll have in a few
minutes:
1. your site up and running on the web;
1. a new repository ready to receive pushes;
1. continuous deployment ready to go ― each new commit to
   master will result in a new version published onlyne;
1. your store ready to accept orders;

<a
href="https://app.netlify.com/start/deploy?repository=https://github.com/ndvo/jamstack-web-starter"><img
src="https://www.netlify.com/img/deploy/button.svg"
alt="Deploy to Netlify"></a>


# Overview

This project offers you a ready made JAM Stack website with
a hosted e-commerce solution. You'll see it in action right
away and will be able to customize everything to fit your
needs.

- **[JAM Stack?](https://jamstack.org/)** a serverless architecture providing pre-rendered websites.
- **[Hosted e-commerce
  solution?](https://wiki.foxycart.com/v/2.0/foxycarts_reason_for_being)** an e-commerce solution
  professionally managed. All security and compliance
  concearns are taken care of. You can focus on building
  your content.
- **[Continuous
  deployment?](https://www.netlify.com/products/workflow/)**
  your code will be easily and continuously delivered to
  production.

**[Convinced yet? Let's do it!](#lets-do-it)** Not quite? Go
on.

## Why?

In short: **because you'll have a lightning fast, safe and
unexpensive e-commerce website!**

Here's a longer version:

- **performance:** a JAM Stack makes your website  very
  fast. It's no miracle. Every page is pre-built during
  compilation, therefore not only there is no processing to
  be done when your client visit your store, but also the
  website can be distributed among may different servers
  across the globle with a service called Content Delivery
  Network (CDN). This means that your client will access the
  fastest possible server anywhere it is.
- **security:** the JAM Stack architecture means the server
  does not run anything. Therefore, it won't run anything
  provided by a malicious user. It is also not connected to
  any database, so you'll have no issues there either. The
  shopping cart and payment processing are done by a [PCI
  Compliant Level 1 Service
  Provider](https://wiki.foxycart.com/static/foxycart_security).
- **infraestructure costs:** the serverless architecture of
  JAM Stack requires only the CDN servers, which would
  probably be necessary anyway. 
- **ease of development** there are few requirements for the
  development environment. Testing can be done without much
  effort, including manual and acceptance tests.

## Who?

This is an Open Source project (as you can see), built on
top of [awesome projects](#acknowledgements) and sponsored
by Foxy.io.

The project was conceived after the guys at Foxy realized it
could help many small businesses and non-profit
organizations quickly go online after being severely hit by
the COVID-19 pandemic.

## How to use this project?

That's easy!

1. Fork it or Deploy it on Netlify
1. Customize it by adding your brand and products

Upon clicking the deploy to Netlify button you'll have a
website up and running, a forked repository to work with and
you'll be able to start customizing right away.

We're adding relevant comments to the code so that you
understand clearly where and how you can change it to
achieve what you need.  We're commenting each file and
adding a README to each folder. We surely cannot include
everything there is to know, but you'll find some helpful
references.

### How?



# Let's do it

There are two ways for you to start your own JAM Stack e-commerce using this
repository. You may fork it and customize it, or you may start your own from
scratch following the tutorial bellow.

## Let's fork it!
If you want to fork it, go ahead! Every file is documented so that you will know
what to tweak and how.

Simply click the fork me button and you will have your own version of the
repository.

## Let's deploy it!!

**What?** That's it! You can now deploy your own version of the site so that
you can already see it in production.

<a href="https://app.netlify.com/start/deploy?repository=https://github.com/ndvo/jamstack-web-starter"><img src="https://www.netlify.com/img/deploy/button.svg" alt="Deploy to Netlify"></a>

**Is that it?** Pretty much. You do need to configure your own Foxy.io account
and set the name, logo and products of your store, but it is basically done. But
what's the fun on that? I'm sure you need to create your own features and make
your store unique.

## Let's hack it!!!

It's time to get our hands dirty to have our e-Commerce ready to sell!

#### In short:

1. **Set your own products:** there's a `_products` folder. Replace the products with
   your own. If you need to fetch your products from an API
   or from a file, check the [data section](#data).
1. **Set your own logo:** replace the
   `src/static/img/mylogo.png` file with your own. Also,
   replace the *favicon* files in `src/static/img/`.
1. **Set your own theme:** if your are comfortable with CSS and
   TailWindCSS, go for it. If you aren't, check out the
   `tailwind.config.js` file in the root directory of the
   project. By setting these variables you can start making
   the website look your own.
1. **Set your own videos:** there's a `src/_highlights` folder. In this
   Each file contains something you want to highlight. Add
   or remove de `.md` files do add or remove highlights. The
   first one will be the first video available. They are
   also used to build the Highlight section of the website.
1. **Set your own texts:** there's a
   `src/_data/site.yaml` file. You'll find you can customize
   most of the site's texts there. You can set the
   navigation links, the highlight texts and display
   messages to your users.
 1. **Fetch your data on compile time:** there's a
    `src/_data/lorem.js` file. It demonstrates how to fetch
    data from your own API during compile time. This way you
    can have your content updated on each new deploy.
   

## Want to dive deeper? 

Here are some concepts that will help you go further

- **11ty's data:** your data can be stored however you want.
  It may be in a database you already use, it can be
  provided by an API from a server you already have or, if
  you're starting from scratch, let me suggest you to create
  simple text files Markdown a file for each product. Don't
  know Markdown? Don't worry, you'll learn what you'll need
  it no more than a few minutes.
- **11ty's templates:** your template files can most
  probably be written in the a templating language you are
  already familiar with. If you don't know any of them,
  don't worry, you can customize the templates provided in
  this project.  We will use Nunjucks templating language in
  this project. It is a powerfull language and will most
  probably meet your needs.
- **TailwindCSS:** creating a responsive and visually
  attractive website can be quite a hard task. There are
  plenty of tools out there. For this project we chose
  Tailwind. It focuses on allowing custom designs. Of course
  there are a lot of ready made designs out there you can
  simply use, but the fact is that sooner or later you'll
  want to tweek it and build your own custom design.
  Tailwind is highly customizable and avoids imposing
  anything on you.
- **e-commerce:** Foxy.io's hosted cart solution fits
  perfectly with the serverless architecture. It does not
  require you to use any particular CMS or CRM and does not
  require you to provide your products and prices in
  advance.  It provides the payment and shopping cart
  solution and allows you to customize it's look and feel.

# Example

Here's a plan: let's first add our own products. In doing so we will be able to
understand how we'll the store will fit our needs. Next we'll tweek it's look and
feel. Finally, we'll add some extra niceties for our store.

### Where do my products go?

You can do this in several ways. We'll explore two of them: creating your
products as Markdown files and consuming your products from an external API.

#### Customizing collections

You can learn a great deal about Eleventy's collections
https://www.11ty.dev/docs/collections/.

Here's what you need to get started:

1. Create a "products" collection by creating a `_products` folder in the `src`
   folder. If you wish to create new collections, simply create folders with
   different names, starting with `_` as in `_name`.
1. Customize your collection using the `_products.json` file in the `_products`
   folder.
   1. Set a "category" for all products in this folder. This well allow you to create pages that list all products in a category.
   1. Set the permalink for the items in the category. This will allow you to have a different page for each product.

##### Example: Allow the user to filter by category

Here are the changes we need to make to allow the user to filter our products by
category with a simple select button.

[...]

#### Customize the look and feel

TailWind will make you life easy here.
Visit https://tailwindcss.com/ and type what you need in their awesome search
bar. Grab the provide class, add it to your element and it will be mostly done.

Configuring the TailWind theme will make your life a lot easier when the time
comes to make changes to your store.

##### Example: styling the discount coupons

[..]


#### Adding a new feature: creating discount coupons

Creating a new feature is simply a matter of writing our node and Js code.

JS code in the `_assets/scripts/app.js` file will run on the client.

We'll use javascript data files to allow Eleventy to process our data on compile
time. This way we can dinamically generate data that will be updated on each
deploy.

[...]

##### Example: providing some discounts to categories

Foxy.io allows us to easily provide discount coupons valid for a specific period
of time. Let's create some easter eggs in our store so that costumers who
provide us with feedback can get a coupon.

[...]

# Acknowledgements

* Site foundation by https://github.com/scottishstoater/jamstack-web-starter
* Quantity button component from https://tailwindcomponents.com/component/number-input-counter
* TailwindCSS.com is great.
* 11ty static site generator: https://www.11ty.dev/
* Site layout and elements from https://stitches.hyperyolo.com/

