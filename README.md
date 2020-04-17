# 8.Employee_Summary
![Webpage](/assets/img/webpage.png)

## What this project is
This application will prompt the user to build an engineering team consisting of a manager and any number of engineers and interns. Once the user has entered all necessary data, an HTML file is generated in the `output` directory that displays a nicely formatted team roster. I created the application with the classes 'Employee', 'Manager', 'Engineer', and 'Intern'. The 'Employee' parent class was given the following properties and methods:
* name
* id
* title
* getName()
* getId()
* getEmail
* getRole()   *// Returns 'Employee'*

The other three classes expand upon 'Employee' and add more specific properties such as office number, school, Github username, etc. This app was also made with test-driven development in mind to ensure an efficient deployment and minimize major errors.

## Jest Implementation
![Jest](/assets/img/demo-test.gif)

## CLI Interaction
![CLI](/assets/img/demo-cli.gif)

## Why I began this project
One of the most important aspects of programming is writing code that is readable, reliable, and maintainable. Oftentimes, *how* the code is designed is just as important as the code itself. In this project, I built a Node CLI that takes in information about employees and generates an HTML webpage that displays summaries for each person. I also implemented a series of Javascript tests to make the code more maintainable and reliable.

## How I implemented this project
This project was implemented using [Node.js](https://nodejs.org/en/about/), [Inquirer](https://www.npmjs.com/package/inquirer/v/0.2.3), and [Jest](https://jestjs.io/), with [Bootstrap](https://getbootstrap.com/) for the front-end.

## What I hope to eventually accomplish with this project
This project will be a building block that I can expand upon to create other helpful applications that can prompt the user for input data and organize it into a neat, readable format.
