<template>
    <DefaultLayout>
        <!-- <div class="w-screen" v-if="state.token.extension"> -->
        <div class="w-screen" v-if="state.collection.name != undefined">
            <div class="flex mx-3 mt-10 md:mx-5 xl:mx-28">
                <ArrowLeftIcon class="w-10 h-5 mt-0.5 mr-3 text-purple-500" />
                <span class="font-light text-gray-400">My collections / Female Funx /
                    <span class="text-gray-500 font-semibold">Create a collection</span>
                </span>
            </div>

            <div class="relative">

                <div id="m_nft_control_buttons" class="mt-10 sm:relative xl:absolute right-10 xl:right-72">
                    <div class="bg-black rounded-lg w-40 flex px-2 py-2">
                        <button>
                            <PencilAltIcon class="w-6 h-6 text-white" />
                        </button>

                        <button
                            class="w-28 h-8 rounded bg-[#CFBEFF] text-[#3C1A9B] text-sm text-center flex px-2 py-1.5">
                            Cancel listing
                        </button>
                    </div>

                    <div class="bg-black py-2.5 px-3 rounded-lg h-11 flex justify-between">
                        <span class="rounded-full p-0.5 w-[24px] h-[24px] bg-gray-300" @click="() => alert('d')">
                            <SwitchHorizontalIcon class="w-5 h-5 text-black" />
                        </span>
                        <i class="package-icon w-6 h-6 text-red"></i>
                        <span class="rounded-full p-0.5 w-[24px] h-[24px] bg-gray-300">
                            <UploadIcon class="w-5 h-5 text-black" />
                        </span>
                        <span class="rounded-full p-0.5 w-[24px] h-[24px] bg-gray-300">
                            <DotsVerticalIcon class="w-5 h-5 text-black" />
                        </span>
                    </div>
                </div>

                <!-- <div class="bg-black rounded-lg top-10 xl:top-0 absolute xl:right-72 w-40 h-12 flex">
                    <button>
                        <PencilAltIcon class="w-6 h-6 text-white mt-3 ml-2" />
                    </button>

                    <button class="w-28 h-8 rounded bg-[#CFBEFF] text-[#3C1A9B] flex px-2 py-1.5 mt-2 ml-2">
                        <span class="text-sm font-semibold">Cancel listing</span>
                    </button>
                </div>
                <div
                    class="bg-black py-2.5 px-3 rounded-lg top-10 xl:top-14 absolute xl:right-72 w-40 h-11 flex justify-between">
                    <span class="rounded-full p-0.5 w-[24px] h-[24px] bg-gray-300" @click="() => alert('d')">
                        <SwitchHorizontalIcon class="w-5 h-5 text-black" />
                    </span>
                    <i class="package-icon w-6 h-6 text-red"></i>
                    <span class="rounded-full p-0.5 w-[24px] h-[24px] bg-gray-300">
                        <UploadIcon class="w-5 h-5 text-black" />
                    </span>
                    <span class="rounded-full p-0.5 w-[24px] h-[24px] bg-gray-300">
                        <DotsVerticalIcon class="w-5 h-5 text-black" />
                    </span>
                </div> -->

                <div class="flex justify-center mx-auto mt-10">
                    <NFTViewer class="w-96" :showMetadata="true" :token_uri="state.token.token_uri">
                        <button class="w-5 h-5 p-0.5 rounded absolute right-3 top-3 expand-button"
                            @click="state.showNFTModal = !state.showNFTModal">
                            <ArrowsExpandIcon class="text-[#dadada]" />
                        </button>
                    </NFTViewer>
                </div>
            </div>

            <!-- NFT Name & Price -->
            <div class="xl:w-[1200px] lg:w-[1000px] w-[600px] mx-auto mt-24">
                <div class="grid xl:grid-cols-2 lg:grid-cols-2 grid-cols-1 gap-3">
                    <div class="bg-[#646169] rounded-lg p-4">
                        <span class="flex">
                            <!-- <i class="verified-icon w-6 mr-2 mt-2"></i> -->
                            <span class="text-white mt-2 font-normal">{{ state.collection.name }}</span>
                        </span>

                        <div class="mt-3">
                            <span class="font-semibold text-2xl tracking-wide text-white">{{ state.token.extension?.name
                            }}</span>
                            <!-- <span class="font-semibold text-2xl tracking-wide text-white">Female Punx</span> -->
                        </div>
                        <div class="mt-5 flex space-x-4">
                            <span class="flex">
                                <span class="mr-3 text-sm mt-1 text-white">Owned by</span>
                                <Author :name="state.token.extension?.owner"
                                    class="text-white text-sm c-blur h-8 rounded-lg px-1.5 py-1" />
                            </span>

                            <span class="flex mt-1">
                                <ExternalLinkIcon class="text-white w-5 h-6" />
                                <span class="mr-3 text-sm mt-1 text-white">18, Dec 2022</span>
                            </span>
                            <span class="w-20"></span>
                            <span class="flex mt-1 relative">
                                <span class="text-white mr-2">Source:</span>
                                <i class="opensea-icon w-6 h-6"></i>
                            </span>
                        </div>
                    </div>
                    <div class="bg-[#646169] rounded-lg p-4">
                        <span class="flex">
                            <span class="text-white mt-2 text-sm">Sale ends June 29, 2022 at 4:34pm CET
                            </span>
                        </span>

                        <div class="mt-2">
                            <span class="text-xs text-white">Current price:</span>
                            <div class="flex">
                                <i class="tera-icon w-6 h-6 mr-1 mt-1"></i>
                                <span class="font-bold text-white mt-0.5 text-xl">1.5</span>
                                <span class="text-gray-200 text-xs mt-2.5 ml-1">($95.25)</span>
                            </div>
                            <div class="flex mt-2">
                                <button @click="state.showBuyModal = true"
                                    class="py-1.5 mr-3 font-semibold mx-auto w-auto px-3 sm:px-0 sm:w-72 border-pink text-white h-10 bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded">
                                    Buy now
                                </button>
                                <button @click="state.showMakeOfferModal = true"
                                    class="py-1.5 bg-gray-500 border border-pink-500 font-semibold mx-auto w-32 sm:w-72 text-white rounded">
                                    Make an offer
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Description & Price History & Listings & Offers -->
            <div class="xl:w-[1200px] lg:w-[1000px] w-[600px] mx-auto mt-4">
                <div class="grid xl:grid-cols-2 lg:grid-cols-2 grid-cols-1 gap-3">
                    <div>
                        <Navigation @goTo="(value) => (isActive = value)" class="h-12" />
                        <div class="mt-5" v-if="isActive === 1">
                            <div class="text-gray-500">
                                Created by
                                <span class="text-blue-600 font-semibold">you</span>
                            </div>
                            <p class="text-gray-600 mt-3">{{ state.token.extension.description }}</p>
                        </div>
                        <div class="mt-5" v-if="isActive === 2">
                            <img class="w-[592px]" :src="coverImage" />

                            <p class="mx-6 text-gray-600 mt-3">
                                {{ state.collection.description }}
                            </p>
                        </div>
                        <div class="mt-5 grid grid-cols-4 gap-2" v-if="isActive === 3">
                            <!-- <div v-for="index in 8" :key="index"
                                class="flex p-1 rounded flex-row w-auto bg-purple-200 border border-purple-600">
                                <div class="flex flex-col justify-center">
                                    <div class="text-blue-700 text-xs">body</div>
                                    <div class="text-purple-700 font-bold text-base">
                                        Light Blue
                                    </div>
                                    <div class="text-gray text-xs">3.4% rarity</div>
                                </div>
                            </div> -->
                            <PropertyCardList :properties="state.token.extension.attributes" />
                        </div>
                        <div class="mt-5" v-if="isActive === 4">
                            <div class="mr-4 space-y-1rem">
                                <div class="flex justify-between text-gray-500">
                                    <span>Contract Address</span>
                                    <span>0x2953...4963</span>
                                </div>
                                <div class="flex justify-between text-gray-500">
                                    <span>Token ID</span>
                                    <span>593789438196553...</span>
                                </div>
                                <div class="flex justify-between text-gray-500">
                                    <span>Token Standard</span>
                                    <span>ERC-1155</span>
                                </div>
                                <div class="flex justify-between text-gray-500">
                                    <span>Blockchain</span>
                                    <span>Terra</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <GradientBorderPanel>
                            <div class="p-4">
                                <p class="text-gray-dim font-bold">Price History</p>
                            </div>
                        </GradientBorderPanel>

                        <GradientBorderPanel class="mt-5">
                            <div class="p-4">
                                <p class="text-gray-dim font-bold">Offers</p>

                                <div class="modal-separator"></div>

                                <div class="grid xl:grid-cols-2 sm:grid-cols-1 gap-2">
                                    <div>
                                        <svg width="273" height="113" viewBox="0 0 273 113" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <rect x="0.341395" y="0.810756" width="272.326" height="111.527"
                                                rx="4.11419" fill="#F4F4F4" stroke="url(#paint0_linear_636_2662)"
                                                stroke-width="0.667166" />
                                            <rect x="8.41211" y="9.10327" width="122.785" height="15.2898" rx="4.96537"
                                                fill="white" />
                                            <rect x="8.41211" y="32.9075" width="43.7418" height="15.2898" rx="4.96537"
                                                fill="white" />
                                            <rect x="8.41211" y="61.1199" width="16.5317" height="16.4506" rx="4.96537"
                                                fill="white" />
                                            <rect x="30.4004" y="61.12" width="42.3256" height="16.4506" rx="4.96537"
                                                fill="white" />
                                            <rect x="78.1816" y="61.1199" width="33.3999" height="16.4506" rx="4.96537"
                                                fill="white" />
                                            <rect x="8.41211" y="83.4509" width="122.785" height="16.4506" rx="4.96537"
                                                fill="white" />
                                            <rect x="139.141" y="83.4509" width="122.785" height="16.4506" rx="4.96537"
                                                fill="#00FFF0" />
                                            <defs>
                                                <linearGradient id="paint0_linear_636_2662" x1="6.47094" y1="-30.7648"
                                                    x2="3.12725" y2="160.18" gradientUnits="userSpaceOnUse">
                                                    <stop stop-color="#00FFF0" />
                                                    <stop offset="1" stop-color="#FF00E5" />
                                                </linearGradient>
                                            </defs>
                                        </svg>

                                    </div>
                                    <div>
                                        <p class="text-gray-dim font-medium mb-2">No <span
                                                class="text-lavendar">offers</span> yet.</p>
                                        <p class="text-gray-dim font-medium mb-3">Be the first!</p>
                                        <MyButton type="primary" class="block w-full">Make offer</MyButton>
                                    </div>
                                </div>
                            </div>
                        </GradientBorderPanel>
                    </div>
                </div>
            </div>
        </div>

        <!-- Begin : Checkout Modal -->
        <MyModal title="Complete checkout" :open="state.showBuyModal"
            @closed="state.showBuyModal = !state.showBuyModal">
            <template v-slot:body>
                <div class="flex py-4">
                    <NFTViewer class="w-[68px]" :token_uri="state.token.token_uri" />

                    <div class="grow grid grid-cols-1 content-around pl-4">
                        <p class="text-gray-dim font-medium">Female Punx #007</p>
                        <p class="text-nobel">
                            <span class="flex">
                                <i class="verified-icon w-5 mr-1 mt-1"></i>
                                <span>Female Punx</span>
                            </span>
                        </p>
                    </div>

                    <div class="grid grid-cols-1 content-around">
                        <div class="flex justify-end">
                            <i class="tera-icon w-5 h-5 mr-1 mt-1"></i>
                            <span class="font-bold mt-0.5 text-xl text-gray-dim">1.5</span>
                        </div>
                        <div class="flex justify-end">
                            <span class="text-nobel">$100000000000</span>
                        </div>
                    </div>
                </div>
            </template>

            <template v-slot:footer>
                <div class="grid grid-cols-2 gap-2">
                    <MyButton type="primary" @click="onBuy">Buy this item</MyButton>
                    <MyButton type="secondary" @click="onAddFunds">Add funds</MyButton>
                </div>
            </template>
        </MyModal>
        <!-- End : Checkout Modal -->

        <!-- Begin : Make an offer Modal -->
        <MyModal title="Make an offer" :open="state.showMakeOfferModal"
            @closed="state.showMakeOfferModal = !state.showMakeOfferModal">
            <template v-slot:body>
                <div>
                    <div class="flex py-1">
                        <NFTViewer class="w-[68px]" :token_uri="state.token.token_uri" />

                        <div class="grow grid grid-cols-1 content-around pl-4">
                            <p class="text-gray-dim font-medium">Female Punx #007</p>
                            <p class="text-nobel">
                                <span class="flex">
                                    <i class="verified-icon w-5 mr-1 mt-1"></i>
                                    <span>Female Punx</span>
                                </span>
                            </p>
                        </div>

                        <div class="grid grid-cols-1 content-around">
                            <div class="flex justify-end">
                                <i class="tera-icon w-5 h-5 mr-1 mt-1"></i>
                                <span class="font-bold mt-0.5 text-xl text-gray-dim">1.5</span>
                            </div>
                            <div class="flex justify-end">
                                <span class="text-nobel">$100000000000</span>
                            </div>
                        </div>
                    </div>

                    <div class="modal-separator"></div>

                    <div>
                        <h5 class="text-gray-dim font-bold">Your bid</h5>

                        <div class="block mt-3">
                            <span class="flex relative">
                                <input type="text"
                                    class="mt-1 h-9 text-gray-500 block w-full bg-gray-100 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                    placeholder="" />

                                <span class="w-20 flex px-2 py-1.5 absolute right-0 h-9 bottom-0 rounded bg-violet-200">
                                    <span class="font-bold text-violet-500"> Luna </span>
                                    <ChevronDownIcon class="w-4 h-4 mt-1 ml-3" />
                                </span>
                            </span>

                            <PriceLabel text="Your balance" price="20.25" class="mt-2" />
                            <PriceLabel text="Service fee" price="0.25" />
                            <PriceLabel text="You will pay" price="16.36" />

                        </div>
                    </div>

                    <div class="modal-separator"></div>

                    <div>
                        <h5 class="text-gray-dim font-bold">Offer expiration</h5>
                    </div>
                </div>
            </template>

            <template v-slot:footer>
                <div class="text-center">
                    <MyButton type="primary" @click="onMakeOffer" class="w-1/2">Make an offer</MyButton>
                </div>
            </template>
        </MyModal>
        <!-- End : Make an offer Modal -->

        <MyModal :open="state.showNFTModal" @closed="state.showNFTModal = !state.showNFTModal">
            <template v-slot:body>
                Hi
            </template>
        </MyModal>

        <Loader :isLoading="loading" />
    </DefaultLayout>
