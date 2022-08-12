<template>
    <DefaultLayout>
        <Loader :isLoading="isLoading" />
        <div class="w-screen">
            <div class="flex mx-3 mt-10 md:mx-5 xl:mx-28">
                <ArrowLeftIcon class="w-10 h-5 mt-0.5 mr-3 text-purple-500" />
                <span class="font-light text-gray-400">My collections /
                    <span class="text-gray-500 font-semibold">Edit my collection</span>
                </span>
            </div>
            <div class="mx-3 mt-10 md:mx-5 xl:mx-28">
                <h1 class="xl:ml-3 text-xl font-bold mb-3 text-gray-dim text-[32px]">Edit my collection</h1>
                <hr />
            </div>
            <div class="mx-3 mt-10 md:mx-5 xl:mx-28">
                <div class="flex flex-col-reverse lg:flex-none text-left lg:grid grid-cols-1 lg:grid-cols-2">
                    <div class="lg:mr-5 xl:mr-0">
                        <label class="block mt-3 md:mt-0">
                            <span class="font-bold text-gray-600"><span class="mr-2 text-pink-500">*</span>Name</span>
                            <input type="text" v-model="collection.data.name"
                                class="text-gray-500 mt-1 h-9 block w-full bg-gray-100 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                placeholder="" />
                        </label>
                        <label class="block mt-3">
                            <span class="font-bold text-gray-600">URL</span>
                            <span class="text-xs text-gray-400">
                                <br />
                                Customize your URL on
                                <span
                                    class="font-bold bg-clip-text text-transparent bg-gradient-to-b from-pink-500 to-violet-500">Bake
                                    ‘n
                                    Stake</span>. Must only contain lowercase letters,numbers, and hyphens.
                            </span>
                            <input type="text" v-model="collection.data.external_url"
                                class="mt-1 h-9 text-gray-500 block w-full bg-gray-100 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                placeholder="" />
                        </label>
                        <label class="block mt-3">
                            <span class="font-bold text-gray-600">Description</span>
                            <textarea v-model="collection.data.description"
                                class="mt-1 text-gray-500 bg-gray-100 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                rows="3"></textarea>
                        </label>
                        <label class="block mt-3">
                            <span class="font-bold text-gray-600">Category</span>
                            <span class="text-xs text-gray-400">
                                <br />
                                Adding a category will help make your item discoverable on
                                <span
                                    class="font-bold bg-clip-text text-transparent bg-gradient-to-b from-pink-500 to-violet-500">Bake
                                    ‘n
                                    Stake</span>. <br />
                                You can select only one category.
                            </span>

                            <CategoryList v-model="collection.data.category"></CategoryList>
                        </label>
                        <label class="block mt-3 relative">
                            <span class="font-bold text-gray-600">Links</span>
                            <input type="text" v-model="collection.data.links.mysite"
                                class="pl-8 mt-1 h-9 block text-gray-500 w-full bg-gray-100 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                placeholder="https://mysite.com" />
                            <GlobeIcon class="w-4 h-5 text-gray-400 absolute top-9 left-2" />
                        </label>
                        <label class="block mt-2 relative">
                            <input type="text" v-model="collection.data.links.twitter"
                                class="pl-8 mt-1 h-9 block text-gray-500 w-full bg-gray-100 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                placeholder="https://twitter.com/your-collection" />
                            <i class="twitter w-4 h-5 text-gray-400 absolute top-2.5 left-2"></i>
                        </label>
                        <label class="block mt-2 relative">
                            <input type="text" v-model="collection.data.links.instagram"
                                class="pl-8 mt-1 h-9 block text-gray-500 w-full bg-gray-100 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                placeholder="https://instagram.com/my-collection" />
                            <i class="instagram w-4 h-5 text-gray-400 absolute top-2.5 left-2"></i>
                        </label>
                        <label class="block mt-2 relative">
                            <input type="text" v-model="collection.data.links.discord"
                                class="pl-8 mt-1 h-9 block text-gray-500 w-full bg-gray-100 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                placeholder="https://discord.gg/my-collection" />
                            <i class="discord w-4 h-5 text-gray-400 absolute top-2.5 left-2"></i>
                        </label>
                        <label class="block mt-2 relative">
                            <input type="text" v-model="collection.data.links.telegram"
                                class="pl-8 mt-1 h-9 block text-gray-500 w-full bg-gray-100 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                placeholder="https://t-me/your-collection" />
                            <i class="telegram w-4 h-5 text-gray-400 absolute top-2.5 left-2"></i>
                        </label>
                        <label class="block mt-3">
                            <span class="font-bold text-gray-600 flex justify-between">
                                <span class="w-full">Explicit & Sensitive Content</span>
                                <span>
                                    <SwitchButton :state="false" />
                                </span>
                            </span>
                            <span class="text-xs text-gray-400">
                                Set this item as explicit and sensitive content info.
                            </span>
                        </label>
                        <label class="block mt-5">
                            <span class="font-bold text-gray-600">Drop an notable collections
                            </span>
                            <span class="text-xs text-gray-400">
                                <br />
                                if you’ve got some NFTs lined up that just might generate some
                                buzz in crypto land, fill out
                                <span class="text-pink-500">this form!</span>
                            </span>
                        </label>
                        <hr />
                        <div class="block grid md:grid-cols-2 gap-3 mt-5 sm:grid-cols-1">
                            <MyButton type="primary" @click="saveChanges">Save Changes</MyButton>
                            <MyButton type="danger" @click="deleteCollection">Delete</MyButton>
                        </div>
                    </div>
                    <!-- right starts here  -->
                    <div class="xl:ml-10">
                        <label class="block">
                            <span class="font-bold text-gray-600"><span class="mr-2 text-pink-500">*</span>Logo</span>
                            <span class="text-xs text-gray-400">
                                <br />
                                This image will also be used for navigation. Recomended
                                dimension is 164 x 164 px.
                            </span>
                            <div class="mt-3 w-[164px] h-[164px]">
                                <ImagePreviewDropzone @change_src="onLogoImageChanged"
                                    :original_img="collection.data.logo_image"></ImagePreviewDropzone>
                            </div>
                        </label>

                        <label class="block mt-5">
                            <span class="font-bold text-gray-600">Featured image</span>
                            <span class="text-xs text-gray-400">
                                <br />
                                This image will be used for featuring your collection on the
                                <span class="text-pink-500">bake‘n Stake</span>. 600 x 400
                                recommended.
                            </span>
                            <div class="mt-3 w-[335px] sm:w-[367.68px] h-[237.49px]">
                                <ImagePreviewDropzone @change_src="onFeaturedImageChanged"
                                    :original_img="collection.data.featured_image"></ImagePreviewDropzone>
                            </div>
                        </label>

                        <label class="block mt-5">
                            <span class="font-bold text-gray-600">Banner image</span>
                            <span class="text-xs text-gray-400">
                                <br />
                                This image will appear at the top of your collection page.
                                Avoid including too much text in this banner image, as the
                                dimensions change on different devices. 1400 x 400
                                recommended.
                            </span>
                            <div class="mt-3 w-[570.99pxx] h-[208.77px]">
                                <ImagePreviewDropzone @change_src="onBannerImageChanged"
                                    :original_img="collection.data.banner_image"></ImagePreviewDropzone>
                            </div>
                        </label>
                    </div>
                </div>
            </div>
        </div>

    </DefaultLayout>
