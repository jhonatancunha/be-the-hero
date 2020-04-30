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
  Incident.associate = (models) => {
    Incident.belongsTo(models.Ongs, {
      foreignkey: 'user_id',
    });
  };
  return Incident;
};
