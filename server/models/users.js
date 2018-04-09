module.exports = function(sequelize, DataTypes) {
  var Users = sequelize.define("Users", {
    firstName: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING(150),
      allowNull: false,

    },
    email: {
      type: DataTypes.STRING(150),
      allowNull: false,
    }
  });
  return Users;
};
