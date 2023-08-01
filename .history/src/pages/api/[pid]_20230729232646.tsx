const handler: BlitzApiHandler = (req, res) => {
    const {
      query: { id },
    } = req
  
    res.end(`Post: ${ id}`)
  }
  export default handler