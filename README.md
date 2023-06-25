 <div  align="center">
<a  href="https://github.com/MemeeMaster/sneaker-store">
<img  src="/frontend/public/logo.png"  alt="Logo"  width="80"  height="80">
</a>
<h2>sneaker-store 👟</h2>
<p>
Full-stack <strong>educational</strong> project imitating real sneaker store.</p><br/></div>

## Installation with Docker
To install this application you'll need [Git](https://git-scm.com/), [Node.js](https://nodejs.org/en/), [npm](https://www.npmjs.com/) and [Docker](https://docs.docker.com/engine/install/)
Once you have them, do the following in your command line:
```bash
# Clone the repository
$ git clone https://github.com/MemeeMaster/sneaker-store

# Open repository
$ cd sneaker-store

# Build docker image with docker compose
$ docker compose build

# Create and run docker containers
$ docker compose up -d
```

## Usage
After successful installation, switch on your favourite web browser and go to **http://localhost:3000/sneaker-store/**

>  **Warning**: Make sure that you are on correct URL. During testing, I noticed that browsers like to redirect to https://localhost/sneaker-store/. If this is happening to you, just remove **"s"** from the protocol and add port **":3000"** to address or type the website URL manually.

Using the application is very simple. Just behave like on any internet store. 
- create your account,
- log in to your account,
- select sneaker that you like,
- choose quantity,
- go to cart and click 'Checkout',
- go forward and finish your order.
> :warning: **Disclaimer**: Remember that this is educational project. I'm so sorry, but I won't send you any product :grin:

## Stack
**Programming languages**:
- JavaScript,
- Java,
- SQL

**Frameworks**:
- React,
- Spring Boot

**Database**:
- MySQL (via Docker)

**Runtime environment**:
- Docker

**Application authentication**:
- JWT token stored in Cookies


## Features to do in future
- add options to log in via other services such as Google, GitHub etc,
- add profile features like changing photo or viewing shopping history,

If you have an idea contact me via this button [:red_circle:](mailto:wronski2002@wp.pl)

## Credits
**Packages used to complete this project:**

Front-end  created in **React :atom_symbol:**
- [Create React App](https://create-react-app.dev/)
- [react-router-dom](https://github.com/remix-run/react-router)
- [styled-components](https://styled-components.com/)
- [react-hook-form](https://react-hook-form.com/)
- [yup](https://github.com/jquense/yup)
- [favicon.io](https://favicon.io/favicon-generator/)
- [Font Awesome](https://fontawesome.com/)
- [axios](https://axios-http.com/)
- [universal-cookie](https://github.com/reactivestack/cookies/tree/master/packages/universal-cookie#readme)
- photos taken from [unsplash.com](https://unsplash.com/)
- inspiration taken from [Frontend Mentor](https://www.frontendmentor.io/challenges/ecommerce-product-page-UPsZ9MJp6/hub/ecommerce-product-page-BTBAnL48wL)

Back-end   created in **Spring Boot :leaves:**
- [MySQL connector](https://www.mysql.com/products/connector/)
- [Project Lombok](https://projectlombok.org/)
- [JWT](https://jwt.io/)

## Legacy content
**Old** static website can be found <a href="https://memeemaster.github.io/sneaker-store/" target="_blank">here</a>.
New one is much better and a little bit prettier :grin:

## Thank you!
If you have made it this far, thank you for your interest! I have put a lot of time and effort into this project and I will probably make it even better in the future, so please come back soon!

I would like to thank the entire development community who helped me when I encountered problems through [stackoverflow](https://stackoverflow.com/), among others.

I would like to thank ChatGPT as well :laughing:.

That's all from me. See you again soon! :wave:
