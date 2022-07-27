/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, BigNumberish } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { ComplexRewarder } from "../ComplexRewarder";

export class ComplexRewarder__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _rewardToken: string,
    _tokenPerBlock: BigNumberish,
    _MASTERCHEF_V2: string,
    overrides?: Overrides
  ): Promise<ComplexRewarder> {
    return super.deploy(
      _rewardToken,
      _tokenPerBlock,
      _MASTERCHEF_V2,
      overrides || {}
    ) as Promise<ComplexRewarder>;
  }
  getDeployTransaction(
    _rewardToken: string,
    _tokenPerBlock: BigNumberish,
    _MASTERCHEF_V2: string,
    overrides?: Overrides
  ): TransactionRequest {
    return super.getDeployTransaction(
      _rewardToken,
      _tokenPerBlock,
      _MASTERCHEF_V2,
      overrides || {}
    );
  }
  attach(address: string): ComplexRewarder {
    return super.attach(address) as ComplexRewarder;
  }
  connect(signer: Signer): ComplexRewarder__factory {
    return super.connect(signer) as ComplexRewarder__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ComplexRewarder {
    return new Contract(address, _abi, signerOrProvider) as ComplexRewarder;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "contract IERC20",
        name: "_rewardToken",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_tokenPerBlock",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_MASTERCHEF_V2",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [],
    name: "LogInit",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "pid",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
    ],
    name: "LogOnReward",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "pid",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "allocPoint",
        type: "uint256",
      },
    ],
    name: "LogPoolAddition",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "pid",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "allocPoint",
        type: "uint256",
      },
    ],
    name: "LogSetPool",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "pid",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint64",
        name: "lastRewardBlock",
        type: "uint64",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "lpSupply",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "accSushiPerShare",
        type: "uint256",
      },
    ],
    name: "LogUpdatePool",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "allocPoint",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_pid",
        type: "uint256",
      },
    ],
    name: "add",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "claimOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256[]",
        name: "pids",
        type: "uint256[]",
      },
    ],
    name: "massUpdatePools",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "pid",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_user",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "lpToken",
        type: "uint256",
      },
    ],
    name: "onSushiReward",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "pendingOwner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_pid",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_user",
        type: "address",
      },
    ],
    name: "pendingToken",
    outputs: [
      {
        internalType: "uint256",
        name: "pending",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "pid",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "pendingTokens",
    outputs: [
      {
        internalType: "contract IERC20[]",
        name: "rewardTokens",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "rewardAmounts",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "poolIds",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "poolInfo",
    outputs: [
      {
        internalType: "uint128",
        name: "accSushiPerShare",
        type: "uint128",
      },
      {
        internalType: "uint64",
        name: "lastRewardBlock",
        type: "uint64",
      },
      {
        internalType: "uint64",
        name: "allocPoint",
        type: "uint64",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "poolLength",
    outputs: [
      {
        internalType: "uint256",
        name: "pools",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "address payable",
        name: "to",
        type: "address",
      },
    ],
    name: "reclaimTokens",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_pid",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_allocPoint",
        type: "uint256",
      },
    ],
    name: "set",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "tokenPerBlock",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
      {
        internalType: "bool",
        name: "direct",
        type: "bool",
      },
      {
        internalType: "bool",
        name: "renounce",
        type: "bool",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "pid",
        type: "uint256",
      },
    ],
    name: "updatePool",
    outputs: [
      {
        components: [
          {
            internalType: "uint128",
            name: "accSushiPerShare",
            type: "uint128",
          },
          {
            internalType: "uint64",
            name: "lastRewardBlock",
            type: "uint64",
          },
          {
            internalType: "uint64",
            name: "allocPoint",
            type: "uint64",
          },
        ],
        internalType: "struct ComplexRewarder.PoolInfo",
        name: "pool",
        type: "tuple",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "userInfo",
    outputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "rewardDebt",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "unpaidRewards",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x60c06040523480156200001157600080fd5b5060405162001b2c38038062001b2c83398101604081905262000034916200009e565b600080546001600160a01b0319163390811782556040519091907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a36001600160601b0319606093841b811660805260069290925590911b1660a0526001600755620000fe565b600080600060608486031215620000b3578283fd5b8351620000c081620000e5565b602085015160408601519194509250620000da81620000e5565b809150509250925092565b6001600160a01b0381168114620000fb57600080fd5b50565b60805160601c60a05160601c6119e16200014b6000398061051a52806105af528061085952806108ee5280610cd3525080610db55280610e665280610ea7528061105452506119e16000f3fe608060405234801561001057600080fd5b506004361061010b5760003560e01c806357a5b58c116100a25780638da5cb5b116100715780638da5cb5b1461020757806393f1a40b1461021c578063c1ea38681461023e578063d63b3c4914610251578063e30c3978146102725761010b565b806357a5b58c146101bb57806369883b4e146101ce578063771602f7146101e15780638bf63742146101f45761010b565b80634198709a116100de5780634198709a1461017857806348e43af4146101805780634e71e0c81461019357806351eb05a61461019b5761010b565b8063078dfbe714610110578063081e3eda146101255780631526fe27146101435780631ab06ee514610165575b600080fd5b61012361011e366004611310565b61027a565b005b61012d610369565b60405161013a919061193c565b60405180910390f35b61015661015136600461143d565b61036f565b60405161013a93929190611912565b610123610173366004611524565b6103a6565b61012d610485565b61012d61018e36600461146d565b61048b565b610123610729565b6101ae6101a936600461143d565b6107b6565b60405161013a91906118d9565b6101236101c9366004611390565b610ade565b61012d6101dc36600461143d565b610b14565b6101236101ef366004611524565b610b32565b61012361020236600461149c565b610cc8565b61020f610f69565b60405161013a9190611586565b61022f61022a36600461146d565b610f78565b60405161013a93929190611945565b61012361024c36600461135a565b610fa4565b61026461025f3660046114ed565b61102c565b60405161013a9291906115b3565b61020f6110eb565b6000546001600160a01b031633146102ad5760405162461bcd60e51b81526004016102a4906117e1565b60405180910390fd5b8115610348576001600160a01b0383161515806102c75750805b6102e35760405162461bcd60e51b81526004016102a490611717565b600080546040516001600160a01b03808716939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a3600080546001600160a01b0385166001600160a01b031991821617909155600180549091169055610364565b600180546001600160a01b0319166001600160a01b0385161790555b505050565b60035490565b6002602052600090815260409020546001600160801b038116906001600160401b03600160801b8204811691600160c01b90041683565b6000546001600160a01b031633146103d05760405162461bcd60e51b81526004016102a4906117e1565b60008281526002602052604090205460055461040791839161040191600160c01b90046001600160401b03166110fa565b90611123565b60055561041381611146565b6000838152600260205260409081902080546001600160401b0393909316600160c01b026001600160c01b03909316929092179091555182907f942cc7e17a17c164bd977f32ab8c54265d5b9d481e4e352bf874f1e568874e7c9061047990849061193c565b60405180910390a25050565b60065481565b60006104956112f0565b506000838152600260209081526040808320815160608101835290546001600160801b0380821683526001600160401b03600160801b8304811684870152600160c01b9092049091168284015287855260048085528386206001600160a01b03808a1688529552838620835194516378ed5d1f60e01b815293969095949092169391927f0000000000000000000000000000000000000000000000000000000000000000909216916378ed5d1f9161054f918b910161193c565b60206040518083038186803b15801561056757600080fd5b505afa15801561057b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061059f9190611421565b6001600160a01b03166370a082317f00000000000000000000000000000000000000000000000000000000000000006040518263ffffffff1660e01b81526004016105ea9190611586565b60206040518083038186803b15801561060257600080fd5b505afa158015610616573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061063a9190611455565b905083602001516001600160401b03164311801561065757508015155b156106e357600061067e85602001516001600160401b0316436110fa90919063ffffffff16565b905060006005546106b187604001516001600160401b03166106ab6006548661117390919063ffffffff16565b90611173565b816106b857fe5b0490506106de836106ce8364e8d4a51000611173565b816106d557fe5b86919004611123565b935050505b61071e8360020154610401856001015464e8d4a5100061071087896000015461117390919063ffffffff16565b8161071757fe5b04906110fa565b979650505050505050565b6001546001600160a01b03163381146107545760405162461bcd60e51b81526004016102a490611816565b600080546040516001600160a01b03808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a3600080546001600160a01b039092166001600160a01b0319928316179055600180549091169055565b6107be6112f0565b50600081815260026020908152604091829020825160608101845290546001600160801b03811682526001600160401b03600160801b82048116938301849052600160c01b909104169281019290925261082a5760405162461bcd60e51b81526004016102a490611746565b80602001516001600160401b0316431115610ad9576040516378ed5d1f60e01b81526000906001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016906378ed5d1f9061088e90869060040161193c565b60206040518083038186803b1580156108a657600080fd5b505afa1580156108ba573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108de9190611421565b6001600160a01b03166370a082317f00000000000000000000000000000000000000000000000000000000000000006040518263ffffffff1660e01b81526004016109299190611586565b60206040518083038186803b15801561094157600080fd5b505afa158015610955573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109799190611455565b90508015610a1c5760006109a383602001516001600160401b0316436110fa90919063ffffffff16565b905060006005546109d085604001516001600160401b03166106ab6006548661117390919063ffffffff16565b816109d757fe5b049050610a0e6109fd846109f08464e8d4a51000611173565b816109f757fe5b046111aa565b85516001600160801b0316906111d3565b6001600160801b0316845250505b610a2543611146565b6001600160401b03908116602084810191825260008681526002909152604090819020855181549351838801516001600160801b03199095166001600160801b0383161767ffffffffffffffff60801b1916600160801b82881602176001600160c01b0316600160c01b95909616949094029490941790555185927f0fc9545022a542541ad085d091fb09a2ab36fee366a4576ab63714ea907ad35392610acf929091869161195b565b60405180910390a2505b919050565b8060005b81811015610b0e57610b05848483818110610af957fe5b905060200201356107b6565b50600101610ae2565b50505050565b60038181548110610b2157fe5b600091825260209091200154905081565b6000546001600160a01b03163314610b5c5760405162461bcd60e51b81526004016102a4906117e1565b600081815260026020526040902054600160801b90046001600160401b031615610b985760405162461bcd60e51b81526004016102a490611672565b6005544390610ba79084611123565b60055560408051606081019091526000815260208101610bc683611146565b6001600160401b03168152602001610bdd85611146565b6001600160401b0390811690915260008481526002602090815260408083208551815493870151968301518616600160c01b026001600160c01b0397909616600160801b0267ffffffffffffffff60801b196001600160801b039092166001600160801b031990951694909417169290921794909416929092179091556003805460018101825591527fc2575a0e9e593c00f959f8c92f12db2869c3395a3b0502d05e2516446f71f85b018390555182907f38410508059921573ab9ebdca2a5034be738d236366b8f32de4434ea95ed3c8190610cbb90869061193c565b60405180910390a2505050565b336001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614610d105760405162461bcd60e51b81526004016102a4906116d6565b600754600114610d325760405162461bcd60e51b81526004016102a490611882565b6002600755610d3f6112f0565b610d48866107b6565b60008781526004602090815260408083206001600160a01b038a168452909152812080549293509115610ed857610daf8260020154610401846001015464e8d4a5100061071088600001516001600160801b0316886000015461117390919063ffffffff16565b905060007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166370a08231306040518263ffffffff1660e01b8152600401610dff9190611586565b60206040518083038186803b158015610e1757600080fd5b505afa158015610e2b573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e4f9190611455565b905080821115610e9a57610e8d6001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000168883611202565b8082036002840155610ed6565b610ece6001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000168884611202565b600060028401555b505b838255825164e8d4a5100090610ef89086906001600160801b0316611173565b81610eff57fe5b048260010181905550856001600160a01b031688886001600160a01b03167f2ece88ca2bc08dd018db50e1d25a20bf1241e5fab1c396caa51f01a54bd2f75b85600201548503604051610f52919061193c565b60405180910390a450506001600755505050505050565b6000546001600160a01b031681565b600460209081526000928352604080842090915290825290208054600182015460029092015490919083565b6000546001600160a01b03163314610fce5760405162461bcd60e51b81526004016102a4906117e1565b6001600160a01b038316611018576040516001600160a01b0382169083156108fc029084906000818181858888f19350505050158015611012573d6000803e3d6000fd5b50610364565b6103646001600160a01b0384168284611202565b60408051600180825281830190925260609182918291602080830190803683370190505090507f00000000000000000000000000000000000000000000000000000000000000008160008151811061108057fe5b6001600160a01b0392909216602092830291909101909101526040805160018082528183019092526060918160200160208202803683370190505090506110c7878761048b565b816000815181106110d457fe5b602090810291909101015290969095509350505050565b6001546001600160a01b031681565b8082038281111561111d5760405162461bcd60e51b81526004016102a490611643565b92915050565b8181018181101561111d5760405162461bcd60e51b81526004016102a4906117aa565b60006001600160401b0382111561116f5760405162461bcd60e51b81526004016102a49061184b565b5090565b600081158061118e5750508082028282828161118b57fe5b04145b61111d5760405162461bcd60e51b81526004016102a4906118a2565b60006001600160801b0382111561116f5760405162461bcd60e51b81526004016102a490611773565b8181016001600160801b03808316908216101561111d5760405162461bcd60e51b81526004016102a4906117aa565b60006060846001600160a01b031663a9059cbb858560405160240161122892919061159a565b6040516020818303038152906040529060e01b6020820180516001600160e01b038381831617835250505050604051611261919061154d565b6000604051808303816000865af19150503d806000811461129e576040519150601f19603f3d011682016040523d82523d6000602084013e6112a3565b606091505b50915091508180156112cd5750805115806112cd5750808060200190518101906112cd91906113fe565b6112e95760405162461bcd60e51b81526004016102a49061169f565b5050505050565b604080516060810182526000808252602082018190529181019190915290565b600080600060608486031215611324578283fd5b833561132f81611985565b9250602084013561133f8161199d565b9150604084013561134f8161199d565b809150509250925092565b60008060006060848603121561136e578283fd5b833561137981611985565b925060208401359150604084013561134f81611985565b600080602083850312156113a2578182fd5b82356001600160401b03808211156113b8578384fd5b818501915085601f8301126113cb578384fd5b8135818111156113d9578485fd5b86602080830285010111156113ec578485fd5b60209290920196919550909350505050565b60006020828403121561140f578081fd5b815161141a8161199d565b9392505050565b600060208284031215611432578081fd5b815161141a81611985565b60006020828403121561144e578081fd5b5035919050565b600060208284031215611466578081fd5b5051919050565b6000806040838503121561147f578182fd5b82359150602083013561149181611985565b809150509250929050565b600080600080600060a086880312156114b3578081fd5b8535945060208601356114c581611985565b935060408601356114d581611985565b94979396509394606081013594506080013592915050565b600080600060608486031215611501578283fd5b83359250602084013561151381611985565b929592945050506040919091013590565b60008060408385031215611536578182fd5b50508035926020909101359150565b815260200190565b60008251815b8181101561156d5760208186018101518583015201611553565b8181111561157b5782828501525b509190910192915050565b6001600160a01b0391909116815260200190565b6001600160a01b03929092168252602082015260400190565b604080825283519082018190526000906020906060840190828701845b828110156115f55781516001600160a01b0316845292840192908401906001016115d0565b5050508381038285015280855161160c818461193c565b91508387019250845b8181101561163657611628838551611545565b938501939250600101611615565b5090979650505050505050565b602080825260159082015274426f72696e674d6174683a20556e646572666c6f7760581b604082015260600190565b602080825260139082015272506f6f6c20616c72656164792065786973747360681b604082015260600190565b6020808252601c908201527f426f72696e6745524332303a205472616e73666572206661696c656400000000604082015260600190565b60208082526021908201527f4f6e6c79204d4356322063616e2063616c6c20746869732066756e6374696f6e6040820152601760f91b606082015260800190565b6020808252601590820152744f776e61626c653a207a65726f206164647265737360581b604082015260600190565b602080825260139082015272141bdbdb08191bd95cc81b9bdd08195e1a5cdd606a1b604082015260600190565b6020808252601c908201527f426f72696e674d6174683a2075696e74313238204f766572666c6f7700000000604082015260600190565b60208082526018908201527f426f72696e674d6174683a20416464204f766572666c6f770000000000000000604082015260600190565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b6020808252818101527f4f776e61626c653a2063616c6c657220213d2070656e64696e67206f776e6572604082015260600190565b6020808252601b908201527f426f72696e674d6174683a2075696e743634204f766572666c6f770000000000604082015260600190565b6020808252600690820152651313d0d2d15160d21b604082015260600190565b60208082526018908201527f426f72696e674d6174683a204d756c204f766572666c6f770000000000000000604082015260600190565b81516001600160801b031681526020808301516001600160401b0390811691830191909152604092830151169181019190915260600190565b6001600160801b039390931683526001600160401b03918216602084015216604082015260600190565b90815260200190565b9283526020830191909152604082015260600190565b6001600160401b0393909316835260208301919091526001600160801b0316604082015260600190565b6001600160a01b038116811461199a57600080fd5b50565b801515811461199a57600080fdfea2646970667358221220a3d2d5ebc9d39faf52c86e5fa25b8255ad72a144c7a94c1b3d8065b9ed5ac71764736f6c634300060c0033";
