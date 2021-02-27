module.exports = function(sequelize, DataTypes) {
    const Post = sequelize.define("Posts", {
        // Assigning ID to posts and timestamps
        id: {
           type: DataTypes.INTEGER,
           allowNull: false,
           autoIncrement: true, 
           primaryKey: true, 
           myDate: { 
             type: DataTypes.DATE, 
             defaultValue: DataTypes.NOW
           },
           createdAt: DataTypes.DATE, 
         },
        post_title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        post_content: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        post_comment: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    })
    // Connecting Posts to User
    Post.associate = (models) => {
        Post.belongsTo(models.User, {
            foreignKey: {
                allowNull: false
            }
        })
    }
    return Post
}

