import db from "db";

export default async function handler(req, res) {
  const { name, message } = req.body
  try {
    const id = 2;
    const food = await db..findUnique({ where: { id: parseInt(id) } });

    res.redirect(307, '/')
  } catch (err) {
    res.status(500).send({ error: 'failed to fetch data' })
  }
}