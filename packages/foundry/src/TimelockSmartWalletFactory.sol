// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import {TimelockSmartWallet} from "./TimelockSmartWallet.sol";
import {LibClone} from "solady/utils/LibClone.sol";

/// @title Timelock Smart Wallet Factory
///
/// @notice TimelockSmartWallet factory, based on Solady's ERC4337Factory.
///
/// @author Coinbase (https://github.com/coinbase/smart-wallet)
/// @author Solady (https://github.com/vectorized/solady/blob/main/src/accounts/ERC4337Factory.sol)
/// @author marcuspang (https://github.com/marcuspang)
contract TimelockSmartWalletFactory {
    /// @notice Address of the ERC-4337 implementation used as implementation for new accounts.
    address public immutable implementation;

    /// @notice Thrown when trying to create a new `TimelockSmartWallet` account without any owner.
    error OwnerRequired();

    /// @notice Factory constructor used to initialize the implementation address to use for future
    ///         TimelockSmartWallet deployments.
    ///
    /// @param implementation_ The address of the TimelockSmartWallet implementation which new accounts will proxy to.
    constructor(address implementation_) payable {
        implementation = implementation_;
    }

    /// @notice Returns the deterministic address for a TimelockSmartWallet created with `owners` and `nonce`
    ///         deploys and initializes contract if it has not yet been created.
    ///
    /// @dev Deployed as a ERC-1967 proxy that's implementation is `this.implementation`.
    ///
    /// @param owners Array of initial owners. Each item should be an ABI encoded address or 64 byte public key.
    /// @param nonce  The nonce of the account, a caller defined value which allows multiple accounts
    ///               with the same `owners` to exist at different addresses.
    ///
    /// @return account The address of the ERC-1967 proxy created with inputs `owners`, `nonce`, and
    ///                 `this.implementation`.
    function createAccount(bytes[] calldata owners, uint256 ownerIndex, uint256 deadline, uint256 nonce)
        external
        payable
        virtual
        returns (TimelockSmartWallet account)
    {
        if (owners.length == 0) {
            revert OwnerRequired();
        }

        (bool alreadyDeployed, address accountAddress) = LibClone.createDeterministicERC1967(
            msg.value, implementation, _getSalt(owners, ownerIndex, deadline, nonce)
        );

        account = TimelockSmartWallet(payable(accountAddress));

        if (!alreadyDeployed) {
            account.initialize(owners, ownerIndex, deadline);
        }
    }

    /// @notice Returns the deterministic address of the account that would be created by `createAccount`.
    ///
    /// @param owners Array of initial owners. Each item should be an ABI encoded address or 64 byte public key.
    /// @param deadline The deadline for the account to be deployed.
    /// @param nonce  The nonce provided to `createAccount()`.
    ///
    /// @return The predicted account deployment address.
    function getAddress(bytes[] calldata owners, uint256 ownerIndex, uint256 deadline, uint256 nonce)
        external
        view
        returns (address)
    {
        return LibClone.predictDeterministicAddress(
            initCodeHash(), _getSalt(owners, ownerIndex, deadline, nonce), address(this)
        );
    }

    /// @notice Returns the initialization code hash of the account:
    ///         a ERC1967 proxy that's implementation is `this.implementation`.
    ///
    /// @return The initialization code hash.
    function initCodeHash() public view virtual returns (bytes32) {
        return LibClone.initCodeHashERC1967(implementation);
    }

    /// @notice Returns the create2 salt for `LibClone.predictDeterministicAddress`
    ///
    /// @param owners Array of initial owners. Each item should be an ABI encoded address or 64 byte public key.
    /// @param deadline The deadline for the account to be deployed.
    /// @param nonce  The nonce provided to `createAccount()`.
    ///
    /// @return The computed salt.
    function _getSalt(bytes[] calldata owners, uint256 ownerIndex, uint256 deadline, uint256 nonce)
        internal
        pure
        returns (bytes32)
    {
        return keccak256(abi.encode(owners, ownerIndex, deadline, nonce));
    }
}
