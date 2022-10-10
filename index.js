// TODO: Include packages needed for this application
const inquirer = require('inquirer');

const fs = require('fs');
const markdown = require('./generateMarkdown');
const { choices } = require('yargs');
const { jSXMemberExpression } = require('@babel/types');
const { default: generate } = require('@babel/generator');

// const generateREADME = ({ description, installation, usage, issues, contributions, questions, credits, licenses }) =>
// # $(question.title)

// ##

// TODO: Create an array of questions for user input
// const questions = [];
function generateRoles() {

    function roles() {
        inquirer
            .prompt([
                {
                    type: 'list',
                    name: 'job',
                    message: 'What is the role that person has?',
                    choices: ["manager", "engineer", "intern", "I do not need to add any other team members"]
                }]).then(function (userInput) {
                    switch (userInput.addPrompt) {
                        case "manager": managerQuestions();
                            break;
                        case "engineer": engineerQuestions();
                            break;
                        case "intern": internQuestions();
                            break;
                        default: markdown();
                    }
                })
    }

    function (managerQuestions) {
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
                name: 'office',
                message: 'What is the office number of the manager?',
            },

        ])
        function (engineerQuestions) {
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
            ])
            function (internQuestions) {
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
                ])
            }
        }

        // TODO: Create a function to write README file
        // function writeToFile(readme, generateREADME(answers)) { }
        .then((answers) => {
            const markdownPageContent = markdown(answers);

            fs.writeFile('index.html', markdownPageContent, (err) =>
                err ? console.log(err) : console.log('Successfully created HTML!')
            );
        });
    }
}
}
role();
generateRoles();