</template>

<script lang="ts" setup>
import axios from 'axios';
import { onMounted, onUnmounted, reactive, ref, watch } from 'vue';
import ApiManager from 'api/ApiManager';
import { getApiManager, getController } from 'controller';
import {
    ChevronRightIcon,
    ChevronLeftIcon,
    ChevronDownIcon,
    ArrowLeftIcon,
    GlobeIcon,
    PhotographIcon,
    PencilAltIcon,
    DotsVerticalIcon,
    SwitchHorizontalIcon,
    UploadIcon,
    ExternalLinkIcon,
    ArrowsExpandIcon
} from '@heroicons/vue/outline';
import NFTItemWrapper from '../../components/common/NFTItemWrapper.vue';
import Navigation from './Navigation.vue';
import NFTViewer from 'components/common/NFTViewer.vue';
import GradientBorderPanel from 'components/common/panel/GradientBorderPanel.vue';
import router from 'router';
import { Subscription } from 'rxjs';
import { ConnectedWallet } from '@terra-money/wallet-controller';
import { load } from 'protobufjs';
import Loader from 'components/common/Loader.vue';
import { useToast } from 'vue-toastification';
import Author from 'components/common/Author.vue';
import MyModal from 'components/common/modal/MyModal.vue';
import MyButton from 'components/common/button/MyButton.vue';
import PriceLabel from './components/PriceLabel.vue';
import PropertyCard from './components/PropertyCard.vue';
import PropertyCardList from './components/PropertyCardList.vue';
import { MnemonicKey, LCDClient, MsgSend } from '@terra-money/terra.js';

