module.exports = function (seq, DataTypes) {
    const Customer = seq.define("Customers", {
        customer_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                args: [1, 144],
                msg: "Cannot leave the name field empty"
            }
        },

    });

    return Customer;

}