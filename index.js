const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const fs = require("fs");

const questions = [
    {
        type: "input",
        message: "Enter a Project Title",
        name: "title"
    }
];

function writeToFile(fileName, data) {

    fs.writeFile(fileName, generateMarkdown(data), function(error) {
        if (err) {
            console.log(err);
        } else {
            console.log('Success!');
        }
    });

    // Do stuff with user response
     console.log(generateMarkdown(response));
}

function init() {

    inquirer
    .prompt(questions)
    .then( (response) => {
        
        writeToFile('README.md', response);
       
    });
}

init();
