/**
 * Convert a Concept into its HTML file contents.
 * @param {Concept} concept
 * @returns {string}
 */
function conceptToHtml(concept) {
  const { slug, title, sentence, paragraph, imgAlt } = concept;
  return `<!DOCTYPE html>
<html lang="en">

<head>

  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta charset="utf-8">
  <title>${title}</title>
  <meta name="description" content="${sentence}">
  <meta name="author" content="Nim Jayawardena">


  <!-- Open Graph Protocol -->
  <meta property="og:title" content="${title}" />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://nimjay.github.io/k8-world/${slug}" />
  <meta property="og:image" content="https://nimjay.github.io/k8-world/images/${slug}.jpg" />
  <meta property="og:image:width" content="200" />
  <meta property="og:image:height" content="200" />
  <meta property="og:description" content="${sentence}" />

  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary" />
  <meta name="twitter:title" content="${title}" />
  <meta name="twitter:description" content="${sentence}" />
  <meta name="twitter:image" content="https://nimjay.github.io/k8-world/images/${slug}.jpg" />

  <style>
    body {
      font-family: sans-serif;
      margin: 0;
      padding: 0 20px 20px 20px;
    }
    main {
      display: flex;
      flex-flow: column wrap;
      justify-content: center;
      align-items: center;
      margin: auto;
      min-height: 100vh;
      max-width: 700px;
    }
    img {
      height: 200px;
      width: 200px;
    }
    h1 {
      font-size: 35px;
      font-weight: normal;
      line-height: 1.3em;
      width: 100%;
      text-align: left;
    }
    p:nth-child(3) {
      font-size: 25px;
      line-height: 1.7em;
    }
    p {
      font-size: 19px;
      line-height: 1.7em;
    }
  </style>
</head>

<body>

<main>
  <img src="./images/${slug}.jpg" alt="${imgAlt}" />
  <h1>${title}</h1>
  <p>${sentence}</p>
  <p>${paragraph}</p>
</main>

</body>

</html>
`;
}

module.exports = { conceptToHtml };
