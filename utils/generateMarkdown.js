// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    return `
# ${data.title}

${data.description}

## Table of Contents

||||
|:-|:-|:-|
| [Project Introduction](#qwer) | [Table of Contents](#table-of-contents) | [Goals and Methods](#goals-and-methods) | 
| [Installation and Use](#installation-and-use) | [Technologies](#technologies) | [Deployed Link](#deployed-link) |
| [Authors](#authors) | [Acknowledgments](#acknowledgments) | [License](#license) |
---

## Goals and Methods

Describe project goals and methods here...

## Installation and Use

${data.instructions}

${data.usage}

## Technologies 

* [Technology Used](URL)

## Testing

${data.testing}

## Authors

Your name here
Email: ${data.email}

- [Link to Git Hub](https://github.com/${data.github}/)

## Acknowledgments

${data.contribution}

## License

* ${data.license}

### [Back to Table of Contents](#table-of-contents)
`
}

module.exports = {generateMarkdown};