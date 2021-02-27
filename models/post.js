module.exports = function(sequelize, DataTypes) {
    const Post = sequelize.define("Posts", {
        post_id: {
            type: DataTypes.INTEGER, 
            allowNull: false, 
            autoIncrement: true, 
        },
        post_title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        post_body: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        post_link: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    })

    // Associating Post with User
    Post.associate = (models) => {
        Post.belongsTo(models.User, {
            foreignKey: {
                allowNull: false
            }
        })
    };

    //When a Post is deleted, also delete any associated Comments. 
    Post.associate = (models) => {
        Post.hasMany(models.Comment, {
          onDelete: 'cascade',
        });
    };

    return Post
}

