// SPDX-License-Identifier: MIT
pragma solidity ^0.8.23;

import { ERC7579ExecutorBase } from "modulekit/Modules.sol";
import { IERC7579Account } from "modulekit/Accounts.sol";
import { ModeLib } from "erc7579/lib/ModeLib.sol";
import { IPoolManager } from "v4-core/interfaces/IPoolManager.sol";
import { PoolKey } from "v4-core/types/PoolKey.sol";
import { PoolSwapTest } from "v4-core/test/PoolSwapTest.sol";
import { TickMath } from "v4-core/libraries/TickMath.sol";
import { IERC20 } from "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import { Currency } from "v4-core/types/Currency.sol";
import { IHooks } from "v4-core/interfaces/IHooks.sol";

contract BountyExecute is ERC7579ExecutorBase {
    /*//////////////////////////////////////////////////////////////////////////
                            CONSTANTS & STORAGE
    //////////////////////////////////////////////////////////////////////////*/

    error BountyAlreadyClaimed();

    event BountyAdded(uint256 index, uint256 tokenAmount);
    event BountyClaimed(uint256 index, uint256 tokenAmount);

    /*//////////////////////////////////////////////////////////////////////////
                                     CONFIG
    //////////////////////////////////////////////////////////////////////////*/

    struct BountyStruct {
        uint256 tokenAmount;
        bool isCompleted;
    }

    struct BountyStorage {
        BountyStruct[] bounties;
        address token;
    }

    mapping(address account => BountyStorage) public bountyStorage;

    /*//////////////////////////////////////////////////////////////////////////
                                     MODULE LOGIC
    //////////////////////////////////////////////////////////////////////////*/
    /**
     * Initialize the module with the given data
     *
     * @param data The data to initialize the module with
     */
    function onInstall(bytes calldata data) external override {
        (address token) = abi.decode(data, (address));
        bountyStorage[msg.sender].token = token;
    }

    /**
     * De-initialize the module with the given data
     *
     * @param data The data to de-initialize the module with
     */
    function onUninstall(bytes calldata data) external override {
        bountyStorage[msg.sender].token = address(0);
    }

    /**
     * Check if the module is initialized
     * @param smartAccount The smart account to check
     *
     * @return true if the module is initialized, false otherwise
     */
    function isInitialized(address smartAccount) external view returns (bool) {
        return bountyStorage[smartAccount].token != address(0);
    }

    /*//////////////////////////////////////////////////////////////////////////
                                     MODULE LOGIC
    //////////////////////////////////////////////////////////////////////////*/

    /**
     * ERC-7579 does not define any specific interface for executors, so the
     * executor can implement any logic that is required for the specific usecase.
     */

    // TODO: passing account might be technically unsafe, but it is economically sound
    function addBounty(uint256 tokenAmount, address account) external {
        bountyStorage[account].bounties.push(BountyStruct(tokenAmount, false));
        emit BountyAdded(bountyStorage[account].bounties.length - 1, tokenAmount);
    }

    // TODO: passing account might be technically unsafe, but it is economically sound
    function claimBounty(uint256 index, address account) external {
        BountyStruct storage bounty = bountyStorage[account].bounties[index];
        if (bounty.isCompleted) {
            revert BountyAlreadyClaimed();
        }
        IERC20(bountyStorage[account].token).transfer(msg.sender, bounty.tokenAmount);
        bounty.isCompleted = true;
        emit BountyClaimed(index, bounty.tokenAmount);
    }

    /*//////////////////////////////////////////////////////////////////////////
                                     INTERNAL
    //////////////////////////////////////////////////////////////////////////*/

    /*//////////////////////////////////////////////////////////////////////////
                                     METADATA
    //////////////////////////////////////////////////////////////////////////*/

    /**
     * The name of the module
     *
     * @return name The name of the module
     */
    function name() external pure returns (string memory) {
        return "Bounty";
    }

    /**
     * The version of the module
     *
     * @return version The version of the module
     */
    function version() external pure returns (string memory) {
        return "0.0.1";
    }

    /**
     * Check if the module is of a certain type
     *
     * @param typeID The type ID to check
     *
     * @return true if the module is of the given type, false otherwise
     */
    function isModuleType(uint256 typeID) external pure override returns (bool) {
        return typeID == TYPE_EXECUTOR;
    }
}
