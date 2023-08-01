const handler: BlitzApiHandler = (req, res) => {
    const {
      query: { paste },
    } = req
  
    res.end(`Post: ${paste.id}`)
  }
  export default handler