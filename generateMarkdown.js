function generateCards () {
for (let i = 1; i < membersObjArray.length; i++ ) {
  let myDiv = document.createElement("div");
  myDiv.innerHTML = "<div class=\"card\">" + i +"div" 
  container.appendChild(myDiv)
}}


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


function generateHTML(answers) {
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

  <section>
    <div class="row">
      <div class="column">
        <div class="card">
          <div class="person">
            <h2>${answers[0].getName()}</h2>
            <p>Image here</p>
            <h3>Role</h3>
          </div>
          <ul class="person-info">
            <p>ID:</p>
            <p>Email:</p>
            <p>Office:</p>
          </ul>
        </div>
      </div>
    </div>
  </section>

  <section>
    <div class="row">
      <div class="column">
        <div class="card">
          <div class="person">
            <h2>Team member name</h2>
            <p>Image here</p>
            <h3>Role</h3>
          </div>
          <ul class="person-info">
            <p>ID:</p>
            <p>Email:</p>
            <p>Office:</p>
          </ul>
        </div>
      </div>
    </div>
  </section>

  <section>
    <div class="row">
      <div class="column">
        <div class="card">
          <div class="person">
            <h2>Team member name</h2>
            <p>Image here</p>
            <h3>Role</h3>
          </div>
          <ul class="person-info">
            <p>ID:</p>
            <p>Email:</p>
            <p>Office:</p>
          </ul>
        </div>
      </div>
    </div>
  </section>

  <section>
    <div class="row">
      <div class="column">
        <div class="card">
          <div class="person">
            <h2>Team member name</h2>
            <p>Image here</p>
            <h3>Role</h3>
          </div>
          <ul class="person-info">
            <p>ID:</p>
            <p>Email:</p>
            <p>Office:</p>
          </ul>
        </div>
      </div>
    </div>
  </section>

  <section>
    <div class="row">
      <div class="column">
        <div class="card">
          <div class="person">
            <h2>Team member name</h2>
            <p>Image here</p>
            <h3>Role</h3>
          </div>
          <ul class="person-info">
            <p>ID:</p>
            <p>Email:</p>
            <p>Office:</p>
          </ul>
        </div>
      </div>
    </div>
  </section>

</body>

</html>
`;
}

module.exports = generateHTML;

