const handler: BlitzApiHandler = (req, res) => {
  if (req.method === "GET") {
    // Process a POST request
    console.log("Success S_OK!")
  } else {
    // Handle any other HTTP method
  }
}
export default handler