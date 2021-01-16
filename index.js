// Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const gMD = require('./utils/generateMarkdown.js');

const writeFileAsync = util.promisify(fs.writeFile);

// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
async function init() {
    try {
        const answers = await promptUser();

        const md = gMD.generateMarkdown(answers);

        writeFileAsync('blank-README.md', md);

        console.log('Succesfully wrote to blank-README.md');
    } catch(err) {
        console.log(err);
    }
};

// Function call to initialize app
init();
