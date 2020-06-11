# One-Page Ecommerce Static Site (with Customer Portal & Recurring Billing)

This project demonstrates how to build an One-Page Ecommerce JAMStack
E-Commerce using a set of amazing tools: 11ty.js, TailwindCSS, Foxy.io and
Netlify.

These tools allow you to quickly and unexpensively create your e-commerce.

You can use this project to learn and understand how it was built, or you can
fork it and customize it to fit your needs.

Every file is commented to help you understand what it does, why we chose it to
be this way and how you can customize it. Also, each folder has it's own README
file so that you can better understand how it works when navigating the GitHub
repository.


## Acknowledgements

* Site foundation by https://github.com/scottishstoater/jamstack-web-starter
* Quantity button component from https://tailwindcomponents.com/component/number-input-counter
* TailwindCSS.com is great.
* 11ty static site generator: https://www.11ty.dev/
* Site layout and elements from https://stitches.hyperyolo.com/

# Overview

A JAMStack e-commerce is basically a pre-rendered e-commerce website. This means
that every page in e-commerce website is pre-built and is simply sent to the
client upon request.

### Why?

In short: because you'll have a lightning fast, safe and unexpensive website!

- **performance:** this makes it very fast. Not only there is no processing to be done
  when your client visit your store, but also the website can be distributed
  among may different servers across the globle with a service called Content
  Delivery Network (CDN), so that your client will access the fastest possible
  server anywhere it is.
- **security:** the server does not run anything. Therefore, it won't run
  anything provided by a malicious user. It is also not connected to any
  database, so you'll have no issues there either.
- **infraestructure costs:** the serverless architecture of JAM Stack requires
  only the CDN servers, which would probably be necessary anyway. 
- **ease of development** there are few requirements for the development
  environment. Testing can be done without much effort, including manual and
  acceptance tests.

### How?

In short: creating your products as simple files, then calling a script that
generates the entire website for you and finally deploying it to the server.

- **data:** your data can be stored however you want. It may be in a database
  you already use, it can be provided by an API from a server you already have
  or, if you're starting from scratch, let me suggest you to create simple text
  files Markdown a file for each product. Don't know Markdown? Don't worry,
  you'll learn what you'll need it no more than a few minutes.
- **templates:** your template files can most probably be written in the a
  templating language you are already familiar with. If you don't know any of
  them, don't worry, you can customize the templates provided in this project.
  We will use Nunjucks templating language in this project. It is a powerfull
  language and will most probably meet your needs.
- **style:** creating a responsive and visually attractive website can be quite
  a hard task. There are plenty of tools out there. For this project we chose
  Tailwind. It focuses on allowing custom designs. Of course there are a lot of
  ready made designs out there you can simply use, but the fact is that sooner
  or later you'll want to tweek it and build your own custom design. Tailwind is
  highly customizable and avoids imposing anything on you.
- **e-commerce:** Foxy.io's hosted cart solution fits perfectly with the
  serverless architecture. It does not require you to use any particular CMS or
  CRM and does not require you to provide your products and prices in advance.
  It provides the payment and shopping cart solution and allows you to customize
  it's look and feel.

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



