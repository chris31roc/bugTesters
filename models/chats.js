module.exports = (sequelize, DataTypes) => {
  const Chats = sequelize.define('Chats', {
    id: {
      // Giving the Chats model a n ID of type INTEGER 
      type: DataTypes.INTEGER,
      allowNull: false,
      // Setting an increment for when an ID is created
      autoIncrement: true, 
      // For uniquely indentify chats
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
    body: {
      type: DataTypes.TEXT,
      allowNull: false,
      len: [1],
    },
  });
  
  Chats.associate = (models) => {
    // Associating Chats with a User
    // A Chat can't be created without a User due to the foreign key constraint
    Chats.belongsTo(models.Users, {
      foreignKey: {
        allowNull: false,
      },
    });
  };

  return Chats;
};
