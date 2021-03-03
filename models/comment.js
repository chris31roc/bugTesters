// Creating the Comment model
module.exports = function(sequelize, DataTypes) {
    const Comment = sequelize.define("Comments", {
        comment_body: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        myDate: { 
            type: DataTypes.DATE, 
            defaultValue: DataTypes.NOW
          },
        // Timestamps
        createdAt: DataTypes.DATE, 
    })
    
    // Associating Comment with Post
    Comment.associate = (models) => {
        // A Comment can't be created without a Post due to the foreign key constraint
        console.log(models.Posts)

        Comment.belongsTo(models.Posts, {
          foreignKey: {
            allowNull: false,
          },
        });
      };

    return Comment
}

