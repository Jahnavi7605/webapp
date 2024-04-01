
//mysqlConfig.js
const mysql = require('mysql');

// Create MySQL connection pool
const pool = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: 'root', // Change to your MySQL username
    password: 'root', // Change to your MySQL password
    database: 'your_database_name' // Change to the name of your database
});

// Function to execute MySQL queries
function executeQuery(sql, values) {
    return new Promise((resolve, reject) => {
        pool.query(sql, values, (error, results) => {
            if (error) {
                reject(error);
            } else {
                resolve(results);
            }
        });
    });
}

module.exports = { pool, executeQuery };
