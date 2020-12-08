// function to generate markdown for README
function generateMarkdown(data) {
  console.log(data);
  return `# ${data.title}
  
![License Icon](https://img.shields.io/badge/license-${data.license}-informational.svg)

${data.description}

## Table of Contents

- [Location](#location)
- [Installation](#installation)
- [Usage](#usage)
- [Testing](#testing)
- [Contributors](#contributors)
- [Resources](#resources)
- [Point of Contact](#point-of-contact)
- [License](#license)

## Location

* [GitHub Repo](https://github.com/${data.username}/${data.title})
* [Published Site](https://${data.username}.github.io/${data.title})  

## Installation

${data.installation}

## Usage

${data.usage}

## Testing

${data.test}

## Contributors

${data.contributors}

## Resources

${data.resources}

## Point of Contact

Have questions? Feel free to contact ${data.name} (https://github.com/${data.username}) at ${data.email}.

## License

This project is covered under a(n) ${data.license} license. ${data.licenseDescription}`;
}

module.exports = generateMarkdown;
