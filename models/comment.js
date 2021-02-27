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
        Comment.belongsTo(models.Post, {
            foreignKey: {
                allowNull: false
            }
        })
    };

    return Comment
}

