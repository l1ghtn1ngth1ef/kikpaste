const handler: BlitzApiHandler = (req, res) => {
    const {
      query: { pid },
    } = req
  
    res.end(`Post: ${pid}`)
  }
  export default handler