const { Sequelize } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define('Users', {
    id: {
       // Giving the Users model an ID of type INTEGER
      type: DataTypes.INTEGER,
      allowNull: false,
      // Setting an increment for when an ID is created
      autoIncrement: true, 
      // For uniquely indentify user
      primaryKey: true, 
      // Default value for dates => current time 
      myDate: { 
        type: DataTypes.DATE, 
        defaultValue: DataTypes.NOW
      },
      // Timestamps
      createdAt: DataTypes.DATE, 
      validate: {
        len: [1],
      },
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      len: [1],
    },
  });

  Users.associate = (models) => {
    // Associating Users with Chats
    // When a uUser is deleted, also delete any associated Chats
    Users.hasMany(models.Chats, {
      onDelete: 'cascade',
    });
  };

  Users.associate = (models) => {
    // Associating Users with a Chatroom
    // A User can't be created without a Chatroom due to the foreign key constraint
    Users.belongsTo(models.Chatrooms, {
      foreignKey: {
        allowNull: false,
      },
    });
  };

  return Users;
};
