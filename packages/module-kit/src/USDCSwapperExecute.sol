// SPDX-License-Identifier: MIT
pragma solidity ^0.8.23;

import { ERC7579ExecutorBase } from "modulekit/Modules.sol";
import { IERC7579Account } from "modulekit/Accounts.sol";
import { ModeLib } from "erc7579/lib/ModeLib.sol";
import { IPoolManager } from "v4-core/interfaces/IPoolManager.sol";
import { PoolKey } from "v4-core/types/PoolKey.sol";
import { PoolSwapTest } from "v4-core/test/PoolSwapTest.sol";
import { TickMath } from "v4-core/libraries/TickMath.sol";
import { IERC20 } from "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import { Currency } from "v4-core/types/Currency.sol";
import { IHooks } from "v4-core/interfaces/IHooks.sol";

contract USDCSwapperExecute is ERC7579ExecutorBase {
    /*//////////////////////////////////////////////////////////////////////////
                            CONSTANTS & STORAGE
    //////////////////////////////////////////////////////////////////////////*/

    /*//////////////////////////////////////////////////////////////////////////
                                     CONFIG
    //////////////////////////////////////////////////////////////////////////*/

    /*//////////////////////////////////////////////////////////////////////////
                                     CONFIG
    //////////////////////////////////////////////////////////////////////////*/
    struct SwapperConfig {
        address targetTokenAddress;
        address swapRouterAddress;
    }

    mapping(address tokenAddress => bool) public isBlocked;
    mapping(address tokenAddress => uint256) public tokensSwapped;
    SwapperConfig public config;

    uint160 public constant MIN_PRICE_LIMIT = TickMath.MIN_SQRT_PRICE + 1;
    uint160 public constant MAX_PRICE_LIMIT = TickMath.MAX_SQRT_PRICE - 1;

    /*//////////////////////////////////////////////////////////////////////////
                                     MODULE LOGIC
    //////////////////////////////////////////////////////////////////////////*/
    /**
     * Initialize the module with the given data
     *
     * @param data The data to initialize the module with
     */
    function onInstall(bytes calldata data) external override {
        (address targetTokenAddress, address swapRouterAddress) =
            abi.decode(data, (address, address));
        config.targetTokenAddress = targetTokenAddress;
        config.swapRouterAddress = swapRouterAddress;
    }

    /**
     * De-initialize the module with the given data
     *
     * @param data The data to de-initialize the module with
     */
    function onUninstall(bytes calldata data) external override {
        config.targetTokenAddress = address(0);
        config.swapRouterAddress = address(0);
    }

    function isInitialized() external view returns (bool) {
        return config.targetTokenAddress != address(0) && config.swapRouterAddress != address(0);
    }

    /**
     * Check if the module is initialized
     * @param smartAccount The smart account to check
     *
     * @return true if the module is initialized, false otherwise
     */
    function isInitialized(address smartAccount) external view returns (bool) { }

    /*//////////////////////////////////////////////////////////////////////////
                                     MODULE LOGIC
    //////////////////////////////////////////////////////////////////////////*/

    /**
     * ERC-7579 does not define any specific interface for executors, so the
     * executor can implement any logic that is required for the specific usecase.
     */

    /**
     * ERC-7579 does not define any specific interface for fallbacks, so the
     * fallback can implement any logic that is required for the specific usecase.
     */
    function autoConvert(address token, uint256 amountReceived) external {
        address account = msg.sender;

        // if not target token, we auto swap
        if (config.targetTokenAddress != token) {
            address swapRouter = config.swapRouterAddress;

            // TODO: the other params should by dynamic
            PoolKey memory key;
            IPoolManager.SwapParams memory params;
            bool zeroForOne = true;
            if (config.targetTokenAddress > token) {
                key = PoolKey({
                    currency0: Currency.wrap(token),
                    currency1: Currency.wrap(config.targetTokenAddress),
                    fee: 3000,
                    tickSpacing: 60,
                    hooks: IHooks(address(0))
                });
                params = IPoolManager.SwapParams({
                    zeroForOne: zeroForOne,
                    amountSpecified: -int256(amountReceived),
                    // unlimited impact
                    sqrtPriceLimitX96: zeroForOne ? MIN_PRICE_LIMIT : MAX_PRICE_LIMIT
                });
            } else {
                key = PoolKey({
                    currency0: Currency.wrap(config.targetTokenAddress),
                    currency1: Currency.wrap(token),
                    fee: 3000,
                    tickSpacing: 60,
                    hooks: IHooks(address(0))
                });
                params = IPoolManager.SwapParams({
                    zeroForOne: zeroForOne,
                    amountSpecified: int256(amountReceived),
                    // unlimited impact
                    sqrtPriceLimitX96: zeroForOne ? MIN_PRICE_LIMIT : MAX_PRICE_LIMIT
                });
            }

            IERC20(token).approve(address(swapRouter), amountReceived);
            IERC20(config.targetTokenAddress).approve(address(swapRouter), amountReceived);

            PoolSwapTest.TestSettings memory testSettings =
                PoolSwapTest.TestSettings({ takeClaims: false, settleUsingBurn: false });

            bytes memory hookData = new bytes(0); // no hook data on the hookless pool
            PoolSwapTest(swapRouter).swap(key, params, testSettings, hookData);
        }
    }

    /*//////////////////////////////////////////////////////////////////////////
                                     INTERNAL
    //////////////////////////////////////////////////////////////////////////*/

    /*//////////////////////////////////////////////////////////////////////////
                                     METADATA
    //////////////////////////////////////////////////////////////////////////*/

    /**
     * The name of the module
     *
     * @return name The name of the module
     */
    function name() external pure returns (string memory) {
        return "USDCSwapper";
    }

    /**
     * The version of the module
     *
     * @return version The version of the module
     */
    function version() external pure returns (string memory) {
        return "0.0.1";
    }

    /**
     * Check if the module is of a certain type
     *
     * @param typeID The type ID to check
     *
     * @return true if the module is of the given type, false otherwise
     */
    function isModuleType(uint256 typeID) external pure override returns (bool) {
        return typeID == TYPE_EXECUTOR;
    }
}
