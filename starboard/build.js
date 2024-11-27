import { readdirSync, readFileSync, writeFileSync } from "fs";

const objs = readdirSync("./starboard/").filter(f => f.endsWith(".json")).map(file => {
  const content = readFileSync(`./starboard/${file}`).toString();
  const convo = JSON.parse(content);
  let userIndex = 1;
  return convo.map(msg => {
    if (msg.author == "ensi") {
      msg.author = "Ensi";
      msg.avatar ??= "/ensi.png";
    } else {
      msg.author = `User ${userIndex}`;
      userIndex++;
    }
    return msg;
  });
});
console.log(`Read ${objs.length} starboard file`);

writeFileSync("./static/starboard.json", JSON.stringify(objs));
console.log("Built starboard data");