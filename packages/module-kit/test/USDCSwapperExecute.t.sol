// SPDX-License-Identifier: MIT
pragma solidity ^0.8.23;

import { Test } from "forge-std/Test.sol";
import { ERC20 } from "solmate/test/utils/mocks/MockERC4626.sol";
import {
    RhinestoneModuleKit,
    ModuleKitHelpers,
    ModuleKitUserOp,
    AccountInstance
} from "modulekit/ModuleKit.sol";
import { MODULE_TYPE_EXECUTOR } from "modulekit/external/ERC7579.sol";
import { ExecutionLib } from "erc7579/lib/ExecutionLib.sol";
import { USDCSwapperExecute } from "src/USDCSwapperExecute.sol";
import { IERC20 } from "forge-std/interfaces/IERC20.sol";
import { PoolModifyLiquidityTest } from "v4-core/test/PoolModifyLiquidityTest.sol";
import { IPoolManager } from "v4-core/interfaces/IPoolManager.sol";
import { IHooks } from "v4-core/interfaces/IHooks.sol";
import { PoolKey } from "v4-core/types/PoolKey.sol";
import { CurrencyLibrary, Currency } from "v4-core/types/Currency.sol";
import {
    ModuleKitHelpers,
    ModuleKitUserOp,
    AccountInstance,
    RhinestoneModuleKit
} from "modulekit/ModuleKit.sol";

address constant USDC = 0x036CbD53842c5426634e7929541eC2318f3dCF7e;
address constant WETH = 0x4200000000000000000000000000000000000006;

abstract contract BaseTest is Test {
    /*//////////////////////////////////////////////////////////////////////////
                                    CONTRACTS
    //////////////////////////////////////////////////////////////////////////*/

    /*//////////////////////////////////////////////////////////////////////////
                                      SETUP
    //////////////////////////////////////////////////////////////////////////*/

    function setUp() public virtual { }
}

abstract contract BaseIntegrationTest is RhinestoneModuleKit, BaseTest {
    using ModuleKitHelpers for *;
    using ModuleKitUserOp for *;

    /*//////////////////////////////////////////////////////////////////////////
                                    CONTRACTS
    //////////////////////////////////////////////////////////////////////////*/

    AccountInstance internal instance;

    /*//////////////////////////////////////////////////////////////////////////
                                      SETUP
    //////////////////////////////////////////////////////////////////////////*/

    function setUp() public virtual override {
        BaseTest.setUp();
        instance = makeAccountInstance("instance");
        vm.deal(address(instance.account), 10 ether);
    }
}

contract USDCSwapperExecuteIntegrationTest is BaseIntegrationTest {
    using ModuleKitHelpers for *;
    using ModuleKitUserOp for *;

    // account and modules
    USDCSwapperExecute internal executor;

    /*//////////////////////////////////////////////////////////////////////////
                                    VARIABLES
    //////////////////////////////////////////////////////////////////////////*/

    address[] _tokens;

    IERC20 usdc = IERC20(USDC);
    IERC20 weth = IERC20(WETH);
    uint256 fork;
    IPoolManager manager = IPoolManager(0xFC885F37F5A9FA8159c8dBb907fc1b0C2fB31323);
    PoolModifyLiquidityTest lpRouter =
        PoolModifyLiquidityTest(0x78e7F1502A9e4115dEbd6876E0AC4FaEBDB96880);

    function setUp() public virtual override {
        string memory baseSepoliaUrl =
            "https://base-sepolia.g.alchemy.com/v2/JT_gkigGosMQ5lBh6g1zNKr0T1dOhWvp";
        fork = vm.createFork(baseSepoliaUrl);
        vm.selectFork(fork);

        vm.allowCheatcodes(0x864B12d347dafD27Ce36eD763a3D6764F182F835);

        BaseIntegrationTest.setUp();

        executor = new USDCSwapperExecute();

        vm.label(address(usdc), "USDC");
        vm.label(address(weth), "WETH");

        deal(address(usdc), instance.account, 299_530_108_791_371_697);
        deal(address(usdc), address(this), 299_530_108_791_371_697);
        deal(address(weth), instance.account, 299_530_108_791_371_697);
        deal(address(weth), address(this), 299_530_108_791_371_697);

        usdc.approve(0xd74cc5d436923b8ba2c179b4bCA2841D8A52C5B5, type(uint256).max);
        weth.approve(0xd74cc5d436923b8ba2c179b4bCA2841D8A52C5B5, type(uint256).max);

        _tokens = new address[](2);
        _tokens[0] = address(usdc);
        _tokens[1] = address(weth);

        bytes memory data = abi.encode(address(usdc), 0x1411060f44DA12017ADbB34De5f9238912dB2055);

        instance.installModule({
            moduleTypeId: MODULE_TYPE_EXECUTOR,
            module: address(executor),
            data: data
        });
    }

    function testExec() public {
        // Create a target address and send some ether to it
        address target = makeAddr("target");
        uint256 value = 1 ether;

        // Get the current balance of the target
        uint256 prevBalance = target.balance;

        // initialize pool
        address token0 = address(usdc);
        address token1 = address(weth);
        if (token0 > token1) {
            (token0, token1) = (token1, token0);
        }

        PoolKey memory pool = PoolKey({
            currency0: Currency.wrap(token0),
            currency1: Currency.wrap(token1),
            fee: 3000,
            tickSpacing: 60,
            hooks: IHooks(address(0))
        });
        manager.initialize(pool, 79_228_162_514_264_337_593_543_950_336, new bytes(0));

        // add liquidity
        int24 tickLower = -600;
        int24 tickUpper = 600;
        int256 liquidity = 10e18;
        lpRouter.modifyLiquidity(
            pool,
            IPoolManager.ModifyLiquidityParams({
                tickLower: tickLower,
                tickUpper: tickUpper,
                liquidityDelta: liquidity,
                salt: 0
            }),
            new bytes(0)
        );

        // Execute the call
        // EntryPoint -> Account -> Executor -> Account -> Target
        instance.exec({
            target: address(executor),
            value: 0,
            callData: abi.encodeCall(USDCSwapperExecute.autoConvert, (address(weth), 1))
        });
    }
}
