export interface FlowConfigStandard {
  rpcUrl: string;
  network: 'testnet' | 'mainnet';
}

export interface FlowConfigEmulator {
  rpcUrl: string;
  adminUrl: string;
  network: 'emulator';
}

export type FlowConfig = FlowConfigStandard | FlowConfigEmulator;

export interface ConfigType {
  rpcUrl: string;
  chainType: string;
}

export enum FlowPayloadMethod {
  FlowGetAccount = 'flow_getAccount',
}
