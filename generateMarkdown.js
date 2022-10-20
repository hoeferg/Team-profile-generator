const { default: inquirer } = require("inquirer");
const Employee = require("./lib/employee");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const Manager = require("./lib/manager");
const membersObjArray = require("./index");
// brings in other files

// creates the manager card with the info filled in
function managerType(manager) {
  return `<div class = "card">
<h2>Manager</h2>
<p>Name:${manager.name}</p>
<p>ID:${manager.id}</p>
<p>Email:${manager.email}</p>
<p>Office Number:${manager.office}</p>
</div>
`
}

// creates the engineer card with the info filled in
function engineerType(engineer) {
  return `<div class = "card">
<h2>Engineer</h2>
<p>Name:${engineer.name}</p>
<p>ID:${engineer.id}</p>
<p>Email:${engineer.email}</p>
<p>Github:${engineer.github}</p>
<div>
`
}

// creates the intern card with the info filled in
function internType(intern) {
  return `<div class = "card">
<h2>Intern</h2>
<p>Name:${intern.name}</p>
<p>Id:${intern.id}</p>
<p>Email:${intern.email}</p>
<p>School:${intern.school}</p>
<div>
`
}


// adds the cards types to the html
function addCard(cards) {
  console.log(cards);
  let emptyStr = "";
  cards.forEach (employee => {
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
      default: ""
    } 
  })
  return emptyStr
}


// This is the HTML funciton
const markdown = cards => {
  return `
  
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link rel="stylesheet" href="../assets/css/style.css">
  <link defer rel="stylesheet" href="../index.js">
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

