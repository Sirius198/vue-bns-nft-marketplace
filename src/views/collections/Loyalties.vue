<template>
  <div>
    <DefaultLayout>
      <div class="w-screen">
        <div class="flex mx-3 mt-10 md:mx-5 xl:mx-28">
          <ArrowLeftIcon class="w-10 h-5 mt-0.5 mr-3 text-purple-500" />
          <span class="font-light text-gray-400"
            >My collections / Femal Punx /
            <span class="text-gray-500 font-semibold">Loyalty payouts</span>
          </span>
        </div>
        <div class="mx-3 mt-10 md:mx-5 xl:mx-28">
          <h1 class="xl:ml-3 text-xl font-bold">Loyalty payouts</h1>
          <p class="xl:ml-3 mt-2 text-gray-400">
            After you configure a fee on your collection, pending and completed
            payouts to you will appear here. On any given payout round, you'll
            only receive a payout if you've accumulated more than ~$60.00 worth
            of fees.
          </p>
        </div>

        <div class="top-collections flex justify-center">
          <div>
            <div class="mx-3 mt-10 md:mx-5 xl:mx-28">
              <p class="font-light ml-14 md:ml-5">
                Payout history for all editions of Female Punx
              </p>
            </div>

            <Table
              :headers="['Item', 'Price', 'Amount', 'Fee earned', 'Time']"
              class="hidden md:table table-auto w-80 md:w-screen rounded-md xl:w-c-xl mt-10 md:mx-5 xl:mx-28 xl:justify-center mt-6 md:mx-5 xl:mx-28"
            >
              <tr
                v-for="(data, index) in tableData"
                :key="index"
                class="text-gray-400 font-normal border-b-8 border-t-8 border-gray-100 my-1s bg-gray-50 rounded-md py-2 px-2"
              >
                <td>
                  <span class="flex justify-center">
                    <img
                      class="rounded w-8 h-8 mt-0.5"
                      src="https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F6170e01f8d7639b95a7f2eeb%2FSotheby-s-NFT-Natively-Digital-1-2-sale-Bored-Ape-Yacht-Club--8817-by-Yuga-Labs%2F0x0.png%3Ffit%3Dscale"
                    />
                    <span class="ml-2 mt-1.5"> {{ data.item }} </span>
                  </span>
                </td>

                <td class="flex justify-center py-2">
                  <span class="flex mt-1.5">
                    <i class="tera-icon w-4 h-4 mr-1"></i>
                    <span class="-mt-1 text-gray-500 font-semibold">
                      {{ data.price }}
                    </span>
                  </span>
                </td>
                <td class="col-span-0.5 py-2.5">{{ data.amount }}</td>
                <td class="flex justify-center py-2">
                  <span class="flex">
                    <i class="tera-icon w-4 h-4 mr-1"></i>
                    <span class="-mt-1 text-gray-500 font-semibold">
                      {{ data.fee }}
                    </span>
                  </span>
                </td>
                <td>
                  <span> {{ data.time }} </span>
                </td>
              </tr>
            </Table>
            <div class="px-10">
              <TableSm
                :isloyalties="true"
                v-for="index in 4"
                :key="index"
                class="w-screen mx-3 mt-5 md:hidden"
              />
            </div>
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
  ArrowLeftIcon,
} from '@heroicons/vue/outline';
import image from '../../assets/images/nft1.png';
import coverImage from '../../assets/images/unsplash_RFDP7_80v5A.png';
import NFTWrapper from '../../components/common/NFTWrapper.vue';
import { CATEGORIES } from '../../components/common/Common';
import CollectionHeader from '../../components/common/CollectionHeader.vue';
import FilterButton from '../../components/common/FilterButton.vue';
import Table from '../../components/common/Table.vue';
import TableSm from '../../components/common/TableSm.vue';
import AboutFudge from '../../components/common/AboutFudge.vue';
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
  },
  data() {
    return {
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
<style scoped src="../../assets/css/homepage.css"></style>