</template>

<script lang="ts" setup>
import { ConnectedWallet } from '@terra-money/wallet-controller';
import { getCollectionInfo } from 'contract/query';
import { CATEGORIES } from '../../components/common/Common';
import { getApiManager, getController } from 'controller';
import { Subscription } from 'rxjs';
import { onMounted, reactive, ref, watch, watchEffect, Ref, onUnmounted } from 'vue';
import { ArrowLeftIcon, GlobeIcon } from '@heroicons/vue/solid';
import SwitchButtonVue from 'components/common/SwitchButton.vue';
import router from 'router';
import { useToast } from 'vue-toastification';
import Loader from 'components/common/Loader.vue';
import SwitchButton from 'components/common/SwitchButton.vue';
import { updateCollection } from 'contract/execute';
import ImagePreviewDropzone from 'components/common/ImagePreviewDropzone.vue';
import { getIpfsUrl, handleSingleFileUpload } from 'utils/upload';
import MyButton from 'components/common/button/MyButton.vue';

const connectedWallet = ref<ConnectedWallet | undefined>(undefined);
let subscription: Subscription | null = null;
const toast = useToast();

let collection = reactive({
    data: {
        // collection_id: '',
        owner: '',
        name: '',
        external_url: '',
        category: -1,
        description: '',
        logo_image: '',
        featured_image: '',
        banner_image: '',
        links: {
            mysite: '',
            twitter: '',
            instagram: '',
            discord: '',
            telegram: '',
        }
    }
});
const categories = CATEGORIES;
const isLoading: Ref<boolean> = ref(false);
const logoImageFile: Ref<object | null> = ref(null);
const featuredImageFile: Ref<object | null> = ref(null);
const bannerImageFile: Ref<object | null> = ref(null);
const apiManager = getApiManager();
const collection_id: string = router.currentRoute.value.params.id;

onMounted(() => {
    const controller = getController();
    subscription = controller.connectedWallet().subscribe((_connectedWallet) => {
        connectedWallet.value = _connectedWallet;
    });
});
onUnmounted(() => { subscription?.unsubscribe(); });
watch(connectedWallet, async () => { loadCollectionInfo(); });

const loadCollectionInfo = async () => {

    isLoading.value = true;

    const response = await apiManager.getCollection(collection_id);
    // console.log(response);
    if (response == 0)
        toast.error('Cannot load collection info.');
    else
        collection.data = response.data;

    isLoading.value = false;
};

const saveChanges = async () => {
    isLoading.value = true;

    if (logoImageFile.value != null) {
        const response = await handleSingleFileUpload(logoImageFile.value);
        if (response == 0) {
            toast.error('Failed to upload logo image');
            isLoading.value = false;
            return;
        }
        collection.data.logo_image = response;
    }

    if (featuredImageFile.value != null) {
        const response = await handleSingleFileUpload(featuredImageFile.value);
        if (response == 0) {
            toast.error('Failed to upload featured image');
            isLoading.value = false;
            return;
        }
        collection.data.featured_image = response;
    }

    if (bannerImageFile.value != null) {
        const response = await handleSingleFileUpload(bannerImageFile.value);
        if (response == 0) {
            toast.error('Failed to upload banner image');
            isLoading.value = false;
            return;
        }
        collection.data.banner_image = response;
    }

    const response = await apiManager.updateCollection(connectedWallet.value?.walletAddress.toString(), collection_id, collection.data);
    if (response == 0)
        useToast().error('Failed to edit');
    else {
        toast.success('Success');
        router.push('/collections/detail/' + collection_id);
    }

    isLoading.value = false;
};

const deleteCollection = () => { };

const onLogoImageChanged = (file: object) => {
    logoImageFile.value = file;
    console.log(file, 'logo')
};
const onFeaturedImageChanged = (file: object) => {
    featuredImageFile.value = file;
};
const onBannerImageChanged = (file: object) => {
    bannerImageFile.value = file;
};

</script>
