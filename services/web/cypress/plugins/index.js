const rollupPreprocessor = require("@bahmutov/cy-rollup")
module.exports = (on, config) => {
  on(
    "file:preprocessor",
    rollupPreprocessor({
      configFile: "cypress/rollup.config.js",
    })
  )
}
