import { BlitzConfig, connectMiddleware } from "blitz"
import middlewareHandler from "app" // your middleware file

const config: BlitzConfig = {
  middleware: [connectMiddleware(middlewareHandler)],
}

module.exports = config
