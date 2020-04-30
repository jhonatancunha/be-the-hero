import model from '../models/index';

const { Ong } = model;

export default {
  async store(req, res) {
    const { id } = req.body;

    const checkId = await Ong.findByPk(id);

    if (!checkId) return res.status(401).json('Invalid ong id does not exist.');

    return res.status(200).send(checkId);
  },
};
