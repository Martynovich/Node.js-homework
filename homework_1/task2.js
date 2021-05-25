const csv=require('csvtojson');
const fs=require('fs');

const readStream = fs.createReadStream('./csv/nodejs-hw1-ex1.csv', 'utf8');
const writeStream = fs.createWriteStream('./csv/nodejs-hw1-ex2.txt', 'utf8');

readStream.on('error', handler)
csv().on('error', handler)
writeStream.on('error', handler)

readStream
    .pipe(csv())
    .pipe(writeStream);

function handler (err) { console.log(err) }