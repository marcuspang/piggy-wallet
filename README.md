# 🏗 Piggy Wallet

Piggy Wallet is a Smart Wallet that enables several functionality, similar to a form of no-code Smart Wallet. For instance, we support the following features:

- Auto-conversion of incoming ERC20s to USDC
- Task system to reward users / wallet owners for completing tasks
- Timelock system to give non-owners access after a certain time

## How it works

For the auto-conversion of ERC20 tokens to USDC, we allow any user to initiate a UserOp which simply converts some ERC20 that is currently in the Safe Smart Wallet. This is to enable non-wallet owners to initiate this transaction for these users, and thereby have the "automatic" conversion feature.

- This will be enhanced with 1inch Fusion API, leveraging the Resolver network to fulfil this swap

For the task system, it is a simple mapping of task IDs to task details, which include the reward amount, token address, and deadline. There is no strict enforcement of whether the task has been completed satisfactorily, as the main use case is to reward individuals known to the sponsor, who can mediate this off-chain (e.g. parents and their children).

Timelock is implemented by defining a timestamp for when the user can access the Safe Smart Wallet again. This is meant to be used in conjunction with plugins that support multiple owners.

## Implementation Details

Smart Wallet is implemented initially with Coinbase Smart Wallet, which we unfortunately were unable to deploy due to issues with the bundler. Read more in [foundry](./packages/foundry/README.md).

We have since switched to using [Module Kit](https://github.com/rhinestonewtf/module-template) to create plugins for the Safe ERC7579 smart wallet. Read more in [module-kit](./packages/module-kit/README.md).

Swapping of tokens is done through Uniswap V4, which is implemented in [module-kit](./packages/module-kit/README.md) as well. See this [test](./packages/module-kit/test/USDCSwapperExecute.t.sol) for more information.

## Requirements

Before you begin, you need to install the following tools:

- [Node (>= v18.17)](https://nodejs.org/en/download/)
- Yarn ([v1](https://classic.yarnpkg.com/en/docs/install/) or [v2+](https://yarnpkg.com/getting-started/install))
- [Git](https://git-scm.com/downloads)

## Quickstart

To get started, follow the steps below:

1. Install dependencies if it was skipped in CLI:

```
yarn install
```

2. Start NextJS app:

```
cd packages/nextjs
yarn start
```

3. Run foundry tests:

```
cd packages/module-kit
forge test -vvv --evm-version=cancun
```

## Acknowledgements

This is a fork of [Scaffold-ETH 2](https://github.com/scaffold-eth/scaffold-eth-2).
