const { default: inquirer } = require("inquirer");
const Employee = require("./lib/employee")
const Engineer = require("./lib/engineer")
const Intern = require("./lib/intern")
const Manager = require("./lib/manager")
const membersObjArray = require("./index")

function generateCards() {
  for (let i = 1; i < membersObjArray.length; i++) {
    let myDiv = document.createElement("div");
    myDiv.innerHTML = "<div class=\"card\">" + i + "div"
    container.appendChild(myDiv)

    function generateName() {
      let name = document.createElement(h2);
      name.innerHTML = "{answers[0].getName}";
      container.appendChild(name);
    }

    function generateRole() {
      let role = document.createElement(h3);
      role.innerHTML = "${answers[0].getRole}";
      container.appendChild(role);
    }

    renderEmoji()

    function generateName() {
      let id = document.createElement(p);
      id.innerHTML = "{answers[0].getName}";
      container.appendChild(id);
    }

    function generateEmail() {
      let email = document.createElement(p);
      email.innerHTML = "{answers.getEmail}";
      container.appendChild(email);
    }

    function generateFourthOption() {

      if (inquirer.prompt = office) {
        let office = document.createElement(p);
        office.innerHTML = "{answers.office}";
        container.appendChild(office);

      } else if (inquirer.prompt = github) {
        let github = document.createElement(p);
        office.innerHTML = "{answers.github}";
        container.appendChild(github);

      } else if (inquirer.prompt = github) {
        let github = document.createElement(p);
        office.innerHTML = "{answers.github}";
        container.appendChild(github);

      } else if (inquirer.prompt = school) {
        let github = document.createElement(p);
        office.innerHTML = "{answers.school}";
        container.appendChild(school);

      } else {
        return ""
      }
    }
  }
}

  function renderEmoji(emoji) {
    switch (emoji) {
      case "manager":
        return `<a href="https://www.flaticon.com/free-icons/man" title="man icons">Man icons created by Freepik - Flaticon</a>`;

      case "engineer":
        return `<a href="https://www.flaticon.com/free-icons/worker" title="worker icons">Worker icons created by Freepik - Flaticon</a>`;

      case "intern":
        return `<a href="https://www.flaticon.com/free-icons/internship" title="internship icons">Internship icons created by juicy_fish - Flaticon</a>`;
      case "none":
        return `N/A`;
    }
  }


  function markdown(answers) {
    console.log(answers[0].getRole())
    return `<html lang="en">
  
  <!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link rel="stylesheet" href="./css/style.css">
  <title>Team Profile</title>
</head>

<body>
  <h1>My Team</h1> 
  ${generateCards()}
`;
  }

  module.exports = markdown;

