// TODO: Create a function that returns a license badge based on which license is passed in
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

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    if (license === "None") {
        return "";
    } else {
        const queryString = license.split(" ").join("-");
        return `https://opensource.org/licenses/${queryString}`;
    }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license, link, name) {
    if (license === "None") {
      return "No license information available."
  
    } else {
      return outdent`
        Copyright (c) 2021 ${name}  
        Licensed under the [${license} license](${link}).
      `;
    }
  }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  
    return ` 
  <h1 align="center">${answers.}


`;
}

module.exports = generateMarkdown;
