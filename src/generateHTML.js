const createMgr = mgr => {
if (!mgr) {
  return '';
}
return`
<div class="container">
        <div class="row justify-content-start">
          <div class="col-4"></div>
            <div class="col-4">
              <div class="card-body">
                <h5 class="card-title" placeholder="Role">${mgr.getRole()}</h5>
                <label class="h6 card-text">Name: ${mgr.name}</label>
              </div>
              <ul style="list-style: none" class="list-group list-group-flush">
                <li>
                <label class="list-group-item">ID Number: ${mgr.id}
                </label>
                </li>
                <li>
                <label class="list-group-item">Email Address: <a href="mailto://" class="card-link">${mgr.email}</a></labe></li>
                <li>
                <label class="list-group-item" class="card-link">Office Number: ${mgr.officeNumber}</label></li>
              </ul>
            </div>
          </div>
      </div>
      `;

};

const createEng = eng => {
  if(!eng) {
    return '';
  }
  return `
  <div class="container">
      <div class="row justify-content-start">
          <div class="col-4"></div>
            <div class="col-4">
              <div class="card-body">
                <h5 class="card-title">${eng.getRole()}</h5>
                    <label class="h6 card-text">Name: ${eng.name}</label>
                  </div>
                  <ul style="list-style: none" class="list-group list-group-flush">
                    <li>
                    <label class="list-group-item">ID Number: ${eng.id}
                    </label>
                    </li>
                    <li>
                    <label class="list-group-item">Email Address: <a href="mailto://" class="card-link">${eng.email}</a>
                    </label>
                    </li>
                    <li>
                    <label class="list-group-item">GitHub: <a href="https://github.com/" target="_blank" class="card-link">${eng.gitHub}</a>
                    </label>
                    </li>
                  </ul>
          </div>
        </div>
      </div>
      `
  };

const createIntern = empIntern => {
  if(!empIntern) {
    return '';
  }
  return `
  <div class="container">
      <div class="row justify-content-start">
        <div class="col-4"></div>
          <div class="col-4">
            <div class="card-body">
              <h5 class="card-title" placeholder="Role">${empIntern.getRole()}</h5>
                <label class="h6 card-text">Name: ${empIntern.name}</label>
                  </div>
                    <ul style="list-style: none" class="list-group list-group-flush">
                      <li>
                      <label class="list-group-item">ID Number: ${empIntern.id}
                      </label>
                      </li>
                      <li>
                      <label class="list-group-item">Email Address: <a href="mailto://" class="card-link">${empIntern.email}</a>
                      </label>
                      </li>
                      <li>
                      <label class="list-group-item">School Name: ${empIntern.school}
                      </label>
                      </li>
                      </ul>
          </div>
        </div>
      </div>`
  };

module.exports = generateHTML => {
// destructure page data
const { manager, eng, intern, ...header } = generateHTML;
var htmlString = ''
for(let i = 0; i<generateHTML.length; i++) {
  if (generateHTML[i].getRole() === 'Manager') {
    htmlString += createMgr(generateHTML[i])
  }
  if (generateHTML[i].getRole() === 'Engineer') {
    htmlString += createEng(generateHTML[i])
  }
  if (generateHTML[i].getRole() === 'Intern') {
    htmlString += createIntern(generateHTML[i])
  }
}
  return `<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous">
  <link rel="stylesheet" href="./src/style.css">
  <title>Team Info</title>
</head>

<body>
  <header class=".col-12">
    <h1>My Team</h1>
  </header>

    <main class="container">
    ${htmlString}
    </main>
</body>
</html>`;
};