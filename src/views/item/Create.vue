<template>
    <DefaultLayout>
        <div class="w-screen">
            <div class="mx-3 mt-10 md:mx-5 xl:mx-28">
                <h1 class="xl:ml-3 text-xl font-bold mb-3 text-gray-dim text-[32px]">Create new item</h1>
                <hr />
            </div>
            <div class="mx-3 mt-10 md:mx-5 xl:mx-28">
                <div class="flex flex-col-reverse lg:flex-none text-left lg:grid grid-cols-1 lg:grid-cols-2">
                    <div class="lg:mr-5 xl:mr-0">
                        <label class="block mt-3 md:mt-0">
                            <span class="font-bold text-gray-600"><span class="mr-2 text-pink-500">*</span>NFT
                                Name</span>
                            <input v-model="nft_data.extension.name" type="text"
                                class="text-gray-500 mt-1 h-9 block w-full bg-gray-100 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                placeholder="eg. image from paradise" />
                        </label>
                        <label class="block mt-3">
                            <span class="font-bold text-gray-600">External links</span>
                            <span class="text-xs text-gray-400">
                                <br />
                                Include a link to this URL on this item's detail page, so that
                                users can click to learn more about it. You are welcome to
                                link to your own webpage with more details.
                            </span>
                            <input v-model="nft_data.extension.external_url" type="text"
                                class="mt-1 h-9 text-gray-500 block w-full bg-gray-100 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                placeholder="http://yoursitelink.com" />
                        </label>
                        <label class="block mt-3">
                            <span class="font-bold text-gray-600">Description</span>
                            <textarea v-model="nft_data.extension.description"
                                class="mt-1 text-gray-500 bg-gray-100 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                rows="3"></textarea>
                        </label>
                        <label class="block mt-3">
                            <span class="font-bold text-gray-600"><span
                                    class="mr-2 text-pink-500">*</span>Collection</span>
                            <!-- <v-select :options="[{label: 'Canada', code: 'ca'}]"></v-select> -->
                            <!-- <v-select :options="collections" label="title">
                                <template v-slot:option="collection">
                                    <img :src="collection.logo_image" class="w-5 h-5 rounded inline" />
                                    {{ collection.name }}
                                </template>
                            </v-select> -->
                            <CollectionDropdown :collections="collections"
                                @change="(id) => nft_data.extension.collection_id = id"></CollectionDropdown>
                        </label>

                        <item-property class="mt-3" name="Properties"
                            description="Textual traits that show up as rectangles" />
                        <div class="grid grid-cols-4 md:grid-cols-6">
                            <add-button class="mt-2 cols-2" @onClick="show_property_modal = true" />
                            <div class="cols-5 col-start-2 col-end-5 md:col-end-7 flex mt-2">
                                <div class="grid grid-cols-2 md:grid-cols-3 gap-2">
                                    <PropertyCardList :properties="nft_data.extension.attributes">
                                    </PropertyCardList>
                                </div>
                            </div>
                        </div>

                        <AddPropertyModal @closed="show_property_modal = false" :open="show_property_modal"
                            :properties="nft_data.extension.attributes" @update="updateNFTProperties">
                        </AddPropertyModal>

                        <label class="block mt-3">
                            <span class="font-bold text-gray-600 flex justify-between">
                                <span class="w-full">Unlock once purchased </span>
                                <span>
                                    <SwitchButton :state="nft_data.extension.unlock"
                                        @toggle="nft_data.extension.unlock = !nft_data.extension.unlock" />
                                </span>
                            </span>
                            <span class="text-xs text-gray-400">
                                Content will be unlocked after successful transaction
                            </span>
                        </label>
                        <label class="block mt-3">
                            <span class="font-bold text-gray-600 flex justify-between">
                                <span class="w-full">Explicit & Sensitive Content</span>
                                <span>
                                    <SwitchButton :state="nft_data.extension.sensitive"
                                        @toggle="nft_data.extension.sensitive = !nft_data.extension.sensitive" />
                                </span>
                            </span>
                            <span class="text-xs text-gray-400">
                                Set this item as explicit and sensitive content info
                            </span>
                        </label>

                        <!-- <ListingOptions :mode="1"></ListingOptions> -->

                        <!-- Fixed Price -->
                        <div class="block mt-3">
                            <span class="font-bold text-gray-600">Price</span>
                            <span class="flex relative">
                                <input type="text" v-model="price"
                                    class="mt-1 h-9 text-gray-500 block w-full bg-gray-100 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                    placeholder="" />

                                <span class="w-20 flex px-2 py-1.5 absolute right-0 h-9 bottom-0 rounded bg-violet-200">
                                    <span class="font-bold text-violet-500">Luna</span>
                                    <ChevronDownIcon class="w-4 h-4 mt-1 ml-3" />
                                </span>
                            </span>

                            <div class="flex justify-between mt-2">
                                <span class="text-gray-400">Service fee</span>
                                <span class="text-gray-400">
                                    <span class="flex mt-1.5">
                                        <i class="tera-icon w-4 h-4 mt-1 mr-0.5"></i>
                                        <span class="">{{ serviceFee }}</span>
                                    </span></span>
                            </div>
                            <div class="flex justify-between">
                                <span class="text-gray-400">You will receive</span>
                                <span class="text-gray-400">
                                    <span class="flex mt-1.5">
                                        <i class="tera-icon w-4 h-4 mt-1 mr-0.5"></i>
                                        <span class="">{{ willReceive }}</span>
                                    </span></span>
                            </div>
                        </div>

                        <label class="block mt-3">
                            <span class="font-bold text-gray-600">Royalty (%) </span>
                            <span class="text-xs text-gray-400">
                                <br />
                                Suggested: 0%, 10%, 20%, 30%. Maximum is 50%
                            </span>
                            <input v-model="nft_data.extension.royalty_percentage" type="text"
                                class="mt-1 h-9 text-gray-500 block w-full bg-gray-100 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                placeholder="2.5" />
                        </label>
                        <label class="block mt-3">
                            <span class="font-bold text-gray-600">Supply</span>
                            <span class="text-xs text-gray-400">
                                <br />
                                The number of copies that can be minted. No gas cost to you!
                            </span>
                            <input type="number"
                                class="mt-1 h-9 text-gray-500 block w-full bg-gray-100 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                placeholder="1" />
                        </label>
                        <!-- <label class="block mt-5">
                            <span class="font-bold text-gray-600 flex justify-between">
                                <span class="w-full">Stake</span>
                                <span>
                                    <SwitchButton :state="nft_data.extension.stake"
                                        @toggle="nft_data.extension.stake = !nft_data.extension.stake" />
                                </span>
                            </span>
                            <span class="text-xs text-gray-400">
                                Set this item as a staking reward. Everyday you’ll get
                                <span class="text-pink-500">FUDGE</span> coins for your
                                staking
                            </span>
                        </label> -->

                        <hr />
                        <div class="block grid md:grid-cols-2 gap-3 mt-5 sm:grid-cols-1">
                            <MyButton type="primary" @click.prevent="mintNFT">Bake this item</MyButton>
                            <MyButton type="secondary" @click="cancelCreate">Cancel</MyButton>
                        </div>
                    </div>
                    <!-- right starts here  -->
                    <div class="xl:ml-10">
                        <label class="block">
                            <span class="font-bold text-gray-600"><span class="mr-2 text-pink-500">*</span>Upload
                                your
                                image,
                                video, audio, or 3D model</span>
                            <span class="text-xs text-gray-400">
                                <br />
                                File types supported: JPG, PNG, GIF, SVG, MP4, WEBM, MP3, WAV,
                                OGG, GLB, GLTF. Max size: 100 MB
                            </span>
                            <div @click="initiateClick" @dragover.prevent @drop.prevent
                                class="mt-3 lg:w-[561px] lg:h-[561px]">
                                <ImagePreviewDropzone @change_src="onTokenImageChanged"></ImagePreviewDropzone>
                            </div>
                        </label>
                    </div>
                </div>
            </div>
        </div>
        <Loader :isLoading="loading" />
    </DefaultLayout>
