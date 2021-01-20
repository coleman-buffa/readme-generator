// Returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
	switch (license) {
		case 'MIT':
			return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
		case 'CCO':
			return `[![License: CC0-1.0](https://img.shields.io/badge/License-CC0%201.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)`
		case 'ISC':
			return `[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)`
		case 'WTFPL':
			return `[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)`
		case 'Unlicense':
			return `[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)`
		case '':
			return ``
	}
}

// Returns the license link 
// If there is no license, return an empty string
function renderLicenseLink(license) {
	switch (license) {
		case 'MIT':
		return `[License: MIT](https://opensource.org/licenses/MIT)`
	case 'CCO':
		return `[License: CC0-1.0](http://creativecommons.org/publicdomain/zero/1.0/)`
	case 'ISC':
		return `[License: ISC](https://opensource.org/licenses/ISC)`
	case 'WTFPL':
		return `[License: WTFPL](http://www.wtfpl.net/about/)`
	case 'Unlicense':
		return `[License: Unlicense](http://unlicense.org/)`
	case '':
		return ``
	}
}

// Growing room for making an entire license section
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// Returns the title text in the ToC that is formatted correctly for markdown linking
const tocTitle = (title) => {
	let titleLower = title.toLowerCase();
	if (titleLower.indexOf(' ') >= 0) {
		return titleLower.split(' ').join('-')
	} else {
		return titleLower
	}
}

// Generates the README template
function generateMarkdown(data) {
    return `# ${data.title}

${data.description}

## Table of Contents

||||
|:-|:-|:-|:-|:-
| [Project Introduction](#${tocTitle(data.title)}) | [Table of Contents](#table-of-contents) | [Goals and Methods](#goals-and-methods) 
| [Installation and Use](#installation-and-use) | [Technologies](#technologies) | [Deployed Link](#deployed-link) |
| [Authors](#authors) | [Contribution](#contribution) | [License](#license) |
---

## Goals and Methods

Describe project goals and methods here...

## Installation and Use

${data.instructions}

${data.usage}

## Technologies 

* [Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

## Testing

${data.testing}

## Authors

Email: ${data.email}

- [Git Hub Profile](https://github.com/${data.github}/)

## Contribution

${data.contribution}

## License

${renderLicenseBadge(data.license)}

### [Back to Table of Contents](#table-of-contents)
`
}

module.exports = {generateMarkdown};