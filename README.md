
# Dungeons & Dragons NFT

Dungeons & Dragons NFT is a simple application that helps me learn to create and deploy a NFT smart contract with random variables (using Chainlink VRF contract).

You can find more information here: https://blog.chain.link/random-numbers-nft-erc721/

## Usage

### Install the dependencies

```
yarn install
```

### Deploy

We use Rinkeby test network:

```
npx hardhat run scripts/deploy.js --network rinkeby
```

### Interact with the contract

```
# make sure that your wallet have at least 3 LINK on Rinkeby network

npx hardhat run scripts/fund-contract.js --network rinkeby
npx hardhat run scripts/generate-character.js --network rinkeby
npx hardhat run scripts/get-character.js --network rinkeby
```

There are some other files in `scripts` folder that you can explore.

### Testing

```
npx hardhat test
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)
