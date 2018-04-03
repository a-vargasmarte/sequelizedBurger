module.exports = function (sequelize, DataTypes) {
    const Burger = sequelize.define("Burgers", {
        burger_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: {
                    args: [1, 144],
                    msg: "Can't be empty and must have less than 144 characters"
                }
            }
        },
        devoured: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }
    });

    // // Add a belongsTo Association of the Burger to a Customer
    // Burger.associate = function (models) {
    //     console.log(models);
    //     models.Burgers.belongsTo(models.Customers, {
    //         onDelete: "CASCADE",
    //         foreignKey: {
    //             allowNull: false
    //         }
    //     });
    // }

    return Burger;
};
