const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "dog",
    {
      id: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      image: {
        type: DataTypes.STRING,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      height: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: false,
      },
      weight: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: false,
      },
      life_span: {
        type: DataTypes.STRING,
      },
      createInDb: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },
    },
    {
      timestamps: false,
    }
  );
};
