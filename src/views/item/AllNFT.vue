<template>
    <DefaultLayout>
        <Loader :isLoading="loading"></Loader>

        <!-- Title -->
        <div class="flex justify-center">
            <div class="mt-10 md:mt-10">
                <span class="intro text-3xl sm:text-5xl md:text-5xl relative">All
                    <span class="future">NFTs</span>
                    <span class="dot">.</span>
                    <i class="cover-trending absolute -top-3"></i>
                </span>
            </div>
        </div>

        <!-- Filter -->
        <!-- Tokens -->
        <TokensGrid class="mt-20" :tokens="tokens"></TokensGrid>
    </DefaultLayout>
</template>

<script lang="ts" setup>
const myWallet = ref<ConnectedWallet | undefined>(undefined);
let subscription: Subscription | null = null;
const loading = ref(false);
const apiManager = getApiManager();

let tokens: Array<NFTInfo> = reactive([]);

// const state = reactive({
//     tokens: NFTInfo[]
// });

onMounted(() => {
    const controller = getController();
    subscription = controller.connectedWallet().subscribe((_connectedWallet) => {
        myWallet.value = _connectedWallet;
    });
});

onUnmounted(() => {
    subscription?.unsubscribe();
});

watch(myWallet, () => {
    loadAllNFTs();
});

const loadAllNFTs = async () => {
    loading.value = true;
    try {

        const response: any = await apiManager.allTokens(myWallet.value);
        let data: Array<any> = response.tokens;

        tokens.splice(0, tokens.length);

        for (let i = 0; i < data.length; i++)
            tokens.push({
                token_id: data[i]
            });

        loadTokenMetaData();
    } catch (error) {
        useToast().error('Failed to load NFTs');
        console.log(error);
    }
    loading.value = false;

};

const loadTokenMetaData = async () => {

    const all_data = await Promise.all(tokens.map(async (token) => {
        const info: any = await apiManager.getNFTInfo(myWallet.value, token.token_id);
        const collection = await apiManager.getCollection(info.extension.collection_id);
        // console.log(collection);
        // console.log(info);
        token.token_uri = info.token_uri;
        token.extension = info.extension;
        token.extension.collection = collection.data;
        // return info;
    }));
};
</script>
<script lang="ts">
import Loader from 'components/common/Loader.vue';
import TokensGrid from 'components/item/TokensGrid.vue';
import { ConnectedWallet } from '@terra-money/wallet-controller';
import { getApiManager, getController } from 'controller';
import { computed, onMounted, onUnmounted, reactive, ref, Ref, watch } from 'vue';
import { Subscription } from 'rxjs';
import { useToast } from 'vue-toastification';
import { NFTInfo } from '../../api/types';
export default {
}
</script>

<style scoped src="../../assets/css/homepage.css">
</style>