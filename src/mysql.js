const mysql = require('mysql')

const db = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "hojaplantcrann3X",
    database: "metrics"
})

let query = ""

db.connect(err => {
    if (err) throw err;
    console.log("Connection successful!")
    query = "DROP TABLE IF EXISTS METRICS"
    executeQuery(query, "Metrics table dropped")
    query = "CREATE TABLE METRICS (row_id INT AUTO_INCREMENT PRIMARY KEY, peer_id VARCHAR(255), "
        + "node_id VARCHAR(255), user_agent VARCHAR(255), client VARCHAR(255), version VARCHAR(255), pubkey VARCHAR(255), address VARCHAR(255), ip VARCHAR(255), country VARCHAR(255), city VARCHAR(255), latency FLOAT(4, 3), connections DECIMAL, disconnections DECIMAL, connected_time DECIMAL, beacon_blocks DECIMAL, beacon_aggregations DECIMAL, voluntary_exits DECIMAL, proposer_slashings DECIMAL, attester_slashings DECIMAL, total_messages DECIMAL)"
    executeQuery(query, "Metrics table created!")
    query = "LOAD DATA LOCAL INFILE 'csv/tableMetrics.csv' INTO TABLE METRICS FIELDS TERMINATED BY ',' IGNORE 1 LINES"
        + "(peer_id, node_id, user_agent, client, version, pubkey, address, ip, country, city, latency, connections, disconnections, connected_time, beacon_blocks, beacon_aggregations, voluntary_exits, proposer_slashings, attester_slashings, total_messages)"
    executeQuery(query, "Metrics table loaded!")
    db.end(err => {
        if (err) throw err;
        console.log("All done! Closing the database connection!")
    })
})

function executeQuery(query, msg) {
    db.query(query, err => {
        if (err) throw err;
        console.log(msg)
    })
}