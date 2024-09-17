export const TimelockBountySmartWalletFactoryAbi = {
  abi: [
    {
      type: "constructor",
      inputs: [
        {
          name: "implementation_",
          type: "address",
          internalType: "address",
        },
      ],
      stateMutability: "payable",
    },
    {
      type: "function",
      name: "createAccount",
      inputs: [
        {
          name: "owners",
          type: "bytes[]",
          internalType: "bytes[]",
        },
        {
          name: "ownerIndex",
          type: "uint256",
          internalType: "uint256",
        },
        {
          name: "deadline",
          type: "uint256",
          internalType: "uint256",
        },
        {
          name: "nonce",
          type: "uint256",
          internalType: "uint256",
        },
        {
          name: "bountyToken",
          type: "address",
          internalType: "address",
        },
      ],
      outputs: [
        {
          name: "account",
          type: "address",
          internalType: "contract TimelockBountySmartWallet",
        },
      ],
      stateMutability: "payable",
    },
    {
      type: "function",
      name: "getAddress",
      inputs: [
        {
          name: "owners",
          type: "bytes[]",
          internalType: "bytes[]",
        },
        {
          name: "ownerIndex",
          type: "uint256",
          internalType: "uint256",
        },
        {
          name: "deadline",
          type: "uint256",
          internalType: "uint256",
        },
        {
          name: "nonce",
          type: "uint256",
          internalType: "uint256",
        },
        {
          name: "bountyToken",
          type: "address",
          internalType: "address",
        },
      ],
      outputs: [
        {
          name: "",
          type: "address",
          internalType: "address",
        },
      ],
      stateMutability: "view",
    },
    {
      type: "function",
      name: "implementation",
      inputs: [],
      outputs: [
        {
          name: "",
          type: "address",
          internalType: "address",
        },
      ],
      stateMutability: "view",
    },
    {
      type: "function",
      name: "initCodeHash",
      inputs: [],
      outputs: [
        {
          name: "",
          type: "bytes32",
          internalType: "bytes32",
        },
      ],
      stateMutability: "view",
    },
    {
      type: "error",
      name: "OwnerRequired",
      inputs: [],
    },
  ],
} as const;
