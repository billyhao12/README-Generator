const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const fs = require("fs");

const questions = [
    {
        type: "input",
        message: "Enter a Project Title",
        name: "projectTitle"
    },

    {
        type: "input",
        message: "Enter a Project Description",
        name: "description"
    },

    {
       type: "input",
       message: "Enter Instructions for Installation",
       name: "installInstructions"
    },

    {
        type: "input",
        message: "Enter Usage Instructions",
        name: "usage"
    }

];

function writeToFile(fileName, data) {

    fs.writeFile(fileName, generateMarkdown(data), function(error) {
        if (error) console.log(error);
        else console.log('Success!');
    });

}

function init() {

    inquirer
    .prompt(questions)
    .then( (response) => {
        
        writeToFile('README.md', response);

    });

}

init();
