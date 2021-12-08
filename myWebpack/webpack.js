const fs = require('fs')
const parser = require('@babel/parser')
const traverse = require('@babel/traverse').default
const babel = require('@babel/core')

let ID = 0

//token方面的可以去写编译器去看看
function createAsset(filename) {
  const content = fs.readFileSync(filename, 'utf-8')
  const ast = parser.parse(content, { sourceType: 'module' })
  const dependencies = []
  traverse(ast, {
    ImportDeclaration: ({ node }) => {
      // console.log(node)
      dependencies.push(node.source.value)
    }
  })

  //transformFromAstSync把ast转为源代码
  const { code } = babel.transformFromAstSync(ast, null, {
    presets: ['@babel/preset-env']
  })
  console.log(code)
  return {
    filename,
    code,
    dependencies
  }
}
createAsset('./src/index.js')