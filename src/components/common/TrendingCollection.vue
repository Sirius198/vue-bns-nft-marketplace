<template>
  <!-- :style="`background: url('${coverImage}') center center no-repeat`" -->
  <!-- :style="`background: url('${coverImage}') center no-repeat; background-size: 350px 400px;`" -->
  <div class="nft-w-container py-2 relative">
    <img :src="coverImage" />
    <div
      class="nft-w-description h-32 w-full md:-bottom-3 xl:w-full absolute bottom-0 py-3"
    >
      <div class="flex justify-center -mt-6">
        <button
          class="w-auto h-7 bg-gray-900 rounded-lg flex justify-between p-2"
        >
          <span class="border-default rounded w-3.5 h-3.5 mr-3">
            <img :src="coverImage" />
          </span>
          <span class="flex">
            <img
              class="w-3 h-3 mt-0.5 mr-1"
              src="../../assets/images/verified.png"
              alt=""
            />
            <span class="text-white text-xxs">Josie</span>
          </span>
        </button>
      </div>
      <div class="h-6 mt-2 w-full flex justify-between">
        <span>
          <span class="flex">
            <img
              class="w-3.5 h-3.5 mr-1"
              src="../../assets/images/verified.png"
              alt=""
            />
            <span class="nft-w-text text-xxs">Josie <br /> </span>
          </span>

          <span class="mt-0.5 h-6 w-full flex justify-between">
            <span class="nft-w-text text-xxs col-span-4">Items: 10,000</span>
          </span>
        </span>
        <span class="nft-w-text text-xxs"
          >Floor price:
          <span class="flex mt-0.5">
            <img
              class="w-3.5 h-3.5 mr-1"
              src="../../assets/images/tera.png"
              alt=""
            />
            <span class="nft-w-text text-xxs">0.02</span>
          </span>
        </span>
        <span class="nft-w-text text-xxs col-span-2 text-right"
          >Volume traded
          <span class="flex mt-0.5">
            <img
              class="w-3.5 h-3.5 mr-1"
              src="../../assets/images/tera.png"
              alt=""
            />
            <span class="nft-w-text text-xxs">2.4</span>
          </span>
        </span>
      </div>

      <p
        v-if="isTrendingPage"
        class="h-16 mt-4 pb-3 text-clip overflow-hidden nft-w-text text-tiny w-full"
      >
        {{ description }}
      </p>
    </div>
  </div>
</template>
<script>
import { HeartIcon } from '@heroicons/vue/outline';
export default {
  components: { HeartIcon },
  props: {
    coverImage: {
      type: String,
      required: true,
    },
    isTrendingPage: {
      type: Boolean,
      default: false,
    },
    description: {
      type: String,
      required: false,
    },
  },
  data() {
    return {};
  },
};
</script>
<style scoped>
.nft-w-container {
  /* width: 288px; */
  /* height: 319.95px; */
  /* position: relative; */
  filter: drop-shadow(0px 19px 46px rgba(0, 0, 0, 0.22));
  /* background: url('../../assets/images//nft1.png'); */
}

.nft-w-description {
  /* width: 288px; */
  /* height: 123px; */
  padding: 8px;
  background: rgba(12, 8, 21, 0.4);
  backdrop-filter: blur(27px);

  border-radius: 0px 0px 12px 12px;
}

.nft-w-text {
  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  /* font-size: 12px; */
  line-height: 15px;
  color: #f3f3f3;
}
.nft-w-buy {
  font-family: Inter;
  font-style: normal;
  font-weight: 600;
  line-height: 19px;

  color: #00fff0;
}
.border-default {
  border: 1px solid #00fff0;
}
</style>
