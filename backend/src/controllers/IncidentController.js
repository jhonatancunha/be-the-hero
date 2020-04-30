import model from '../models/index';

const { Incident } = model;
const { Ong } = model;

export default {
  async index(req, res) {
    const { page = 1 } = req.query;

    const { count } = await Incident.findAndCountAll();

    const incidents = await Incident.findAll({
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

    res.header('X-Total-Count', count);

    return res.json(incidents);
  },

  async store(req, res) {
    try {
      const { auth } = req.headers;

      if (!auth) return res.status(401).json('Ong ID not provided.');

      const checkId = await Ong.findByPk(auth);

      if (!checkId) return res.status(401).json('Invalid Ong ID.');

      const { title, description, value } = req.body;

      const incidents = await Incident.create({
        ong_id: auth,
        title,
        description,
        value,
      });

      return res.json(incidents);
    } catch (err) {
      return res.json(err);
    }
  },

  async delete(req, res) {
    const idOng = req.headers.auth;

    const checkOng = await Ong.findByPk(idOng);

    if (!checkOng) return res.status(401).json('Invalid Ong ID.');

    const idIncident = req.params.id;

    const incidents = await Incident.destroy({
      where: { id: idIncident },
    });

    if (!incidents) return res.status(401).json('Invalid incident id.');

    return res.status(200).send();
  },
};
