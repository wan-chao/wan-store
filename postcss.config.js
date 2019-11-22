module.exports = {
  plugins: {
    autoprefixer: {},
    "postcss-px2rem-exclude": { //适配移动端
      remUnit: 75,
      exclude: /node_modules|folder_name/i
    }
  }
}
