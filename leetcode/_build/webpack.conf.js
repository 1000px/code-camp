const path = require('path');

module.exports = {
    mode: 'development',
    entry: {
        leetcode: './src/index.js'
    },
    output: {
        path: path.resolve(__dirname, '../output')
    }
}