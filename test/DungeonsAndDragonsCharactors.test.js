const { expect } = require('chai');
const { ethers } = require('hardhat')

const RINKEBY_VRF_COORDINATOR = '0xb3dCcb4Cf7a26f6cf6B120Cf5A73875B7BBc655B'
const RINKEBY_LINKTOKEN = '0x01be23585060835e02b77ef475b0cc51aa1e0709'
const RINKEBY_KEYHASH = '0x2ed0feb3e7fd2022120aa84fab1945545a9f2ffc9076fd6156fa96eaff4c1311'

describe('DungeonsAndDragonsCharacter contract', function () {
  it('Deployment should assign the correct external addresses', async function () {
    // Fix error timeout 20000ms
    this.timeout(0);

    const DungeonsAndDragonsCharacter = await ethers.getContractFactory('DungeonsAndDragonsCharacter');
    const dndContract = await DungeonsAndDragonsCharacter.deploy(RINKEBY_VRF_COORDINATOR, RINKEBY_LINKTOKEN, RINKEBY_KEYHASH);
    await dndContract.deployed();

    const linkToken = await dndContract.LinkToken();
    expect(linkToken).to.equal('0x01BE23585060835E02B77ef475b0Cc51aA1e0709');

    const vrfCoordinator = await dndContract.VRFCoordinator();
    expect(vrfCoordinator).to.equal('0xb3dCcb4Cf7a26f6cf6B120Cf5A73875B7BBc655B');
  });
});
