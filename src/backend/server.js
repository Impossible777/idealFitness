const { Pool } = require('pg');
const express = require('express');
const app = express();
const port = 3000;
const pool = new Pool( {
    user: 'postgres',
    host: 'localhost',
    database: 'idealFitness',
    password: '1OFMany$',
    port: 5433,
})

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

pool.query('SELECT * FROM test', (err, res) => {
    if (err) {
        console.log(error);
        return;
    }

    console.log(res)
});