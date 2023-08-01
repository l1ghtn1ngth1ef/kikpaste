const handler: BlitzApiHandler = (req, res) => {
    const {
      query: { pasteId },
    } = req
  
    res.end(`Post: ${pasteId}`)
  }
  export default handler