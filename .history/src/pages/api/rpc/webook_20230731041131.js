import db from "db";

const project = await db.paste.findOne({ where: { id: data.id } })

