<template>
  <div>
    <DefaultLayout>
      <div class="w-screen bg-none xl:bg-vector bg-top bg-no-repeat">
        <div class="xl:flex xl:justify-center">
          <div>
            <CollectionHeader
              class="w-screen h-96 xl:w-c-xl md:h-c-xl mt-10 md:mt-20 lg:flex xl:rounded-lg"
              name="Okonkwo Flair"
              :coverImage="coverImage"
            />
          </div>
        </div>
   
        <div class="xl:mx-24 mt-10 flex justify-center">
          <div
            class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6 mx-5 gap-2 w-c-xl"
          >
            <FilterButton
              v-for="index in 9"
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
              >16 items</span
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
                  class="mb-10 sm:mb-0 sm:mx-1.5 w-48 h-56 sm:w-52 sm:h-60 md:w-44 md:h-48 lg:h-64 xl:w-72 xl:my-12 sm:my-0"
                  v-for="index in 12"
                  :key="index"
                  coverImage="https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F6170e01f8d7639b95a7f2eeb%2FSotheby-s-NFT-Natively-Digital-1-2-sale-Bored-Ape-Yacht-Club--8817-by-Yuga-Labs%2F0x0.png%3Ffit%3Dscale"
                />
              </div>
            </div>

            <div class="flex justify-center mt-14">
              <button
                class="rounded text-white p-2 text-left w-60 h-10 text-xs lg:w-80 text-sm view-all-btn bg-purple relative flex justify-between"
              >
                <span class="mt-0.5 text-sm font-bold">Load more</span>
                <ChevronRightIcon class="mt-0.5 w-5 h-5 mt-1" />
              </button>
            </div>
          </div>
        </div>

        <div class="top-collections mt-20">
          <div
            class="flex mt-10 mx-5 sm:mx-11 md:mx-11 lg:mx-12 xl:mx-32 2xl:mx-44 justify-center justify-between"
          >
            <h1 class="top-collections-text text-2xl md:text-3xl">
              More from this artist
            </h1>
            <div class="flex">
              <button class="rounded w-20 text-lg view-all-btn bns-purple">
                view all
              </button>
              <button
                class="rounded text-lg ml-5 mr-3 view-all-btn hidden sm:block"
              >
                <ChevronLeftIcon class="w-7 h-7 bns-purple" />
              </button>
              <button class="rounded text-lg view-all-btn hidden sm:block">
                <ChevronRightIcon class="w-7 h-7 bns-purple" />
              </button>
            </div>
          </div>

          <div class="flex justify-center">
            <div
              class="grid grid-cols-2 gap-2 place-content-center sm:grid-cols-2 md:grid-cols-4 md:mx-5 mt-7 2xl:mx-28"
            >
              <NFTWrapper
                :isRecent="true"
                class="mb-10 sm:mb-0 sm:mx-1.5 w-48 h-56 sm:w-52 sm:h-60 md:w-44 md:h-48 lg:h-64 xl:w-72 sm:my-0"
                v-for="index in 4"
                :key="index"
                coverImage="https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F6170e01f8d7639b95a7f2eeb%2FSotheby-s-NFT-Natively-Digital-1-2-sale-Bored-Ape-Yacht-Club--8817-by-Yuga-Labs%2F0x0.png%3Ffit%3Dscale"
              />
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
<script>
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
import CollectionHeader from '../../components/common/CollectionHeader.vue';
import FilterButton from '../../components/common/FilterButton.vue';
import SearchBar from '../../components/common/SearchBar.vue';
import AboutFudge from '../../components/common/AboutFudge.vue';
export default {
  components: {
    ChevronRightIcon,
    ChevronDownIcon,
    ChevronLeftIcon,
    NFTCollection,
    NFTWrapper,
    NFTCategory,
    Step,
    Footer,
    TrendingCollection,
    CollectionHeader,
    FilterButton,
    SearchBar,
    AboutFudge
  },
  data() {
    return {
      image,
      coverImage,
      readmore: false,
      categories: CATEGORIES,
      steps: STEPS,
      description:
        'Become a JOY Collector! A JOY is an original, virtual muse from JOYWORLD. Each one brings you a unique magical power when you collect them. All JOYs are one-of-one, handmade in virtual reality by John Orion Young. JOYs are starting to make JOYtoys for you!',
    };
  },
};
</script>
<style scoped src="../../assets/css/homepage.css"></style>
