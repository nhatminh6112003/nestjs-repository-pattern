<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Environment Setup

Set up your .env file. You can use the example.env file as reference:

# API configuration
PASSWORD=97sek1b38sgJFa7t
SUPABASE_URL=https://bsyeolbodsjfwyswunsx.supabase.co
SUPABASE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJzeWVvbGJvZHNqZnd5c3d1bnN4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTA5NDM2NDAsImV4cCI6MjAyNjUxOTY0MH0.BzxTOgHPlJK1uA_3oYDB8Fo_hS9jiEH5Y8iFVVpO7gY

## Swagger Documentation for the NestJS Project

This section provides details on the Swagger documentation integrated into our NestJS project. Swagger is an essential tool for designing, building, documenting, and consuming RESTful web services. It allows both developers and end-users to understand the capabilities of the service without accessing its source code.

### Accessing Swagger UI

Our project is configured to serve the Swagger UI automatically. You can access the interactive API documentation by navigating to the following URL when your application is running:

http://localhost:5000/api#/

### Swagger UI Screenshot

![Swagger UI](https://github.com/nhatminh6112003/nestjs-repository-pattern/assets/106549349/d0416285-76fc-45a9-b92b-17f57080d85e "Swagger UI in Action")

The screenshot above provides a glimpse of the Swagger UI for our NestJS project. Through this interface, you can explore various API endpoints, their expected parameters, and the structure of response objects.

For more details on using Swagger with NestJS, refer to the [NestJS Swagger documentation](https://docs.nestjs.com/openapi/introduction).

## API Documentation

This project uses Swagger for API documentation. Swagger provides an interactive UI where you can test out the different endpoints directly through the browser. Below are the available endpoints for managing customer data:

### Customers

- `POST /customers`
  
  Register a new customer. You need to provide customer details in the request body.

- `GET /customers`
  
  List all customers. This endpoint retrieves a list of all registered customers.

- `POST /customers/login`
  
  Log in a customer. This requires the customer's credentials in the request body.

- `GET /customers/username`
  
  Retrieve a customer by their username. Replace `username` in the path with the actual username of the customer you want to retrieve.
  
### Orders

- `POST /orders`: Create a new order.
  - Body: Includes order details.
- `GET /orders`: Retrieve a list of all orders.
- `GET /orders/{id}`: Get a specific order by its ID.
- `GET /orders/user/{id}`: Retrieve orders associated with a user ID.
- `PUT /orders/cancel/{order_id}`: Cancel an order by providing the order ID.

### Order Items

- `POST /orderItem`: Create a new order item.
  - Body: Includes item details linked to an order.
- `GET /orderItem`: Retrieve a list of all order items.
- `GET /orderItem/{id}`: Get a specific order item by its ID.

### Books

- `POST /books`: Create a new book entry.
  - Body: Includes details of the book such as title, author, etc.
- `GET /books`: Retrieve a list of all books.


