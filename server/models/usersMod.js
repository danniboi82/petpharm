
module.exports = ((sequelize, DataTypes) =>{
  let Users = sequelize.define("Users", {
    firstName: {
      type: DataTypes.String(50),
    },
    lastName:{
      type: DataTypes.String(50),
    },
    email: {
      type: DataTypes.String(50),
    }

  })
  return Users;
});


