# Readme Generator

Welcome to my first README.md generator application! This utility will produce an organized README.md that will be populated with entries made in a command line. This project was conceived as a means of practicing node.js, NPM, and some syntactic sugar features of ES6. The user will interact with the application through a command line powered by Inquirer.js which will collect the project title, description, installation instructions, usage information, contribution guidelines, testing instructions, license selection, and their GitHub user name. Once the selections have been made, the README.md template is populated with the user's input including a table of contents that will assist with navigating the README.md. Finally the result is written to an output file located in the same directory as the project. 

![Walkthrough Video](./assets/walkthrough.gif)

## Table of Contents

| |||
|:-|:-|:-|
| [Project Introduction](#readme-generator) | [Table of Contents](#table-of-contents) | [Goals and Methods](#goals-and-methods) 
| [Installation and Use](#installation-and-use) | [Technologies](#technologies) | [Deployed Link](#deployed-link) |
| [Authors](#authors) | [Acknowledgments](#acknowledgments) | [License](#license) |
---

## Goals and Methods

From a learning standpoint this project was an opportunity to practice using node.js, npm, and a few features of ES6. These features include using function arrows (fat arrow =>), asynchronous programming utilizing  aysnc functions with await, and variable declarations using const instead of var. A practical application of these learning goals is a Readme.md generator. Since every project requires a good readme having a standard template generator to kick start the process will be handy for future projects.

Setting up Inquirer.js to prompt the user is as simple as making an array of questions. Inquirer.js gives the answers back in an object which makes getting the desired information later in the process straight forward. The answer object is passed to a generate function that uses a template literal to write most of the README.md. User provided information is added to the template literal with the use of ${} which allows an escape from the template literal and facilitated the insertion of parsed object data. Some of the data added to the template literal comes from a function call as is the case with license data. Since there were five license selections the output string was constructed inside a function instead. This helps maintain human readability of the template literal which facilitates future development.

Learning to effectively use ES6 async functions was a learning goal of the project. This objective required that functions that are not promise-based become so. Luckily node.js provides the promisify method inside the util package that can convert functions into promise based versions. Once a function was converted, building with it was a simple matter of declaring async before the function and including await for segments of work that operate asynchronously. See Snippet 1 for an example:

Snippet 1:
```javascript
async function init() {
	try {
		const answers = await promptUser(questions);
	...
```

Other ES6 practice objectives, such as making use of fat arrow and variable declarations using const and let, can be found throughout the codebase.


## Installation and Use

You will need node.js installed so that you can fetch the inquirer.js package. If you have the package.json file included in this repository you need only type 'npm install' into a command line provided you are in the project directory.

## Technologies 

* [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
* [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
* [Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
* [Node.js](https://nodejs.org/en/)
* [Inquirer.js](https://www.npmjs.com/package/inquirer)

## Authors

Coleman Buffa

* [Link to Git Hub](https://github.com/asdf/)
* [LinkedIn](https://www.linkedin.com/in/coleman-buffa/)

## Acknowledgments

My thanks to the many mentors and friends who are a constant source of project ideas, learning topics, and guidance.

## License
Click the shield for license information:
[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)

### [Back to Table of Contents](#table-of-contents)