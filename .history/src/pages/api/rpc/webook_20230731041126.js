import db from "db";

const project = await db.project.findOne({ where: { id: data.id } })

