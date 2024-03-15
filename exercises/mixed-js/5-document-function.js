/* ===== Document this function ====== */

const fs = require("fs");

const queryCreateTime = fileName => ({
    fileName,
    createTime: fs.statSync(fileName).birthtimeMs,
})

const myFunction = (folder, extension) => 
    fs.readdirSync(folder) //returns an array with all the files in the specified folder
        .map(queryCreateTime)
        .sort((fileA, fileB) => fileA.createTime - fileB.createTime)
        .filter(file => file.fileName.endsWith(`.${extension}`))
        [0];