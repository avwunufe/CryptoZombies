async function main () {
    // We get the contract to deploy
    const ZombieFactory = await ethers.getContractFactory('ZombieFactory');
    const ZombieOwnership = await ethers.getContractFactory('ZombieOwnership');
    console.log('Deploying ZombieFactory...');
    const zombiefactory = await ZombieFactory.deploy();
    await zombiefactory.deployed();
    const zombieownership = await ZombieOwnership.deploy();
    await zombieownership.deployed();
    console.log('ZombieFactory deployed to:', zombiefactory.address);
  }
  
  main()
    .then(() => process.exit(0))
    .catch(error => {
      console.error(error);
      process.exit(1);
    });