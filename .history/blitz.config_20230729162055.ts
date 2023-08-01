import { BlitzConfig, connectMiddleware } from "blitz"
import middlewareHandler from "src/pages/middleware" // your middleware file

const config: BlitzConfig = {
  middleware: [connectMiddleware(middlewareHandler)],
}

module.exports = config
