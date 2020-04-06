const connection = require('../database/connection');

class OngsController {
  static async index(req, res) {
    const ongs = await connection("ongs").select("*");
    return res.send(ongs);
  }

  static async create(req, res) {
    const {name, email, whatsapp, city, uf} = req.body
    const login = (name.replace(/\W+/g, "") + uf).toLowerCase();

    await connection("ongs").insert({ 
      name, 
      email, 
      whatsapp, 
      city, 
      uf, 
      login })

    res.send({ login });
  }
}


module.exports = OngsController;