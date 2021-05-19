const { CONCEPTS } = require('./concepts');

/**
 * This will give you the HTML for the home page (index.html).
 * @returns {string}
 */
function getIndexHtml() {
  const title = 'K8 World';
  const description = 'A collection of concepts (tools, practices, etc.) that developers working with Kubernetes (K8) should know.';
  return `<!DOCTYPE html>
<html lang="en">

<head>

  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta charset="utf-8">
  <title>K8 World</title>
  <meta name="description" content="${description}">
  <meta name="author" content="Nim Jayawardena">


  <!-- Open Graph Protocol -->
  <meta property="og:title" content="${title}" />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://nimjay.github.io/k8-world/" />
  <meta property="og:image" content="https://nimjay.github.io/k8-world/images/k8-world.jpg" />
  <meta property="og:image:width" content="200" />
  <meta property="og:image:height" content="200" />
  <meta property="og:description" content="${description}" />

  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary" />
  <meta name="twitter:title" content="${title}" />
  <meta name="twitter:description" content="${description}" />
  <meta name="twitter:image" content="https://nimjay.github.io/k8-world/images/k8-world.jpg" />

  <style>
    body {
      font-family: sans-serif;
      font-size: 20px;
      line-height: 1.5em;
      margin: 0;
      padding: 80px 10px 0 10px;
    }
    main {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  </style>

</head>
<body>

<main>
  <h1>${title}</h1>
  <p>${description}</p>
  ${getNavHtml()}
</main>

</body>
</html>
`;
}

let cachedNav = '';
function getNavHtml() {
  if (cachedNav) {
    return cachedNav;
  }
  let nav = '<nav><ol>';
  CONCEPTS.forEach((concept) => {
    nav += `<li><a href="${concept.slug}.html">${concept.title}</a>`;
  });
  cachedNav = nav;
  return nav + '</ol></nav>';
}

module.exports = { getIndexHtml };
