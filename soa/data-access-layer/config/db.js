require('dotenv').config();

const config = {
    client: 'pg',
    connection: {
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_NAME,
        port: process.env.DB_PORT,
    },
    pool: {
        min: 0,
        max: 200
    }
};

module.exports = config;