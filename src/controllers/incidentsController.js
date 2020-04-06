const connection = require("../database/connection");

class IncidentsController {
  static async index(req, res) {
    const login = req.headers.login

    const ong = await connection("ongs").where({ login: login }).first()

    const incidents =  await connection("incidents")
      .join('ongs', 'ongs.id', '=', 'incidents.ong_id')
      .where({ ong_id: ong.id })
      .select(
        ["incidents.*",
        "ongs.name",
        "ongs.email",
        "ongs.whatsapp",
        "ongs.city",
        "ongs.uf"
      ]);

    res.send(incidents);
  }

  static async create(req, res) {
    const { title, description, price } = req.body;
    const login = req.headers.login;
    const ong = await connection("ongs").where({ login: login }).first()

    const incident = await connection("incidents").insert({
      title,
      description,
      price,
      ong_id: ong.id
    })

    res.send(incident);
  }

  static async destroy(req, res) {
    const { id } = req.params;
    const login = req.headers.login;

    const ong = await connection("ongs").where({login: login}).first();

    const incident = await connection("incidents")
      .where({ id: id }).first();

    if (incident.ong_id == ong.id ) {
      await connection("incidents")
      .where({ id: id }).delete();

      res.status(204).send();
    } else {
      res.status(401).send({error: 'unauthorized action'})
    }
  }
}

module.exports = IncidentsController;