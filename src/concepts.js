/**
 * @typedef Concept
 * @type {Object}
 * @property {string} slug
 * @property {string} title
 * @property {string} sentence
 * @property {string} paragraph
 * @property {string} imgAlt
 */

/**
 * @type Array<Concept>
 */
const CONCEPTS = [
  {
    'slug': 'foo',
    'title': 'foo',
    'sentence': 'foo',
    'paragraph': 'foo',
    'imgAlt': 'foo',
  },
  {
    'slug': 'http',
    'title': 'HTTP',
    'sentence': 'HTTP is the language (application-level protocol) that web browsers and web servers use to communicate.',
    'paragraph': `When you open example.com, your browser sends a message to example.com's server (computer) that says, "give me your home page". Then example.com's server responds with the contents of the home page. Most of the resources that you view and submit on various websites (such as images, personal data, and form submissions) are loaded in this manner. The format of these messages (requests from the browser and responses from the server) is called "Hypertext Transfer Protocol" (HTTP). HTTP doesn't always involve a web browsers — HTTP is often used by computers talking to other computers.`,
    'imgAlt': 'bar',
  },
];

module.exports = { CONCEPTS };
