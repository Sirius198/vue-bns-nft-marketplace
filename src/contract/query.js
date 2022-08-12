import { LCDClient } from '@terra-money/terra.js';
import { contractAdress } from './address';

const lcd = new LCDClient({
  URL: 'https://bombay-lcd.terra.dev',
  chainID: 'bombay-12',
});

function _exec(wallet, msg) {
  const lcd = new LCDClient({
    URL: wallet.network.lcd,
    chainID: wallet.network.chainID,
  });

  return lcd.wasm.contractQuery(contractAdress, msg);
}

export const getTokens = async (wallet) => {
  return _exec(wallet.value, {
    tokens: {
      owner: wallet.value?.walletAddress,
    },
  });
};

export const nftInfo = async (wallet) => {
  const response = await _exec(wallet.value, {
    tokens: {
      owner: wallet.value?.walletAddress,
    },
  });
  const all_data = await Promise.all(response.tokens.map(async (token) => {
    const info = await _exec(wallet.value, {
      nft_info: {
        token_id: token,
      },
    });
    return info
  }));
  return all_data;
};

export const allCollections = async (wallet) => {
  const response = await _exec(wallet.value, {
    all_collections: {}
  });
  return response;
}

export const getMyCollections = async (wallet) => {
  const response = await _exec(wallet.value, {
    my_collections: {
      owner: wallet.value.walletAddress
    }
  });
  return response;
}

export const getCollectionInfo = async (wallet, id) => {
  const response = await _exec(wallet.value, {
    get_collection: {
      collection_id: id
    }
  });
  return response;
}