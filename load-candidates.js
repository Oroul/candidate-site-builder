const fs = require("fs");
const fetch = require("node-fetch");
const parse = require("csv-parse/lib/sync");

const url =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vQo6fV7oZDDaUa0kS4QaRpMTx7BfV3x9jok2Lnbeu9u_Ttc77EX5aFGWbNmLsU0SIHpknIBSUHe2Yeu/pub?gid=1017127475&single=true&output=csv";

const get_candidates = async () => {
  const csvFile = await fetch(url).then(r => r.text());
  //console.log(csvFile);
  const records = parse(csvFile, { columns: false });
  const jsonData = records.map(r => ({
    twitterId: r[0],
    fullName: r[1],
    bio: r[2],
    keywords: r[3],
    email: r[4],
    phone: r[5],
    facebookId: r[6],
    pledge: r[7]
  }));

  fs.writeFileSync("./src/candidates.json", JSON.stringify(jsonData));
};

get_candidates();
