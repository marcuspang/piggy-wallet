import {
  createUseReadContract,
  createUseWriteContract,
  createUseSimulateContract,
  createUseWatchContractEvent,
} from 'wagmi/codegen'

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// TimelockBountySmartWallet
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const timelockBountySmartWalletAbi = [
  { type: 'constructor', inputs: [], stateMutability: 'nonpayable' },
  { type: 'fallback', stateMutability: 'payable' },
  { type: 'receive', stateMutability: 'payable' },
  {
    type: 'function',
    inputs: [],
    name: 'REPLAYABLE_NONCE_KEY',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'tokenAmount', internalType: 'uint256', type: 'uint256' }],
    name: 'addBounty',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'addOwnerAddress',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'x', internalType: 'bytes32', type: 'bytes32' },
      { name: 'y', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'addOwnerPublicKey',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'functionSelector', internalType: 'bytes4', type: 'bytes4' },
    ],
    name: 'canSkipChainIdValidation',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [{ name: 'index', internalType: 'uint256', type: 'uint256' }],
    name: 'claimBounty',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'domainSeparator',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'eip712Domain',
    outputs: [
      { name: 'fields', internalType: 'bytes1', type: 'bytes1' },
      { name: 'name', internalType: 'string', type: 'string' },
      { name: 'version', internalType: 'string', type: 'string' },
      { name: 'chainId', internalType: 'uint256', type: 'uint256' },
      { name: 'verifyingContract', internalType: 'address', type: 'address' },
      { name: 'salt', internalType: 'bytes32', type: 'bytes32' },
      { name: 'extensions', internalType: 'uint256[]', type: 'uint256[]' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'entryPoint',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'target', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'execute',
    outputs: [],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'calls',
        internalType: 'struct TimelockBountySmartWallet.Call[]',
        type: 'tuple[]',
        components: [
          { name: 'target', internalType: 'address', type: 'address' },
          { name: 'value', internalType: 'uint256', type: 'uint256' },
          { name: 'data', internalType: 'bytes', type: 'bytes' },
        ],
      },
    ],
    name: 'executeBatch',
    outputs: [],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [{ name: 'calls', internalType: 'bytes[]', type: 'bytes[]' }],
    name: 'executeWithoutChainIdValidation',
    outputs: [],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [{ name: 'index', internalType: 'uint256', type: 'uint256' }],
    name: 'getBounty',
    outputs: [
      {
        name: '',
        internalType: 'struct BountyStruct',
        type: 'tuple',
        components: [
          { name: 'tokenAmount', internalType: 'uint256', type: 'uint256' },
          { name: 'isCompleted', internalType: 'bool', type: 'bool' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'userOp',
        internalType: 'struct UserOperation',
        type: 'tuple',
        components: [
          { name: 'sender', internalType: 'address', type: 'address' },
          { name: 'nonce', internalType: 'uint256', type: 'uint256' },
          { name: 'initCode', internalType: 'bytes', type: 'bytes' },
          { name: 'callData', internalType: 'bytes', type: 'bytes' },
          { name: 'callGasLimit', internalType: 'uint256', type: 'uint256' },
          {
            name: 'verificationGasLimit',
            internalType: 'uint256',
            type: 'uint256',
          },
          {
            name: 'preVerificationGas',
            internalType: 'uint256',
            type: 'uint256',
          },
          { name: 'maxFeePerGas', internalType: 'uint256', type: 'uint256' },
          {
            name: 'maxPriorityFeePerGas',
            internalType: 'uint256',
            type: 'uint256',
          },
          { name: 'paymasterAndData', internalType: 'bytes', type: 'bytes' },
          { name: 'signature', internalType: 'bytes', type: 'bytes' },
        ],
      },
    ],
    name: 'getUserOpHashWithoutChainId',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'implementation',
    outputs: [{ name: '$', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'owners', internalType: 'bytes[]', type: 'bytes[]' },
      { name: 'lockedOwnerIndex', internalType: 'uint256', type: 'uint256' },
      { name: 'deadline', internalType: 'uint256', type: 'uint256' },
      { name: 'bountyToken', internalType: 'address', type: 'address' },
    ],
    name: 'initialize',
    outputs: [],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'isLocked',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'isOwnerAddress',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'account', internalType: 'bytes', type: 'bytes' }],
    name: 'isOwnerBytes',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'x', internalType: 'bytes32', type: 'bytes32' },
      { name: 'y', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'isOwnerPublicKey',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'hash', internalType: 'bytes32', type: 'bytes32' },
      { name: 'signature', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'isValidSignature',
    outputs: [{ name: 'result', internalType: 'bytes4', type: 'bytes4' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'lockedOwner',
    outputs: [{ name: '', internalType: 'bytes', type: 'bytes' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'nextOwnerIndex',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'index', internalType: 'uint256', type: 'uint256' }],
    name: 'ownerAtIndex',
    outputs: [{ name: '', internalType: 'bytes', type: 'bytes' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'ownerCount',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'proxiableUUID',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'index', internalType: 'uint256', type: 'uint256' },
      { name: 'owner', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'removeLastOwner',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'index', internalType: 'uint256', type: 'uint256' },
      { name: 'owner', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'removeOwnerAtIndex',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'removedOwnersCount',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'hash', internalType: 'bytes32', type: 'bytes32' }],
    name: 'replaySafeHash',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'unlock',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'newImplementation', internalType: 'address', type: 'address' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'upgradeToAndCall',
    outputs: [],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'userOp',
        internalType: 'struct UserOperation',
        type: 'tuple',
        components: [
          { name: 'sender', internalType: 'address', type: 'address' },
          { name: 'nonce', internalType: 'uint256', type: 'uint256' },
          { name: 'initCode', internalType: 'bytes', type: 'bytes' },
          { name: 'callData', internalType: 'bytes', type: 'bytes' },
          { name: 'callGasLimit', internalType: 'uint256', type: 'uint256' },
          {
            name: 'verificationGasLimit',
            internalType: 'uint256',
            type: 'uint256',
          },
          {
            name: 'preVerificationGas',
            internalType: 'uint256',
            type: 'uint256',
          },
          { name: 'maxFeePerGas', internalType: 'uint256', type: 'uint256' },
          {
            name: 'maxPriorityFeePerGas',
            internalType: 'uint256',
            type: 'uint256',
          },
          { name: 'paymasterAndData', internalType: 'bytes', type: 'bytes' },
          { name: 'signature', internalType: 'bytes', type: 'bytes' },
        ],
      },
      { name: 'userOpHash', internalType: 'bytes32', type: 'bytes32' },
      { name: 'missingAccountFunds', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'validateUserOp',
    outputs: [
      { name: 'validationData', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'index',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
      { name: 'owner', internalType: 'bytes', type: 'bytes', indexed: false },
    ],
    name: 'AddOwner',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'index',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'tokenAmount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'BountyAdded',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'index',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'tokenAmount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'BountyClaimed',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'index',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
      { name: 'owner', internalType: 'bytes', type: 'bytes', indexed: false },
    ],
    name: 'RemoveOwner',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'unlockedBy',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'Unlocked',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'implementation',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'Upgraded',
  },
  {
    type: 'error',
    inputs: [{ name: 'owner', internalType: 'bytes', type: 'bytes' }],
    name: 'AlreadyOwner',
  },
  { type: 'error', inputs: [], name: 'BountyAlreadyClaimed' },
  { type: 'error', inputs: [], name: 'Initialized' },
  {
    type: 'error',
    inputs: [{ name: 'owner', internalType: 'bytes', type: 'bytes' }],
    name: 'InvalidEthereumAddressOwner',
  },
  { type: 'error', inputs: [], name: 'InvalidLockedOwnerIndex' },
  {
    type: 'error',
    inputs: [{ name: 'key', internalType: 'uint256', type: 'uint256' }],
    name: 'InvalidNonceKey',
  },
  {
    type: 'error',
    inputs: [{ name: 'owner', internalType: 'bytes', type: 'bytes' }],
    name: 'InvalidOwnerBytesLength',
  },
  { type: 'error', inputs: [], name: 'LastOwner' },
  {
    type: 'error',
    inputs: [{ name: 'index', internalType: 'uint256', type: 'uint256' }],
    name: 'NoOwnerAtIndex',
  },
  {
    type: 'error',
    inputs: [
      { name: 'ownersRemaining', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'NotLastOwner',
  },
  {
    type: 'error',
    inputs: [{ name: 'selector', internalType: 'bytes4', type: 'bytes4' }],
    name: 'SelectorNotAllowed',
  },
  { type: 'error', inputs: [], name: 'TimelockLocked' },
  { type: 'error', inputs: [], name: 'Unauthorized' },
  { type: 'error', inputs: [], name: 'UnauthorizedCallContext' },
  { type: 'error', inputs: [], name: 'UpgradeFailed' },
  {
    type: 'error',
    inputs: [
      { name: 'index', internalType: 'uint256', type: 'uint256' },
      { name: 'expectedOwner', internalType: 'bytes', type: 'bytes' },
      { name: 'actualOwner', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'WrongOwnerAtIndex',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// TimelockBountySmartWalletFactory
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const timelockBountySmartWalletFactoryAbi = [
  {
    type: 'constructor',
    inputs: [
      { name: 'implementation_', internalType: 'address', type: 'address' },
    ],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'owners', internalType: 'bytes[]', type: 'bytes[]' },
      { name: 'ownerIndex', internalType: 'uint256', type: 'uint256' },
      { name: 'deadline', internalType: 'uint256', type: 'uint256' },
      { name: 'nonce', internalType: 'uint256', type: 'uint256' },
      { name: 'bountyToken', internalType: 'address', type: 'address' },
    ],
    name: 'createAccount',
    outputs: [
      {
        name: 'account',
        internalType: 'contract TimelockBountySmartWallet',
        type: 'address',
      },
    ],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'owners', internalType: 'bytes[]', type: 'bytes[]' },
      { name: 'ownerIndex', internalType: 'uint256', type: 'uint256' },
      { name: 'deadline', internalType: 'uint256', type: 'uint256' },
      { name: 'nonce', internalType: 'uint256', type: 'uint256' },
      { name: 'bountyToken', internalType: 'address', type: 'address' },
    ],
    name: 'getAddress',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'implementation',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'initCodeHash',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  { type: 'error', inputs: [], name: 'OwnerRequired' },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// React
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link timelockBountySmartWalletAbi}__
 */
export const useReadTimelockBountySmartWallet =
  /*#__PURE__*/ createUseReadContract({ abi: timelockBountySmartWalletAbi })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link timelockBountySmartWalletAbi}__ and `functionName` set to `"REPLAYABLE_NONCE_KEY"`
 */
export const useReadTimelockBountySmartWalletReplayableNonceKey =
  /*#__PURE__*/ createUseReadContract({
    abi: timelockBountySmartWalletAbi,
    functionName: 'REPLAYABLE_NONCE_KEY',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link timelockBountySmartWalletAbi}__ and `functionName` set to `"canSkipChainIdValidation"`
 */
export const useReadTimelockBountySmartWalletCanSkipChainIdValidation =
  /*#__PURE__*/ createUseReadContract({
    abi: timelockBountySmartWalletAbi,
    functionName: 'canSkipChainIdValidation',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link timelockBountySmartWalletAbi}__ and `functionName` set to `"domainSeparator"`
 */
export const useReadTimelockBountySmartWalletDomainSeparator =
  /*#__PURE__*/ createUseReadContract({
    abi: timelockBountySmartWalletAbi,
    functionName: 'domainSeparator',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link timelockBountySmartWalletAbi}__ and `functionName` set to `"eip712Domain"`
 */
export const useReadTimelockBountySmartWalletEip712Domain =
  /*#__PURE__*/ createUseReadContract({
    abi: timelockBountySmartWalletAbi,
    functionName: 'eip712Domain',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link timelockBountySmartWalletAbi}__ and `functionName` set to `"entryPoint"`
 */
export const useReadTimelockBountySmartWalletEntryPoint =
  /*#__PURE__*/ createUseReadContract({
    abi: timelockBountySmartWalletAbi,
    functionName: 'entryPoint',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link timelockBountySmartWalletAbi}__ and `functionName` set to `"getBounty"`
 */
export const useReadTimelockBountySmartWalletGetBounty =
  /*#__PURE__*/ createUseReadContract({
    abi: timelockBountySmartWalletAbi,
    functionName: 'getBounty',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link timelockBountySmartWalletAbi}__ and `functionName` set to `"getUserOpHashWithoutChainId"`
 */
export const useReadTimelockBountySmartWalletGetUserOpHashWithoutChainId =
  /*#__PURE__*/ createUseReadContract({
    abi: timelockBountySmartWalletAbi,
    functionName: 'getUserOpHashWithoutChainId',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link timelockBountySmartWalletAbi}__ and `functionName` set to `"implementation"`
 */
export const useReadTimelockBountySmartWalletImplementation =
  /*#__PURE__*/ createUseReadContract({
    abi: timelockBountySmartWalletAbi,
    functionName: 'implementation',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link timelockBountySmartWalletAbi}__ and `functionName` set to `"isLocked"`
 */
export const useReadTimelockBountySmartWalletIsLocked =
  /*#__PURE__*/ createUseReadContract({
    abi: timelockBountySmartWalletAbi,
    functionName: 'isLocked',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link timelockBountySmartWalletAbi}__ and `functionName` set to `"isOwnerAddress"`
 */
export const useReadTimelockBountySmartWalletIsOwnerAddress =
  /*#__PURE__*/ createUseReadContract({
    abi: timelockBountySmartWalletAbi,
    functionName: 'isOwnerAddress',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link timelockBountySmartWalletAbi}__ and `functionName` set to `"isOwnerBytes"`
 */
export const useReadTimelockBountySmartWalletIsOwnerBytes =
  /*#__PURE__*/ createUseReadContract({
    abi: timelockBountySmartWalletAbi,
    functionName: 'isOwnerBytes',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link timelockBountySmartWalletAbi}__ and `functionName` set to `"isOwnerPublicKey"`
 */
export const useReadTimelockBountySmartWalletIsOwnerPublicKey =
  /*#__PURE__*/ createUseReadContract({
    abi: timelockBountySmartWalletAbi,
    functionName: 'isOwnerPublicKey',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link timelockBountySmartWalletAbi}__ and `functionName` set to `"isValidSignature"`
 */
export const useReadTimelockBountySmartWalletIsValidSignature =
  /*#__PURE__*/ createUseReadContract({
    abi: timelockBountySmartWalletAbi,
    functionName: 'isValidSignature',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link timelockBountySmartWalletAbi}__ and `functionName` set to `"lockedOwner"`
 */
export const useReadTimelockBountySmartWalletLockedOwner =
  /*#__PURE__*/ createUseReadContract({
    abi: timelockBountySmartWalletAbi,
    functionName: 'lockedOwner',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link timelockBountySmartWalletAbi}__ and `functionName` set to `"nextOwnerIndex"`
 */
export const useReadTimelockBountySmartWalletNextOwnerIndex =
  /*#__PURE__*/ createUseReadContract({
    abi: timelockBountySmartWalletAbi,
    functionName: 'nextOwnerIndex',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link timelockBountySmartWalletAbi}__ and `functionName` set to `"ownerAtIndex"`
 */
export const useReadTimelockBountySmartWalletOwnerAtIndex =
  /*#__PURE__*/ createUseReadContract({
    abi: timelockBountySmartWalletAbi,
    functionName: 'ownerAtIndex',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link timelockBountySmartWalletAbi}__ and `functionName` set to `"ownerCount"`
 */
export const useReadTimelockBountySmartWalletOwnerCount =
  /*#__PURE__*/ createUseReadContract({
    abi: timelockBountySmartWalletAbi,
    functionName: 'ownerCount',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link timelockBountySmartWalletAbi}__ and `functionName` set to `"proxiableUUID"`
 */
export const useReadTimelockBountySmartWalletProxiableUuid =
  /*#__PURE__*/ createUseReadContract({
    abi: timelockBountySmartWalletAbi,
    functionName: 'proxiableUUID',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link timelockBountySmartWalletAbi}__ and `functionName` set to `"removedOwnersCount"`
 */
export const useReadTimelockBountySmartWalletRemovedOwnersCount =
  /*#__PURE__*/ createUseReadContract({
    abi: timelockBountySmartWalletAbi,
    functionName: 'removedOwnersCount',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link timelockBountySmartWalletAbi}__ and `functionName` set to `"replaySafeHash"`
 */
export const useReadTimelockBountySmartWalletReplaySafeHash =
  /*#__PURE__*/ createUseReadContract({
    abi: timelockBountySmartWalletAbi,
    functionName: 'replaySafeHash',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link timelockBountySmartWalletAbi}__
 */
export const useWriteTimelockBountySmartWallet =
  /*#__PURE__*/ createUseWriteContract({ abi: timelockBountySmartWalletAbi })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link timelockBountySmartWalletAbi}__ and `functionName` set to `"addBounty"`
 */
export const useWriteTimelockBountySmartWalletAddBounty =
  /*#__PURE__*/ createUseWriteContract({
    abi: timelockBountySmartWalletAbi,
    functionName: 'addBounty',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link timelockBountySmartWalletAbi}__ and `functionName` set to `"addOwnerAddress"`
 */
export const useWriteTimelockBountySmartWalletAddOwnerAddress =
  /*#__PURE__*/ createUseWriteContract({
    abi: timelockBountySmartWalletAbi,
    functionName: 'addOwnerAddress',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link timelockBountySmartWalletAbi}__ and `functionName` set to `"addOwnerPublicKey"`
 */
export const useWriteTimelockBountySmartWalletAddOwnerPublicKey =
  /*#__PURE__*/ createUseWriteContract({
    abi: timelockBountySmartWalletAbi,
    functionName: 'addOwnerPublicKey',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link timelockBountySmartWalletAbi}__ and `functionName` set to `"claimBounty"`
 */
export const useWriteTimelockBountySmartWalletClaimBounty =
  /*#__PURE__*/ createUseWriteContract({
    abi: timelockBountySmartWalletAbi,
    functionName: 'claimBounty',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link timelockBountySmartWalletAbi}__ and `functionName` set to `"execute"`
 */
export const useWriteTimelockBountySmartWalletExecute =
  /*#__PURE__*/ createUseWriteContract({
    abi: timelockBountySmartWalletAbi,
    functionName: 'execute',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link timelockBountySmartWalletAbi}__ and `functionName` set to `"executeBatch"`
 */
export const useWriteTimelockBountySmartWalletExecuteBatch =
  /*#__PURE__*/ createUseWriteContract({
    abi: timelockBountySmartWalletAbi,
    functionName: 'executeBatch',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link timelockBountySmartWalletAbi}__ and `functionName` set to `"executeWithoutChainIdValidation"`
 */
export const useWriteTimelockBountySmartWalletExecuteWithoutChainIdValidation =
  /*#__PURE__*/ createUseWriteContract({
    abi: timelockBountySmartWalletAbi,
    functionName: 'executeWithoutChainIdValidation',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link timelockBountySmartWalletAbi}__ and `functionName` set to `"initialize"`
 */
export const useWriteTimelockBountySmartWalletInitialize =
  /*#__PURE__*/ createUseWriteContract({
    abi: timelockBountySmartWalletAbi,
    functionName: 'initialize',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link timelockBountySmartWalletAbi}__ and `functionName` set to `"removeLastOwner"`
 */
export const useWriteTimelockBountySmartWalletRemoveLastOwner =
  /*#__PURE__*/ createUseWriteContract({
    abi: timelockBountySmartWalletAbi,
    functionName: 'removeLastOwner',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link timelockBountySmartWalletAbi}__ and `functionName` set to `"removeOwnerAtIndex"`
 */
export const useWriteTimelockBountySmartWalletRemoveOwnerAtIndex =
  /*#__PURE__*/ createUseWriteContract({
    abi: timelockBountySmartWalletAbi,
    functionName: 'removeOwnerAtIndex',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link timelockBountySmartWalletAbi}__ and `functionName` set to `"unlock"`
 */
export const useWriteTimelockBountySmartWalletUnlock =
  /*#__PURE__*/ createUseWriteContract({
    abi: timelockBountySmartWalletAbi,
    functionName: 'unlock',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link timelockBountySmartWalletAbi}__ and `functionName` set to `"upgradeToAndCall"`
 */
export const useWriteTimelockBountySmartWalletUpgradeToAndCall =
  /*#__PURE__*/ createUseWriteContract({
    abi: timelockBountySmartWalletAbi,
    functionName: 'upgradeToAndCall',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link timelockBountySmartWalletAbi}__ and `functionName` set to `"validateUserOp"`
 */
export const useWriteTimelockBountySmartWalletValidateUserOp =
  /*#__PURE__*/ createUseWriteContract({
    abi: timelockBountySmartWalletAbi,
    functionName: 'validateUserOp',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link timelockBountySmartWalletAbi}__
 */
export const useSimulateTimelockBountySmartWallet =
  /*#__PURE__*/ createUseSimulateContract({ abi: timelockBountySmartWalletAbi })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link timelockBountySmartWalletAbi}__ and `functionName` set to `"addBounty"`
 */
export const useSimulateTimelockBountySmartWalletAddBounty =
  /*#__PURE__*/ createUseSimulateContract({
    abi: timelockBountySmartWalletAbi,
    functionName: 'addBounty',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link timelockBountySmartWalletAbi}__ and `functionName` set to `"addOwnerAddress"`
 */
export const useSimulateTimelockBountySmartWalletAddOwnerAddress =
  /*#__PURE__*/ createUseSimulateContract({
    abi: timelockBountySmartWalletAbi,
    functionName: 'addOwnerAddress',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link timelockBountySmartWalletAbi}__ and `functionName` set to `"addOwnerPublicKey"`
 */
export const useSimulateTimelockBountySmartWalletAddOwnerPublicKey =
  /*#__PURE__*/ createUseSimulateContract({
    abi: timelockBountySmartWalletAbi,
    functionName: 'addOwnerPublicKey',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link timelockBountySmartWalletAbi}__ and `functionName` set to `"claimBounty"`
 */
export const useSimulateTimelockBountySmartWalletClaimBounty =
  /*#__PURE__*/ createUseSimulateContract({
    abi: timelockBountySmartWalletAbi,
    functionName: 'claimBounty',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link timelockBountySmartWalletAbi}__ and `functionName` set to `"execute"`
 */
export const useSimulateTimelockBountySmartWalletExecute =
  /*#__PURE__*/ createUseSimulateContract({
    abi: timelockBountySmartWalletAbi,
    functionName: 'execute',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link timelockBountySmartWalletAbi}__ and `functionName` set to `"executeBatch"`
 */
export const useSimulateTimelockBountySmartWalletExecuteBatch =
  /*#__PURE__*/ createUseSimulateContract({
    abi: timelockBountySmartWalletAbi,
    functionName: 'executeBatch',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link timelockBountySmartWalletAbi}__ and `functionName` set to `"executeWithoutChainIdValidation"`
 */
export const useSimulateTimelockBountySmartWalletExecuteWithoutChainIdValidation =
  /*#__PURE__*/ createUseSimulateContract({
    abi: timelockBountySmartWalletAbi,
    functionName: 'executeWithoutChainIdValidation',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link timelockBountySmartWalletAbi}__ and `functionName` set to `"initialize"`
 */
export const useSimulateTimelockBountySmartWalletInitialize =
  /*#__PURE__*/ createUseSimulateContract({
    abi: timelockBountySmartWalletAbi,
    functionName: 'initialize',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link timelockBountySmartWalletAbi}__ and `functionName` set to `"removeLastOwner"`
 */
export const useSimulateTimelockBountySmartWalletRemoveLastOwner =
  /*#__PURE__*/ createUseSimulateContract({
    abi: timelockBountySmartWalletAbi,
    functionName: 'removeLastOwner',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link timelockBountySmartWalletAbi}__ and `functionName` set to `"removeOwnerAtIndex"`
 */
export const useSimulateTimelockBountySmartWalletRemoveOwnerAtIndex =
  /*#__PURE__*/ createUseSimulateContract({
    abi: timelockBountySmartWalletAbi,
    functionName: 'removeOwnerAtIndex',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link timelockBountySmartWalletAbi}__ and `functionName` set to `"unlock"`
 */
export const useSimulateTimelockBountySmartWalletUnlock =
  /*#__PURE__*/ createUseSimulateContract({
    abi: timelockBountySmartWalletAbi,
    functionName: 'unlock',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link timelockBountySmartWalletAbi}__ and `functionName` set to `"upgradeToAndCall"`
 */
export const useSimulateTimelockBountySmartWalletUpgradeToAndCall =
  /*#__PURE__*/ createUseSimulateContract({
    abi: timelockBountySmartWalletAbi,
    functionName: 'upgradeToAndCall',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link timelockBountySmartWalletAbi}__ and `functionName` set to `"validateUserOp"`
 */
export const useSimulateTimelockBountySmartWalletValidateUserOp =
  /*#__PURE__*/ createUseSimulateContract({
    abi: timelockBountySmartWalletAbi,
    functionName: 'validateUserOp',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link timelockBountySmartWalletAbi}__
 */
export const useWatchTimelockBountySmartWalletEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: timelockBountySmartWalletAbi,
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link timelockBountySmartWalletAbi}__ and `eventName` set to `"AddOwner"`
 */
export const useWatchTimelockBountySmartWalletAddOwnerEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: timelockBountySmartWalletAbi,
    eventName: 'AddOwner',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link timelockBountySmartWalletAbi}__ and `eventName` set to `"BountyAdded"`
 */
export const useWatchTimelockBountySmartWalletBountyAddedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: timelockBountySmartWalletAbi,
    eventName: 'BountyAdded',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link timelockBountySmartWalletAbi}__ and `eventName` set to `"BountyClaimed"`
 */
export const useWatchTimelockBountySmartWalletBountyClaimedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: timelockBountySmartWalletAbi,
    eventName: 'BountyClaimed',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link timelockBountySmartWalletAbi}__ and `eventName` set to `"RemoveOwner"`
 */
export const useWatchTimelockBountySmartWalletRemoveOwnerEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: timelockBountySmartWalletAbi,
    eventName: 'RemoveOwner',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link timelockBountySmartWalletAbi}__ and `eventName` set to `"Unlocked"`
 */
export const useWatchTimelockBountySmartWalletUnlockedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: timelockBountySmartWalletAbi,
    eventName: 'Unlocked',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link timelockBountySmartWalletAbi}__ and `eventName` set to `"Upgraded"`
 */
export const useWatchTimelockBountySmartWalletUpgradedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: timelockBountySmartWalletAbi,
    eventName: 'Upgraded',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link timelockBountySmartWalletFactoryAbi}__
 */
export const useReadTimelockBountySmartWalletFactory =
  /*#__PURE__*/ createUseReadContract({
    abi: timelockBountySmartWalletFactoryAbi,
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link timelockBountySmartWalletFactoryAbi}__ and `functionName` set to `"getAddress"`
 */
export const useReadTimelockBountySmartWalletFactoryGetAddress =
  /*#__PURE__*/ createUseReadContract({
    abi: timelockBountySmartWalletFactoryAbi,
    functionName: 'getAddress',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link timelockBountySmartWalletFactoryAbi}__ and `functionName` set to `"implementation"`
 */
export const useReadTimelockBountySmartWalletFactoryImplementation =
  /*#__PURE__*/ createUseReadContract({
    abi: timelockBountySmartWalletFactoryAbi,
    functionName: 'implementation',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link timelockBountySmartWalletFactoryAbi}__ and `functionName` set to `"initCodeHash"`
 */
export const useReadTimelockBountySmartWalletFactoryInitCodeHash =
  /*#__PURE__*/ createUseReadContract({
    abi: timelockBountySmartWalletFactoryAbi,
    functionName: 'initCodeHash',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link timelockBountySmartWalletFactoryAbi}__
 */
export const useWriteTimelockBountySmartWalletFactory =
  /*#__PURE__*/ createUseWriteContract({
    abi: timelockBountySmartWalletFactoryAbi,
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link timelockBountySmartWalletFactoryAbi}__ and `functionName` set to `"createAccount"`
 */
export const useWriteTimelockBountySmartWalletFactoryCreateAccount =
  /*#__PURE__*/ createUseWriteContract({
    abi: timelockBountySmartWalletFactoryAbi,
    functionName: 'createAccount',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link timelockBountySmartWalletFactoryAbi}__
 */
export const useSimulateTimelockBountySmartWalletFactory =
  /*#__PURE__*/ createUseSimulateContract({
    abi: timelockBountySmartWalletFactoryAbi,
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link timelockBountySmartWalletFactoryAbi}__ and `functionName` set to `"createAccount"`
 */
export const useSimulateTimelockBountySmartWalletFactoryCreateAccount =
  /*#__PURE__*/ createUseSimulateContract({
    abi: timelockBountySmartWalletFactoryAbi,
    functionName: 'createAccount',
  })
