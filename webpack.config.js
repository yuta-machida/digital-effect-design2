const { watch } = require("fs");
const path = require("path");

module.exports = {
  entry: "./src/assets/ts/main.ts", // メインのTypeScriptファイル
  output: {
    filename: "bundle.js", // 出力するJSファイル名
    path: path.resolve(__dirname, "./src/dist"), // 出力先ディレクトリ
  },
  resolve: {
    extensions: [".ts", ".js"], // 拡張子を自動的に解決
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader", // TypeScriptファイルをts-loaderで処理
        exclude: /node_modules/,
      },
    ],
  },
  watch: true,
  mode: "development",
};
