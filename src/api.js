const { query } = require('express')
const cors = require('cors')
const express = require('express')
const mysql = require('mysql')

const app = express()
const port = 4000

const db = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    database: 'Metrics',
    password: 'hojaplantcrann3X'
})

app.use(cors())

app.get('/getAllMetrics', (req, res) => {
    const query = "SELECT * FROM METRICS"
    db.query(query, (err, rows) => {
        if (err) throw err;
        res.send(rows)
    })
})

app.listen(port, () => console.log(`Rest API Listening on port ${port}`))