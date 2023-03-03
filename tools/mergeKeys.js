const fs = require('fs')
const path = require('path')

const ckeyFilePath = process.argv[2]
const coutputPath = process.argv[3]

function mergeKeys(keyFilePath, outputPath) {
    const keyFiles = fs.readdirSync(keyFilePath)
    const keys = []
    for (const keyFile of keyFiles) {
        const filePath = path.join(keyFilePath, keyFile)
        const content = fs.readFileSync(filePath, { encoding: 'utf-8' })
        const serviceIdName = keyFile.split('.')[0]
        keys.push(`"${serviceIdName}":${content}`)
    }
    const content = `{ "indexStoreKey": "${keyFiles[0].split('.')[0]}", "serviceAccounts": { ${keys.join(',')} } }`
    const masterKeyJson = JSON.parse(content)
    const masterKey = JSON.stringify(masterKeyJson, null, 4)
    const mergedKeysCount = Object.keys(masterKeyJson.serviceAccounts).length
    console.log("Total merged keys: " + mergedKeysCount)
    console.log("Storage from this key: " + (mergedKeysCount*15)+"GB")
    fs.writeFileSync(outputPath, masterKey)
}

if(ckeyFilePath && coutputPath) {
    mergeKeys(ckeyFilePath, coutputPath)
}

module.exports = mergeKeys;