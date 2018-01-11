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

const saveTaskData = data => new Promise( resolve => {
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

export default saveTaskData;