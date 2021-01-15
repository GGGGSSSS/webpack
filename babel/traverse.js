const parser = require("@babel/parser")
const traverse = require("@babel/traverse").default
// import * as parser from "@babel/parser";
// import traverse from "@babel/traverse";

const code = `function square(n) {
  return n * n;
}`;

const ast = parser.parse(code);
console.log(ast.program.body[0].params)

traverse(ast, {
  enter(path) {
    if (
      path.node.type === "Identifier" &&
      path.node.name === "n"
    ) {
      path.node.name = "x";
    }
  }
});