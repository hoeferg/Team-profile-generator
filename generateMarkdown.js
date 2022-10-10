// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderIcon(icon) {
  switch (icon) {
    case "coffeeCup":
      return ``;

    case "Engineer":
      return ``;

    case "Intern":
      return ``;
    case "none":
      return `N/A`;
  }
}




// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string

// ${renderLicenseLink(answers.license)}
// TODO: Create a function to generate markdown for README
function generateHTML(answers) {
  return `
# ${answers.name}
${renderIcon(answers.position)}
## Table of Content
  * [Description](#description)
  * [Usage](#usage)
  * [Issue](#issue)
  * [Contribution](#contribution)
  * [Test](#test)
  * [User Story](#user-story)
  * [Installation](#installation)
  * [Technology Used](#technology-used)
  * [Questions](#questions)
  * [Credits](#credits)
  * [License](#license)


## Description 
${answers.description}

## Usage
${answers.usage}

## Issue
${answers.issue}

## Contribution
${answers.contribution}

## Test
${answers.test}

## User Story
${answers.userStory}

## Installation
${answers.installation}

## Technology Used
${answers.technologiesUsed}

## Questions
If you have any questions, how to contribute or additional feedback, please contact our GitHub Repository and we will get back to you as soon as possible.

Contact Info: 
GitHub: [${answers.github}](https://github.com/${answers.github})
  
## Credits
${answers.credits}

${renderLicenseSection(answers.license)}
`;
}

module.exports = generateHTML;

