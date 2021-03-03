// Creating the Post model
module.exports = function(sequelize, DataTypes) {
    const Posts = sequelize.define("Posts", {
        post_title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        post_content: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        post_link: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    })

    // Associating Post with Comment
    Posts.associate = (models) => {
        // When an Post is deleted, also delete any associated Comment
        Posts.hasMany(models.Comment, {
          onDelete: 'cascade',
        });
      };

    // Associating Post with User
    Posts.associate = (models) => {
        Posts.belongsTo(models.User, {
            foreignKey: {
                allowNull: false
            }
        })
    }

    return Posts
}

