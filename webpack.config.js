const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require("html-webpack-plugin")
const path = require("path");
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: "./src/index.js",
  // entry: ['./src/index', './src/other']
  // entry: {
  //   index: './src/index',
  //   other: './src/other'
  // },
  //对象是多入口 数组就是两个组合成一个 分开写可能是模块化

  output: {
    path: path.resolve(__dirname, "build"),
    filename: "[name].js",
    // filename就是出口文件资源命名 多入口不能用确定的名称
    //占位符种类 name hash chunkhash hash是整个项目的hash 只要打包一次 就会有新的hash文件
    //
  },
  mode: "development",

  //处理不认识的模块 使用loader
  module: {
    //loader是性能消耗大户 添加include进行优化
    //添加include之前5438ms 之后2469ms
    rules: [
      {
        test: /\.css$/,
        include: path.resolve(__dirname, './src/css'),
        use: ['style-loader', "css-loader"],
      },
      {
        test: /\.less$/,
        include: path.resolve(__dirname, './src/css'),
        use: [
          // 'style-loader',
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              //css modules是为了让每一个 .class都模块化有hash名 之后js中可以通过css.ele 如果不开启如下为undefined
              modules: true,
            }
          },
          // 'postcss-loader',
          'less-loader',
        ]
      },
      {
        test: /\.(png|jpe?g)$/,
        //?是量词 0或1
        include: path.resolve(__dirname, './src/images'),
        use: {
          // loader: 'file-loader',
          loader: 'url-loader',
          //file-loader的作用就是import图片时可以在js中引入图片地址
          options: {
            name: '[name].[ext]',
            //extension 扩展名
            outputPath: 'images/',
            limit: 25 * 1024, //体积小的转成base64 少一次资源请求加快读取速度?
          },
        }
      },
      {
        test: /\.js$/,
        include: path.resolve(__dirname, './src'),
        loader: 'babel-loader',
      },
    ],
  },

  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html'
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].css'
    }),
    new webpack.HotModuleReplacementPlugin()
    //HMR:热更新 是devServer中的设置 用来实现css热更新
    //在开启式后 css部分改变 已经渲染的DOM不会更改 说明并没有启动整个项目的刷新 而是DOM树不变 更新css树然后render
  ],
  optimization: {
    usedExports: true,
    //对import进来的摇树 比如js,css,less 如果你不使用就会被摇 开关在package.json的sideEffects如果在确认没有副作用就会摇 不然只会在注释里标注未使用
    //虽然是import export的形式导入 但实际是打包到一个bundle去执行 所以对于polyfill这种全局执行的摇树需要知道副作用
    splitChunks: {
      chunks: "all", // 所有的 chunks 代码公共的部分分离出来成为⼀个单独的⽂件
      cacheGroups: {
        react: {
          test: /react|react-dom/,
          name: 'react'
        }
      },
    },
  },
  resolve: {
    //普通的模块查询会一直沿着disk树找父目录的node_modules 这里锁定一个路径
    modules: [path.resolve(__dirname, "./node_modules")],
    alias: {
      //在import ... from后面的引入名进行别名替换的
      "@": path.resolve(__dirname, "./src/css"),
    },
    extensions: [".js", ".json"],
  },
  devtool: 'source-map',

  devServer: {
    contentBase: '/build',
    open: true,
    hot: true,
    proxy: {
      '/api': {
        target: 'http://localhost:3000'
      }
    },
    port: 8080,
  }
};
