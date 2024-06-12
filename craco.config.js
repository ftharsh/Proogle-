// const { postcss } = require("tailwindcss");

//craco.config.js
module.exports = {
  style: {
    plugins: [require("tailwindcss"), require("autoprefixer")],
  },
};
