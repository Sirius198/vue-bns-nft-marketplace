import axios from "axios";
import { Fee, LCDClient, MsgExecuteContract } from '@terra-money/terra.js';
import { ConnectedWallet } from "@terra-money/wallet-types";
import { BASE_URL, CONTRACT_ADDRESS } from "./config";

// const lcd = new LCDClient({
//     URL: 'https://bombay-lcd.terra.dev',
//     chainID: 'bombay-12',
// });

function _query(wallet: ConnectedWallet, msg: any) {

    const lcd = new LCDClient({
        URL: wallet.network.lcd,
        chainID: wallet.network.chainID,
    });
    return lcd.wasm.contractQuery(CONTRACT_ADDRESS, msg);
}

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
const until = Date.now() + 1000 * 60 * 60;
const untilInterval = Date.now() + 1000 * 60;

const _exec =
    (msg: any, fee = new Fee(200000, { uluna: 10000 })) =>
        async (wallet: ConnectedWallet) => {

            const lcd = new LCDClient({
                URL: wallet.network.lcd,
                chainID: wallet.network.chainID,
            });

            const { result } = await wallet.post({
                fee,
                msgs: [
                    new MsgExecuteContract(wallet.walletAddress, CONTRACT_ADDRESS, msg),
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

class ApiManager {

    constructor() {
    }

    // ExecuteContract
    async mintNFT(wallet: ConnectedWallet, nft_data: any) {
        return _exec({
            mint: { ...nft_data }
        })(wallet);
    }

    async remintNFT() {}

    // QueryContract
    async allTokens(wallet: ConnectedWallet, start = 0, page_count = 10) {
        return _query(wallet, {
            all_tokens: {}
        });
    }

    async getNFTInfo(wallet: ConnectedWallet, token_id: string) {
        return _query(wallet, {
            nft_info: {
                token_id
            }
        });
    }

    async getNftsFromCollection(wallet: ConnectedWallet, collection_id: string) {
        return _query(wallet, {
            collection_nfts: {
                collection_id
            }
        });
    }

    // Backend api

    async createCollection(collectionInfo: any) {
        try {
            const data = await axios.post(BASE_URL + '/collection', { ...collectionInfo });
            return data;
        } catch (error) {
            return 0;
        }
    }

    async getCollection(id: string) {
        try {
            const data = await axios.get(BASE_URL + '/collection/' + id);
            return data;
        } catch (error) {
            return 0;
        }
    }

    async updateCollection(walletAddress: string, id: string, data: any) {
        try {
            const response = await axios.put(BASE_URL + '/collection/' + id, {
                walletAddress,
                ...data
            });
            return response;
        } catch (error) {
            return 0;
        }
    }

    async getMyCollections(walletAddress: string) {
        try {
            const data = await axios.get(BASE_URL + '/mycollections', {
                params: { wallet_address: walletAddress }
            });
            return data;
        } catch (error) {
            return 0;
        }
    }
    async getTrendingCollections() { }
    async getAllCollections() {
        const data = await axios.get(BASE_URL + '/api/dog/1');
        // console.log(data);
        return data;
    }

    async insertToken() {}
    async updateToken() {}
}

export default ApiManager;