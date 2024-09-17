## Piggy Wallet Modules

Existing modules:

- BountyExecute: maintains bounty data structure
- USDCSwapperExecute: swaps ERC20 tokens to USDC in Uniswap V4 pools
- TimelockValidator: validates a userOp of a specific owner to ensure it has passed the timelock

## Addresses

### Ethereum Sepolia

USDCSwapperExecute: 0x5c97696418f4bf457676385ed6e0442001d3fe02
TimelockValidator: 0x991a4452dda8342887f6ded0ebfee43b4b372589
BountyExecute: 0x0add469287b392a6ec4cedb0a81fa902237284ea

### Base Sepolia

USDCSwapperExecute: 0x5C97696418f4bf457676385ed6E0442001D3fE02
TimelockValidator: 0x991A4452Dda8342887f6DeD0EBfee43B4B372589
BountyExecute: 0x0aDD469287B392A6ec4cEdB0A81fA902237284ea

### Arbitrum Sepolia

USDCSwapperExecute: 0x5C97696418f4bf457676385ed6E0442001D3fE02
TimelockValidator: 0x991A4452Dda8342887f6DeD0EBfee43B4B372589
BountyExecute: 0x0aDD469287B392A6ec4cEdB0A81fA902237284ea

### Morph Holesky

USDCSwapperExecute: 0x5C97696418f4bf457676385ed6E0442001D3fE02
TimelockValidator: 0x991A4452Dda8342887f6DeD0EBfee43B4B372589
BountyExecute: 0x0aDD469287B392A6ec4cEdB0A81fA902237284ea

### Install dependencies

```shell
pnpm install
```

### Update ModuleKit

```shell
pnpm update rhinestonewtf/modulekit
```

### Building modules

1. Create a new file in `src` and inherit from the appropriate interface (see templates)
2. After you finished writing your module, run the following command:

```shell
forge build
```

### Testing modules

1. Create a new `.t.sol` file in `test` and inherit from the correct testing kit (see templates)
2. After you finished writing your tests, run the following command:

```shell
forge test
```

### Deploying modules

1. Import your modules into the `script/DeployModule.s.sol` file.
2. Create a `.env` file in the root directory based on the `.env.example` file and fill in the variables.
3. Run the following command:

```shell
source .env && forge script script/DeployModule.s.sol:DeployModuleScript --rpc-url $DEPLOYMENT_RPC --broadcast --sender $DEPLOYMENT_SENDER --verify
```

Your module is now deployed to the blockchain and verified on Etherscan.

If the verification fails, you can manually verify it on Etherscan using the following command:

```shell
source .env && forge verify-contract --chain-id [YOUR_CHAIN_ID] --watch --etherscan-api-key $ETHERSCAN_API_KEY [YOUR_MODULE_ADDRESS] src/[PATH_TO_MODULE].sol:[MODULE_CONTRACT_NAME]
```

## Tutorials

For general explainers and guided walkthroughs of building a module, check out our [documentation](https://docs.rhinestone.wtf/modulekit).

## Using this repo

To install the dependencies, run:

```bash
pnpm install
```

To build the project, run:

```bash
forge build
```

To run the tests, run:

```bash
forge test
```

## Acknowledgements

This is a fork of [https://github.com/rhinestonewtf/modulekit](https://github.com/rhinestonewtf/modulekit).
