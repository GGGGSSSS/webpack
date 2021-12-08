export let Identifier = /\b\S+\b/g
export let keyword = /\b[a-z]\b/g
let singleQuotesLiteral = /^'.'$/
let Literal = /\w/

export let keywordInitial = /^[a-z]/
export let IdentifierInitial = /^[a-zA-Z_$]/

let b = /\S+(?=[\s;])/g