// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

import {MultiOwnable} from "./MultiOwnable.sol";

/// @notice Storage layout used by this contract.
///
/// @custom:storage-location erc7201:brussels.storage.TimeLock
struct TimelockStorage {
    /// @dev The deadline for the timelock.
    uint256 deadline;
    /// @dev The user who is locked out by the timelock.
    bytes lockedOwner;
}

/// @title Time Lock
///
/// @notice Contract that implements a timelock, which can be used to lock all user operations.
///
/// @author marcuspang (https://github.com/marcuspang)
contract Timelock is MultiOwnable {
    /// @dev Slot for the `TimelockStorage` struct in storage.
    ///      Computed from
    ///      keccak256(abi.encode(uint256(keccak256("brussels.storage.TimeLock")) - 1)) & ~bytes32(uint256(0xff))
    ///      Follows ERC-7201 (see https://eips.ethereum.org/EIPS/eip-7201).
    bytes32 private constant TIMELOCK_OWNABLE_STORAGE_LOCATION =
        0xda240b172584b72859ebbfe316b6497e588dfbdfa060f7d557997a545af2ee00;

    /// @notice Thrown when the `deadline` has not been reached.
    error TimelockLocked();

    /// @notice Emitted when the timelock is unlocked.
    ///
    /// @param unlockedBy The address that unlocked the timelock.
    event Unlocked(address unlockedBy);

    /// @notice Initialize the timelock of this contract.
    ///
    /// @dev Intended to be called contract is first deployed and never again.
    ///
    /// @param deadline The deadline for the timelock.
    function _initializeTimelock(uint256 deadline, bytes memory _lockedOwner) internal virtual {
        if (_lockedOwner.length != 32 && _lockedOwner.length != 64) {
            revert InvalidOwnerBytesLength(_lockedOwner);
        }

        if (_lockedOwner.length == 32 && uint256(bytes32(_lockedOwner)) > type(uint160).max) {
            revert InvalidEthereumAddressOwner(_lockedOwner);
        }

        TimelockStorage storage $ = _getTimelockStorage();
        $.deadline = deadline;
        $.lockedOwner = _lockedOwner;
    }

    /// @notice Returns whether the timelock is locked.
    ///
    /// @return `true` if the timelock is locked, else `false`.
    function isLocked() public view virtual returns (bool) {
        return block.timestamp < _getTimelockStorage().deadline;
    }

    /// @notice Returns the owner who is locked out by the timelock.
    ///
    /// @return The owner who is locked out by the timelock.
    function lockedOwner() public view virtual returns (bytes memory) {
        return _getTimelockStorage().lockedOwner;
    }

    /// @notice Unlocks the timelock.
    ///
    /// @dev Can only be called by the owner.
    function unlock() public virtual onlyOwner {
        TimelockStorage storage $ = _getTimelockStorage();
        $.deadline = 0;

        emit Unlocked(msg.sender);
    }

    /// @notice Checks if the sender is the locked owner of this contract, and whether the timelock is unlocked.
    ///
    /// @dev Revert if the sender is not the owner fo the contract itself.
    function _checkUnlocked() internal view virtual {
        bytes memory lockedAddress = _getTimelockStorage().lockedOwner;
        bytes memory encodedAddress = abi.encode(msg.sender);
        // TODO: might be faster to just check keccak256 hashes
        bool isEqual = true;
        for (uint256 i; i < lockedAddress.length; i++) {
            if (lockedAddress[i] != encodedAddress[i]) {
                isEqual = false;
                break;
            }
        }
        if (isEqual && isLocked()) {
            revert TimelockLocked();
        }
    }

    /// @notice Helper function to get a storage reference to the `TimeLockStorage` struct.
    ///
    /// @return $ A storage reference to the `TimeLockStorage` struct.
    function _getTimelockStorage() internal pure returns (TimelockStorage storage $) {
        assembly ("memory-safe") {
            $.slot := TIMELOCK_OWNABLE_STORAGE_LOCATION
        }
    }
}
