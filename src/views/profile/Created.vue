<template>
  <div>
    <DefaultLayout>
      <div class="w-screen bg-none xl:bg-vector bg-top bg-no-repeat">
        <div class="xl:flex xl:justify-center">
          <div>
            <ProfileCover
              class="w-screen h-96 xl:w-c-xl md:h-c-xl mt-10 md:mt-20 lg:flex xl:rounded-lg"
              name="Okonkwo Flair"
              :coverImage="coverImage"
              :totalCreated="nfts.length"
            />
          </div>
        </div>

        <div class="xl:mx-24 mt-10 flex justify-center">
          <div
            class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6 mx-5 gap-2 w-c-xl"
          >
            <FilterButton
              v-for="index in 3"
              :key="index"
              class="xl:mr-2"
              label="price"
              value="Low to high"
            />
            <span class="text-purple-800 mt-1 text-base font-semibold"
              >Reset</span
            >
          </div>
        </div>
        <div class="flex justify-center">
          <div class="flex justify-between md:w-c-xl mt-10 md:mx-5 xl:mx-24">
            <span class="hidden md:flex text-gray-500 mr-10 my-6"
              >{{ nfts.length }} items</span
            >
            <SearchBar class="w-96" placeholder="Search for items" />
          </div>
        </div>

        <div>
          <div class="top-collections">
            <div class="flex justify-center">
              <div
                class="grid grid-cols-2 gap-2 place-content-center sm:grid-cols-2 md:grid-cols-4 md:mx-5 mt-7 2xl:mx-28"
              >
                <NFTWrapper
                  class="mb-10 lg:w-64 lg:my-10"
                  v-for="(nft, index) in nfts"
                  :key="index"
                  :coverImage="nft?.extension?.image"
                  :nft="nft?.extension"
                />
              </div>
            </div>

            <div class="flex justify-center mt-24">
              <button
                class="rounded text-white p-2 text-left w-60 h-10 text-xs lg:w-80 text-sm view-all-btn bg-purple relative flex justify-between"
              >
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
      <Loader :isLoading="loading" />
    </DefaultLayout>
  </div>
</template>
<script setup lang="ts">
import {
  ChevronRightIcon,
  ChevronLeftIcon,
  ChevronDownIcon,
} from '@heroicons/vue/outline';
import image from '../../assets/images/nft1.png';
import coverImage from '../../assets/images/unsplash_RFDP7_80v5A.png';
import NFTCollection from '../../components/common/NFTCollection.vue';
import NFTWrapper from '../../components/common/NFTWrapper.vue';
import NFTCategory from '../../components/common/NFTCategory.vue';
import { CATEGORIES, STEPS } from '../../components/common/Common';
import Step from '../../components/common/Step.vue';
import Footer from '../../components/common/Footer.vue';
import TrendingCollection from '../../components/common/TrendingCollection.vue';
import ProfileCover from './components/ProfileCover.vue';
import FilterButton from '../../components/common/FilterButton.vue';
import SearchBar from '../../components/common/SearchBar.vue';
import AboutFudge from '../../components/common/AboutFudge.vue';
import Loader from '../../components/common/Loader.vue';

import { getController } from 'controller';
import { Subscription } from 'rxjs';
import { ConnectedWallet } from '@terra-money/wallet-controller';
import { onMounted, onUnmounted, onUpdated, ref, Ref, reactive } from 'vue';
import { getTokens, nftInfo } from '../../contract/query';

const status = ref<'initializing' | 'not-connected' | 'can-not-post' | 'ready'>(
  'initializing'
);

const connectedWallet = ref<ConnectedWallet | undefined>(undefined);

let subscription: Subscription | null = null;


const nfts: Ref<object[]> = ref([]);
// const coverImage = coverImage;
const loading: Ref<boolean> = ref(false);
const readmore = false;
const categories = CATEGORIES;
const steps = STEPS;
const description = `Become a JOY Collector! A JOY is an original, virtual muse from JOYWORLD. 
        Each one brings you a unique magical power when you collect them. 
        All JOYs are one-of-one, handmade in virtual reality by John Orion Young. 
        JOYs are starting to make JOYtoys for you!`;

async function getUserTokens() {
  try {
    loading.value = true;
    const response = await nftInfo(connectedWallet);
    nfts.value = response;
    console.log(nfts.value)
    loading.value = false;
  } catch (error) {
    loading.value = false;
    console.log(error);
  }
}

onMounted(() => {
  const controller = getController();
  subscription = controller.connectedWallet().subscribe((_connectedWallet) => {
    connectedWallet.value = _connectedWallet;

    if (_connectedWallet) {
      if (!_connectedWallet.availablePost) {
        status.value = 'can-not-post';
      } else {
        status.value = 'ready';
      }
      getUserTokens();
    } else {
      status.value = 'not-connected';
    }
  });
});
onUnmounted(() => {
  subscription?.unsubscribe();
});

</script>
<style scoped src="../../assets/css/homepage.css"></style>
