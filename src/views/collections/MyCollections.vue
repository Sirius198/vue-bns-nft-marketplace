<template>
    <DefaultLayout>
        <Loader :isLoading="isLoading" />

        <div class="w-screen bg-none xl:bg-vector bg-bottom bg-no-repeat">
            <div class="flex justify-center">
                <div class="text-center mt-10 md:mt-10">

                    <div class="intro text-3xl sm:text-5xl md:text-5xl relative">
                        My <span class="future">Collections</span>
                        <span class="dot">.</span>
                    </div>

                    <div class="px-6 xl:px-3 text-gray-400">
                        It’s kinda lonely here. Why don’t you create your freshly new
                        collections and start your
                        <span class="font-bold text-pink-400">NFT</span> journey with
                        <span
                            class="font-bold bg-clip-text text-transparent bg-gradient-to-b from-pink-500 to-violet-500">Bake
                            ‘n Stake</span>?
                    </div>

                    <div class="flex justify-center">
                        <button @click.prevent="() => $router.push({ name: 'collections-create' })"
                            class="mt-3 bg-violet-500 xl:w-96 text-white flex justify-center rounded px-3 py-1.5">
                            <PlusIcon class="w-5 h-5 mr-2 mt-0.5" />
                            <span class="font-bold">Create new collection</span>
                        </button>
                    </div>

                    <!-- Empty Collection -->
                    <div class="flex justify-center" v-if="isEmpty && !isLoading">
                        <div
                            class="border-t-2 border-b-2 xl:border md:border py-4 xl:py-6 border-purple-300 w-[22.5rem] md:w-[40rem] bg-gray-100 flex justify-center rounded-[10px] xl:w-[45rem] mt-10 h-96 xl:h-[575px]">
                            <div class="">
                                <div
                                    class="xl:ml-0 relative p-5 bg-white rounded-[18.15px] w-[22rem] md:w-[38rem] xl:w-[40rem] h-52 xl:h-[264.59px]">
                                    <div class="bg-gray-100 xl:rounded-[18.15px] rounded-lg w-14 h-14 xl:w-16 xl:h-16">
                                    </div>
                                    <div
                                        class="w-52 xl:w-80 h-8 xl:h-10 bg-gray-100 left-20 md:left-60 lg:left-48 xl:left-40 rounded-[10px] absolute bottom-5">
                                    </div>
                                </div>
                                <div class="mt-3 flex grid grid-flow-col gap-0.5 xl:gap-2 auto-grid-auto">
                                    <div v-for="index in 5" :key="index"
                                        class="w-16 md:w-28 xl:w-38 h-5 xl:h-10 rounded bg-white xl:rounded-[10px]">
                                    </div>
                                </div>
                                <div class="mt-3 grid grid-cols-4 gap-0.5 xl:gap-2">
                                    <div v-for="index in 4" :key="index"
                                        class="w-20 md:w-36 h-24 xl:w-38 xl:h-48 bg-white rounded-[10px]"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Show My Collections -->
                    <div class="sm:mx-0 flex justify-center">
                        <div
                            class="grid grid-cols-2 gap-2 place-content-center sm:grid-cols-2 md:grid-cols-3 md:mx-5 mt-7 2xl:mx-28">

                            <NFTCollectionItem v-for="item in collectionList" :key="item" :info="item"
                                class="cursor-pointer1 sm:mx-1.5 w-48 h-56 sm:w-52 md:w-44 md:h-58 lg:w-100 xl:w-96 xl:h-96 sm:my-0"
                                coverImage="https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F6170e01f8d7639b95a7f2eeb%2FSotheby-s-NFT-Natively-Digital-1-2-sale-Bored-Ape-Yacht-Club--8817-by-Yuga-Labs%2F0x0.png%3Ffit%3Dscale" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </DefaultLayout>
</template>

<script lang="ts" setup>
import { allCollections, getMyCollections } from 'contract/query';
import { PlusIcon } from '@heroicons/vue/solid';
import { onMounted, onUnmounted, reactive, ref, Ref } from 'vue'
import { ConnectedWallet } from '@terra-money/wallet-controller';
import { Subscription } from 'rxjs';
import { getApiManager, getController } from 'controller';
import Loader from 'components/common/Loader.vue';
import NFTCollectionItem from '../../components/common/collection/NFTCollectionItem.vue';
import { useStore } from 'vuex';
import { useToast } from 'vue-toastification';

const connectedWallet = ref<ConnectedWallet | undefined>(undefined);
let subscription: Subscription | null = null;
const apiManager = getApiManager();
const isLoading: Ref<boolean> = ref(true);
const isEmpty: Ref<boolean> = ref(false);
const toast = useToast();

const collectionList = ref([]);
const store = useStore();

onMounted(() => {
    const controller = getController();
    subscription = controller.connectedWallet().subscribe((_connectedWallet) => {
        connectedWallet.value = _connectedWallet;
        loadMyCollections();
    });
});

onUnmounted(() => { subscription?.unsubscribe(); });

const loadMyCollections = async () => {

    if (connectedWallet.value == undefined)
        return;

    try {
        // const data = await getMyCollections(connectedWallet);
        const response = await apiManager.getMyCollections(connectedWallet.value.walletAddress);
        if (response != 0) {
            collectionList.value = response.data;
            // console.log(data);
            console.log('aa', collectionList.value);
            isEmpty.value = collectionList.value.length == 0;
        }
        else {
            toast.error('Failed to load my collections');
        }
        isLoading.value = false;
    } catch (error) {
        console.log(error);
        // isLoading.value = false;
    }
}

</script>

<style scoped src="../../assets/css/homepage.css">
</style>
