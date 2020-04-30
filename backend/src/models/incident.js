module.exports = (sequelize, DataTypes) => {
  const Incident = sequelize.define(
    'Incident',
    {
      title: DataTypes.STRING,
      description: DataTypes.STRING,
      value: DataTypes.FLOAT,
    },
    {}
  );
  // RELATIONS
  Incident.associate = (models) => {
    Incident.belongsTo(models.Ong, {
      foreignKey: 'ong_id',
    });
  };

  return Incident;
};
