<template>
  <div>
    <DefaultLayout>
      <div class="w-screen">
        <div class="mx-3 mt-10 md:mx-5 xl:mx-28">
          <h1 class="xl:ml-3 text-xl font-bold mb-3">Edit item</h1>
          <hr />
        </div>
        <div class="mx-3 mt-10 md:mx-5 xl:mx-28">
          <div
            class="flex flex-col-reverse lg:flex-none text-left lg:grid grid-cols-1 lg:grid-cols-2"
          >
            <div class="lg:mr-5 xl:mr-0">
              <label class="block mt-3 md:mt-0">
                <span class="font-bold text-gray-600"
                  ><span class="mr-2 text-pink-500">*</span>NFT Name</span
                >
                <input
                  type="text"
                  class="text-gray-500 mt-1 h-9 block w-full bg-gray-100 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  placeholder="eg. image from paradise"
                />
              </label>
              <label class="block mt-3">
                <span class="font-bold text-gray-600">External links</span>
                <span class="text-xs text-gray-400">
                  <br />
                  Include a link to this URL on this item's detail page, so that
                  users can click to learn more about it. You are welcome to
                  link to your own webpage with more details.
                </span>
                <input
                  type="text"
                  class="mt-1 h-9 text-gray-500 block w-full bg-gray-100 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  placeholder="http://yoursitelink.com"
                />
              </label>
              <label class="block mt-3">
                <span class="font-bold text-gray-600">Description</span>
                <textarea
                  class="mt-1 text-gray-500 bg-gray-100 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  rows="3"
                ></textarea>
              </label>
              <label class="block mt-3">
                <span class="font-bold text-gray-600"
                  ><span class="mr-2 text-pink-500">*</span>Collection</span
                >
                <select
                  class="text-gray-500 mt-1 h-9 block w-full bg-gray-100 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                >
                  <option value="">Collection name</option>
                </select>
              </label>

              <item-property
                class="mt-3"
                name="Properties"
                description="Textual traits that show up as rectangles"
              />
              <div class="grid grid-cols-4 md:grid-cols-6">
                <add-button class="mt-2 cols-2" @onClick="showModal" />
                <div
                  class="cols-5 col-start-2 col-end-5 md:col-end-7 flex mt-2"
                >
                  <div class="grid grid-cols-2 md:grid-cols-3 gap-2">
                    <property-card />
                  </div>
                </div>
              </div>
              <item-property
                class="mt-3"
                name="Levels"
                description="Numerical traits that show as a progress bar"
              />
              <div class="grid grid-cols-4 md:grid-cols-6">
                <add-button class="mt-2 cols-2" @onClick="showModal" />
                <div
                  class="cols-5 col-start-2 col-end-5 md:col-end-7 flex mt-2"
                >
                  <div class="grid grid-cols-2 md:grid-cols-3 gap-2">
                    <property-card />
                  </div>
                </div>
              </div>
              <item-property
                class="mt-3"
                name="Stats"
                description="Numerical traits that just show as numbers"
              />
              <div class="grid grid-cols-4 md:grid-cols-6">
                <add-button class="mt-2 cols-2" @onClick="showModal" />
                <div
                  class="cols-5 col-start-2 col-end-5 md:col-end-7 flex mt-2"
                >
                  <div class="grid grid-cols-2 md:grid-cols-3 gap-2">
                    <property-card />
                  </div>
                </div>
              </div>

              <label class="block mt-3">
                <span class="font-bold text-gray-600 flex justify-between">
                  <span class="w-full">Unlock once purchased </span>
                  <span><SwitchButton :state="false" /></span>
                </span>
                <span class="text-xs text-gray-400">
                  Content will be unlocked after successful transaction
                </span>
              </label>
              <label class="block mt-3">
                <span class="font-bold text-gray-600 flex justify-between">
                  <span class="w-full">Explicit & Sensitive Content</span>
                  <span><SwitchButton :state="false" /></span>
                </span>
                <span class="text-xs text-gray-400">
                  Set this item as explicit and sensitive content info
                </span>
              </label>

              <label class="block mt-3">
                <span class="font-bold text-gray-600">Price</span>

                <div
                  class="mt-3 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-3 xl:lg:grid-cols-4 gap-2"
                >
                  <div
                    class="cursor-pointer bg-violet-200 hover:bg-violet-400 hover:text-white py-4 text-violet-500 font-semibold border border-violet-900 rounded h-14 w-36 flex justify-center"
                  >
                    Fixed Price
                  </div>
                  <div
                    class="cursor-pointer bg-violet-200 hover:bg-violet-400 hover:text-white py-4 text-violet-500 font-semibold border border-violet-900 rounded h-14 w-36 flex justify-center"
                  >
                    Open for bids
                  </div>
                  <div
                    class="cursor-pointer bg-violet-200 hover:bg-violet-400 hover:text-white py-4 text-violet-500 font-semibold border border-violet-900 rounded h-14 w-36 flex justify-center"
                  >
                    Timed auction
                  </div>
                </div>
              </label>
              <label class="block mt-3">
                <span class="font-bold text-gray-600">Amout</span>
                <span class="flex relative">
                  <input
                    type="text"
                    class="mt-1 h-9 text-gray-500 block w-full bg-gray-100 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    placeholder="17.04"
                  />

                  <span
                    class="w-20 flex px-2 py-1.5 absolute right-0 h-9 bottom-0 rounded bg-violet-200"
                  >
                    <span class="font-bold text-violet-500"> Luna </span>
                    <ChevronDownIcon class="w-4 h-4 mt-1 ml-3" />
                  </span>
                </span>

                <div class="flex justify-between mt-2">
                  <span class="text-gray-400">Service fee</span>
                  <span class="text-gray-400">
                    <span class="flex mt-1.5">
                      <i class="tera-icon w-4 h-4 mt-1 mr-0.5"></i>
                      <span class="">0.52</span>
                    </span></span
                  >
                </div>
                <div class="flex justify-between">
                  <span class="text-gray-400">You will receive</span>
                  <span class="text-gray-400">
                    <span class="flex mt-1.5">
                      <i class="tera-icon w-4 h-4 mt-1 mr-0.5"></i>
                      <span class="">19.52</span>
                    </span></span
                  >
                </div>
              </label>

              <label class="block mt-3">
                <span class="font-bold text-gray-600">Royalty (%) </span>
                <span class="text-xs text-gray-400">
                  <br />
                  Suggested: 0%, 10%, 20%, 30%. Maximum is 50%
                </span>
                <input
                  type="text"
                  class="mt-1 h-9 text-gray-500 block w-full bg-gray-100 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  placeholder="2.5"
                />
              </label>
              <label class="block mt-3">
                <span class="font-bold text-gray-600">Supply</span>
                <span class="text-xs text-gray-400">
                  <br />
                  The number of copies that can be minted. No gas cost to you!
                </span>
                <input
                  type="number"
                  class="mt-1 h-9 text-gray-500 block w-full bg-gray-100 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  placeholder="1"
                />
              </label>

              <label class="block mt-5">
                <span class="font-bold text-gray-600 flex justify-between">
                  <span class="w-full">Stake</span>
                  <span
                    ><SwitchButton @toggle="state = !state" :state="state"
                  /></span>
                </span>
                <span class="text-xs text-gray-400">
                  Set this item as a staking reward. Everyday you’ll get
                  <span class="text-pink-500">FUDGE</span> coins for your
                  staking
                </span>
              </label>

              <hr />
              <div class="block flex justify-between mt-5">
                <button
                  class="py-1 font-semibold mx-auto w-40 sm:px-0 sm:w-72 text-violet-700 bg-violet-300 rounded"
                >
                  Save changes
                </button>
                <button
                  class="py-1 bg-red-500 border border-black font-semibold mx-auto w-40 sm:w-72 text-white rounded"
                >
                  Delete item
                </button>
              </div>
            </div>
            <!-- right starts here  -->
            <div class="xl:ml-10">
              <label class="block">
                <span class="font-bold text-gray-600"
                  ><span class="mr-2 text-pink-500">*</span>Upload your image,
                  video, audio, or 3D model</span
                >
                <span class="text-xs text-gray-400">
                  <br />
                  File types supported: JPG, PNG, GIF, SVG, MP4, WEBM, MP3, WAV,
                  OGG, GLB, GLTF. Max size: 100 MB
                </span>
                <div
                  class="mt-3 lg:w-[561px] lg:h-[561px] flex flex-col bg-gray-300 border-[10px] border-gray-300 rounded-lg"
                >
                  <div
                    class="border border-violet-500 py-32 rounded-lg bg-white p-2 w-full h-full"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-52 w-52 text-violet-500 mx-auto"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1"
                        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    <div
                      class="text-sm md:text-lg text-center mx-auto text-gray-500"
                    >
                      <span class="text-violet-500">Browse your PC</span> or
                      drag and drop your file
                    </div>
                  </div>
                </div>
              </label>
            </div>
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
} from '@heroicons/vue/outline';
import { PlusIcon } from '@heroicons/vue/solid';
import image from '../../assets/images/nft1.png';
import coverImage from '../../assets/images/unsplash_RFDP7_80v5A.png';
import NFTWrapper from '../../components/common/NFTWrapper.vue';
import { CATEGORIES } from '../../components/common/Common';
import CollectionHeader from '../../components/common/CollectionHeader.vue';
import FilterButton from '../../components/common/FilterButton.vue';
import Table from '../../components/common/Table.vue';
import TableSm from '../../components/common/TableSm.vue';
import AboutFudge from '../../components/common/AboutFudge.vue';
import SwitchButton from '../../components/common/SwitchButton.vue';
import AddButton from './components/AddButton.vue';
import ItemProperty from './components/ItemProperty.vue';
import PropertyCard from './components/PropertyCard.vue';
export default {
  components: {
    ChevronRightIcon,
    ChevronDownIcon,
    ChevronLeftIcon,
    NFTWrapper,
    CollectionHeader,
    FilterButton,
    Table,
    TableSm,
    AboutFudge,
    ArrowLeftIcon,
    GlobeIcon,
    PhotographIcon,
    SwitchButton,
    AddButton,
    PlusIcon,
    ItemProperty,
    PropertyCard,
  },
  data() {
    return {
      key: false,
      image,
      coverImage,
      categories: CATEGORIES,
      state: false,
    };
  },
  methods: {
    showModal() {},
  },
};
</script>
<style scoped src="../../assets/css/homepage.css"></style>
<style scoped src="../../assets/css/icons.css"></style>
