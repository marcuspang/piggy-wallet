// SPDX-License-Identifier: MIT
pragma solidity ^0.8.23;

import "forge-std/Script.sol";
import { RegistryDeployer } from "modulekit/deployment/RegistryDeployer.sol";
import { USDCSwapperExecute } from "src/USDCSwapperExecute.sol";
import { TimelockValidator } from "src/TimelockValidator.sol";
import { BountyExecute } from "src/BountyExecute.sol";

/// @title DeployModuleScript
contract DeployModuleScript is Script, RegistryDeployer {
    // Sepolia
    address public usdc = 0x94a9D9AC8a22534E3FaCa9F4e7F2E2cf85d5E4C8;
    address public poolSwapTest = 0x9A8ca723F5dcCb7926D00B71deC55c2fEa1F50f7;

    function run() public {
        // Setup module bytecode, deploy params, and data
        bytes memory bytecode = type(USDCSwapperExecute).creationCode;
        bytes memory deployParams = "";
        bytes memory data = "";
        bytes32 salt = bytes32(uint256(0));

        // Get private key for deployment
        vm.startBroadcast();

        // Deploy module
        // address module = deployModule({
        //     code: bytecode,
        //     deployParams: deployParams,
        //     salt: bytes32("asdasd"),
        //     data: abi.encode(usdc, poolSwapTest)
        // });
        USDCSwapperExecute module1 = new USDCSwapperExecute{ salt: salt }();
        console.log("Deploying module at: %s", address(module1)); // 0x5c97696418f4bf457676385ed6e0442001d3fe02
        TimelockValidator module2 = new TimelockValidator{ salt: salt }();
        console.log("Deploying module at: %s", address(module2)); // 0x991a4452dda8342887f6ded0ebfee43b4b372589
        BountyExecute module3 = new BountyExecute{ salt: salt }();
        console.log("Deploying module at: %s", address(module3)); // 0x0add469287b392a6ec4cedb0a81fa902237284ea

        vm.stopBroadcast();
    }
}
