const handler: BlitzApiHandler = (req, res) => {
    const {
      query: { pid },
    } = req
  
    res.end(`Post: ${paste.id}`)
  }
  export default handler