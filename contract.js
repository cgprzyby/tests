/*
*  Testing the response times of function calls within smart contracts on the Ethereum blockchain.
*/
var Web3 = require('web3');
var now = require("performance-now");

// Connect to Ethereum smart contract through Parity
if (typeof web3 !== 'undefined') {
  web3 = new Web3(web3.currentProvider);
} else {
  web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545")); // Parity default
}

// Read contract ABI, and connect to its address this allows us to use the Web3 API to call
// functions within a smart contract
var fs = require('fs')
var abiArray = JSON.parse(fs.readFileSync('abi.json', 'utf-8'));
var contractAddress = "CONTRACT ADDRESS HERE";
var contractInstance = new web3.eth.Contract(abiArray, contractAddress);

// Test #1 - Return the balance of a wallet address
var t0 = now();
var result = contractInstance.methods.balanceOf('WALLET ADDRESS HERE').call();
var t1 = now();
console.log("Call to balanceOf took " + (t1 - t0) + " milliseconds.");

// Test #2 - Return the total supply of the token
t0 = now();
result = contractInstance.methods.totalSupply().call();
t1 = now();
console.log("Call to totalSupply took " + (t1 - t0) + " milliseconds.");

// Test #3 - Return the amount of tokens the spender is allowed to use from the owner's adress
t0 = now();
result = contractInstance.methods.allowance('TOKEN OWNER ADDRESS HERE','SPENDER ADDRESS HERE').call();
t1 = now();
console.log("Call to allowance took " + (t1 - t0) + " milliseconds.");
