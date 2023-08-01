import { BlitzApiRequest, BlitzApiResponse } from "blitz"
import Cors from "cors"

// Initializing the cors middleware
const cors = Cors({
  methods: ["GET", "POST", "HEAD", "OPTIONS"],
})

// Helper method to wait for a middleware to execute before continuing
// And to throw an error when an error happens in a middleware
function runMiddleware(req, res, fn) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result)
      }

      return resolve(result)
    })
  })
}

async function handler(req: BlitzApiRequest, res: BlitzApiResponse) {
  // Run the middleware
  return await runMiddleware(req, res, cors)
}

export default handler