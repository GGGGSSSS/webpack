import { keywordInitial, IdentifierInitial, keyword, Identifier } from './regexp'
const fs = require('fs')

function createAsset(filename) {
  const str = fs.readFileSync(filename, 'utf-8')
  let tokens = []

  for (let i = 0; i < str.length;) {
    let token
    if (keywordInitial.test(str[i])) {
      if (keyword.test(str)) {
      }


      if (IdentifierInitial.test(str[i])) {
        let result = Identifier.exec(str)
        i = result.index
      }
    }
    tokens.push(resule[0])
  }
  console.log(tokens)

}
createAsset('./src/index.js')