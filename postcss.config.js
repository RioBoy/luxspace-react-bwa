// craco.config.js
module.exports = {
  style: {
    postcsss: {
      plugins: [
        require('tailwindcss')('./tailwind.config.js'),
        require('autoprefixer'),
      ],
    },
  },
};
