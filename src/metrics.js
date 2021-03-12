const Papa = require('papaparse')
const fs = require('fs')

const metricsFilePath = './csv/metrics.csv'
const metricsFile = fs.readFileSync(metricsFilePath, "utf8")

const metricsRows = {}
Papa.parse(metricsFile, {
    header: true,
    skipEmptyLines: true,
    complete: function (results) {
        metricsRows.data = results.data
        metricsRows.errors = results.errors
        metricsRows.meta = results.meta
    }
})

const metricsArray = metricsRows.data.map(row => {
    const { peer_id, node_id, user_agent, client, version, pubkey, address, ip, country, city, latency, connections, disconnections, connected_time, beacon_blocks, beacon_aggregations, voluntary_exits, proposer_slashings, attester_slashings, total_messages } = row
    return { peer_id, node_id, user_agent, client, version, pubkey, address, ip, country, city, latency, connections, disconnections, connected_time, beacon_blocks, beacon_aggregations, voluntary_exits, proposer_slashings, attester_slashings, total_messages }
})

const filePath = "./csv/tableMetrics.csv"
const metricsData = Papa.unparse(metricsArray)
// createFile("./csv/tableMetrics.csv", metricsData, "Metrics table successfully saved!")

// function createFile(filePath, data, msg) {
fs.writeFile(filePath, metricsData, err => {
    if (err) throw err;
    console.log('Saved!')
})
// }