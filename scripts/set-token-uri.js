const { ethers } = require('hardhat');
const contract = require('../artifacts/contracts/DungeonsAndDragonsCharacter.sol/DungeonsAndDragonsCharacter.json');

async function setTokenUri() {
  const contractAddress = '0x1777ca81fD2b40C652d17a9224e8268A892cB40B';
  const dndContract = await ethers.getContractAt(contract.abi, contractAddress);
  console.log('Let\'s set the tokenURI of your characters');

  const tx = await dndContract.setTokenURI(0, 'https://ipfs.io/ipfs/QmaSED9ZSbdGts5UZqueFJjrJ4oHH3GnmGJdSDrkzpYqRS?filename=the-chainlink-knight.json');
  const tx1 = await dndContract.setTokenURI(1, 'https://ipfs.io/ipfs/QmTvsVaaHTuMNmwXgbfgkrztFEazAPyzmrb4VSS2PbqLjA?filename=the-chainlink-elf.json');
  const tx2 = await dndContract.setTokenURI(2, 'https://ipfs.io/ipfs/QmPZQhiBB6pwcxRgwZe2mx6ZizCPYgq8i4FBMETyWK1V2z?filename=the-chainlink-wizard.json');
  const tx3 = await dndContract.setTokenURI(3, 'https://ipfs.io/ipfs/QmS6aznzxshLMcECPQZjCR94UF22WHu6FMM5HLQvaYL9NP?filename=the-chainlink-orc.json');

  console.log('tx: ', tx);
}

setTokenUri();
