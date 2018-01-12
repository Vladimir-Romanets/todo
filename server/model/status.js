import mysql from 'mysql';
import { modelConf } from '../config';

const connection = mysql.createConnection(modelConf);

connection.connect( err => {
    err ?
    console.error('error connecting: ' + err.stack) :
    console.log('connected as id ' + connection.threadId);
});

const chgTaskStatus = data => new Promise( resolve => {
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

export default chgTaskStatus;