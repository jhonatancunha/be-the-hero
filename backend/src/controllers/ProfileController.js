import model from '../models/index';

const { Incident } = model;
const { Ong } = model;

export default {
  async index(req, res) {
    const idOng = req.headers.auth;

    const checkOng = await Ong.findByPk(idOng);

    if (!checkOng) res.status(401).json('Invalid ong id.');

    const { page = 1 } = req.query;

    const incidents = await Incident.findAll({
      where: { ong_id: idOng },
      attributes: ['id', 'title', 'description', 'value', 'ong_id'],
      include: [
        {
          model: Ong,
          attributes: ['id', 'name', 'email', 'whatsapp', 'city', 'uf'],
        },
      ],
      limit: 5,
      offset: (page - 1) * 5,
    });

    return res.json(incidents);
  },
};
