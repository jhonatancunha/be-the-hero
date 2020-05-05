import model from '../models/index';

const { Ong } = model;

export default {
  async store(req, res) {
    const {id, name, email, whatsapp, city, uf } = await Ong.create(req.body);

    return res.json({id, name, email, whatsapp, city, uf });
  },

  async index(req, res) {
    const { page = 1 } = req.query;

    const ongs = await Ong.findAll({
      attributes: ['id', 'name', 'email', 'whatsapp', 'city', 'uf'],
      limit: 5,
      offset: (page - 1) * 5,
    });

    return res.json(ongs);
  },
};
