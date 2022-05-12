const hre = require("hardhat");
const ethers = hre.ethers;

const main = async () => {
  const Transaction = await ethers.getContractFactory("Transaction");
  const transaction = await Transaction.deploy();

  await transaction.deployed();

  console.log("Transaction deployed to:", transaction.address);
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

runMain();
