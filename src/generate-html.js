/*
This script generates the HTML pages to be hosted.
The generated files will be placed inside the hosted-files/ folder.
Just run: node generate-html.js
*/

const fs = require('fs');
const { conceptToHtml } = require('./concept-to-html');
const { CONCEPTS } = require('./concepts');

function createFile(filePath, fileContents) {
  return new Promise((resolve, reject) => {
    fs.writeFile(filePath, fileContents, (err) => {
      if (err) {
        reject();
      } else {
        resolve();
      }
    })
  });
}

CONCEPTS.forEach(async (concept) => {
  await createFile(`${__dirname}/../docs/${concept.slug}.html`, conceptToHtml(concept));
});
