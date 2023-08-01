const handler: BlitzApiHandler = (req, res) => {
  res.status(200).json({ name: "Blitz.js" })
}
export default handler