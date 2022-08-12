<template>
  <div>
    <DefaultLayout>
      <div class="w-screen bg-none xl:bg-vector bg-top bg-no-repeat">
        <div class="xl:flex xl:justify-center">
          <div>
            <CollectionHeader
              class="grad-border rounded-lg w-screen h-96 xl:w-c-xl md:h-c-xl mt-10 md:mt-20 lg:flex xl:rounded-lg"
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
          <div
            class="grad-border rounded bg-white drop-shadow flex justify-between w-screen xl:w-c-xl mt-10 md:mx-5 xl:mx-24"
          >
            <vue3-chart-js
              ref="chartRef"
              :height="60"
              :type="lineChart.type"
              :data="lineChart.data"
              @before-render="beforeRenderLogic"
              :key="key"
            ></vue3-chart-js>
          </div>
        </div>

        <div class="top-collections flex justify-center">
          <div>
            <div class="mx-3 mt-10 md:mx-5 xl:mx-28">
              <p class="font-light">
                Female punx are a subculture of the punk movement that is
              </p>
            </div>

            <Table
              :headers="[
                'Action',
                'Item',
                'From',
                'To',
                'Amount',
                'Price',
                'Time',
              ]"
              class="hidden md:table table-auto w-80 md:w-screen rounded-md xl:w-c-xl mt-10 md:mx-5 xl:mx-28 xl:justify-center mt-6 md:mx-5 xl:mx-28"
            >
              <tr
                v-for="(data, index) in tableData"
                :key="index"
                class="text-gray-400 font-normal border-b-8 border-t-8 border-gray-100 my-1s bg-gray-50 rounded-md py-2 px-2"
              >
                <td class="mt-1.5">{{ data.action }}</td>
                <td>
                  <span class="flex justify-center">
                    <img
                      class="rounded w-8 h-8 mt-0.5"
                      src="https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F6170e01f8d7639b95a7f2eeb%2FSotheby-s-NFT-Natively-Digital-1-2-sale-Bored-Ape-Yacht-Club--8817-by-Yuga-Labs%2F0x0.png%3Ffit%3Dscale"
                    />
                    <span class="ml-2 mt-1.5"> {{ data.item }} </span>
                  </span>
                </td>
                <td class="flex justify-center">
                  <span class="flex justify-center">
                    <Author
                      coverImage="https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F6170e01f8d7639b95a7f2eeb%2FSotheby-s-NFT-Natively-Digital-1-2-sale-Bored-Ape-Yacht-Club--8817-by-Yuga-Labs%2F0x0.png%3Ffit%3Dscale"
                      :name="data.from"
                      class="h-8 mt-1.5 text-gray-500 px-1.5 py-1"
                    />
                  </span>
                </td>
                <td>
                  <span class="flex justify-center">
                    <Author
                      coverImage="https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F6170e01f8d7639b95a7f2eeb%2FSotheby-s-NFT-Natively-Digital-1-2-sale-Bored-Ape-Yacht-Club--8817-by-Yuga-Labs%2F0x0.png%3Ffit%3Dscale"
                      :name="data.to"
                      class="h-8 mt-1.5 text-gray-500 px-1.5 py-1"
                    />
                  </span>
                </td>
                <td class="col-span-0.5 py-2.5">{{ data.amount }}</td>
                <td class="flex justify-center py-2">
                  <span class="flex">
                    <i class="tera-icon w-4 h-4 mr-1"></i>
                    <span class="-mt-1 text-gray-500 font-semibold">
                      {{ data.price }}
                      <span
                        class="ml-3 hidden xl:inline xl:font-light text-gray-400"
                        >$3,004,250.32</span
                      ></span
                    >
                  </span>
                </td>
                <td>
                  <span> {{ data.time }} </span>
                </td>
              </tr>
            </Table>
            <TableSm
              v-for="index in 4"
              :key="index"
              class="mx-3 mt-5 md:hidden"
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
import NFTWrapper from '../../components/common/NFTWrapper.vue';
import { CATEGORIES, STEPS } from '../../components/common/Common';
import CollectionHeader from '../../components/common/CollectionHeader.vue';
import FilterButton from '../../components/common/FilterButton.vue';
import Vue3ChartJs from '@j-t-mcc/vue3-chartjs';
import Table from '../../components/common/Table.vue';
import TableSm from '../../components/common/TableSm.vue';
import AboutFudge from '../../components/common/AboutFudge.vue';
import Author from '../../components/common/Author.vue';
export default {
  components: {
    ChevronRightIcon,
    ChevronDownIcon,
    ChevronLeftIcon,
    NFTWrapper,
    CollectionHeader,
    FilterButton,
    Vue3ChartJs,
    Table,
    TableSm,
    AboutFudge,
    Author
  },
  setup() {
    const lineChart = {
      id: 'line',
      type: 'line',
      data: {
        labels: [1, 5, 10, 15, 20, 25, 30],
        datasets: [
          {
            label: 'All time price',
            data: [0, 10, 10, 15, 10, 25, 30],
            fill: false,
            borderColor: 'blue',
            tension: 0.4,
            radius: 1,
          },
        ],
      },
    };

    const beforeRenderLogic = (event) => {
      event;
    };

    return {
      lineChart,
      beforeRenderLogic,
    };
  },
  data() {
    return {
      key: false,
      image,
      coverImage,
      categories: CATEGORIES,
      description: `Become a JOY Collector! A JOY is an original, virtual muse from JOYWORLD. 
        Each one brings you a unique magical power when you collect them. 
        All JOYs are one-of-one, handmade in virtual reality by John Orion Young. 
        JOYs are starting to make JOYtoys for you!`,
      tableData: [
        {
          action: 'Transfer',
          from: 'Flair Buchi',
          to: 'Flair Buchi',
          item: 'Female Punx',
          price: 18.02,
          amount: 1,
          time: '23 mins ago',
        },
        {
          action: 'Transfer',
          from: 'Flair Buchi',
          to: 'Flair Buchi',
          item: 'Female Punx',
          price: 18.02,
          amount: 1,
          time: '23 mins ago',
        },
        {
          action: 'Transfer',
          from: 'Flair Buchi',
          to: 'Flair Buchi',
          item: 'Female Punx',
          price: 18.02,
          amount: 1,
          time: '23 mins ago',
        },
      ],
    };
  },
};
</script>
<style scoped src="../../assets/css/homepage.css"></style>
