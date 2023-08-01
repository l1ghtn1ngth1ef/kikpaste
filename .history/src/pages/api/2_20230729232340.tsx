const handler: BlitzApiHandler = (req, res) => {
    const {
      query: { pasteId },
    } = req
  
    res.end(`Post: ${paste.id}`)
  }
  export default handler