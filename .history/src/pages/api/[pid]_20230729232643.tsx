const handler: BlitzApiHandler = (req, res) => {
    const {
      query: { paste.id },
    } = req
  
    res.end(`Post: ${ id}`)
  }
  export default handler