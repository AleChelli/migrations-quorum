const WalletProvider = require("truffle-wallet-provider");
const Wallet = require('ethereumjs-wallet');

module.exports = {
  networks: {
    development: {
      host: "localhost", port: 7545,
      network_id: "*", gas: 4465030
    },
    ropsten: {
      provider: ropstenProvider,
      network_id: "3", gas: 8000000
    },
    live: {
      provider: mainNetProvider,
      network_id: "1", gas: 7500000
    },
    apio_private: {
      host: "NODE IP",
      port: 22000,
      network_id: "*",
      gasPrice: 0,
      gas: 4500000,
      type: "quorum",
      from: "YOUR ACCOUNT",
      passphrase: "YOUR PASSPHRASE"
    }
  }
};
