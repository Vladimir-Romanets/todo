export default (sequelize, DataTypes) => (
    sequelize.define('Tasks', {
        userId: DataTypes.INTEGER,
        title: DataTypes.STRING,
        description: DataTypes.STRING,
        status: DataTypes.STRING,
        createdAt: DataTypes.DATE,
        updatedAt: DataTypes.DATE
        // createdAt: {
        //      type: DataTypes.DATE,
        //      allowNull: true,
        //      defaultValue: sequelize.literal('NOW()')
        // },
        // updatedAt: {
        //     type: DataTypes.DATE,
        //     allowNull: true,
        //     defaultValue: sequelize.literal('NOW()')
        // },
        // timestamp: true
    })
);
