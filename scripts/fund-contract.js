/*
  This script is meant to assist with funding the requesting
  contract with LINK. It will send 1 LINK to the requesting
  contract for ease-of-use. Any extra LINK present on the contract
  can be retrieved by calling the withdrawLink() function.
*/

const { ethers } = require('hardhat');
const LinkTokenInterface = require('../artifacts/@chainlink/contracts/src/v0.6/interfaces/LinkTokenInterface.sol/LinkTokenInterface.json');
const contract = require("../artifacts/contracts/DungeonsAndDragonsCharacter.sol/DungeonsAndDragonsCharacter.json");

const payment = '3000000000000000000';

async function fundContract() {
  const contractAddress = '0x1777ca81fD2b40C652d17a9224e8268A892cB40B';
  const dndContract = await ethers.getContractAt(contract.abi, contractAddress);
  console.log('Funding contract:', dndContract.address);

  const tokenAddress = await dndContract.LinkToken();
  console.log('Chainlink Token Address: ', tokenAddress);
  const token = await ethers.getContractAt(LinkTokenInterface.abi, tokenAddress);

  const tx = await token.transfer(dndContract.address, payment);

  console.log('tx: ', tx);
}

fundContract();
