const handler: BlitzApiHandler = (req, res) => {
    const {
      query: { .id },
    } = req
  
    res.end(`Post: ${paste.id}`)
  }
  export default handler