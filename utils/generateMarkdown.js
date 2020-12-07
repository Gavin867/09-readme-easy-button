// function to generate markdown for README
function generateMarkdown(data) {
  console.log(data);
  return `# ${data.title}

${data.description}
  
## Table of Contents

- [Installation Instructions](#Installation Instructions)
- [Usage Instructions](#Usage Instructions)
-

## Installation Instructions

${data.installation}

## Usage Instructions

${data.usage}

## License Information

![License](https://img.shields.io/badge/license-${data.license}-informational.svg)
`;
}

module.exports = generateMarkdown;
