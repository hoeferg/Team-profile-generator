// TODO: Include packages needed for this application
const inquirer = require('inquirer');

const fs = require('fs');
const markdown = require('./generateMarkdown');
const { choices } = require('yargs');
const { jSXMemberExpression } = require('@babel/types');
const { default: generate } = require('@babel/generator');


function generateRoles() {

    function roles() {
        inquirer.prompt([
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
        ]).then(answers => {
            const manager = new Manager(answers.mName, answers.mId, answers.mEmail, answers.office);
            roleArray.push(manager);
            roles();
        })
        }

        function engineerQuestions(){
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
            const engineer = new Engineer(answers.eName, answers.eId, answers.eEmail, answers.github);
            roleArray.push(engineer);
            roles();
        })

        }
            function internQuestions(){
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
                    const engineer = new Engineer(answers.iName, answers.iId, answers.iEmail, answers.school);
                    roleArray.push(engineer);
                    roles();
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

role();
generateRoles();


