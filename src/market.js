// import { ConnectedWallet } from '@terra-money/wallet-controller';
import { LCDClient } from '@terra-money/terra.js';

const contractAdress = "terra1x6ghmgpek3g67xz22gfx6azyrha5tf0fsrht5q";

const lcd = new LCDClient({
    URL: 'https://bombay-lcd.terra.dev',
    chainID: 'bombay-12',
});

// Query

function _query(wallet, msg) {
    const lcd = new LCDClient({
        URL: wallet.network.lcd,
        chainID: wallet.network.chainID,
    });

    return lcd.wasm.contractQuery(contractAdress, msg);
}

export async function apiGetMyCollections(wallet) {
    const response = await _query(wallet, {
        my_collections: {
            owner: wallet.walletAddress
        }
    });
    return response;
}

export async function apiGetCollectionInfo() {}

export async function apiGetMyBalance(wallet) {
    const [balance] = await lcd.bank.balance(wallet.walletAddress);
    console.log(balance.toData());
}

// Execute