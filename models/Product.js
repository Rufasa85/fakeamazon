module.exports = function(sequelize, DataTypes) {
    var Product = sequelize.define('Product', {
        product_name: DataTypes.STRING,
        price: DataTypes.FLOAT
    });

    Product.associate = function(models) {
        Product.hasMany(models.Review);
    };
    return Product;
};