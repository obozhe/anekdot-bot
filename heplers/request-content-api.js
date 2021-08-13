const fetch = require('node-fetch');
const XMLParser = require('fast-xml-parser');

module.exports = function (contentCode) {
  return fetch('http://rzhunemogu.ru/Rand.aspx?CType=' + contentCode)
    .then((res) => res.arrayBuffer())
    .then((buffer) => {
      const decoder = new TextDecoder('windows-1251');
      return decoder.decode(buffer);
    })
    .then((decodedXml) => XMLParser.parse(decodedXml).root.content);
};
