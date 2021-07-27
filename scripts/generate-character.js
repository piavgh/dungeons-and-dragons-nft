const { ethers } = require('hardhat');
const contract = require('../artifacts/contracts/DungeonsAndDragonsCharacter.sol/DungeonsAndDragonsCharacter.json');

async function generateCharacter() {
  const contractAddress = '0x1777ca81fD2b40C652d17a9224e8268A892cB40B';
  const dndContract = await ethers.getContractAt(contract.abi, contractAddress);
  console.log('Creating requests on contract:', dndContract.address);

  const tx = await dndContract.requestNewRandomCharacter('The Chainlink Knight');
  const tx2 = await dndContract.requestNewRandomCharacter('The Chainlink Elf');
  const tx3 = await dndContract.requestNewRandomCharacter('The Chainlink Wizard');
  const tx4 = await dndContract.requestNewRandomCharacter('The Chainlink Orc');

  console.log('tx: ', tx);
}

generateCharacter();
