import { setupBlitzServer } from "@blitzjs/next"
import { AuthServerPlugin, PrismaStorage } from "@blitzjs/auth"
import { simpleRolesIsAuthorized } from "@blitzjs/auth"
import { BlitzLogger } from "blitz"
import db from "db"
import { authConfig } from "./blitz-client"

const { gSSP, gSP, api } = setupBlitzServer({
  plugins: [
    AuthServerPlugin({
      cookiePrefix: "blitz",
      storage: PrismaStorage(db),
      isAuthorized: simpleRolesIsAuthorized,
      sameSite: "none",
      secureCookies: true,
    }),
  ],
  formatError: (error) => {
    return new Error("Formatted error" + error.message)
  },
  logger: BlitzLogger({}),
})

export { gSSP, gSP, api }
