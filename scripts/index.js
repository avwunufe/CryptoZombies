// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat");

async function main () {
  const accounts = await ethers.provider.listAccounts();
  const address = '0x5FbDB2315678afecb367f032d93F642f64180aa3';
  const ZombieFactory = await ethers.getContractFactory('ZombieFactory');
  const zombiefactory = await ZombieFactory.attach(address);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