const myWallet = ref<ConnectedWallet | undefined>(undefined);
let subscription: Subscription | null = null;
const loading = ref(false);
const apiManager = getApiManager();
const isActive = ref(1);
const toast = useToast();
const state = reactive({
    token: {},
    collection: {},
    showBuyModal: false,
    showTransferModal: false,
    showMakeOfferModal: false,
    showNFTModal: false,
});

onMounted(() => {
    const controller = getController();
    subscription = controller.connectedWallet().subscribe((_connectedWallet) => {
        myWallet.value = _connectedWallet;
    });
});
onUnmounted(() => {
    subscription?.unsubscribe();
});
watch(myWallet, () => { loadNFTInfo(); });

const onExpandView = () => {
    console.log('dd');
};

const loadNFTInfo = async () => {
    const token_id = router.currentRoute.value.params.id;
    loading.value = true;
    try {
        const response = await apiManager.getNFTInfo(myWallet.value, token_id);
        state.token = response;

        const response_collection = await apiManager.getCollection(response.extension.collection_id);
        state.collection = response_collection.data;

        console.log("Item Detail Api: ", response, response_collection.data);

        loading.value = false;
    } catch (error) {
        console.log(error);
        toast.error('Failed to load NFT');
    }
    loading.value = false;
};

const onBuy = () => {
    // alert('onBuy');
    // const { MnemonicKey, LCDClient, MsgSend } = require('@terra-money/terra.js');
    if (myWallet.value == undefined)
        return;
        myWallet.value.post()

    const mKey = new MnemonicKey({
        mnemonic:
            'sketch purpose vault dance biology endless captain tip impulse pumpkin forum student sorry theory virus car diary stove income anchor empty spike grunt shadow',
    });

    const provider = new LCDClient({
        chainID: myWallet.value?.network.chainID,
        URL: myWallet.value?.network.lcd,
        gasPrices: { uluna: 0.38 },
    });

    const wallet = provider.wallet(mKey);

    const send = new MsgSend(
        'terra1r29c730kgj4luhjcwk7atrkrg4f6a7dss98cu2',
        'terra17lmam6zguazs5q5u6z5mmx76uj63gldnse2pdp',
        { uluna: 1312029 }
    );

    wallet
        .createAndSignTx({
            msgs: [send],
            memo: 'Check Check, transaction sent using QuickNode',
        })
        .then(tx => {
            return provider.tx.broadcast(tx);
        })
        .then(result => {
            console.log(`TX hash: ${result.txhash}  ${result.raw_log}`);
        });

};
const onAddFunds = () => {
    alert('onAddFunds');
};
const onMakeOffer = () => { };
</script>
<script lang="ts">

export default {}
</script>