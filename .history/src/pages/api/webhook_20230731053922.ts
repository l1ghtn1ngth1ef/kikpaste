import db from "db";

export default async function handler(req, res) {

  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json")
  try {
    const id = 2;
    const data = await db.paste.findUnique({ where: { id: 2 } });
    res.end(JSON.stringify({data}))

  } catch (err) {
    res.status(500).send({ error: 'failed to fetch data' })
  }

}