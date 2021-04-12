generateHTML(team);

const team = require('../team');
var cards = '';

const generateHTML = team => {
    console.log(team);
    for (i=0; i<team.length; i++) {
        if(team[i].getRole() === 'Manager'){
        cards += (
            `<div class="container">
            <div class="row justify-content-start">
                <div class="col-4"></div>
                <div class="col-4">
            <div class="card-body">
                <h5 class="card-title"><input placeholder="Manager's Name">${data.name}</h5>
                <h6 class="card-text"><input placeholder="Role">${data.employeeType}</h6>
              </div>
              <ul class="list-group list-group-flush">
                <li class="list-group-item"><input placeholder="ID">${data.employeeId}</li>
                <li class="list-group-item"><a href="#" class="card-link">Email Address</a>${data.emailAddy}</li>
                <li class="list-group-item"><input placeholder="Office Number">${data.officeNum}</li>
              </ul>
              </div>
            </div>
            </div>`
        )};
        if(team[i].getRole() === 'Engineer'){
            cards += (
                `<div class="container">
                <div class="row justify-content-start">
                    <div class="col-4"></div>
                    <div class="col-4">
                <div class="card-body">
                    <h5 class="card-title"><input placeholder="Engineer's Name">${data.engName}</h5>
                    <h6 class="card-text"><input placeholder="Role">${data.emplyeeId}</h6>
                  </div>
                  <ul class="list-group list-group-flush">
                    <li class="list-group-item"><input placeholder="ID">${data.ID}</li>
                    <li class="list-group-item"><a href="#" class="card-link">Email Address</a>${data.emailAddy}</li>
                    <li class="list-group-item"><a href="#" class="card-link">GitHub</a>${data.github}</li>
                  </ul>
                  </div>
                </div>
                </div>`
            )};
            if(team[i].getRole() === 'Intern'){
                cards += (
                    `<div class="container">
                    <div class="row justify-content-start">
                        <div class="col-4"></div>
                        <div class="col-4">
                    <div class="card-body">
                        <h5 class="card-title"><input placeholder="Intern's Name">${data.name}</h5>
                        <h6 class="card-text"><input placeholder="Role">${data.employeeType}</h6>
                      </div>
                      <ul class="list-group list-group-flush">
                        <li class="list-group-item"><input placeholder="ID">${data.employeeId}</li>
                        <li class="list-group-item"><a href="#" class="card-link">Email Address</a>${data.emailAddy}</li>
                        <li class="list-group-item"><input placeholder="School Name">${data.school}</li>
                      </ul>
                      </div>
                    </div>
                    </div>`
                )};
    };
};
module.exports = generateHTML;