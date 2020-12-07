// function to generate markdown for README
function generateMarkdown(data) {
  console.log(data);
  return `# ${data.title}
  
![License Icon](https://img.shields.io/badge/license-${data.license}-informational.svg)

${data.description}
  
## Table of Contents

- [Installation Instructions](#Installation Instructions)
- [Usage Instructions](#Usage Instructions)
- [License Information](#License Information)
- [Contributing Developers](#Contributing Developers)
- [Testing Instruction]

## Installation Instructions

${data.installation}

## Usage Instructions

${data.usage}

## License Information

This project is covered under ${data.license} license. ${data.licenseDescription}

## Contributing Developers

${data.contributors}

## Testing Instructions

${data.test}
`;
}

module.exports = generateMarkdown;
