module.exports = {
  plugins: {
    autoprefixer: {},
    "postcss-flexbugs-fixes": {},
    "postcss-import": {},
    "postcss-preset-env": {
      "browsers": "last 2 versions",
      "autoprefixer": {
        "flexbox": "no-2009"
      },
      "stage": 3,
      "features": {
        "custom-properties": false
      }
    },
    "postcss-custom-media": {},
    "@fullhuman/postcss-purgecss": {
      content: [
          './pages/**/*.{js,jsx,ts,tsx}',
          './components/**/*.{js,jsx,ts,tsx}'
      ],
      defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
      safelist: ["html", "body"]
    },
  },
}
