// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

import { Script, console2 } from "forge-std/Script.sol";
import { SafeSingletonDeployer } from
  "safe-singleton-deployer-sol/src/SafeSingletonDeployer.sol";

import { CoinbaseSmartWalletFactory } from
  "../src/CoinbaseSmartWalletFactory.sol";
import {
  TimelockBountySmartWallet,
  TimelockBountySmartWalletFactory
} from "../src/TimelockBountySmartWalletFactory.sol";

contract DeployFactoryScript is Script {
  function run() public {
    bytes[] memory owners = new bytes[](1);
    owners[0] = abi.encode(address(1));
    console2.logBytes(
      abi.encodeWithSignature(
        "createAccount(bytes[],uint256,uint256,uint256,address)",
        owners,
        0,
        0,
        0,
        address(1)
      )
    );
    console2.log(
      TimelockBountySmartWalletFactory(
        payable(0x0240830Ad1BBd02699E267Bf401bcC89675e6d53)
      ).getAddress(owners, 0, 0, 0, address(1))
    );
  }
}
