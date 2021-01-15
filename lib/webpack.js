const parser = require('@babel/parser');
const fs = require('fs')


const content = fs.readFileSync('../src/index.js', 'utf-8')
console.dir(content)
const ast = parser.parse(content, { sourceType: 'module' })
console.log(ast.program.body[0].body)