/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, BigNumberish } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { RewarderMock } from "../RewarderMock";

export class RewarderMock__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _rewardMultiplier: BigNumberish,
    _rewardToken: string,
    _MASTERCHEF_V2: string,
    overrides?: Overrides
  ): Promise<RewarderMock> {
    return super.deploy(
      _rewardMultiplier,
      _rewardToken,
      _MASTERCHEF_V2,
      overrides || {}
    ) as Promise<RewarderMock>;
  }
  getDeployTransaction(
    _rewardMultiplier: BigNumberish,
    _rewardToken: string,
    _MASTERCHEF_V2: string,
    overrides?: Overrides
  ): TransactionRequest {
    return super.getDeployTransaction(
      _rewardMultiplier,
      _rewardToken,
      _MASTERCHEF_V2,
      overrides || {}
    );
  }
  attach(address: string): RewarderMock {
    return super.attach(address) as RewarderMock;
  }
  connect(signer: Signer): RewarderMock__factory {
    return super.connect(signer) as RewarderMock__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): RewarderMock {
    return new Contract(address, _abi, signerOrProvider) as RewarderMock;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_rewardMultiplier",
        type: "uint256",
      },
      {
        internalType: "contract IERC20",
        name: "_rewardToken",
        type: "address",
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
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "sushiAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "onSushiReward",
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
        name: "user",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "sushiAmount",
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
];

const _bytecode =
  "0x60e060405234801561001057600080fd5b506040516106d43803806106d48339818101604052606081101561003357600080fd5b50805160208201516040909201516080919091526001600160601b0319606092831b811660a052911b1660c05260805160a05160601c60c05160601c61062e6100a6600039806101555250806101f452806102a252806102db52806103335250806101c252806103ab525061062e6000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c80638bf637421461003b578063d63b3c491461007f575b600080fd5b61007d600480360360a081101561005157600080fd5b508035906001600160a01b0360208201358116916040810135909116906060810135906080013561014a565b005b6100b16004803603606081101561009557600080fd5b508035906001600160a01b03602082013516906040013561030b565b604051808060200180602001838103835285818151815260200191508051906020019060200280838360005b838110156100f55781810151838201526020016100dd565b50505050905001838103825284818151815260200191508051906020019060200280838360005b8381101561013457818101518382015260200161011c565b5050505090500194505050505060405180910390f35b336001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016146101b15760405162461bcd60e51b81526004018080602001828103825260218152602001806105d86021913960400191505060405180910390fd5b6000670de0b6b3a76400006101e6847f00000000000000000000000000000000000000000000000000000000000000006103fb565b816101ed57fe5b04905060007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166370a08231306040518263ffffffff1660e01b815260040180826001600160a01b0316815260200191505060206040518083038186803b15801561025f57600080fd5b505afa158015610273573d6000803e3d6000fd5b505050506040513d602081101561028957600080fd5b50519050808211156102ce576102c96001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016868361046d565b610302565b6103026001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016868461046d565b50505050505050565b60408051600180825281830190925260609182918291602080830190803683370190505090507f00000000000000000000000000000000000000000000000000000000000000008160008151811061035f57fe5b6001600160a01b039290921660209283029190910190910152604080516001808252818301909252606091816020016020820280368337019050509050670de0b6b3a76400006103cf867f00000000000000000000000000000000000000000000000000000000000000006103fb565b816103d657fe5b04816000815181106103e457fe5b602090810291909101015290969095509350505050565b60008115806104165750508082028282828161041357fe5b04145b610467576040805162461bcd60e51b815260206004820152601860248201527f426f72696e674d6174683a204d756c204f766572666c6f770000000000000000604482015290519081900360640190fd5b92915050565b604080516001600160a01b038481166024830152604480830185905283518084039091018152606490920183526020820180516001600160e01b031663a9059cbb60e01b178152925182516000946060949389169392918291908083835b602083106104ea5780518252601f1990920191602091820191016104cb565b6001836020036101000a0380198251168184511680821785525050505050509050019150506000604051808303816000865af19150503d806000811461054c576040519150601f19603f3d011682016040523d82523d6000602084013e610551565b606091505b509150915081801561057f57508051158061057f575080806020019051602081101561057c57600080fd5b50515b6105d0576040805162461bcd60e51b815260206004820152601c60248201527f426f72696e6745524332303a205472616e73666572206661696c656400000000604482015290519081900360640190fd5b505050505056fe4f6e6c79204d4356322063616e2063616c6c20746869732066756e6374696f6e2ea2646970667358221220a1938dbd0ed3df34f717a23528a2a9d152ffd0dcb2e4f56ff98ba1b4c7e839ea64736f6c634300060c0033";