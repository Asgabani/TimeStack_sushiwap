/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
} from "ethers";
import {
  Contract,
  ContractTransaction,
  CallOverrides,
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface IMasterChefV2Interface extends ethers.utils.Interface {
  functions: {
    "lpToken(uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "lpToken",
    values: [BigNumberish]
  ): string;

  decodeFunctionResult(functionFragment: "lpToken", data: BytesLike): Result;

  events: {};
}

export class IMasterChefV2 extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: IMasterChefV2Interface;

  functions: {
    lpToken(
      pid: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string] & { _lpToken: string }>;

    "lpToken(uint256)"(
      pid: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string] & { _lpToken: string }>;
  };

  lpToken(pid: BigNumberish, overrides?: CallOverrides): Promise<string>;

  "lpToken(uint256)"(
    pid: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  callStatic: {
    lpToken(pid: BigNumberish, overrides?: CallOverrides): Promise<string>;

    "lpToken(uint256)"(
      pid: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;
  };

  filters: {};

  estimateGas: {
    lpToken(pid: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    "lpToken(uint256)"(
      pid: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    lpToken(
      pid: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "lpToken(uint256)"(
      pid: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}