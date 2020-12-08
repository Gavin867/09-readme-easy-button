// function to generate markdown for README
function generateMarkdown(data) {
  console.log(data);
  return `# ${data.title}
  
![License Icon](https://img.shields.io/badge/license-${data.license}-informational.svg)

${data.description}

## Table of Contents

- [Project Location](#project-location)
- [Installation Instructions](#installation-instructions)
- [Usage Instructions](#usage-instructions)
- [License Information](#license-information)
- [Contributing Developers](#contributing-developers)
- [Testing Instructions](#testing-instructions)

## Project Location

* [GitHub Repo](https://github.com/${data.username}/${data.title})
* [Published Site](https://${data.username}.github.io/${data.title})  

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

Feel free to contact ${data.name} (https://github.com/${data.username}) at ${data.email}.
`;
}

module.exports = generateMarkdown;
