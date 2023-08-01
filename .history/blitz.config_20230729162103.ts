import { BlitzConfig, connectMiddleware } from "blitz"
import middlewareHandler from "src/" // your middleware file

const config: BlitzConfig = {
  middleware: [connectMiddleware(middlewareHandler)],
}

module.exports = config
