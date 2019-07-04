import mysql from 'mysql';

let pool;

function getPool() {
    console.log('havePool?:', Boolean(pool));

    if (pool) return pool;

    const connObject = {
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        port: process.env.DB_PORT
    };

    console.log('connObject :', connObject);

    pool = mysql.createPool(connObject);

    return pool;
}

export { getPool };
