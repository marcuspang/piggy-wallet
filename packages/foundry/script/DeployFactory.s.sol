// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

import { Script, console2 } from "forge-std/Script.sol";
import { SafeSingletonDeployer } from
  "safe-singleton-deployer-sol/src/SafeSingletonDeployer.sol";

import {
  TimelockBountySmartWallet,
  TimelockBountySmartWalletFactory
} from "../src/TimelockBountySmartWalletFactory.sol";
import {CoinbaseSmartWalletFactory} from "../src/CoinbaseSmartWalletFactory.sol";

contract DeployFactoryScript is Script {
  function run() public {
    console2.log("Deploying on chain ID", block.chainid);
    address implementation = SafeSingletonDeployer.broadcastDeploy({
      creationCode: type(TimelockBountySmartWallet).creationCode,
      salt: 0x3438ae5ce1ff7750c1e09c4b28e2a04525da412f91561eb5b57729977f591fbc
    });
    console2.log("implementation", implementation);
    address factory = SafeSingletonDeployer.broadcastDeploy({
      creationCode: type(TimelockBountySmartWalletFactory).creationCode,
      args: abi.encode(implementation),
      salt: 0x278d06dab87f67bb2d83470a70c8975a2c99872f290058fb43bcc47da5f0390d
    });
    console2.log("factory", factory);
  }
}
