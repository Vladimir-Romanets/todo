import mysql from 'mysql';

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'todo',
    multipleStatements: true
});

connection.connect( err => {
    err ?
    console.error('error connecting: ' + err.stack) :
    console.log('connected as id ' + connection.threadId);
});

const getAllTasks = user_id => new Promise( resolve => {
    const sql = `
        SELECT * FROM newTasks WHERE user_id='${user_id}';
        SELECT * FROM inprogressTasks WHERE user_id='${user_id}';
        SELECT * FROM completedTasks WHERE user_id='${user_id}'
    `;

    connection.query(sql, (err, result) => {
        if (err) throw new Error(err);
        resolve({
            newTasks: result[0],
            inprogressTasks: result[1],
            completedTasks: result[2]
        });
    });
});

export default getAllTasks;