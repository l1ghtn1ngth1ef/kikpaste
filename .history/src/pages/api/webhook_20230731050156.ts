export default async function handler(req, res) {
  const { name, message } = req.body
  try {
    await ({ name, message })handleFormInputAsync
    res.redirect(307, '/')
  } catch (err) {
    res.status(500).send({ error: 'failed to fetch data' })
  }
}