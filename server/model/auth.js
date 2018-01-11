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

const authorization = ({login, password}) => new Promise( resolve => {
    const sql = mysql.format('SELECT * FROM users WHERE username=? AND password=?', [login, password]);
    connection.query(sql, (err, [result]) => {
        if (err) throw new Error(err);
        const response = ( result === undefined ) ?
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

export default authorization;