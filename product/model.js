import db from '../db';

const pool = db.getPool();

function add(params) {
    pool.query('INSERT ...', function (error, results, fields) {
        if (error) {
            throw error;
        }
        // ...
    });
}

function update(params) {

}

function list(params) {

}

function remove(id) {

}

export { add, update, list, remove };