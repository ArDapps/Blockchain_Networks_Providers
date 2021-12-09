

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",     // Localhost (default: none)
      port: 8545,            // Standard BSC port (default: none)
      network_id: "*",       // Any network (default: none)
    },
    ropsten: {
        provider: () => new HDWalletProvider(mnemonic, `https://ropsten.infura.io/v3/${infuraKey}`),
        network_id: 3,       // Ropsten's id
        gas: 5500000,        // Ropsten has a lower block limit than mainnet
        confirmations: 2,    // # of confs to wait between deployments. (default: 0)
        timeoutBlocks: 200,  // # of blocks before a deployment times out  (minimum/default: 50)
        skipDryRun: true     // Skip dry run before migrations? (default: false for public nets )
        },
    Binancetestnet: {
      provider: () => new HDWalletProvider(mnemonic, `https://data-seed-prebsc-1-s1.binance.org:8545`),
      network_id: 97,
      confirmations: 10,
      timeoutBlocks: 200,
      skipDryRun: true
    },
    bsc: {
      provider: () => new HDWalletProvider(mnemonic, `https://bsc-dataseed1.binance.org`),
      network_id: 56,
      confirmations: 10,
      timeoutBlocks: 200,
      skipDryRun: true
    },

    matic_test: {
        provider: () => new HDWalletProvider(mnemonic, `https://rpc-mumbai.maticvigil.com/`),
        network_id: 80001,
        confirmations: 2,
        timeoutBlocks: 200,
        skipDryRun: true
      },

      matic_Main_Net: {
        provider: () => new HDWalletProvider(mnemonic, `https://polygon-rpc.com/`),
        network_id: 137,
        confirmations: 2,
        timeoutBlocks: 200,
        skipDryRun: true
      },

  },


}