</template>

<script lang="ts" setup>
import { computed, onMounted, onUnmounted, reactive, ref, Ref, watch } from 'vue';
import ItemProperty from './components/ItemProperty.vue';
import PropertyCard from './components/PropertyCard.vue';
import AddButton from './components/AddButton.vue';
import ImagePreviewDropzone from 'components/common/ImagePreviewDropzone.vue';
import SwitchButton from 'components/common/SwitchButton.vue';
import AddPropertyModal from './components/AddPropertyModal.vue';
import PropertyCardList from './components/PropertyCardList.vue';
import { calcServiceFee } from '../../utils/utils';
import ListingOptions from './components/ListingOptions.vue';
import { Subscription } from 'rxjs';
import { ConnectedWallet } from '@terra-money/wallet-controller';
import { getApiManager, getController } from 'controller';
import { apiGetMyCollections } from 'market';
import Loader from 'components/common/Loader.vue';
import CollectionDropdown from './components/CollectionDropdown.vue';
import router from 'router';
import { useToast } from 'vue-toastification';
import { getIpfsUrl, handleSingleFileUpload } from 'utils/upload';
import { uuid } from 'vue-uuid';
import MyButton from 'components/common/button/MyButton.vue';
import { ChevronDownIcon } from '@heroicons/vue/outline';
import 'vue-select/src/scss/vue-select.scss';

