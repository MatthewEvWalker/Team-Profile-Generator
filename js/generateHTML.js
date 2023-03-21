const generateHTML = (arrayHTML) => {
  let htmlText =  
  `<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
  </head>
  <body>
      <h1>My Team</h1>
      ${arrayHTML.map((employee) => {
          return `
          <div class="card">
              <div class="card-header">
                  <h2>${employee.title}</h2>
                  <h3>${employee.employeeID}</h3>
              </div>
              <div class="card-body">
                  <p>${employee.email}</p>
                  <p>${employee.officeNumber}</p>
                  <p>${employee.githubUsername}</p>
                  <p>${employee.education}</p>
              </div>
          </div>
          `
      }).join('')}
  </body>
  </html>`
}
  
  module.exports = generateHTML;
  