// SPDX-License-Identifier: MIT
pragma solidity ^0.8.23;

import "forge-std/Script.sol";
import { RegistryDeployer } from "modulekit/deployment/RegistryDeployer.sol";

// Import modules here
import { USDCSwapperExecute } from "src/USDCSwapperExecute.sol";

/// @title DeployModuleScript
contract DeployModuleScript is Script, RegistryDeployer {
    address public usdc = 0x036CbD53842c5426634e7929541eC2318f3dCF7e;

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
            salt: bytes32(0),
            data: abi.encode(usdc, 0x1411060f44DA12017ADbB34De5f9238912dB2055)
        });

        // Stop broadcast and log module address
        vm.stopBroadcast();
        console.log("Deploying module at: %s", module);
    }
}
