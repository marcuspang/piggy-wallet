// SPDX-License-Identifier: AGPL-3.0-only
pragma solidity ^0.8.25;

import { ERC7579ValidatorBase } from "modulekit/Modules.sol";
import { PackedUserOperation } from "modulekit/external/ERC4337.sol";
import { SignatureCheckerLib } from "solady/utils/SignatureCheckerLib.sol";
import { SentinelList4337Lib, SENTINEL } from "sentinellist/SentinelList4337.sol";
import { LibSort } from "solady/utils/LibSort.sol";
import { ECDSA } from "solady/utils/ECDSA.sol";

/**
 * @title TimelockValidator
 * @dev Module that allows users to designate a parent EOA owners that can validate transactions.
 * @author Rhinestone
 */
contract TimelockValidator is ERC7579ValidatorBase {
    /*//////////////////////////////////////////////////////////////////////////
                            CONSTANTS & STORAGE
    //////////////////////////////////////////////////////////////////////////*/

    event ModuleInitialized(uint256 timelock, address parent, address child);
    event ModuleUninitialized();

    struct TimelockStruct {
        address parent;
        address child;
        uint256 timelock;
    }

    mapping(address account => TimelockStruct) public timelockStorage;

    /*//////////////////////////////////////////////////////////////////////////
                                     CONFIG
    //////////////////////////////////////////////////////////////////////////*/

    /**
     * Initializes the module with the threshold and owners
     * @dev data is encoded as follows: abi.encode(threshold, owners)
     *
     * @param data encoded data containing the threshold and owners
     */
    function onInstall(bytes calldata data) external override {
        // decode the threshold and owners
        (uint256 _timelock, address _parent, address _child) =
            abi.decode(data, (uint256, address, address));

        timelockStorage[msg.sender] =
            TimelockStruct({ timelock: _timelock, parent: _parent, child: _child });
        emit ModuleInitialized(_timelock, _parent, _child);
    }

    /**
     * Handles the uninstallation of the module and clears the threshold and owners
     * @dev the data parameter is not used
     */
    function onUninstall(bytes calldata) external override {
        timelockStorage[msg.sender].timelock = 0;
        timelockStorage[msg.sender].parent = address(0);
        timelockStorage[msg.sender].child = address(0);

        emit ModuleUninitialized();
    }

    /**
     * Checks if the module is initialized
     *
     * @return true if the module is initialized, false otherwise
     */
    function isInitialized(address account) public view returns (bool) {
        return timelockStorage[account].timelock != 0
            && timelockStorage[account].parent != address(0)
            && timelockStorage[account].child != address(0);
    }

    function isTimelocked() public view returns (bool) {
        return timelockStorage[msg.sender].timelock != 0
            && block.timestamp >= timelockStorage[msg.sender].timelock;
    }

    /*//////////////////////////////////////////////////////////////////////////
                                     MODULE LOGIC
    //////////////////////////////////////////////////////////////////////////*/

    /**
     * Validates a user operation
     *
     * @param userOp PackedUserOperation struct containing the UserOperation
     * @param userOpHash bytes32 hash of the UserOperation
     *
     * @return ValidationData the UserOperation validation result
     */
    function validateUserOp(
        PackedUserOperation calldata userOp,
        bytes32 userOpHash
    )
        external
        view
        override
        returns (ValidationData)
    {
        // validate the signature with the config
        bool isValid = _validateSignatureWithConfig(userOp.sender, userOpHash, userOp.signature);

        // return the result
        if (isValid) {
            return VALIDATION_SUCCESS;
        }
        return VALIDATION_FAILED;
    }

    /**
     * Validates an ERC-1271 signature with the sender
     *
     * @param hash bytes32 hash of the data
     * @param data bytes data containing the signatures
     *
     * @return bytes4 EIP1271_SUCCESS if the signature is valid, EIP1271_FAILED otherwise
     */
    function isValidSignatureWithSender(
        address,
        bytes32 hash,
        bytes calldata data
    )
        external
        view
        override
        returns (bytes4)
    {
        // validate the signature with the config
        bool isValid = _validateSignatureWithConfig(msg.sender, hash, data);

        // return the result
        if (isValid) {
            return EIP1271_SUCCESS;
        }
        return EIP1271_FAILED;
    }

    /**
     * Validates a signature with the data (stateless validation)
     *
     * @param hash bytes32 hash of the data
     * @param signature bytes data containing the signatures
     * @param data bytes data containing the data
     *
     * @return bool true if the signature is valid, false otherwise
     */
    function validateSignatureWithData(
        bytes32 hash,
        bytes calldata signature,
        bytes calldata data
    )
        external
        view
        returns (bool)
    {
        return timelockStorage[msg.sender].parent == msg.sender
            || (block.timestamp >= timelockStorage[msg.sender].timelock);
    }

    /*//////////////////////////////////////////////////////////////////////////
                                     INTERNAL
    //////////////////////////////////////////////////////////////////////////*/

    function _validateSignatureWithConfig(
        address account,
        bytes32 hash,
        bytes calldata data
    )
        internal
        view
        returns (bool)
    {
        return timelockStorage[account].parent == account
            || (block.timestamp >= timelockStorage[account].timelock);
    }

    /*//////////////////////////////////////////////////////////////////////////
                                     METADATA
    //////////////////////////////////////////////////////////////////////////*/

    /**
     * Returns the type of the module
     *
     * @param typeID type of the module
     *
     * @return true if the type is a module type, false otherwise
     */
    function isModuleType(uint256 typeID) external pure override returns (bool) {
        return typeID == TYPE_VALIDATOR;
    }

    /**
     * Returns the name of the module
     *
     * @return name of the module
     */
    function name() external pure virtual returns (string memory) {
        return "TimelockValidator";
    }

    /**
     * Returns the version of the module
     *
     * @return version of the module
     */
    function version() external pure virtual returns (string memory) {
        return "1.0.0";
    }
}
