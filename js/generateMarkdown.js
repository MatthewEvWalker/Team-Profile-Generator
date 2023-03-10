function renderLicenseBadge(license) {
    let licenseString = ""
  
        if(license === "MIT") {
          licenseString = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
        };
  
        if(license === "Apache") {
          licenseString = `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
              };
  
        if(license === "PDDL") {
          licenseString = `[![License: ODbL](https://img.shields.io/badge/License-PDDL-brightgreen.svg)](https://opendatacommons.org/licenses/pddl/)`
        };
       
        if(license === "MPL") {
          licenseString = `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`
        };
  
        return licenseString
  }

  // Create a function to generate markdown for README
  function generateMarkdown(data) {
    return `# ${data.title} 
    ${renderLicenseBadge(data.licenses)}
    ## Table of Contents
    * [Description](#description)
    * [Installation](#installation)
    * [Usage](#usage)
    * [Contributing](#contributing)
    * [Tests](#tests)
    
  
    ## Description 
    ${data.description}
  
    ## Installation
    ${data.installation}
  
    ## Usage
    ${data.usage}
  
    ## Contributing
    ${data.contributing}
  
    ## Tests
    ${data.tests}
    
    # ${data.languages}
    - [Github: ${data.githubUsername}](https://github.com/${data.githubUsername})
    - Email: ${data.email}
  `;
  }
  
  module.exports = generateMarkdown;
  