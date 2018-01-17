export default (sequelize, DataTypes) => (
    sequelize.define('Users', {
        login: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        createdAt: DataTypes.STRING,
        // {
        //     type: DataTypes.DATE,
        //     allowNull: true,
        //     defaultValue: sequelize.literal('NOW()')
        // },
        updatedAt: DataTypes.STRING
        // {
        //     type: DataTypes.DATE,
        //     allowNull: true,
        //     defaultValue: sequelize.literal('NOW()')
        // },
        //timestamp: true
    })
);
