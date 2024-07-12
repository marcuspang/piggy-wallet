// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

import {MultiOwnable} from "./MultiOwnable.sol";
import {IERC20} from "openzeppelin-contracts/contracts/token/ERC20/IERC20.sol";

struct BountyStruct {
    uint256 tokenAmount;
    bool isCompleted;
}

/// @notice Storage layout used by this contract.
///
/// @custom:storage-location erc7201:brussels.storage.Bounty
struct BountyStorage {
    BountyStruct[] bounties;
    address token;
}

/// @title Time Lock
///
/// @notice Contract that implements a timelock, which can be used to lock all user operations.
///
/// @author marcuspang (https://github.com/marcuspang)
contract Bounty {
    /// @dev Slot for the `BountyStorage` struct in storage.
    ///      Computed from
    ///      keccak256(abi.encode(uint256(keccak256("brussels.storage.Bounty")) - 1)) & ~bytes32(uint256(0xff))
    ///      Follows ERC-7201 (see https://eips.ethereum.org/EIPS/eip-7201).
    bytes32 private constant BOUNTY_STORAGE_LOCATION =
        0xf0747387ff50a696d6d7fd2228937277dabe5c45c218e6736defe6fad2543500;

    /// @notice Thrown when the bounty has already been claimed.
    error BountyAlreadyClaimed();

    /// @notice Emitted when a bounty is added.
    ///
    /// @param index The bounty index.
    /// @param tokenAmount The amount of tokens to be claimed.
    event BountyAdded(uint256 index, uint256 tokenAmount);
    /// @notice Emitted when a bounty is claimed.
    ///
    /// @param index The bounty index.
    /// @param tokenAmount The amount of tokens claimed.
    event BountyClaimed(uint256 index, uint256 tokenAmount);

    /// @notice Initialize the bounty of this contract.
    ///
    /// @dev Intended to be called contract is first deployed and never again.
    ///
    /// @param token The token to use for the bounty.
    function _initializeBounty(address token) internal virtual {
        BountyStorage storage $ = _getBountyStorage();
        $.token = token;
    }

    function addBounty(uint256 tokenAmount) public virtual {
        BountyStorage storage $ = _getBountyStorage();
        IERC20($.token).transferFrom(msg.sender, address(this), tokenAmount);
        $.bounties.push(BountyStruct(tokenAmount, false));

        emit BountyAdded($.bounties.length - 1, tokenAmount);
    }

    function claimBounty(uint256 index) public virtual {
        BountyStorage storage $ = _getBountyStorage();
        BountyStruct storage bounty = $.bounties[index];
        if (bounty.isCompleted) {
            revert BountyAlreadyClaimed();
        }
        IERC20($.token).transfer(msg.sender, bounty.tokenAmount);
        bounty.isCompleted = true;

        emit BountyClaimed(index, bounty.tokenAmount);
    }

    function getBounty(uint256 index) public view virtual returns (BountyStruct memory) {
        BountyStorage storage $ = _getBountyStorage();
        return $.bounties[index];
    }

    /// @notice Helper function to get a storage reference to the `BountyStorage` struct.
    ///
    /// @return $ A storage reference to the `BountyStorage` struct.
    function _getBountyStorage() internal pure returns (BountyStorage storage $) {
        assembly ("memory-safe") {
            $.slot := BOUNTY_STORAGE_LOCATION
        }
    }
}
