require("@nomiclabs/hardhat-waffle");

module.exports = {
  networks: {
    hardhat: {
      chainId: 1337
    },
    ropsten: {
      url: `https://ropsten.infura.io/v3/${process.env.projectId}`,
      accounts: [process.env.privateKey]
    },
  },
  solidity: "0.8.4",
};
