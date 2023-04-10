// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    var badge = ''
    return badge
}
//[![Licence](https://img.shields.io/github/license/Ileriayo/markdown-badges?style=for-the-badge)]

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { 
    const licenseLink = ''
    return licenseLink
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    const licenseSection = `${data.license}`
    return licenseSection
 }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    return `
    # ${data.title}

    ## Table of Contents
    - [Description](#description)
    - [Installation](#installation)
    - [Usage](#usage)
    - [Contributing](#contributing)
    - [Questions](#questions)
    - [License](#license)


    ## Description
    ${data.description}

    ## Installation
    ${data.installation}

    ## Usage
    ${data.usage}

    ## Contributing
    ${data.contribution}

    ## License
    ${data.license}

    ## Github
    ${data.github}

    ## Questions
    If you have any questions, please contact me at ${data.contact} or visit my github page at ${data.github}

  ${renderLicenseBadge(data.license)}

`;
}

module.exports = generateMarkdown;
