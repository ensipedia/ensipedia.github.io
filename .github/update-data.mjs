import { readFileSync, writeFileSync } from "fs";

const TARGET_PATH = "./static/data.json";

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
  json[key] = json[key].filter(s => !arr.includes(s));
}

for (const key of [
  "ADD_WORDS",
  "REMOVE_WORDS",
  "ADD_VERBS",
  "REMOVE_VERBS"
]) {
  const arrayString = process.env[key];
  if (!arrayString?.length) continue;
  const keySplit = key.toLowerCase().split("_");
  const action = keySplit[0];
  const name = keySplit[1];
  if (action == "add") addData(name, arrayString);
  else if (action == "remove") removeData(name, arrayString);
}

console.log(`Writing to: ${TARGET_PATH}`);
writeFileSync(TARGET_PATH, JSON.stringify(json, null, 2));
console.log("Done");