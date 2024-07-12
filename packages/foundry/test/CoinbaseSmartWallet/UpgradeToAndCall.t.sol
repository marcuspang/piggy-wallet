// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import {TimelockSmartWalletFactory} from "../../src/TimelockSmartWalletFactory.sol";

import "./SmartWalletTestBase.sol";

contract TestUpgradeToAndCall is SmartWalletTestBase {
    address newImplementation = address(new Dummy());

    function setUp() public override {
        super.setUp();
        TimelockSmartWalletFactory factory = new TimelockSmartWalletFactory(address(new TimelockSmartWallet()));
        account = factory.createAccount(owners, 0, 1);
        vm.startPrank(signer);
    }

    function testUpgradeToAndCall() public {
        account.upgradeToAndCall(newImplementation, abi.encodeWithSignature("dummy()"));
        Dummy(address(account)).dummy();
    }
}

contract Dummy is UUPSUpgradeable {
    event Done();

    function dummy() public {
        emit Done();
    }

    function _authorizeUpgrade(address newImplementation) internal override {}
}
