const { default: inquirer } = require("inquirer");
const Employee = require("./lib/employee");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const Manager = require("./lib/manager");
const membersObjArray = require("./index");

function managerType(manager) {
  return `
<h2>${manager.name}</h2>
<p>${manager.name}</p.
<p>${manager.id}</p>
<p>${manager.email}</p>
<p>${manager.office}</p>
`
}

function engineerType(engineer) {
  return `
<h2>${engineer.name}</h2>
<p>${engineer.name}</p.
<p>${engineer.id}</p>
<p>${engineer.email}</p>
<p>${engineer.github}</p>
`
}

function internType(intern) {
  return `
<h2>${intern.name}</h2>
<p>${intern.name}</p.
<p>${intern.id}</p>
<p>${intern.email}</p>
<p>${intern.school}</p>
`
}

console.log(addCard(cards))

function addCard(cards) {
  console.log(cards);
  let emptyStr = "";
  cards.forEach(employee => {
    switch (employee.getRole()) {
      case "Manager":
        emptyStr += managerType(employee)
        break;

      case "Engineer":
        emptyStr += engineerType(employee)
        break;

      case "Intern":
        emptyStr += internType(employee)
        break;
      default: "";
      return;
    } 
  })
}



const markdown = cards => {
  return `
  
  <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link rel="stylesheet" href="./css/style.css">
  <link defer rel="stylesheet" href="./index.js">
  <title>Team Profile</title>
</head>

<body>
  <h1>My Team</h1> 
  ${addCard(cards)}
  </body>
  </html>
`;
}

module.exports = markdown;

