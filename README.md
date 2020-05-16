# App Financial System

This project is a compilation of **financial formulas** led to the code to present an interface where they are put into practice several of the formulas that we can find for **financial calculation**.

In the formulas we find:

- interest rate conversion.
- value equations.
- annuities.

This project contains the Front End for the application if you wish to review the Back End please visit: [Financial System BackEnd Repositorie](https://github.com/danielmillan/financialsystem-backend)

# Demo

You can find the **online version** of the repository at: [Demo](https://financial-system-ecci.web.app/home)

# Installation

This project is available for use under the **MIT license**. Below is the information you must follow to install the project on your machine.

## Dependencies

This package needs as a **dependency the BackEnd service working**, so make sure that before using the package's functionalities you have correctly configured your BackEnd server.

After this the necessary **packages** are:

| Package| url| version	|
| ------ | ------ | ------ |
| Node| [https://nodejs.org/es/download/](https://nodejs.org/es/download/) | ^12.14.1	|
| Firebase| [https://firebase.google.com/docs?authuser=0](https://firebase.google.com/docs?authuser=0) | ^8.0.0	|

### CLI commands

To download and install the project, follow the steps below:

```sh
$ git clone https://github.com/danielmillan/financialsystem.git
$ cd financialsystem
$ npm install -d
$ npm start
```

# Deployment
This project is based on a [create-react-app](https://create-react-app.dev/docs/getting-started/) application, therefore you have two options to deploy the project on your server.

## Use Build Command
By default, you can use the **react-scripts build** utility to compile the package and publish the build folder on your http server, as follows:
```sh
$ npm run build
$ cp build/ /var/www/html
```
>Note: the folfer **/var/www/html** is the directory in linux, use the location of your http server.

## In Firebase Hosting
This project is configured to accept **express** deployment, for this use the following sentence:
```sh
$ firebase init (Init your app whit your firebase credentials and select only hosting option)
$ firebase deploy
```
