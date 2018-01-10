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

export const authorization = ({login, password}) => new Promise( (resolve) => {
    const sql = `SELECT * FROM users WHERE username="${login}"`;
    connection.query(sql, (err, [result]) => {
        if (err) throw new Error(err);
        const response = (result === undefined || result['password'] !== password) ?
            {
                auth: false,
                login: null,
                user_id: null,
                token: false
            } : {
                auth: true,
                login: result.username,
                user_id: result.id,
                token: '31cc1f0ca737a62b1f9c35154a1cdb7a'
            };
        resolve(response);
    });
});

export const getAllTasks = user_id => new Promise( (resolve, reject) => {
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

export const chgTaskStatus = data => new Promise( resolve => {
    console.log(data);
    const sql = `
        INSERT INTO ${data.newState} (id,user_id,title,description)
        SELECT * FROM ${data.prevState} WHERE user_id=${data.user_id} AND id=${data.taskID};
        DELETE FROM ${data.prevState} WHERE user_id=${data.user_id} AND id=${data.taskID};
        SELECT * FROM ${data.newState} WHERE user_id=${data.user_id} AND id=${data.taskID};
    `;
    connection.query(sql, (err, result) => {
        if (err) throw new Error(err);
        resolve({ data });
    });
});

export const saveTaskData = data => new Promise( resolve => {
    const taskID = Date.now();
    let sql = '';
    if ( Number(data.id) ){
        sql = `UPDATE ${data.currentState}
            SET title="${data.title}", description="${data.description}" WHERE id=${data.id} AND user_id=${data.user_id};
            SELECT * FROM ${data.currentState} WHERE user_id=${data.user_id} AND id=${data.id}`;
    } else {
        sql = `INSERT INTO ${data.currentState} (id, user_id, title, description)
            VALUES( ${taskID}, ${data.user_id}, "${data.title}", "${data.description}" );
            SELECT * FROM ${data.currentState} WHERE user_id=${data.user_id} AND id=${taskID}`;
    };
    connection.query(sql, (err, result) => {
        if (err) throw new Error(err);
        resolve(result[1][0]);
    });
});