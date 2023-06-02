const { readFileSync, writeFileSync } = require("node:fs")

function readJSONFile(path, fileName) {
  // readFileSync
  const object = readFileSync(`${path}/${fileName}`, "utf8");
  return object ? JSON.parse(object) : [];
}

function writeJSONFile(path, fileName, data) {
  // writeFileSync
  data = JSON.stringify(data);
  return writeFileSync(`${path}/${fileName}`, data, { encoding: "utf-8" });
}

module.exports = {
    readJSONFile,
    writeJSONFile
}