import mysql from 'mysql';
import { sign } from 'jsonwebtoken';
import { modelConf, SECRET } from '../config';

const connection = mysql.createConnection(modelConf);

connection.connect( err => {
    err ?
    console.error('error connecting: ' + err.stack) :
    console.log('connected as id ' + connection.threadId);
});

const authorization = ({login, password}) => new Promise( resolve => {
    const sql = mysql.format('SELECT * FROM users WHERE username=? AND password=?', [login, password]);
    connection.query(sql, (err, [result]) => {
        if (err) throw new Error(err);
        const response = ( result === undefined ) ?
            {
                auth: false
            } : {
                auth: true,
                login: result.username,
                user_id: result.id,
                token: sign(login, SECRET)
            };
        resolve(response);
    });
});

export default authorization;