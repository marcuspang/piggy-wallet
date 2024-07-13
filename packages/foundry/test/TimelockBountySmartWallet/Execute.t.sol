// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import {MockERC20} from "../mocks/MockERC20.sol";
import {MockTarget} from "../mocks/MockTarget.sol";
import "./TimelockBountySmartWalletTestBase.sol";

contract TestExecute is TimelockBountySmartWalletTestBase {
    MockERC20 mockERC20;

    function setUp() public override {
        userOpCalldata = abi.encodeWithSelector(TimelockBountySmartWallet.execute.selector);
        mockERC20 = new MockERC20();
        super.setUp();
    }

    function test_revertsWithReservedNonce() public {
        userOpNonce = account.REPLAYABLE_NONCE_KEY() << 64;
        UserOperation memory userOp = _getUserOpWithSignature();
        vm.expectRevert();
        _sendUserOperation(userOp);
    }

    // from Solady tests
    // https://github.com/Vectorized/solady/blob/21009ce09f02c0e20ce4750b63577e8c0cc7ced8/test/ERC4337.t.sol#L122
    function testExecute() public {
        vm.deal(address(account), 1 ether);
        vm.prank(signer);
        account.addOwnerAddress(address(this));

        address target = address(new MockTarget());
        bytes memory data = _randomBytes(111);
        account.execute(target, 123, abi.encodeWithSignature("setData(bytes)", data));
        assertEq(MockTarget(target).datahash(), keccak256(data));
        assertEq(target.balance, 123);

        vm.prank(makeAddr("random"));
        vm.expectRevert(MultiOwnable.Unauthorized.selector);
        account.execute(target, 123, abi.encodeWithSignature("setData(bytes)", data));

        vm.expectRevert(abi.encodeWithSignature("TargetError(bytes)", data));
        account.execute(target, 123, abi.encodeWithSignature("revertWithTargetError(bytes)", data));
    }

    function test_executeRevertsIfTimelockedOwner() public {
        uint256 lockedTimestamp = 1000000000;
        account = new MockTimelockBountySmartWallet();
        account.initialize(owners, 0, lockedTimestamp + 1000, address(0));

        vm.deal(address(account), 1 ether);
        vm.startPrank(signer);
        vm.warp(lockedTimestamp);
        address target = address(new MockTarget());
        assertEq(account.isLocked(), true);
        vm.expectRevert(abi.encodeWithSelector(Timelock.TimelockLocked.selector));
        account.execute(target, 123, abi.encodeWithSignature("setData(bytes)", _randomBytes(111)));
    }

    function test_executeWorksIfUnlocked() public {
        uint256 lockedTimestamp = 1000000000;
        account = new MockTimelockBountySmartWallet();
        account.initialize(owners, 0, lockedTimestamp + 1000, address(0));

        vm.deal(address(account), 1 ether);
        vm.startPrank(signer);
        vm.warp(lockedTimestamp + 1000);
        assertEq(account.isLocked(), false);
        address target = address(new MockTarget());
        account.execute(target, 123, abi.encodeWithSignature("setData(bytes)", _randomBytes(111)));
    }

    function test_executeWorksWithBounty(uint256 amount) public {
        account = new MockTimelockBountySmartWallet();
        account.initialize(owners, 0, 0, address(mockERC20));
        vm.deal(address(account), 1 ether);
        mockERC20.mint(address(signer), amount);

        assertEq(account.isLocked(), false);

        vm.startPrank(signer);

        mockERC20.approve(address(account), amount);
        account.addBounty(amount);

        vm.stopPrank();

        assertEq(mockERC20.balanceOf(address(signer)), 0);
        assertEq(mockERC20.balanceOf(address(account)), amount);
        assertEq(account.getBounty(0).tokenAmount, amount);
        assertEq(account.getBounty(0).isCompleted, false);

        vm.prank(signer);
        account.claimBounty(0);

        assertEq(mockERC20.balanceOf(address(signer)), amount);
        assertEq(mockERC20.balanceOf(address(account)), 0);
        assertEq(account.getBounty(0).tokenAmount, amount);
        assertEq(account.getBounty(0).isCompleted, true);
    }
}
