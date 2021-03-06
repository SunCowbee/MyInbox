//编译的智能合约的脚本
const path = require('path');
const fs = require('fs');
const solc = require('solc');

const srcpath = path.resolve(__dirname, 'contracts', 'MyInbox.sol');
const source = fs.readFileSync(srcpath, 'utf-8');

const result = solc.compile(source, 1);
// console.log(result)

module.exports = result.contracts[':Inbox'];