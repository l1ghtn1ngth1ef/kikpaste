const handler: BlitzApiHandler = (req, res) => {
    const {
      query: { past.id },
    } = req
  
    res.end(`Post: ${paste.id}`)
  }
  export default handler