function generateMarkdown(data) {
  return `
# ${data.title}

`;
}

// Have modular functions within the generateMarkdown function

module.exports = generateMarkdown;
