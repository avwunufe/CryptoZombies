const { expect, AssertionError, } = require("chai");
const { artifacts, assert, ethers } = require("hardhat");
const ZombieFactory = artifacts.require("ZombieFactory");
const zombieNames = ["zombie 1, zombie 2"];
const { shouldThrow } = require("./utils/error")

contract("ZombieFactory", (accounts)=>{
    let [alice, bob] = accounts;
    let contractInstance ;
    beforeEach(async()=>{
        contractInstance = await ZombieFactory.new();
    });
    afterEach(async () => {
        await contractInstance.kill();
     });
    it("should be able to create new zombie", async()=>{
        let result = await contractInstance.createRandomZombie(zombieNames[0], {from: alice});
        assert.equal(result.receipt.status, true);
        assert.equal(result.logs[0].args.name, zombieNames[0]);
    });

    it("should not allow two zombies", async()=>{
        await contractInstance.createRandomZombie(zombieNames[0], {from: alice});
        await shouldThrow(contractInstance.createRandomZombie(zombieNames[1], {from: alice}));
    });

    context("single step scenario", async()=>{
      it("should be able to transfer zombie", async()=>{
        let result = await contractInstance.createRandomZombie(zombieNames[0], {from: alice});
        const id = result.logs[0].args.id;
        await contractInstance.transferFrom(alice, bob, id, {from: alice});
        const newOwner = await contractInstance.ownerOf(id);
        assert.equal(newOwner, bob);
      });
    });
    xcontext("double step scenario", async()=>{
        it("should approve and then transfer a zombie when the approved address calls transferFrom", async()=>{

        });
        it("should approve and then transfer a zombie when the owner calls transferFrom", async()=>{

        });
    });
});