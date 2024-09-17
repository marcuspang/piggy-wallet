// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./TimelockSmartWalletTestBase.sol";

contract TestCanSkipChainIdValidation is TimelockSmartWalletTestBase {
    bytes4[] approvedSelectors = [
        MultiOwnable.addOwnerAddress.selector,
        MultiOwnable.addOwnerPublicKey.selector,
        MultiOwnable.removeOwnerAtIndex.selector,
        MultiOwnable.removeLastOwner.selector,
        Timelock.unlock.selector,
        UUPSUpgradeable.upgradeToAndCall.selector
    ];
    bytes4[] otherSelectors = [TimelockSmartWallet.execute.selector, TimelockSmartWallet.executeBatch.selector];

    function test_approvedSelectorsReturnTrue() public {
        for (uint256 i; i < approvedSelectors.length; i++) {
            assertTrue(account.canSkipChainIdValidation(approvedSelectors[i]));
        }
    }

    function test_otherSelectorsReturnFalse() public {
        for (uint256 i; i < otherSelectors.length; i++) {
            assertFalse(account.canSkipChainIdValidation(otherSelectors[i]));
        }
    }
}
