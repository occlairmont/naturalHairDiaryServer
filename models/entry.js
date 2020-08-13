module.exports = (sequelize, DataTypes) => {
    const Entry = sequelize.define('entry', {
        date: {
            type: DataTypes.DATEONLY,
            allowNull: false,
        },
        goal: {
            type: DataTypes.STRING,
        },
        products: {
            type: DataTypes.STRING,
        },
        style: {
            type: DataTypes.STRING,
        },
        isSuccessful: {
            type: DataTypes.BOOLEAN,
        },
        note: {
            type: DataTypes.STRING(350),
            allowNull: false,
        },
        owner: {
            type: DataTypes.INTEGER,
        },

    })
    return Entry;
}