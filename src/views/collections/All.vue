<template>
    <div>
        <DefaultLayout>
            <div class="w-screen">
                <div class="flex justify-center">
                    <div class="mt-10 md:mt-10">
                        <span class="intro text-3xl sm:text-5xl md:text-5xl relative">All
                            <span class="future">Collections</span>
                            <span class="dot">.</span>
                            <i class="cover-trending absolute -top-3"></i>
                        </span>
                    </div>
                </div>
                <br />
                <br />
                <br />
                <div style="display:none1;">
                    <div class="top-collections md:mt-10">
                        <div
                            class="flex mt-10 mx-5 sm:mx-11 md:mx-11 lg:mx-12 xl:mx-56 2xl:mx-44 justify-center justify-between">
                            <div class="flex">
                                <button
                                    class="rounded pl-2 py-0.5 text-left w-40 text-xs lg:w-60 text-sm view-all-btn bns-purple relative flex justify-between">
                                    <span class="mt-0.5 text-sm font-semibold">All collections</span>
                                    <ChevronRightIcon class="mt-0.5 w-5 h-5 mt-1 bns-purple" />
                                </button>
                                <button
                                    class="ml-10 rounded pl-2 text-left w-32 px-2 py-0.5 text-xs lg:w-60 text-sm view-all-btn bns-purple relative flex justify-between sm:hidden">
                                    <span class="mt-0.5 text-sm font-semibold">Filter</span>
                                    <ChevronDownIcon class="w-5 h-5 mt-0.5 bns-purple" />
                                </button>
                            </div>
                            <div class="flex">
                                <button
                                    class="rounded w-fit px-2 py-1.5 text-sm view-all-btn bns-purple hidden sm:block">
                                    Last day
                                </button>
                                <button
                                    class="rounded w-fit px-2 py-1.5 mx-3 text-sm view-all-btn bns-purple hidden sm:block">
                                    Last week
                                </button>
                                <button
                                    class="rounded w-fit px-2 py-1.5 text-sm view-all-btn bns-purple hidden sm:block">
                                    Last month
                                </button>
                            </div>
                        </div>

                        <div class="mx-1 sm:mx-2 lg:px-2 xl:px-10 flex justify-center mt-7">
                            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 sm:gap-2">
                                <TrendingCollection class="sm:mb-0 sm:mx-1 w-72 h-80 md:h-80 md:w-80 lg:h-80 sm:my-0"
                                    v-for="index in 12" :key="index" :description="description" :isTrendingPage="true"
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
                </div>
                <div class="about-container mt-32 h-96 w-screen">
                    <AboutFudge />
                </div>
            </div>
        </DefaultLayout>
    </div>
</template>
<script setup lang="ts">
import { onMounted, ref } from "@vue/runtime-core";
import { allCollections } from "contract/query";
import { ConnectedWallet } from '@terra-money/wallet-controller';
import { getController } from "controller";
import AboutFudge from "components/common/AboutFudge.vue";

const connectedWallet = ref<ConnectedWallet | undefined>(undefined);

let description = 'Become a JOY Collector! A JOY is an original, virtual muse from JOYWORLD. Each one brings you a unique magical power when you collect them. All JOYs are one-of-one, handmade in virtual reality by John Orion Young. JOYs are starting to make JOYtoys for you!';

const getAllCollections = async () => {
    const data = await allCollections(connectedWallet);
    console.log(data);
};

onMounted(() => {
    const controller = getController();
    controller.connectedWallet().subscribe((_connectedWallet) => {
        connectedWallet.value = _connectedWallet;
        getAllCollections();

        // if (_connectedWallet) {
        //     if (!_connectedWallet.availablePost) {
        //         status.value = 'can-not-post';
        //     } else {
        //         status.value = 'ready';
        //     }
        // } else {
        //     status.value = 'not-connected';
        // }
    });

});
</script>
<style scoped src="../../assets/css/homepage.css">
</style>
