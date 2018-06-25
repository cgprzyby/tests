Uses the Web3 API in Javascript (Node.js) to:
- Connect to a Parity node
- Connect to a smart contract on the Ethereum blockchain
- Call functions within a Solidity smart contract

Using Mozilla performance.now(), speed tests are performed to
calculate the response time for making a request to get data
off of the Ethereum blockchain. For my testing purposes, I connected
to a MetaMask wallet on the Ropsten TestNet.

In order to run this code, replace strings with actual addresses.
You will need the ABI of the smart contract you plan on connecting to, in JSON format.
