module.exports = function(sequelize, DataTypes) {
    var Review = sequelize.define('Review', {
       title: DataTypes.STRING,
       body:DataTypes.TEXT,
       author:DataTypes.STRING
    });

    Review.associate = function(models) {
        // add associations here
        // ex:Review.hasMany(models.BlogPost);
        Review.belongsTo(models.Product);
    };

    return Review;
};