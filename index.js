const inquirer = require('inquirer');
const Employee = require("./lib/employee")
const Engineer = require("./lib/engineer")
const Intern = require("./lib/intern")
const Manager = require("./lib/manager")
const fs = require('fs');
const markdown = require('./generateMarkdown.js');
const { choices } = require('yargs');
const { jSXMemberExpression } = require('@babel/types');
const { default: generate } = require('@babel/generator');
// References the tests and other files

let membersObjArray = [];
// Array that all info is pushed to

// creates the html doc when info is done being collected. If it does not work it will show failed. 
function createHtml() {
    console.log("here")
    fs.writeFileSync("./dist/index.html", markdown(membersObjArray)), (err) => err ? console.log("failed") : console.log("success");
}

// Set of questions for the manager option
function managerQuestions() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of the manager?',
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is the id of the manager?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the email of the manager?',
        },
        {
            type: 'input',
            name: 'office',
            message: 'What is the office number of the manager?',
        },
        // Push the answers to the array string
    ]).then(answers => {
        const manager = new Manager(answers.name, answers.id, answers.email, answers.office)
        membersObjArray.push(manager)
        console.log(membersObjArray)
        buildTeam()
    })
}

// Set of questions for the engineer option
function engineerQuestions() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of the employee?',
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is the id of the employee?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the email of the employee?',
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is the users github user name?',
        },
// Push the answers to the array string
    ]).then(answers => {
        const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github)
        membersObjArray.push(engineer)
        console.log(membersObjArray)
        buildTeam()
    })
}

// Set of questions for the intern option
function internQuestions() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of the employee?',
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is the id of the employee?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the email of the employee?',
        },
        {
            type: 'input',
            name: 'school',
            message: 'What is the interns school?',
        },
// Push the answers to the array string
    ]) 
    }

// Is the start of the prompt and decides what questions should be asked.
function buildTeam() {
    inquirer.prompt([
        {
            type: 'list',
            name: 'job',
            message: 'What role would you like to add?',
            choices: ["manager", "engineer", "intern", "I do not need to add any other team members"]
        }
    ]).then(function (userInput) {
        switch (userInput.job) {
            case "manager": managerQuestions();
                break;
            case "engineer": engineerQuestions();
                break;
            case "intern": internQuestions();
                break;
            default: createHtml();
        }
    })
}

// Starts the prompts
buildTeam();