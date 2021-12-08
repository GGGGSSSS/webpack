import name from './other'

// import React, { Component } from "react";
// import ReactDom from "react-dom";
// class App extends Component {
//   render() {
//     return <div>hello world</div>;
//   }
// }
// ReactDom.render(<App />, document.getElementById("root"));
// console.dir(jQuery)

// import '@babel/polyfill' //现在不用了 polyfill是es6+的ECMA规范库 es6相比es5多的不仅是语法还有API es6转es5的其中一个步骤: 给es5加上es6的API 
// import "core-js";
// import "regenerator-runtime/runtime"
// const arr = [new Promise(() => { }), new Promise(() => { })];
// arr.map(item => {
//   console.log(item);
// });

// import { cube } from './math.js';
// cube()
// import counter from './counter'
// import number from './number'
// counter()
// number()
// if (module.hot) {
//   module.hot.accept("./number.js", function () {
//     document.body.removeChild(document.getElementById("number"));
//     number();
//   });
// }

// var btn = document.createElement('button')
// btn.innerHTML = '新增'
// document.body.appendChild(btn)

// btn.onclick = function () {
//   var div = document.createElement('div')
//   div.innerHTML = 'item'
//   document.body.appendChild(div)
// }

// import axios from 'axios'
// axios.get('/api/info').then((res) => {
//   console.log(res)
// })

//css modules之后可以通过css.ele 如果不开启如下为undefined
// let ele = `<div class=${css.ele}>css module</div>`;
// document.write(ele)

// import * as parser from "@babel/parser";
// import traverse from "@babel/traverse";

// const code = `function square(n) {
//   return n * n;
//   const zz = 3
// }`;

// const ast = parser.parse(code);
// // console.log(ast.program.body)

// traverse(ast, {
//   VariableDeclaration(node) {
//     console.log(node)
//   }
// });

