const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const fs = require("fs");

const questions = [
    {
        type: "input",
        message: "Enter a project title",
        name: "projectTitle"
    },

    {
        type: "input",
        message: "Enter a project description",
        name: "description"
    },

    {
       type: "input",
       message: "Enter instructions for installation",
       name: "installInstructions"
    },

    {
        type: "input",
        message: "Enter usage instructions",
        name: "usage"
    },

    {
        type: "input",
        message: "List your collaborators",
        name: "credits"
    },

    {
        type: "list",
        message: "Choose a License",
        name: "license",
        choices: ["MIT", "GNU GPLv3", "Enter manually later"]
    },

    {
        type: "confirm",
        message: "Would you like to use the Contributor Covenant?",
        name: "contributorCovenant",
        default: true
    },

    {
        type: "input",
        message: "Enter additional contribution information",
        name: "additionalContribution"
    },

    {
        type: "input",
        message: "Enter tests for your application",
        name: "tests"
    },

    {
        type: "input",
        message: "Enter GitHub username to generate profile picture",
        name: "gitHubUsername"
    },

    {
        type: "input",
        message: "Enter email to contact you with",
        name: "email"
    }
];

function writeToFile(fileName, data) {

    fs.writeFile(fileName, generateMarkdown(data), function(error) {
        if (error) console.log(error);
        else console.log('Success!');
    });

}

async function init() {
    const response = await inquirer.prompt(questions);
    writeToFile('newREADME.md', response);
}

init();
