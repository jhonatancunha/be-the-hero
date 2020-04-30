import model from '../models/index';

const { Ong } = model;

export default {
  async store(req, res) {
    const { name, email, whatsapp, city, uf } = await Ong.create(req.body);

    return res.json({ name, email, whatsapp, city, uf });
  },

  async index(req, res) {
    const ongs = await Ong.findAll({
      attributes: ['id', 'name', 'email', 'whatsapp', 'city', 'uf'],
    });

    return res.json(ongs);
  },
};
