/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { BaseBoringBatchable } from "../BaseBoringBatchable";

export class BaseBoringBatchable__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<BaseBoringBatchable> {
    return super.deploy(overrides || {}) as Promise<BaseBoringBatchable>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): BaseBoringBatchable {
    return super.attach(address) as BaseBoringBatchable;
  }
  connect(signer: Signer): BaseBoringBatchable__factory {
    return super.connect(signer) as BaseBoringBatchable__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): BaseBoringBatchable {
    return new Contract(address, _abi, signerOrProvider) as BaseBoringBatchable;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "bytes[]",
        name: "calls",
        type: "bytes[]",
      },
      {
        internalType: "bool",
        name: "revertOnFail",
        type: "bool",
      },
    ],
    name: "batch",
    outputs: [
      {
        internalType: "bool[]",
        name: "successes",
        type: "bool[]",
      },
      {
        internalType: "bytes[]",
        name: "results",
        type: "bytes[]",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5061051a806100206000396000f3fe60806040526004361061001e5760003560e01c8063d2423b5114610023575b600080fd5b610036610031366004610250565b61004d565b6040516100449291906103ab565b60405180910390f35b6060808367ffffffffffffffff8111801561006757600080fd5b50604051908082528060200260200182016040528015610091578160200160208202803683370190505b5091508367ffffffffffffffff811180156100ab57600080fd5b506040519080825280602002602001820160405280156100df57816020015b60608152602001906001900390816100ca5790505b50905060005b848110156101df5760006060308888858181106100fe57fe5b9050602002810190610110919061045f565b60405161011e92919061039b565b600060405180830381855af49150503d8060008114610159576040519150601f19603f3d011682016040523d82523d6000602084013e61015e565b606091505b5091509150818061016d575085155b610176826101e8565b9061019d5760405162461bcd60e51b81526004016101949190610445565b60405180910390fd5b50818584815181106101ab57fe5b602002602001019015159081151581525050808484815181106101ca57fe5b602090810291909101015250506001016100e5565b50935093915050565b606060448251101561022e575060408051808201909152601d81527f5472616e73616374696f6e2072657665727465642073696c656e746c79000000602082015261024b565b6004820191508180602001905181019061024891906102d4565b90505b919050565b600080600060408486031215610264578283fd5b833567ffffffffffffffff8082111561027b578485fd5b818601915086601f83011261028e578485fd5b81358181111561029c578586fd5b87602080830285010111156102af578586fd5b6020928301955093505084013580151581146102c9578182fd5b809150509250925092565b6000602082840312156102e5578081fd5b815167ffffffffffffffff808211156102fc578283fd5b818401915084601f83011261030f578283fd5b81518181111561031d578384fd5b604051601f8201601f19168101602001838111828210171561033d578586fd5b604052818152838201602001871015610354578485fd5b6103658260208301602087016104b4565b9695505050505050565b600081518084526103878160208601602086016104b4565b601f01601f19169290920160200192915050565b6000828483379101908152919050565b604080825283519082018190526000906020906060840190828701845b828110156103e65781511515845292840192908401906001016103c8565b505050838103828501528085516103fd81846104ab565b91508192508381028201848801865b8381101561043657858303855261042483835161036f565b9487019492509086019060010161040c565b50909998505050505050505050565b600060208252610458602083018461036f565b9392505050565b6000808335601e19843603018112610475578283fd5b83018035915067ffffffffffffffff82111561048f578283fd5b6020019150368190038213156104a457600080fd5b9250929050565b90815260200190565b60005b838110156104cf5781810151838201526020016104b7565b838111156104de576000848401525b5050505056fea2646970667358221220f069806607e224560671ae8473030b53614fc9b274df82cec942f45022db82b264736f6c634300060c0033";
