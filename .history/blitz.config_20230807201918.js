import { PHASE_DEVELOPMENT_SERVER } from "next/constants"

module.exports = (phase, { defaultConfig }) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    compiler: {
        removeConsole: process.env.NODE_ENV === "production"
      },
    return {
      /* development only config options here */
    }
  }

  return {
    /* config options for all phases except development here */
  }
}