import mysql from 'mysql';

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'todo'
});

connection.connect( err => {
    err ?
    console.error('error connecting: ' + err.stack) :
    console.log('connected as id ' + connection.threadId);
});



export const authorization = ({login, password}) => new Promise( (resolve, reject) => {
    connection.query(`SELECT * FROM users WHERE username="${login}"`, (err, [result]) => {
        if (err) throw new Error(err);
        const response = (result === undefined || result['password'] !== password) ?
            {
                auth: false,
                login,
                token: ''
            } : {
                auth: true,
                login,
                token: '31cc1f0ca737a62b1f9c35154a1cdb7a'
            };
        resolve(response);
    });
});

export const getAllTasks = login => new Promise( resolve => resolve(
    {
        newtasks: [
            {
                id: 123,
                title: 'Cоздание формы авторизации',
                description: 'Форма авторизации должна иметь поля: логин, пароль, кнопка сабмит'
            },
            {
                id: 124,
                title: 'Cоздание карточки Задачи',
                description: 'Карточка должна иметь поля: название, описание задачи.....'
            }
        ],
        inprogress: [],
        completed: [
            {
                id: 1,
                title: 'Tест',
                description: 'Тест.....'
            }
        ]
    }
));

export const chgTaskStatus = data => new Promise( resolve => resolve(
    {
        status: true,
        data
    }
));

export const saveTaskData = data => new Promise( resolve => {
    data.id = Number(data.id) ? data.id : Date.now();
    data.saveStatus = true;
    resolve(data);
});