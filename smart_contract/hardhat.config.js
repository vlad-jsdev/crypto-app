// https://eth-ropsten.alchemyapi.io/v2/af6mj69asyV9DYAjrn84VX8f5qoQNDSF

require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    ropsten: {
      url: "https://eth-ropsten.alchemyapi.io/v2/af6mj69asyV9DYAjrn84VX8f5qoQNDSF",
      accounts: [
        "33719e85b2b7734278b27a3ba8c72ec897a33e7cdb1069e3276de4dd35eeb4e3",
      ],
    },
  },
};
