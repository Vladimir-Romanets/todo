import Sequelize from 'sequelize';

const db = () => {
    const sequelize = new Sequelize('todo', 'root', 'root',{
        dialect: 'mysql'
    });

    sequelize
        .authenticate()
        .then(() => {
            console.log('Connection has been established successfully.');
        })
        .catch((err) => {
            console.log('Unable to connect to the database:', err);
        });

    const User = sequelize.define('user_list', {
        username: Sequelize.STRING,
        birthday: Sequelize.DATE
    });

    sequelize.sync()
        .then(() => User.create({
            username: 'janedoe',
            birthday: new Date(1980, 6, 20)
        }))
        .then(jane => {
            console.log(jane.toJSON());
        });

    return sequelize;
};

export default db;