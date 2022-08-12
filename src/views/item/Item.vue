<template>
  <div>
    <DefaultLayout>
      <div class="w-screen">
        <div class="flex mx-3 mt-10 md:mx-5 xl:mx-28">
          <ArrowLeftIcon class="w-10 h-5 mt-0.5 mr-3 text-purple-500" />
          <span class="font-light text-gray-400">My collections / Female Funx /
            <span class="text-gray-500 font-semibold">Create a collection</span>
          </span>
        </div>
        <div class="relative">
          <div class="flex justify-center mx-auto mt-10">
            <NFTItemWrapper :isRecent="false" :showBuy="false" :isItem="true"
              class="mb-10 sm:mb-0 sm:mx-1.5 w-48 h-56 sm:w-52 sm:h-60 md:w-44 md:h-48 lg:h-60 xl:w-80 sm:my-0"
              coverImage="https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F6170e01f8d7639b95a7f2eeb%2FSotheby-s-NFT-Natively-Digital-1-2-sale-Bored-Ape-Yacht-Club--8817-by-Yuga-Labs%2F0x0.png%3Ffit%3Dscale" />
          </div>
          <div class="bg-black rounded-lg top-10 xl:top-0 absolute xl:right-72 w-40 h-12 flex">
            <PencilAltIcon class="w-6 h-6 text-white mt-3 ml-2" />
            <button class="w-28 h-8 rounded bg-purple-300 text-purple-900 flex px-2 py-1.5 mt-2 ml-2">
              <span class="text-sm font-semibold">Cancel listing</span>
            </button>
          </div>
          <div
            class="bg-black py-2.5 px-3 rounded-lg top-10 xl:top-14 absolute xl:right-72 w-40 h-12 flex justify-between">
            <span class="rounded-full p-0.5 w-[24px] h-[24px] bg-gray-300">
              <SwitchHorizontalIcon class="w-5 h-5 text-black" />
            </span>
            <!-- <span class="rounded-full p-0.5 w-6 h-6"> -->
            <i class="package-icon w-6 h-6 text-red"></i>
            <span class="rounded-full p-0.5 w-[24px] h-[24px] bg-gray-300">
              <UploadIcon class="w-5 h-5 text-black" />
            </span>
            <span class="rounded-full p-0.5 w-[24px] h-[24px] bg-gray-300">
              <DotsVerticalIcon class="w-5 h-5 text-black" />
            </span>
          </div>
        </div>
        <div class="mx-3 mt-28 md:mx-5 xl:mx-28">
          <div class="grid grid-cols-2">
            <div class="bg-[#646169] w-[592px] rounded-lg p-4">
              <span class="flex">
                <i class="verified-icon w-6 mr-2 mt-2"></i>
                <span class="text-white mt-2 font-normal">Female Punk</span>
              </span>

              <div class="mt-3">
                <span class="font-semibold text-2xl tracking-wide text-white">Female Punk #004</span>
              </div>
              <div class="mt-5 flex space-x-4">
                <span class="flex">
                  <span class="mr-3 text-sm mt-1 text-white">Minted by</span>
                  <Author name="Okonkwo Flair" class="text-white text-sm c-blur h-8 rounded-lg px-1.5 py-1" />
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
            <div class="bg-[#646169] w-[592px] rounded-lg p-4">
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
                  <button
                    class="py-1.5 mr-3 font-semibold mx-auto w-auto px-3 sm:px-0 sm:w-72 border-pink text-white h-10 bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded">
                    Buy now
                  </button>
                  <button
                    class="py-1.5 bg-gray-500 border border-pink-500 font-semibold mx-auto w-32 sm:w-72 text-white rounded">
                    Make an offer
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="mx-3 md:mx-5 xl:mx-28 mt-8">
          <div class="grid grid-cols-2">
            <div>
              <Navigation @goTo="(value) => (isActive = value)" class="w-[592px] h-12" />
              <div class="mt-5" v-if="isActive === 1">
                <div class="text-gray-500">
                  Created by
                  <span class="text-blue-600 font-semibold">you</span>
                </div>
                <p class="text-gray-600 mt-3">
                  The Female Punx collection is created to celebrate women who
                  fight for what they believe in, make their own decisions about
                  life and society without apology, and refuse to be put down.
                </p>
              </div>
              <div class="mt-5" v-if="isActive === 2">
                <img class="w-[592px]" :src="coverImage" />

                <p class="mx-6 text-gray-600 mt-3">
                  The Female Punx collection is created to celebrate women who
                  fight for what they believe in, make their own decisions about
                  life and society without apology, and refuse to be put down.
                </p>
              </div>
              <div class="mt-5 grid grid-cols-4 gap-2" v-if="isActive === 3">
                <div v-for="index in 8" :key="index"
                  class="flex p-1 rounded flex-row w-auto bg-purple-200 border border-purple-600">
                  <div class="flex flex-col justify-center">
                    <div class="text-blue-700 text-xs">body</div>
                    <div class="text-purple-700 font-bold text-base">
                      Light Blue
                    </div>
                    <div class="text-gray text-xs">3.4% rarity</div>
                  </div>
                </div>
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
            <div></div>
          </div>
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
  ArrowLeftIcon,
  GlobeIcon,
  PhotographIcon,
  PencilAltIcon,
  DotsVerticalIcon,
  SwitchHorizontalIcon,
  UploadIcon,
  ExternalLinkIcon,
} from '@heroicons/vue/outline';
import image from '../../assets/images/nft1.png';
import coverImage from '../../assets/images/unsplash_RFDP7_80v5A.png';
import NFTItemWrapper from '../../components/common/NFTItemWrapper.vue';
import { CATEGORIES } from '../../components/common/Common';
import CollectionHeader from '../../components/common/CollectionHeader.vue';
import FilterButton from '../../components/common/FilterButton.vue';
import Table from '../../components/common/Table.vue';
import TableSm from '../../components/common/TableSm.vue';
import AboutFudge from '../../components/common/AboutFudge.vue';
import SwitchButton from '../../components/common/SwitchButton.vue';
import Author from '../../components/common/Author.vue';
import Navigation from './Navigation.vue';
export default {
  components: {
    ChevronRightIcon,
    ChevronDownIcon,
    ChevronLeftIcon,
    NFTItemWrapper,
    CollectionHeader,
    FilterButton,
    Table,
    TableSm,
    AboutFudge,
    ArrowLeftIcon,
    GlobeIcon,
    PhotographIcon,
    SwitchButton,
    PencilAltIcon,
    DotsVerticalIcon,
    SwitchHorizontalIcon,
    UploadIcon,
    Author,
    ExternalLinkIcon,
    Navigation,
  },
  data() {
    return {
      isActive: 1,
      key: false,
      image,
      coverImage,
      categories: CATEGORIES,
      tableData: [
        {
          item: 'Female Punx',
          price: 18.02,
          amount: 1,
          fee: 1.82,
          time: '23 minutes ago',
        },
        {
          item: 'Female Punx',
          price: 18.02,
          amount: 1,
          fee: 1.82,
          time: '23 minutes ago',
        },
        {
          item: 'Female Punx',
          price: 18.02,
          amount: 1,
          fee: 1.82,
          time: '23 minutes ago',
        },
        {
          item: 'Female Punx',
          price: 18.02,
          amount: 1,
          fee: 1.82,
          time: '23 minutes ago',
        },
        {
          item: 'Female Punx',
          price: 18.02,
          amount: 1,
          fee: 1.82,
          time: '23 minutes ago',
        },
      ],
      description:
        'Become a JOY Collector! A JOY is an original, virtual muse from JOYWORLD. Each one brings you a unique magical power when you collect them. All JOYs are one-of-one, handmade in virtual reality by John Orion Young. JOYs are starting to make JOYtoys for you!',
    };
  },
};
</script>
<style scoped src="../../assets/css/homepage.css">
</style>
<style scoped src="../../assets/css/icons.css">
</style>
