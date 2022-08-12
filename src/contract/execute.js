import { LCDClient, MsgExecuteContract, MnemonicKey, Fee, MsgSend } from '@terra-money/terra.js';
import { contractAdress, minter } from './address';
import {
  CreateTxFailed,
  Timeout,
  TxFailed,
  TxUnspecifiedError,
  UserDenied,
} from '@terra-money/wallet-controller';

// ==== utils ====

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
const until = Date.now() + 1000 * 60 * 60;
const untilInterval = Date.now() + 1000 * 60;

const _exec =
  (msg, fee = new Fee(200000, { uluna: 10000 })) =>
    async (wallet) => {
      const lcd = new LCDClient({
        URL: wallet.network.lcd,
        chainID: wallet.network.chainID,
      });

      const { result } = await wallet.post({
        fee,
        msgs: [
          new MsgExecuteContract(
            wallet.walletAddress,
            contractAdress,
            msg,
            {uluna: 3000}
          ),
        ],
      });

      while (true) {
        try {
          return await lcd.tx.txInfo(result.txhash);
        } catch (e) {
          if (Date.now() < untilInterval) {
            await sleep(500);
          } else if (Date.now() < until) {
            await sleep(1000 * 10);
          } else {
            throw new Error(
              `Transaction queued. To verify the status, please check the transaction hash: ${result.txhash}`
            );
          }
        }
      }
    };

// ==== execute contract ====

export const increment = _exec({ increment: {} });

export const mint = async (wallet, data) =>
  _exec({ mint: { ...data } })(wallet);

export const transfer = async (wallet, data) => {
  // const txError = null;
  // const MINTER_ADDRESS = "terra10ff06fsmpx75s074f7grgmgul62wrs358hvh38";
  await initiateMint(data)
  // wallet
  //   .post({
  //     fee: new Fee(1000000, '200000uusd'),
  //     msgs: [
  //       new MsgSend(wallet.walletAddress, MINTER_ADDRESS, {
  //         uusd: 1000000,
  //       }),
  //     ],
  //   })
  //   .then(async (nextTxResult) => {
  //     console.log(nextTxResult);
  //     await initiateMint(data)
  //   })
  //   .catch((error) => {
  //     if (error instanceof UserDenied) {
  //       txError.value = 'User Denied';
  //     } else if (error instanceof CreateTxFailed) {
  //       txError.value = 'Create Tx Failed: ' + error.message;
  //     } else if (error instanceof TxFailed) {
  //       txError.value = 'Tx Failed: ' + error.message;
  //     } else if (error instanceof Timeout) {
  //       txError.value = 'Timeout';
  //     } else if (error instanceof TxUnspecifiedError) {
  //       txError.value = 'Unspecified Error: ' + error.message;
  //     } else {
  //       txError.value =
  //         'Unknown Error: ' +
  //         (error instanceof Error ? error.message : String(error));
  //     }
  //   });
}

const initiateMint = async (data) => {
  try {
    const client = new LCDClient({
      URL: "https://bombay-lcd.terra.dev",
      chainID: "bombay-12",
    });
    const key = new MnemonicKey({
      mnemonic:
        "blame sadness shed forum amused spawn impact pool gorilla raccoon diagram reject educate warfare arrow economy sample fix wise host powder visit tray mansion",
    });
    const wallet = client.wallet(key);
    const execute = new MsgExecuteContract(
      wallet.key.accAddress, // sender
      contractAdress, // contract account address
      { mint: { ...data } }, // handle msg
      {uluna: 200}
    );

    const executeTx = await wallet.createAndSignTx({
      msgs: [execute]
    });
    await client.tx.broadcast(executeTx);
  } catch (error) {
    throw new Error('mint failed!');
  }
}

export const createCollection = async (wallet, data, cid) =>
  _exec({
    add_collection: {
      collection: { ...data },
      // collection_id: cid,
      // minter
    }
  })(wallet);

export const updateCollection = async (wallet, data, cid) =>
  _exec({
    update_collection: {
      collection: { ...data },
      collection_id: cid,
      // minter
    }
  })(wallet);