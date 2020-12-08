// function to generate markdown for README
function generateMarkdown(data) {
  console.log(data);
  return `# ${data.title}
  
![License Icon](https://img.shields.io/badge/license-${data.license}-informational.svg)

## Description

${data.description}

## Project Location

* [GitHub Repo](https://github.com/${data.username}/${data.title})
* [Published Site](https://${data.username}.github.io/${data.title}  

## Table of Contents

- [Installation Instructions](#installation-instructions)
- [Usage Instructions](#usage-instructions)
- [License Information](#license-information)
- [Contributing Developers](#contributing-developers)
- [Testing Instructions](#testing-instructions)

## Installation Instructions

${data.installation}

## Usage Instructions

${data.usage}

## License Information

This project is covered under a(n) ${data.license} license. ${data.licenseDescription}

## Contributing Developers

${data.contributors}

## Testing Instructions

${data.test}

## Have questions?

Please contact ${data.name} (${data.username}) at ${data.email}.
`;
}

module.exports = generateMarkdown;
