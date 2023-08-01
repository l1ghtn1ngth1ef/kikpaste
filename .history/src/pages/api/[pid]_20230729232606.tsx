const handler: BlitzApiHandler = (req, res) => {
    const {
      query: { paste.id.paste },
    } = req
  
    res.end(`Post: ${pid}`)
  }
  export default handler