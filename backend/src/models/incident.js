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
  return Incident;
};
