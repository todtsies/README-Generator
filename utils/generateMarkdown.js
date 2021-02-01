// Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license, color) {
    if (license === "None") {
        return "";
    
    } else {
        const formatLicense = license.split(" ").join("+");
        const badge = `https://img.shields.io/static/v1?label=license&message=${formatLicense}&color=${color}`;
        return badge;
    }
};

// Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    if (license === "None") {
        return "";
    } else {
        const queryString = license.split(" ").join("-");
        return `https://opensource.org/licenses/${queryString}`;
    }
}

// Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license, link, name) {
    if (license === "None") {
      return "No license information available."
  
    } else {
      return `
        Copyright (c) 2021 Emily B. Todt 
        Licensed under the [${license} license](${link}).
      `;
    }
  }

// Create a function to generate markdown for README
const generateMarkdown = (data) => {
  const { name, license, badgeColor: color } = data;

  const badge = renderLicenseBadge(license, color);
  const link = renderLicenseLink(license);
  const licenseMarkup = renderLicenseSection(license, link, name);
  const licenseBadge = `[![license](${badge})](${link})`;

  let optionalBadge;

  if (data.license === "None") optionalBadge = "";
  else optionalBadge = licenseBadge;
    
  
  return ` 
  <h1 align="center">${data.title}</h1>

  ${optionalBadge}

  ## Description
  ${data.description}

  ## Demo

  ![Application Preview](${data.demo})

  ## Table of Contents

  - [Description](#description)
  - [Demo](#demo)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributors](#contributors)
  - [Tests](#tests)
  - [License](#license)
  - [Technologies](#technologies)
  - [Questions](#questions)
  
  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Contributors
  ${data.contributors}

  ## Tests
  ${data.tests}

  ## License
  ${licenseMarkup}

  ## Technologies
  ${data.technologies.join(", ")}

  ## Questions
  Reach me on [GitHub](https://www.github.com/${data.username})  
  Reach me via email at <${data.email}>
`;
}

// Export generateMarkdown() function
module.exports = generateMarkdown;
