import {
  getChainOptions,
  WalletController,
} from '@terra-money/wallet-controller';
import { Wallet } from '@terra-money/use-wallet';
import ApiManager from 'api/ApiManager';

let instance: WalletController;
let wallet: Wallet;
let apiManager: ApiManager;

export async function initController() {
  const chainOptions = await getChainOptions();

  instance = new WalletController({
    ...chainOptions,
  });
  
  apiManager = new ApiManager;
}

export function getController(): WalletController {
  return instance;
}

export function getWallet(): Wallet {
  return wallet;
}

export function getApiManager(): ApiManager {
  return apiManager;
}

