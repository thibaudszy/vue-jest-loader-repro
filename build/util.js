const path = require('path');

/**
 * Resolves path which is relative to the project root.
 */
module.exports.resolve = relativePath => path.resolve(__dirname, '..', relativePath);
