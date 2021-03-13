const fs = require('fs');
const csv = require('csvtojson');
let fileInputName = './csv/metrics.csv';
let fileOutputName = './csv/metrics.js';

csv()
    .fromFile(fileInputName)
    .then((jsonObj) => {
        console.log(jsonObj);
        fs.writeFileSync(fileOutputName, JSON.stringify(jsonObj), "utf-8", (err) => {
            if (err) console.log(err)
        })
    })
