const { ethers } = require('hardhat');
const contract = require('../artifacts/contracts/DungeonsAndDragonsCharacter.sol/DungeonsAndDragonsCharacter.json');

async function getCharacter() {
  const contractAddress = '0x1777ca81fD2b40C652d17a9224e8268A892cB40B';
  const dndContract = await ethers.getContractAt(contract.abi, contractAddress);

  console.log('Let\'s get the overview of your character');

  const overview = await dndContract.characters(0);
  console.log(overview);
}

getCharacter();
