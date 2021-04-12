var cards = '';

const generateHTML = info => {
    for (i=0; i<info.length; i++) {
        if(info[i].getRole() === 'Manager'){
        cards += (
            `<div class="container">
            <div class="row justify-content-start">
                <div class="col-4"></div>
                <div class="col-4">
            <div class="card-body">
                <h5 class="card-title">${info[i].name}</h5>
                <h6 class="card-text">${info[i].getRole()}</h6>
              </div>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">${info[i].id}</li>
                <li class="list-group-item"><a href="#" class="card-link">${info[i].email}</a></li>
                <li class="list-group-item"><a href="#" class="card-link">${info[i].officeNumber}</a></li>
              </ul>
                    </div>
              </div>
            </div>`
        )};
        if(info[i].getRole() === 'Engineer'){
            cards += (
                `<div class="container">
                <div class="row justify-content-start">
                    <div class="col-4"></div>
                    <div class="col-4">
                <div class="card-body">
                    <h5 class="card-title">${info[i].Name}</h5>
                    <h6 class="card-text">${info[i].getRole()}</h6>
                  </div>
                  <ul class="list-group list-group-flush">
                    <li class="list-group-item">${info[i].id}</li>
                    <li class="list-group-item"><a href="#" class="card-link">${info[i].email}</a></li>
                    <li class="list-group-item"><a href="#" class="card-link">${info[i].gitHub}</a></li>
                  </ul>
                  </div>
                  </div>
                </div>`
            )};
            if(info[i].getRole() === 'Intern'){
                cards += (
                    `<div class="container">
                    <div class="row justify-content-start">
                        <div class="col-4"></div>
                        <div class="col-4">
                    <div class="card-body">
                        <h5 class="card-title">${info[i].name}</h5>
                        <h6 class="card-text">${info[i].getRole()}</h6>
                      </div>
                      <ul class="list-group list-group-flush">
                        <li class="list-group-item">${info[i].id}</li>
                        <li class="list-group-item"><a href="#" class="card-link">${info[i].email}</a></li>
                        <li class="list-group-item">${info[i].school}</li>
                      </ul>
                      </div>
                    </div>
                    </div>`
                )};
                return cards;
    };
};
module.exports = generateHTML;