// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import {TimelockSmartWallet} from "../../src/TimelockSmartWallet.sol";
import {TimelockSmartWalletFactory} from "../../src/TimelockSmartWalletFactory.sol";

import "./SmartWalletTestBase.sol";

contract TestImplementation is SmartWalletTestBase {
    address implementation = address(new TimelockSmartWallet());

    function setUp() public override {
        super.setUp();
        TimelockSmartWalletFactory factory = new TimelockSmartWalletFactory(implementation);
        account = factory.createAccount(owners, 0, 0, 1);
    }

    function testImplementation() public {
        address addr = account.implementation();
        assertEq(addr, implementation);
    }
}
