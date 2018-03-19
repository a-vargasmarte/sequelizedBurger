module.exports = function (sequelize, DataTypes) {
    return sequelize.define("Burgers", {
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
};
