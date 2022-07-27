/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { ERC20 } from "../ERC20";

export class ERC20__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<ERC20> {
    return super.deploy(overrides || {}) as Promise<ERC20>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): ERC20 {
    return super.attach(address) as ERC20;
  }
  connect(signer: Signer): ERC20__factory {
    return super.connect(signer) as ERC20__factory;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): ERC20 {
    return new Contract(address, _abi, signerOrProvider) as ERC20;
  }
}

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "_spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [],
    name: "DOMAIN_SEPARATOR",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "allowance",
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
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "balanceOf",
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
        name: "",
        type: "address",
      },
    ],
    name: "nonces",
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
        name: "owner_",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "deadline",
        type: "uint256",
      },
      {
        internalType: "uint8",
        name: "v",
        type: "uint8",
      },
      {
        internalType: "bytes32",
        name: "r",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "s",
        type: "bytes32",
      },
    ],
    name: "permit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60c060405234801561001057600080fd5b504660a081905261002081610029565b6080525061009c565b60007f47e79534a245952e8b16893a336b85a3d9ea9fa8c573f3d803afb92a7946921882306040516020016100609392919061007d565b604051602081830303815290604052805190602001209050919050565b92835260208301919091526001600160a01b0316604082015260600190565b60805160a051610a666100bf600039806103325250806103675250610a666000f3fe608060405234801561001057600080fd5b50600436106100885760003560e01c80637ecebe001161005b5780637ecebe00146100f1578063a9059cbb14610104578063d505accf14610117578063dd62ed3e1461012c57610088565b8063095ea7b31461008d57806323b872dd146100b65780633644e515146100c957806370a08231146100de575b600080fd5b6100a061009b3660046107f8565b61013f565b6040516100ad9190610866565b60405180910390f35b6100a06100c4366004610745565b6101aa565b6100d161032d565b6040516100ad9190610871565b6100d16100ec3660046106ef565b61038d565b6100d16100ff3660046106ef565b61039f565b6100a06101123660046107f8565b6103b1565b61012a610125366004610785565b61048e565b005b6100d161013a366004610711565b61062f565b3360008181526001602090815260408083206001600160a01b038716808552925280832085905551919290917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92590610198908690610871565b60405180910390a35060015b92915050565b600081156102d8576001600160a01b038416600090815260208190526040902054828110156101f45760405162461bcd60e51b81526004016101eb906109b1565b60405180910390fd5b836001600160a01b0316856001600160a01b0316146102d6576001600160a01b03851660009081526001602090815260408083203384529091529020546000198114610283578381101561025a5760405162461bcd60e51b81526004016101eb9061091b565b6001600160a01b0386166000908152600160209081526040808320338452909152902084820390555b6001600160a01b0385166102a95760405162461bcd60e51b81526004016101eb906108eb565b506001600160a01b0380861660009081526020819052604080822086850390559186168152208054840190555b505b826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8460405161031b9190610871565b60405180910390a35060019392505050565b6000467f00000000000000000000000000000000000000000000000000000000000000008114610365576103608161064c565b610387565b7f00000000000000000000000000000000000000000000000000000000000000005b91505090565b60006020819052908152604090205481565b60026020526000908152604090205481565b6000811561044b5733600090815260208190526040902054828110156103e95760405162461bcd60e51b81526004016101eb906109b1565b336001600160a01b03851614610449576001600160a01b03841661041f5760405162461bcd60e51b81526004016101eb906108eb565b3360009081526020819052604080822085840390556001600160a01b038616825290208054840190555b505b826001600160a01b0316336001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040516101989190610871565b6001600160a01b0387166104b45760405162461bcd60e51b81526004016101eb9061097a565b8342106104d35760405162461bcd60e51b81526004016101eb90610952565b6001600160a01b038716600081815260026020908152604091829020805460018181019092559251909261055192610536927f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c9928e928e928e92918e910161087a565b604051602081830303815290604052805190602001206106a0565b8585856040516000815260200160405260405161057194939291906108cd565b6020604051602081039080840390855afa158015610593573d6000803e3d6000fd5b505050602060405103516001600160a01b0316146105c35760405162461bcd60e51b81526004016101eb906109e1565b6001600160a01b038088166000818152600160209081526040808320948b168084529490915290819020889055517f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9259061061e908990610871565b60405180910390a350505050505050565b600160209081526000928352604080842090915290825290205481565b60007f47e79534a245952e8b16893a336b85a3d9ea9fa8c573f3d803afb92a794692188230604051602001610683939291906108ae565b604051602081830303815290604052805190602001209050919050565b600060405180604001604052806002815260200161190160f01b8152506106c561032d565b8360405160200161068393929190610822565b80356001600160a01b03811681146101a457600080fd5b600060208284031215610700578081fd5b61070a83836106d8565b9392505050565b60008060408385031215610723578081fd5b61072d84846106d8565b915061073c84602085016106d8565b90509250929050565b600080600060608486031215610759578081fd5b833561076481610a18565b9250602084013561077481610a18565b929592945050506040919091013590565b600080600080600080600060e0888a03121561079f578283fd5b6107a989896106d8565b96506107b88960208a016106d8565b95506040880135945060608801359350608088013560ff811681146107db578384fd5b9699959850939692959460a0840135945060c09093013592915050565b6000806040838503121561080a578182fd5b61081484846106d8565b946020939093013593505050565b60008451815b818110156108425760208188018101518583015201610828565b818111156108505782828501525b5091909101928352506020820152604001919050565b901515815260200190565b90815260200190565b9586526001600160a01b0394851660208701529290931660408501526060840152608083019190915260a082015260c00190565b92835260208301919091526001600160a01b0316604082015260600190565b93845260ff9290921660208401526040830152606082015260800190565b60208082526016908201527545524332303a206e6f207a65726f206164647265737360501b604082015260600190565b60208082526018908201527f45524332303a20616c6c6f77616e636520746f6f206c6f770000000000000000604082015260600190565b6020808252600e908201526d115490cc8c0e88115e1c1a5c995960921b604082015260600190565b60208082526018908201527f45524332303a204f776e65722063616e6e6f7420626520300000000000000000604082015260600190565b60208082526016908201527545524332303a2062616c616e636520746f6f206c6f7760501b604082015260600190565b60208082526018908201527f45524332303a20496e76616c6964205369676e61747572650000000000000000604082015260600190565b6001600160a01b0381168114610a2d57600080fd5b5056fea26469706673582212206c3691612d02567d2384913f449a342ff69dec1eaccf291f8f552f63a2f813a864736f6c634300060c0033";
