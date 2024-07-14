# Smart Wallet

This repository contains code for a modified [ERC-4337](https://eips.ethereum.org/EIPS/eip-4337) compliant smart contract wallet from Coinbase.

There are 2 main types:

- `TimelockBountySmartWallet`: a Coinbase smart wallet with timelock and bounty features
- `TimelockSmartWallet`: a Coinbase smart wallet with timelock features only

## Developing

After cloning the repo, run the tests using Forge, from [Foundry](https://github.com/foundry-rs/foundry?tab=readme-ov-file)

```bash
forge test
```

## Deploying

To deploy on a new chain, in your `.env` set

```bash
#`cast wallet` name
ACCOUNT=
# Node RPC URL
RPC_URL=
# Optional Etherscan API key for contract verification
ETHERSCAN_API_KEY=
```

See [here](https://book.getfoundry.sh/reference/cast/cast-wallet-import) for more details on `cast wallet`.

Then run

```
make deploy
```

## Acknowledgements

This is a fork of [Coinbase's ERC-4337 Smart Wallet](https://github.com/coinbase/smart-wallet).