const myWallet = ref<ConnectedWallet | undefined>(undefined);
let subscription: Subscription | null = null;
const tokenImage: Ref<object | null> = ref(null);
const toast = useToast();

const nft_data = reactive({
    token_id: '',
    owner: '',
    token_uri: '',
    extension: {
        token_uri: '',
        collection_id: '',
        name: '',
        description: '',
        attributes: [],

        // unlock: false,
        // sensitive: false,
        // stake: true,

        // creator: '',
        // royalty_percentage: Number(0),

        image: '',
        /*background_color: '',
        external_url: '',
        animation_url: '',
        youtube_url: '',*/
    },
});
const show_property_modal = ref(false);
const loading = ref(false);
const collections = ref([]);
const apiManager = getApiManager();
const price: Ref<number> = ref(0);
const serviceFee = computed(() => calcServiceFee(price.value));
const willReceive = computed(() => (price.value - serviceFee.value));

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
    loadMyCollections();
});

const loadMyCollections = async () => {
    loading.value = true;
    try {
        // const data = await apiGetMyCollections(myWallet.value);
        const response = await apiManager.getMyCollections(myWallet.value?.walletAddress);
        collections.value = response.data;
        loading.value = false;
    } catch (error) {
        toast.error('Failed to load collections');
        loading.value = false;
    }
};

const updateNFTProperties = (p: any) => {
    nft_data.extension.attributes = p;
};

const onTokenImageChanged = (file: object) => {
    tokenImage.value = file;
};

const testValidation = (): boolean => {
    if (nft_data.extension.name == '')
        toast.warning('Name is required');
    else if (tokenImage.value == null)
        toast.warning('Upload your image, audio ...');
    else if (nft_data.extension.collection_id == '')
        toast.warning('Select your collection ...');
    else
        return true;
    return false;
};

const mintNFT = async () => {

    if (!testValidation())
        return;

    loading.value = true;

    // Upload image
    const IpfsHash = await handleSingleFileUpload(tokenImage.value);
    if (IpfsHash === 0) {
        toast.error('Failed to upload image');
        loading.value = false;
        return;
    }

    nft_data.token_id = uuid.v4();
    nft_data.token_uri = IpfsHash;
    nft_data.extension.token_uri = IpfsHash;
    nft_data.extension.image = IpfsHash;
    nft_data.owner = myWallet.value?.walletAddress.toString();

    // console.log(nft_data);
    // return;
    try {
        const data = await apiManager.mintNFT(myWallet.value, nft_data);
        const raw_log = data.raw_log;
        console.log(raw_log);

        if (raw_log.indexOf('token_id already claimed') != -1)
            toast.warning('Token ID already claimed');
        else {
            toast.success('Success');
            // router.push('/item/detail/');
        }
    }
    catch (e) {
        console.log(e);
        toast.error('Failed to mint');
    }

    loading.value = false;
};

const cancelCreate = () => { };
</script>
<style>
</style>