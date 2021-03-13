// const Papa = require('papaparse');
const fs = require('fs');
// let csvToJson = require('convert-csv-to-json');
const csv = require('csvtojson');
let fileInputName = './csv/metrics.csv';
let fileOutputName = './csv/metrics.js';

// csvToJson.generateJsonFileFromCsv(fileInputName, fileOutputName);
csv()
    .fromFile(fileInputName)
    .then((jsonObj) => {
        console.log(jsonObj);
        /**
         * [
         *     {a:"1", b:"2", c:"3"},
         *     {a:"4", b:"5". c:"6"}
         * ]
         */
        fs.writeFileSync(fileOutputName, JSON.stringify(jsonObj), "utf-8", (err) => {
            if (err) console.log(err)
        })
    })
// const metricsFilePath = './csv/metrics.csv'
// const metricsFile = fs.readFileSync(metricsFilePath, "utf8")

// const metricsRows = {}
// Papa.parse(metricsFile, {
//     header: true,
//     skipEmptyLines: true,
//     complete: function (results) {
//         metricsRows.data = results.data
//         metricsRows.errors = results.errors
//         metricsRows.meta = results.meta
//     }
// })


// const metricsArray = metricsRows.data.map(row => {
//     const { peer_id, node_id, user_agent, client, version, pubkey, address, ip, country, city, latency, connections, disconnections, connected_time, beacon_blocks, beacon_aggregations, voluntary_exits, proposer_slashings, attester_slashings, total_messages } = row
//     return { peer_id, node_id, user_agent, client, version, pubkey, address, ip, country, city, latency, connections, disconnections, connected_time, beacon_blocks, beacon_aggregations, voluntary_exits, proposer_slashings, attester_slashings, total_messages }
// })

// const filePath = "./csv/tableMetrics.csv"
// const metricsData = Papa.unparse(metricsArray)


// function createFile(filePath, metricsData, msg) {
//     fs.writeFile(filePath, metricsData, err => {
//         if (err) throw err;
//         console.log(msg)
//     })
// }

// createFile(filePath, metricsData, "Metrics table successfully saved!")