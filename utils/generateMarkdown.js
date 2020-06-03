function generateMarkdown(data) {
  return `${generateTitle(data.projectTitle)}

## Description

${generateDescription(data.description)}

## Table of Contents

${tableOfContents()}

## Installation

${installInstructions(data.installInstructions)}

## Usage

${generateUsage(data.usage)}

## Credits

${generateCredits(data.credits)}

## License

${generateLicense(data.license)}

## Contributing

${generateContributorCovenant(data.contributorCovenant)}

${generateAdditionalContribution(data.additionalContribution)}

## Tests

${generateTests(data.tests)}

## Frequently Asked Questions

${generateQuestions(data.questions)}
`
}

function generateTitle(projectTitle) {
  return `# ${projectTitle}`;
}

function generateDescription(description) {
  return description;
}

function tableOfContents() {
  return `* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Frequently Asked Questions](#frequently-asked-questions)`;
}

function installInstructions(installInstructions) {
  return installInstructions;
}

function generateUsage(usage) {
  return usage;
}

function generateCredits(credits) {
  return credits;
}

function generateLicense(license) {
  if (license === "MIT") {
    return "[![MIT license](https://img.shields.io/badge/License-MIT-blue.svg)](https://choosealicense.com/licenses/mit/)"
  
  } else if (license === "GNU GPLv3") {
    return "[![GPLv3 license](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://choosealicense.com/licenses/gpl-3.0/)"
  
  } else {
    return "";
  }
}

function generateContributorCovenant(contributorCovenant) {
  if (contributorCovenant) {
    return "[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-v2.0%20adopted-ff69b4.svg)](https://www.contributor-covenant.org/)"
  }
}

function generateAdditionalContribution(additionalContribution) {
  return additionalContribution;
}

function generateTests(tests) {
  return tests;
}

function generateQuestions(questions) {
  return questions;
}

module.exports = generateMarkdown;
