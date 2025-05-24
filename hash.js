// file: hash-node.js
const readline = require("readline");

const { sha256 } = require("ethereum-cryptography/sha256");
const { toHex, utf8ToBytes } = require("ethereum-cryptography/utils");


const readFromUser = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

readFromUser.question("Enter text to hash: ", function(text) {
  const BytesOfText = utf8ToBytes(text);
  const sha256OfText = sha256(utf8ToBytes(text));
  const hexOfText = toHex(sha256(utf8ToBytes(text)));
  console.log('BytesOfText:  ${text} is ', BytesOfText);
  console.log("sha256OfText:   ${text} is", sha256OfText);
  console.log("hexOfText:   ${text} is", hexOfText);



  readFromUser.close();
});