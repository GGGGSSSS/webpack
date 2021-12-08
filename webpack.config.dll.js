const path = require("path");
const { DllPlugin } = require("webpack");
module.exports = {
  mode: "development",
  entry: {
    react: ["react", "react-dom"] //! node_modules?
  },
  output: {
    path: path.resolve(__dirname, "./dll"),
    filename: "[name].dll.js",
    library: "react"
  },
  plugins: [
    new DllPlugin({
      // manifest.json⽂件的输出位置
      path: path.join(__dirname, "./dll", "[name]-manifest.json"),
      // 定义打包的公共vendor⽂件对外暴露的函数名
      name: "react"
    })
  ]
};
//dll:动态链接库 就像dll一样是被公用的部分 如果一个模块经常被用 加入dll