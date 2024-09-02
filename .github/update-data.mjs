import { readFileSync, writeFileSync } from "fs";

const TARGET_PATH = "./data.json";

console.log(`Reading file: ${TARGET_PATH}`);
const raw = readFileSync(TARGET_PATH).toString();
const json = JSON.parse(raw);

function addData(key, arrayString) {
  console.log(`Adding to ${key}: ${arrayString}`)
  const arr = JSON.parse(arrayString);
  json[key] = [
    ...json[key],
    ...arr
  ];
}

function removeData(key, arrayString) {
  console.log(`Removing from ${key}: ${arrayString}`);
  const arr = JSON.parse(arrayString);
  let res = json[key];
  arr.forEach(str => {
    const index = res.findIndex(s => s === str);
    if (index < 0) return;
    res = res.splice(index, 1);
  });
  json[key] = res;
}

[
  "ADD_WORDS",
  "REMOVE_WORDS",
  "ADD_VERBS",
  "REMOVE_VERBS"
].forEach(key => {
  const arrayString = process.env[key];
  if (!arrayString?.length) return;
  const keySplit = key.toLowerCase().split("_");
  const action = keySplit[0];
  const name = keySplit[1];
  if (action == "add") addData(name, arrayString);
  else if (action == "remove") removeData(name, arrayString);
});

console.log(`Writing to: ${TARGET_PATH}`);
writeFileSync(TARGET_PATH, JSON.stringify(json, null, 2));
console.log("Done");