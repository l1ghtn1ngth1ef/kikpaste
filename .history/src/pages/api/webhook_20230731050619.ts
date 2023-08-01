import db from "db";

export default async function handler(req, res) {
  const { name, message } = req.body
  res.statusCode = 200;

  try {
    const id = 2;
    const food = await db.paste.findUnique({ where: { id: parseInt(id) } });

    res.end("");
  } catch (err) {
    res.status(500).send({ error: 'failed to fetch data' })
  }
}