// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    const badge = {
        'mit': '[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
        'afl-3.0': '[![License](https://img.shields.io/badge/License-AFL%203.0-blue.svg)](https://opensource.org/licenses/AFL-3.0)',
        'apache-2.0': '[![License(https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
        'artistic-2.0': '[![License](https://img.shields.io/badge/License-Artistic%202.0-blue.svg)](https://opensource.org/licenses/Artistic-2.0)',
        'bsl-1.0': '[![License(https://img.shields.io/badge/License-BSL%201.0-blue.svg)](https://opensource.org/licenses/BSL-1.0)',
        'bsd-2-clause': '[![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)',
        'bsd-3-clause': '[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)',
        'bsd-3-clause-clear': '[![License](https://img.shields.io/badge/License-BSD%203--Clause%20Clear-blue.svg)](https://opensource.org/licenses/BSD-3-Clause-Clear)',
        'cc': '[![License](https://img.shields.io/badge/License-CC%20BY-lightgrey.svg)](https://creativecommons.org/licenses/by/4.0/)',
        'cc0-1.0': '[![License](https://img.shields.io/badge/License-CC0%201.0-lightgrey.svg)](https://creativecommons.org/publicdomain/zero/1.0/)',
        'cc-by-4.0': '[![License](https://img.shields.io/badge/License-CC%20BY%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by/4.0/)',
        'cc-by-sa-4.0': '[![License](https://img.shields.io/badge/License-CC%20BY%20SA%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by-sa/4.0/)',
        'wtfpl': '[![License](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)',
        'ecl-2.0': '[![License](https://img.shields.io/badge/License-ECL%202.0-blue.svg)](https://opensource.org/licenses/ECL-2.0)',
        'epl-1.0': '[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)](https://opensource.org/licenses/EPL-1.0)',
        'epl-2.0': '[![License](https://img.shields.io/badge/License-EPL%202.0-blue.svg)](https://opensource.org/licenses/EPL-2.0)',
        'eupl-1.1': '[![License](https://img.shields.io/badge/License-EUPL%201.1-blue.svg)](https://opensource.org/licenses/EUPL-1.1)',
        'agpl-3.0': '[![License](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://opensource.org/licenses/AGPL-3.0)',
        'gpl': '[![License](https://img.shields.io/badge/License-GPL-blue.svg)](https://www.gnu.org/licenses/gpl-3.0.en.html)',
        'gpl-2.0': '[![License](https://img.shields.io/badge/License-GPL%20v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)',
        'gpl-3.0': '[![License](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0.en.html)',
        'lgpl': '[![License](https://img.shields.io/badge/License-LGPL-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0.en.html)',
        'lgpl-2.1': '[![License](https://img.shields.io/badge/License-LGPL%20v2.1-blue.svg)](https://www.gnu.org/licenses/lgpl-2.1.en.html)',
        'lgpl-3.0': '[![License(https://img.shields.io/badge/License-LGPLv3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0.en.html)',
        'isc': '[![License](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)',
        'lppl-1.3c': '[![License](https://img.shields.io/badge/License-LPPL%20v1.3c-blue.svg)](https://www.latex-project.org/lppl/)',
        'ms-pl': '[![License](https://img.shields.io/badge/License-MS--PL-blue.svg)](https://opensource.org/licenses/MS-PL)',
        'mpl-2.0': '[![License](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)',
        'osl-3.0': '[![License](https://img.shields.io/badge/License-OSL%203.0-blue.svg)](https://opensource.org/licenses/OSL-3.0)',
        'postgresql': '[![License](https://img.shields.io/badge/License-PostgreSQL-blue.svg)](https://opensource.org/licenses/postgresql)',
        'ofl-1.1': '[![License](https://img.shields.io/badge/License-OFL%201.1-blue.svg)](https://scripts.sil.org/OFL)',
        'ncsa': '[![License(https://img.shields.io/badge/License-NCSA-blue.svg)](https://opensource.org/licenses/NCSA)',
        'unlicense': '[![License](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)',
        'zlib': '[![License](https://img.shields.io/badge/License-Zlib-lightgrey.svg)](https://opensource.org/licenses/Zlib)',
    }
    return badge[license]
}
//[![Licence](https://img.shields.io/github/license/Ileriayo/markdown-badges?style=for-the-badge)]

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    const licenseLink = {
        'mit': 'https://opensource.org/licenses/MIT',
        'afl-3.0': 'https://opensource.org/licenses/AFL-3.0',
        'apache-2.0': 'https://opensource.org/licenses/Apache-2.0',
        'artistic-2.0': 'https://opensource.org/licenses/Artistic-2.0',
        'bsl-1.0': 'https://opensource.org/licenses/BSL-1.0',
        'bsd-2-clause': 'https://opensource.org/licenses/BSD-2-Clause',
        'bsd-3-clause': 'https://opensource.org/licenses/BSD-3-Clause',
        'bsd-3-clause-clear': 'https://opensource.org/licenses/BSD-3-Clause-Clear',
        'cc': 'https://creativecommons.org/licenses/by/4.0/',
        'cc0-1.0': 'https://creativecommons.org/publicdomain/zero/1.0/',
        'cc-by-4.0': 'https://creativecommons.org/licenses/by/4.0/',
        'cc-by-sa-4.0': 'https://creativecommons.org/licenses/by-sa/4.0/',
        'wtfpl': 'http://www.wtfpl.net/about/',
        'ecl-2.0': 'https://opensource.org/licenses/ECL-2.0',
        'epl-1.0': 'https://opensource.org/licenses/EPL-1.0',
        'epl-2.0': 'https://opensource.org/licenses/EPL-2.0',
        'eupl-1.1': 'https://opensource.org/licenses/EUPL-1.1',
        'agpl-3.0': 'https://opensource.org/licenses/AGPL-3.0',
        'gpl': 'https://www.gnu.org/licenses/gpl-3.0.en.html',
        'gpl-2.0': 'https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html',
        'gpl-3.0': 'https://www.gnu.org/licenses/gpl-3.0.en.html',
        'lgpl': 'https://www.gnu.org/licenses/lgpl-3.0.en.html',
        'lgpl-2.1': 'https://www.gnu.org/licenses/lgpl-2.1.en.html',
        'lgpl-3.0': 'https://www.gnu.org/licenses/lgpl-3.0.en.html',
        'isc': 'https://opensource.org/licenses/ISC',
        'lppl-1.3c': 'https://www.latex-project.org/lppl/',
        'ms-pl': 'https://opensource.org/licenses/MS-PL',
        'mpl-2.0': 'https://opensource.org/licenses/MPL-2.0',
        'osl-3.0': 'https://opensource.org/licenses/OSL-3.0',
        'postgresql': 'https://opensource.org/licenses/postgresql',
        'ofl-1.1': 'https://scripts.sil.org/OFL',
        'ncsa': 'https://opensource.org/licenses/NCSA',
        'unlicense': 'http://unlicense.org/',
        'zlib': 'https://opensource.org/licenses/Zlib'

    }
    return licenseLink[license]
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// function renderLicenseSection(license) {
//     const licenseSection = `${data.license}`
//     return licenseSection
// }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    return `
# ${data.title}

${renderLicenseBadge(data.license)}

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Questions](#questions)
- [License](#license)
- [URL](#url)


## Description
${data.description}

## URL
${data.url}

## Installation
${data.installation}

## Usage
${data.usage}

## Contributing
${data.contribution}

## License
${renderLicenseBadge(data.license)} 
The license used for this project is: ${data.license}. For more information, please visit: 
${renderLicenseLink(data.license)}


## Github
https://github.com/${data.github}

## Questions
If you have any questions, please contact me at ${data.contact} or visit my github page at https://github.com/${data.github}

`;
}

module.exports = generateMarkdown;
