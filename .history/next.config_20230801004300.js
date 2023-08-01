// @ts-check
const { withBlitz } = require("@blitzjs/next")
config.module.rules.push({
  test: /ckeditor5-[^/]+\/theme\/icons\/.+\.svg$/,
  use: ["raw-loader"],
})
/**
 * @type {import('@blitzjs/next').BlitzConfig}
 **/
const config = {}

module.exports = withBlitz(config)
