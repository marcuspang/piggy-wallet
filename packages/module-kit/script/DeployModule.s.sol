// SPDX-License-Identifier: MIT
pragma solidity ^0.8.23;

import "forge-std/Script.sol";
import { RegistryDeployer } from "modulekit/deployment/RegistryDeployer.sol";
import { USDCSwapperExecute } from "src/USDCSwapperExecute.sol";

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

        // Get private key for deployment
        vm.startBroadcast();

        // Deploy module
        address module = deployModule({
            code: bytecode,
            deployParams: deployParams,
            salt: bytes32("asdasd"),
            data: abi.encode(usdc, poolSwapTest)
        });

        // Stop broadcast and log module address
        vm.stopBroadcast();
        console.log("Deploying module at: %s", module); // 0x5775f31922e4e70a1AA1C37a8F28EcC7799cb159
    }
}
