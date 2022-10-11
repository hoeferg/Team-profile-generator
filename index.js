// TODO: Include packages needed for this application
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


let membersObjArray = [];



function createHtml() {
    console.log("here")
    fs.writeFileSync("./dist/index.html", markdown(membersObjArray)), (err) => err ? console.log("failed") : console.log("success");
}

function managerQuestions() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'mName',
            message: 'What is the name of the manager?',
        },
        {
            type: 'input',
            name: 'mId',
            message: 'What is the id of the manager?',
        },
        {
            type: 'input',
            name: 'mEmail',
            message: 'What is the email of the manager?',
        },
        {
            type: 'input',
            name: 'office',
            message: 'What is the office number of the manager?',
        },
    ]) .then(answers => {
        const manager = new Manager (answers.mName, answers.mId, answers.mEmail, answers.office)
        membersObjArray.push (manager)
        console.log(membersObjArray)
        buildTeam()
    })
} 

function engineerQuestions() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'eName',
            message: 'What is the name of the employee?',
        },
        {
            type: 'input',
            name: 'eId',
            message: 'What is the id of the employee?',
        },
        {
            type: 'input',
            name: 'eEmail',
            message: 'What is the email of the employee?',
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is the users github user name?',
        },

    ]).then(answers => {
        const engineer = new Engineer (answers.eName, answers.eId, answers.eEmail, answers.github)
        membersObjArray.push(engineer)
        console.log(membersObjArray)
        buildTeam()
    })
}

function internQuestions() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'iName',
            message: 'What is the name of the employee?',
        },
        {
            type: 'input',
            name: 'iId',
            message: 'What is the id of the employee?',
        },
        {
            type: 'input',
            name: 'iEmail',
            message: 'What is the email of the employee?',
        },
        {
            type: 'input',
            name: 'school',
            message: 'What is the interns school?',
        },
        
    ]).then(answers => {
        const intern = new Intern (answers.iName, answers.iId, answers.iEmail, answers.school)
        membersObjArray.push(intern)
        console.log(membersObjArray)
        buildTeam()
    })
}


function buildTeam () {
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


buildTeam();



// role();
// generateRoles();


