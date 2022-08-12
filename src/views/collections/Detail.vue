<template>
    <DefaultLayout>
        <div class="w-screen bg-none xl:bg-vector bg-top bg-no-repeat">
            <div class="xl:flex xl:justify-center" v-show="false">
                <div>
                    <CollectionHeader class="w-screen h-96 xl:w-c-xl md:h-c-xl mt-10 md:mt-20 lg:flex xl:rounded-lg"
                        name="Mentalen" :coverImage="state.header_info.banner_image" :info="state.header_info" />
                </div>
            </div>

            <div class="xl:flex xl:justify-center mt-0">
                <CollectionHeader2 class="w-screen h-96 xl:w-c-xl md:h-c-xl mt-10 md:mt-20 lg:flex xl:rounded-lg"
                    :header="state.header_info" @change="onMenuChanged" />
            </div>

            <!-- <div class="xl:mx-24 mt-10 flex justify-center">
                <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6 mx-5 gap-2 w-c-xl">
                    <FilterButton v-for="index in 9" :key="index" class="xl:mr-2" label="price" value="Low to high" />
                    <span class="text-purple-800 mt-1 text-base font-semibold">Reset</span>
                </div>
            </div>
            <div class="flex justify-center">
                <div class="flex justify-between md:w-c-xl mt-10 md:mx-5 xl:mx-24">
                    <span class="hidden md:flex text-gray-500 mr-10 my-6">16 items</span>
                    <SearchBar class="w-96" placeholder="Search for items" />
                </div>
            </div> -->

            <!-- <div>
                <div class="top-collections">
                    <div class="flex justify-center">
                        <div
                            class="grid grid-cols-2 gap-2 place-content-center sm:grid-cols-2 md:grid-cols-4 md:mx-5 mt-7 2xl:mx-28">
                            <NFTWrapper
                                class="mb-10 sm:mb-0 sm:mx-1.5 w-48 h-56 sm:w-52 sm:h-60 md:w-44 md:h-48 lg:h-64 xl:w-72 xl:my-12 sm:my-0"
                                v-for="index in 12" :key="index"
                                coverImage="https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F6170e01f8d7639b95a7f2eeb%2FSotheby-s-NFT-Natively-Digital-1-2-sale-Bored-Ape-Yacht-Club--8817-by-Yuga-Labs%2F0x0.png%3Ffit%3Dscale" />
                        </div>
                    </div>

                    <div class="flex justify-center mt-14">
                        <button
                            class="rounded text-white p-2 text-left w-60 h-10 text-xs lg:w-80 text-sm view-all-btn bg-purple relative flex justify-between">
                            <span class="mt-0.5 text-sm font-bold">Load more</span>
                            <ChevronRightIcon class="mt-0.5 w-5 h-5 mt-1" />
                        </button>
                    </div>
                </div>
            </div> -->

            <div>
                <div v-show="state.active_menu == 1">
                    <TokensGrid class="mt-20"></TokensGrid>
                </div>
                <div v-show="state.active_menu == 2">
                    second
                </div>
                <div v-show="state.active_menu == 3">
                    <div class="flex justify-center">
                        <div class="text-left mx-5 text-xs sm:text-sm md:w-c-xl mt-10 md:mx-5 xl:mx-24">
                            <p>{{ state.header_info.description }}                            </p>
                        </div>
                    </div>
                </div>
            </div>


            <div class="top-collections mt-20">
                <div
                    class="flex mt-10 mx-5 sm:mx-11 md:mx-11 lg:mx-12 xl:mx-32 2xl:mx-44 justify-center justify-between">
                    <h1 class="top-collections-text text-2xl md:text-3xl">
                        More from this artist
                    </h1>
                    <div class="flex">
                        <button class="rounded w-20 text-lg view-all-btn bns-purple">
                            view all
                        </button>
                        <button class="rounded text-lg ml-5 mr-3 view-all-btn hidden sm:block">
                            <ChevronLeftIcon class="w-7 h-7 bns-purple" />
                        </button>
                        <button class="rounded text-lg view-all-btn hidden sm:block">
                            <ChevronRightIcon class="w-7 h-7 bns-purple" />
                        </button>
                    </div>
                </div>

                <div class="flex justify-center">
                    <div
                        class="grid grid-cols-2 gap-2 place-content-center sm:grid-cols-2 md:grid-cols-4 md:mx-5 mt-7 2xl:mx-28">
                        <NFTWrapper :isRecent="true"
                            class="mb-10 sm:mb-0 sm:mx-1.5 w-48 h-56 sm:w-52 sm:h-60 md:w-44 md:h-48 lg:h-64 xl:w-72 sm:my-0"
                            v-for="index in 4" :key="index"
                            coverImage="https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F6170e01f8d7639b95a7f2eeb%2FSotheby-s-NFT-Natively-Digital-1-2-sale-Bored-Ape-Yacht-Club--8817-by-Yuga-Labs%2F0x0.png%3Ffit%3Dscale" />
                    </div>
                </div>
            </div>
            <div class="about-container mt-32 h-96 w-screen">
                <AboutFudge />
            </div>
        </div>

        <Loader :isLoading="loading"></Loader>
    </DefaultLayout>
</template>

<script lang="ts" setup>
import { ChevronRightIcon, ChevronLeftIcon, ChevronDownIcon } from '@heroicons/vue/outline';
import coverImage from '../../assets/images/unsplash_RFDP7_80v5A.png';
import AboutFudge from '../../components/common/AboutFudge.vue';
import CollectionHeader from '../../components/common/CollectionHeader.vue';
import NFTCollection from '../../components/common/NFTCollection.vue';
import NFTWrapper from '../../components/common/NFTWrapper.vue';
import NFTCategory from '../../components/common/NFTCategory.vue';
import { onMounted, onUnmounted, ref, Ref, reactive, watch } from 'vue';
import Loader from 'components/common/Loader.vue';
import TokensGrid from 'components/item/TokensGrid.vue';
import { getApiManager, getController } from 'controller';
import { ConnectedWallet } from '@terra-money/wallet-controller';
import { Subscription } from 'rxjs';
import { load } from 'protobufjs';
import router from 'router';
import { useToast } from 'vue-toastification';
import CollectionHeader2 from './components/CollectionHeader2.vue';

const state = reactive({
    items: '',
    activity: '',
    description: '',
    header_info: {},
    active_menu: 1,
});
const apiManager = getApiManager();
const connectedWallet = ref<ConnectedWallet | undefined>(undefined);
let subscription: Subscription | null = null;
const loading = ref(false);
const toast = useToast();

onMounted(() => {
    const controller = getController();
    subscription = controller.connectedWallet().subscribe((_connectedWallet) => {
        connectedWallet.value = _connectedWallet;
    });
});
onUnmounted(() => { subscription?.unsubscribe(); });
watch(connectedWallet, () => { loadCollectionInfo() });

const loadCollectionInfo = async () => {
    loading.value = true;
    const collection_id = router.currentRoute.value.params.id.toString();

    const headerInfo = await apiManager.getCollection(collection_id);
    if (headerInfo == 0)
        toast.error('Failed to load collection');
    else {
        state.header_info = headerInfo.data;
    }

    loading.value = false;
};

const onMenuChanged = (index: number) => {
    state.active_menu = index;
};
</script>

<script lang="ts">
export default {
}
</script>