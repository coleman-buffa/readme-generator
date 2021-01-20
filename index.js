// Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const gMD = require('./utils/generateMarkdown.js');

const writeFileAsync = util.promisify(fs.writeFile);

// Question array for user input
const questions = [
	{
		type: 'input',
		name: 'title',
		message: 'Enter project name:',
	},
	{
		type: 'input',
		name: 'description',
		message: 'Enter project description:',
	},
	{
		type: 'input',
		name: 'instructions',
		message: 'Enter installation instructions:',		
	},
	{
		type: 'input',
		name: 'usage',
		message: 'Enter project usage information:',
	},
	{
		type: 'input',
		name: 'contribution',
		message: 'Enter guidelines on how to contribute:',
	},
	{
		type: 'input',
		name: 'testing',
		message: 'Enter test instructions:',
	},
	{
		type: 'list',
		name: 'license',
		message: 'Select a license:',
		choices: ['MIT', 'CCO', 'ISC', 'WTFPL', 'Unlicense'],
	},
	{
		type: 'input',
		name: 'github',
		message: 'Enter your GitHub user name:',
	},
	{
		type: 'input',
		name: 'email',
		message: 'Enter your email address:',		
	},
];

const promptUser = (qList) => {
	return inquirer.prompt(qList)
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
async function init() {
	try {
		const answers = await promptUser(questions);

		const md = gMD.generateMarkdown(answers);

		await writeFileAsync('blankREADME.md', md);

		console.log('Succesfully wrote to blank-README.md');
	} catch (err) {
		console.log(err);
	}
};

// Function call to initialize app
init();
