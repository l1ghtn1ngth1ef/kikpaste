const handler: BlitzApiHandler = (req, res) => {
    const {
      query: { id },
    } = req
  
    res.end(`Get: ${ id}`)
  }
  export default handler