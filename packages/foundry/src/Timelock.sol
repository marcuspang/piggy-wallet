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
    address lockedOwner;
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

    /// @notice Initialize the timelock of this contract.
    ///
    /// @dev Intended to be called contract is first deployed and never again.
    ///
    /// @param deadline The deadline for the timelock.
    function _initializeTimelock(uint256 deadline) internal virtual {
        TimelockStorage storage $ = _getStorage();
        $.deadline = deadline;
    }

    /// @notice Returns whether the timelock is locked.
    ///
    /// @return `true` if the timelock is locked, else `false`.
    function isLocked() public view virtual returns (bool) {
        return block.timestamp < _getStorage().deadline;
    }

    /// @notice Returns the owner who is locked out by the timelock.
    ///
    /// @return The owner who is locked out by the timelock.
    function lockedOwner() public view virtual returns (address) {
        return _getStorage().lockedOwner;
    }

    /// @notice Unlocks the timelock.
    ///
    /// @dev Can only be called by the owner.
    function unlock() public virtual onlyOwner {
        TimelockStorage storage $ = _getStorage();
        $.deadline = 0;
    }

    /// @notice Checks if the sender is the locked owner of this contract, and whether the timelock is unlocked.
    ///
    /// @dev Revert if the sender is not the owner fo the contract itself.
    function _checkUnlocked() internal view virtual {
        address lockedAddress = _getStorage().lockedOwner;
        if (msg.sender == lockedAddress && isLocked()) {
            revert TimelockLocked();
        }
    }

    /// @notice Helper function to get a storage reference to the `TimeLockStorage` struct.
    ///
    /// @return $ A storage reference to the `TimeLockStorage` struct.
    function _getStorage() internal pure returns (TimelockStorage storage $) {
        assembly ("memory-safe") {
            $.slot := TIMELOCK_OWNABLE_STORAGE_LOCATION
        }
    }
}
