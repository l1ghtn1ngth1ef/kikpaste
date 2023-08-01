import db from "db";

export default async function handler(req, res) {
  const { name, message } = req.body
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json")
  try {
    const id = '2';
    const food = await db.paste.findUnique({ where: { id: '2'} });
    res.end(JSON.stringify({
      "Method": "GET",
      "name": "Kristen Stewart",
      "age": "30",
      "gender": "Really Hot Female! :D",
      "id" : `${id}`
    }))

  } catch (err) {
    res.status(500).send({ error: 'failed to fetch data' })
  }
}