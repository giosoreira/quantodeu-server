import { getPool } from '../db';

function add(product) {
    const pool = getPool();

    pool.query('INSERT ...', function (error, results, fields) {
        if (error) {
            throw error;
        }
        console.log(results.insertId);
        // ...
    });
}

function update(product) {

}

function selectOneByName(name, userId, callback) {
    const pool = getPool();

    pool.query('SELECT ... FROM products WHERE ...', function (error, results, fields) {
        if (error) {
            throw error;
        }
        callback(results)
        // ...
    });
}

function selectAll(userId, callback) {
    const pool = getPool();

    function queryCallback(error, results, fields) {
        if (error) {
            throw error;
        }
        // results:
        // [
        //     {
        //       product_id: 1,
        //       name: 'Café',
        //       quantity: 3,
        //       user_id: 1
        //     },
        //     {
        //       product_id: 2,
        //       name: 'Açucar',
        //       quantity: 1,
        //       user_id: 1
        //     },
        //    ...
        //   ]

        // transformar product_id em productId
        // remover user_id, pois quem chamou essa função já sabe o id do usuário
        // chamar o callback com a lista tratada
        callback(results);
    }

    const sql = 'SELECT * FROM products WHERE user_id = ' + pool.escape(userId);

    pool.query(sql, queryCallback);
}

function remove(id, userId) {
    const pool = getPool();



}

export { add, update, selectAll, selectOneByName, remove };
