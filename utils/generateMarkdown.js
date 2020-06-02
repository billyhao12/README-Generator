function generateMarkdown(data) {
  return `${generateTitle(data.projectTitle)}

## Description

${generateDescription(data.description)}

## Table of Contents

${tableOfContents()}

## Installation

${installInstructions(data.installInstructions)}

## Usage

${generateUsage(data.usage)}`
}

function generateTitle(projectTitle) {
  return `# ${projectTitle}`;
}

function generateDescription(description) {
  return description;
}

function tableOfContents() {
  return ``;
}

function installInstructions(installInstructions) {
  return installInstructions;
}

function generateUsage(usage) {
  return usage;
}


module.exports = generateMarkdown;
