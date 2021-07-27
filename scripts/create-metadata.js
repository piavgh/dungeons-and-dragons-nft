const fs = require('fs');
const Big = require('big.js');
const { ethers } = require('hardhat');
const contract = require('../artifacts/contracts/DungeonsAndDragonsCharacter.sol/DungeonsAndDragonsCharacter.json');

const metadataTemple = {
  'name': '',
  'description': '',
  'image': '',
  'attributes': [
    {
      'trait_type': 'Strength',
      'value': 0,
    },
    {
      'trait_type': 'Dexterity',
      'value': 0,
    },
    {
      'trait_type': 'Constitution',
      'value': 0,
    },
    {
      'trait_type': 'Intelligence',
      'value': 0,
    },
    {
      'trait_type': 'Wisdom',
      'value': 0,
    },
    {
      'trait_type': 'Charisma',
      'value': 0,
    },
    {
      'trait_type': 'Experience',
      'value': 0,
    },
  ],
};

async function createMetadata() {
  const contractAddress = '0x1777ca81fD2b40C652d17a9224e8268A892cB40B';
  const dndContract = await ethers.getContractAt(contract.abi, contractAddress);

  const length = await dndContract.getNumberOfCharacters();
  let index = 0;

  while (index < length) {
    console.log('Let\'s get the overview of your character ' + (index + 1) + ' of ' + length);
    let characterMetadata = metadataTemple;
    let characterOverview = await dndContract.characters(index);
    index++;
    characterMetadata['name'] = characterOverview['name'];

    console.log(characterMetadata['name']);

    characterMetadata['attributes'][0]['value'] = Big(characterOverview['strength']).toString();
    characterMetadata['attributes'][1]['value'] = Big(characterOverview['dexterity']).toString();
    characterMetadata['attributes'][2]['value'] = Big(characterOverview['constitution']).toString();
    characterMetadata['attributes'][3]['value'] = Big(characterOverview['intelligence']).toString();
    characterMetadata['attributes'][4]['value'] = Big(characterOverview['wisdom']).toString();
    characterMetadata['attributes'][5]['value'] = Big(characterOverview['charisma']).toString();
    const filename = 'metadata/' + characterMetadata['name'].toLowerCase().replace(/\s/g, '-');
    let data = JSON.stringify(characterMetadata);
    fs.writeFileSync(filename + '.json', data);
  }
}

createMetadata();
