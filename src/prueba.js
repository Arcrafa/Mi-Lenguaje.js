var PEG = require("./javascript.js");
var r = PEG.parse("var string='hola mundo' \nconsole.log(string)");
console.log(r);