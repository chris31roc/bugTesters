module.exports = (sequelize, DataTypes) => {
  const Chatrooms = sequelize.define('Chatrooms', {
    // Giving the Chatroom model an ID of type INTEGER
    id: {
      type: DataTytpes.INTEGER,
    },
    // Giving the Chatroom model a name of type STRING 
    name: DataTypes.STRING,
  });

  Chatrooms.associate = (models) => {
    // Associating Chatrooms with Users
    // When an Chatroom is deleted, also delete any associated Posts
    Chatrooms.hasMany(models.Users);
  };

  return Chatrooms;
};
