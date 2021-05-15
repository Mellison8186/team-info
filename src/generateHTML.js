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
                <h5 class="card-title">Manager</h5>
                <h6 class="card-text">${mgr.name}</h6>
              </div>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">${mgr.id}</li>
                <li class="list-group-item"><a href="mailto://" class="card-link">${mgr.email}</a></li>
                <li class="list-group-item"><a href="#" class="card-link">${mgr.officeNumber}</a></li>
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
                    <h6 class="card-text">${eng.Name}</h6>
                  </div>
                  <ul class="list-group list-group-flush">
                    <li class="list-group-item">${eng.id}</li>
                    <li class="list-group-item"><a href="mailto://" class="card-link">${eng.email}</a></li>
                    <li class="list-group-item"><a href="url" target="_blank" class="card-link">${eng.gitHub}</a></li>
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
              <h5 class="card-title">${empIntern.getRole()}</h5>
                <h6 class="card-text">${empIntern.name}</h6>
                  </div>
                    <ul class="list-group list-group-flush">
                      <li class="list-group-item">${empIntern.id}</li>
                      <li class="list-group-item"><a href="mailto://" class="card-link">${empIntern.email}</a></li>
                      <li class="list-group-item">${empIntern.school}</li>
                      </ul>
          </div>
        </div>
      </div>`
  };

module.exports = generateHTML => {
// destructure page data  
const { manager, eng, intern, ...header } = generateHTML;

  return `
  <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous">
<link rel="stylesheet" href="style.css">
    <title>Team Info</title>
</head>

<body>
  <header class=".col-12">
    <h1>${header.name}</h1>
  </header>

    <main class="container">
    ${createMgr(manager)}
    ${createEng(eng)}
    ${createIntern(intern)}
    </main>
</body>
</html>
  `;
};