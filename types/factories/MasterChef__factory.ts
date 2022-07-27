/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, BigNumberish } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { MasterChef } from "../MasterChef";

export class MasterChef__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _sushi: string,
    _devaddr: string,
    _sushiPerBlock: BigNumberish,
    _startBlock: BigNumberish,
    _bonusEndBlock: BigNumberish,
    overrides?: Overrides
  ): Promise<MasterChef> {
    return super.deploy(
      _sushi,
      _devaddr,
      _sushiPerBlock,
      _startBlock,
      _bonusEndBlock,
      overrides || {}
    ) as Promise<MasterChef>;
  }
  getDeployTransaction(
    _sushi: string,
    _devaddr: string,
    _sushiPerBlock: BigNumberish,
    _startBlock: BigNumberish,
    _bonusEndBlock: BigNumberish,
    overrides?: Overrides
  ): TransactionRequest {
    return super.getDeployTransaction(
      _sushi,
      _devaddr,
      _sushiPerBlock,
      _startBlock,
      _bonusEndBlock,
      overrides || {}
    );
  }
  attach(address: string): MasterChef {
    return super.attach(address) as MasterChef;
  }
  connect(signer: Signer): MasterChef__factory {
    return super.connect(signer) as MasterChef__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MasterChef {
    return new Contract(address, _abi, signerOrProvider) as MasterChef;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "contract SushiToken",
        name: "_sushi",
        type: "address",
      },
      {
        internalType: "address",
        name: "_devaddr",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_sushiPerBlock",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_startBlock",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_bonusEndBlock",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
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
    ],
    name: "Deposit",
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
    ],
    name: "EmergencyWithdraw",
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
    ],
    name: "Withdraw",
    type: "event",
  },
  {
    inputs: [],
    name: "BONUS_MULTIPLIER",
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
        name: "_allocPoint",
        type: "uint256",
      },
      {
        internalType: "contract IERC20",
        name: "_lpToken",
        type: "address",
      },
      {
        internalType: "bool",
        name: "_withUpdate",
        type: "bool",
      },
    ],
    name: "add",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "bonusEndBlock",
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
        name: "_pid",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "deposit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_devaddr",
        type: "address",
      },
    ],
    name: "dev",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "devaddr",
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
    ],
    name: "emergencyWithdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_from",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_to",
        type: "uint256",
      },
    ],
    name: "getMultiplier",
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
    inputs: [],
    name: "massUpdatePools",
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
    ],
    name: "migrate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "migrator",
    outputs: [
      {
        internalType: "contract IMigratorChef",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
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
    name: "pendingSushi",
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
        internalType: "contract IERC20",
        name: "lpToken",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "allocPoint",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "lastRewardBlock",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "accSushiPerShare",
        type: "uint256",
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
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
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
      {
        internalType: "bool",
        name: "_withUpdate",
        type: "bool",
      },
    ],
    name: "set",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IMigratorChef",
        name: "_migrator",
        type: "address",
      },
    ],
    name: "setMigrator",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "startBlock",
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
    inputs: [],
    name: "sushi",
    outputs: [
      {
        internalType: "contract SushiToken",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "sushiPerBlock",
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
    inputs: [],
    name: "totalAllocPoint",
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
        name: "_pid",
        type: "uint256",
      },
    ],
    name: "updatePool",
    outputs: [],
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
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x6080604052600060085534801561001557600080fd5b50604051611d5d380380611d5d833981810160405260a081101561003857600080fd5b5080516020820151604083015160608401516080909401519293919290919060006100616100e9565b600080546001600160a01b0319166001600160a01b0383169081178255604051929350917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a350600180546001600160a01b039687166001600160a01b03199182161790915560028054959096169416939093179093556004556003556009556100ed565b3390565b611c61806100fc6000396000f3fe608060405234801561001057600080fd5b506004361061018e5760003560e01c8063630b5ba1116100de5780638da5cb5b11610097578063b0bcf42a11610071578063b0bcf42a14610419578063d49e77cd14610421578063e2bbb15814610429578063f2fde38b1461044c5761018e565b80638da5cb5b146103a95780638dbb1e3a146103b157806393f1a40b146103d45761018e565b8063630b5ba11461033857806364482f7914610340578063715018a61461036b5780637cd07e47146103735780638aa285501461037b5780638d88a90e146103835761018e565b80631eaaa0451161014b578063454b060811610125578063454b0608146102d957806348cd4cb1146102f657806351eb05a6146102fe5780635312ea8e1461031b5761018e565b80631eaaa0451461025a57806323cf311814610290578063441a3e70146102b65761018e565b8063081e3eda146101935780630a087903146101ad5780631526fe27146101d157806317caf6f11461021e578063195426ec146102265780631aed655314610252575b600080fd5b61019b610472565b60408051918252519081900360200190f35b6101b5610478565b604080516001600160a01b039092168252519081900360200190f35b6101ee600480360360208110156101e757600080fd5b5035610487565b604080516001600160a01b0390951685526020850193909352838301919091526060830152519081900360800190f35b61019b6104c8565b61019b6004803603604081101561023c57600080fd5b50803590602001356001600160a01b03166104ce565b61019b610644565b61028e6004803603606081101561027057600080fd5b508035906001600160a01b036020820135169060400135151561064a565b005b61028e600480360360208110156102a657600080fd5b50356001600160a01b03166107cf565b61028e600480360360408110156102cc57600080fd5b5080359060200135610853565b61028e600480360360208110156102ef57600080fd5b503561099a565b61019b610bf6565b61028e6004803603602081101561031457600080fd5b5035610bfc565b61028e6004803603602081101561033157600080fd5b5035610e1d565b61028e610eb8565b61028e6004803603606081101561035657600080fd5b50803590602081013590604001351515610edb565b61028e610fb6565b6101b5611062565b61019b611071565b61028e6004803603602081101561039957600080fd5b50356001600160a01b0316611076565b6101b56110e3565b61019b600480360360408110156103c757600080fd5b50803590602001356110f2565b610400600480360360408110156103ea57600080fd5b50803590602001356001600160a01b0316611158565b6040805192835260208301919091528051918290030190f35b61019b61117c565b6101b5611182565b61028e6004803603604081101561043f57600080fd5b5080359060200135611191565b61028e6004803603602081101561046257600080fd5b50356001600160a01b0316611296565b60065490565b6001546001600160a01b031681565b6006818154811061049457fe5b600091825260209091206004909102018054600182015460028301546003909301546001600160a01b039092169350919084565b60085481565b600080600684815481106104de57fe5b600091825260208083208784526007825260408085206001600160a01b03898116875290845281862060049586029093016003810154815484516370a0823160e01b81523098810198909852935191985093969395939492909116926370a08231926024808301939192829003018186803b15801561055c57600080fd5b505afa158015610570573d6000803e3d6000fd5b505050506040513d602081101561058657600080fd5b505160028501549091504311801561059d57508015155b156106095760006105b28560020154436110f2565b905060006105e56008546105df88600101546105d96004548761139890919063ffffffff16565b90611398565b906113f8565b90506106046105fd846105df8464e8d4a51000611398565b859061145f565b935050505b610637836001015461063164e8d4a510006105df86886000015461139890919063ffffffff16565b906114b9565b9450505050505b92915050565b60035481565b610652611516565b6001600160a01b03166106636110e3565b6001600160a01b0316146106ac576040805162461bcd60e51b81526020600482018190526024820152600080516020611bac833981519152604482015290519081900360640190fd5b80156106ba576106ba610eb8565b600060095443116106cd576009546106cf565b435b6008549091506106df908561145f565b600855604080516080810182526001600160a01b0394851681526020810195865290810191825260006060820181815260068054600181018255925291517ff652222313e28459528d920b65115c16c04f3efc82aaedc97be59f3f377c0d3f600490920291820180546001600160a01b031916919096161790945593517ff652222313e28459528d920b65115c16c04f3efc82aaedc97be59f3f377c0d40840155517ff652222313e28459528d920b65115c16c04f3efc82aaedc97be59f3f377c0d418301555090517ff652222313e28459528d920b65115c16c04f3efc82aaedc97be59f3f377c0d4290910155565b6107d7611516565b6001600160a01b03166107e86110e3565b6001600160a01b031614610831576040805162461bcd60e51b81526020600482018190526024820152600080516020611bac833981519152604482015290519081900360640190fd5b600580546001600160a01b0319166001600160a01b0392909216919091179055565b60006006838154811061086257fe5b6000918252602080832086845260078252604080852033865290925292208054600490920290920192508311156108d5576040805162461bcd60e51b81526020600482015260126024820152711dda5d1a191c985dce881b9bdd0819dbdbd960721b604482015290519081900360640190fd5b6108de84610bfc565b600061090c826001015461063164e8d4a510006105df8760030154876000015461139890919063ffffffff16565b9050610918338261151a565b815461092490856114b9565b80835560038401546109419164e8d4a51000916105df9190611398565b6001830155825461095c906001600160a01b031633866116ab565b604080518581529051869133917ff279e6a1f5e320cca91135676d9cb6e44ca8a08c0b88342bcdb1144f6511b5689181900360200190a35050505050565b6005546001600160a01b03166109ee576040805162461bcd60e51b815260206004820152601460248201527336b4b3b930ba329d1037379036b4b3b930ba37b960611b604482015290519081900360640190fd5b6000600682815481106109fd57fe5b600091825260208083206004928302018054604080516370a0823160e01b81523095810195909552519195506001600160a01b0316939284926370a0823192602480840193829003018186803b158015610a5657600080fd5b505afa158015610a6a573d6000803e3d6000fd5b505050506040513d6020811015610a8057600080fd5b5051600554909150610a9f906001600160a01b038481169116836116fd565b6005546040805163ce5494bb60e01b81526001600160a01b0385811660048301529151600093929092169163ce5494bb9160248082019260209290919082900301818787803b158015610af157600080fd5b505af1158015610b05573d6000803e3d6000fd5b505050506040513d6020811015610b1b57600080fd5b5051604080516370a0823160e01b815230600482015290519192506001600160a01b038316916370a0823191602480820192602092909190829003018186803b158015610b6757600080fd5b505afa158015610b7b573d6000803e3d6000fd5b505050506040513d6020811015610b9157600080fd5b50518214610bd5576040805162461bcd60e51b815260206004820152600c60248201526b1b5a59dc985d194e8818985960a21b604482015290519081900360640190fd5b83546001600160a01b0319166001600160a01b039190911617909255505050565b60095481565b600060068281548110610c0b57fe5b9060005260206000209060040201905080600201544311610c2c5750610e1a565b8054604080516370a0823160e01b815230600482015290516000926001600160a01b0316916370a08231916024808301926020929190829003018186803b158015610c7657600080fd5b505afa158015610c8a573d6000803e3d6000fd5b505050506040513d6020811015610ca057600080fd5b5051905080610cb6575043600290910155610e1a565b6000610cc68360020154436110f2565b90506000610ced6008546105df86600101546105d96004548761139890919063ffffffff16565b6001546002549192506001600160a01b03908116916340c10f199116610d1484600a6113f8565b6040518363ffffffff1660e01b815260040180836001600160a01b0316815260200182815260200192505050600060405180830381600087803b158015610d5a57600080fd5b505af1158015610d6e573d6000803e3d6000fd5b5050600154604080516340c10f1960e01b81523060048201526024810186905290516001600160a01b0390921693506340c10f19925060448082019260009290919082900301818387803b158015610dc557600080fd5b505af1158015610dd9573d6000803e3d6000fd5b50505050610e07610dfc846105df64e8d4a510008561139890919063ffffffff16565b60038601549061145f565b6003850155505043600290920191909155505b50565b600060068281548110610e2c57fe5b60009182526020808320858452600782526040808520338087529352909320805460049093029093018054909450610e71926001600160a01b039190911691906116ab565b80546040805191825251849133917fbb757047c2b5f3974fe26b7c10f732e7bce710b0952a71082702781e62ae05959181900360200190a360008082556001909101555050565b60065460005b81811015610ed757610ecf81610bfc565b600101610ebe565b5050565b610ee3611516565b6001600160a01b0316610ef46110e3565b6001600160a01b031614610f3d576040805162461bcd60e51b81526020600482018190526024820152600080516020611bac833981519152604482015290519081900360640190fd5b8015610f4b57610f4b610eb8565b610f8882610f8260068681548110610f5f57fe5b9060005260206000209060040201600101546008546114b990919063ffffffff16565b9061145f565b6008819055508160068481548110610f9c57fe5b906000526020600020906004020160010181905550505050565b610fbe611516565b6001600160a01b0316610fcf6110e3565b6001600160a01b031614611018576040805162461bcd60e51b81526020600482018190526024820152600080516020611bac833981519152604482015290519081900360640190fd5b600080546040516001600160a01b03909116907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908390a3600080546001600160a01b0319169055565b6005546001600160a01b031681565b600a81565b6002546001600160a01b031633146110c1576040805162461bcd60e51b81526020600482015260096024820152686465763a207775743f60b81b604482015290519081900360640190fd5b600280546001600160a01b0319166001600160a01b0392909216919091179055565b6000546001600160a01b031690565b600060035482116111135761110c600a6105d984866114b9565b905061063e565b60035483106111265761110c82846114b9565b61110c61113e600354846114b990919063ffffffff16565b610f82600a6105d9876003546114b990919063ffffffff16565b60076020908152600092835260408084209091529082529020805460019091015482565b60045481565b6002546001600160a01b031681565b6000600683815481106111a057fe5b600091825260208083208684526007825260408085203386529092529220600490910290910191506111d184610bfc565b805415611214576000611206826001015461063164e8d4a510006105df8760030154876000015461139890919063ffffffff16565b9050611212338261151a565b505b815461122b906001600160a01b0316333086611810565b8054611237908461145f565b80825560038301546112549164e8d4a51000916105df9190611398565b6001820155604080518481529051859133917f90890809c654f11d6e72a28fa60149770a0d11ec6c92319d6ceb2bb0a4ea1a159181900360200190a350505050565b61129e611516565b6001600160a01b03166112af6110e3565b6001600160a01b0316146112f8576040805162461bcd60e51b81526020600482018190526024820152600080516020611bac833981519152604482015290519081900360640190fd5b6001600160a01b03811661133d5760405162461bcd60e51b8152600401808060200182810382526026815260200180611b3f6026913960400191505060405180910390fd5b600080546040516001600160a01b03808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a3600080546001600160a01b0319166001600160a01b0392909216919091179055565b6000826113a75750600061063e565b828202828482816113b457fe5b04146113f15760405162461bcd60e51b8152600401808060200182810382526021815260200180611b8b6021913960400191505060405180910390fd5b9392505050565b600080821161144e576040805162461bcd60e51b815260206004820152601a60248201527f536166654d6174683a206469766973696f6e206279207a65726f000000000000604482015290519081900360640190fd5b81838161145757fe5b049392505050565b6000828201838110156113f1576040805162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b600082821115611510576040805162461bcd60e51b815260206004820152601e60248201527f536166654d6174683a207375627472616374696f6e206f766572666c6f770000604482015290519081900360640190fd5b50900390565b3390565b600154604080516370a0823160e01b815230600482015290516000926001600160a01b0316916370a08231916024808301926020929190829003018186803b15801561156557600080fd5b505afa158015611579573d6000803e3d6000fd5b505050506040513d602081101561158f57600080fd5b5051905080821115611623576001546040805163a9059cbb60e01b81526001600160a01b038681166004830152602482018590529151919092169163a9059cbb9160448083019260209291908290030181600087803b1580156115f157600080fd5b505af1158015611605573d6000803e3d6000fd5b505050506040513d602081101561161b57600080fd5b506116a69050565b6001546040805163a9059cbb60e01b81526001600160a01b038681166004830152602482018690529151919092169163a9059cbb9160448083019260209291908290030181600087803b15801561167957600080fd5b505af115801561168d573d6000803e3d6000fd5b505050506040513d60208110156116a357600080fd5b50505b505050565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663a9059cbb60e01b1790526116a6908490611870565b801580611783575060408051636eb1769f60e11b81523060048201526001600160a01b03848116602483015291519185169163dd62ed3e91604480820192602092909190829003018186803b15801561175557600080fd5b505afa158015611769573d6000803e3d6000fd5b505050506040513d602081101561177f57600080fd5b5051155b6117be5760405162461bcd60e51b8152600401808060200182810382526036815260200180611bf66036913960400191505060405180910390fd5b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663095ea7b360e01b1790526116a6908490611870565b604080516001600160a01b0380861660248301528416604482015260648082018490528251808303909101815260849091019091526020810180516001600160e01b03166323b872dd60e01b17905261186a908590611870565b50505050565b60606118c5826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b03166119219092919063ffffffff16565b8051909150156116a6578080602001905160208110156118e457600080fd5b50516116a65760405162461bcd60e51b815260040180806020018281038252602a815260200180611bcc602a913960400191505060405180910390fd5b60606119308484600085611938565b949350505050565b6060824710156119795760405162461bcd60e51b8152600401808060200182810382526026815260200180611b656026913960400191505060405180910390fd5b61198285611a94565b6119d3576040805162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604482015290519081900360640190fd5b60006060866001600160a01b031685876040518082805190602001908083835b60208310611a125780518252601f1990920191602091820191016119f3565b6001836020036101000a03801982511681845116808217855250505050505090500191505060006040518083038185875af1925050503d8060008114611a74576040519150601f19603f3d011682016040523d82523d6000602084013e611a79565b606091505b5091509150611a89828286611a9a565b979650505050505050565b3b151590565b60608315611aa95750816113f1565b825115611ab95782518084602001fd5b8160405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b83811015611b03578181015183820152602001611aeb565b50505050905090810190601f168015611b305780820380516001836020036101000a031916815260200191505b509250505060405180910390fdfe4f776e61626c653a206e6577206f776e657220697320746865207a65726f2061646472657373416464726573733a20696e73756666696369656e742062616c616e636520666f722063616c6c536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f774f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65725361666545524332303a204552433230206f7065726174696f6e20646964206e6f7420737563636565645361666545524332303a20617070726f76652066726f6d206e6f6e2d7a65726f20746f206e6f6e2d7a65726f20616c6c6f77616e6365a2646970667358221220fea8dc98177f9dc9ed90d291894ad091052a3a6496d4eeae4a8a1f7afe1f8cb764736f6c634300060c0033";
