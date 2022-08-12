<template>
  <!-- :style="`background: url('${coverImage}') center no-repeat; background-size: 350px 400px;`" -->
  <div
    class="nft-w-container w-full h-64"
  >
    <img :src="coverImage" class="w-full h-48 lg:h-56" alt="">
    <div class="nft-w-description h-24 w-full xl:w-full">
      <div class="nft-w-description-inner w-full flex justify-between">
        <span class="flex">
          <img
            class="w-3.5 h-3.5 xl:mt-1 mr-1"
            src="../../assets/images/verified.png"
            alt=""
          />
          <span
            class="nft-w-text text-tiny sm:text-xs lg:text-xs lg:mt-1 md:text-tiny"
            >Josie</span
          >
        </span>
        <span class="flex">
          <img
            class="w-3.5 h-3.5 xl:mt-1 mr-1"
            src="../../assets/images/tera.png"
            alt=""
          />
          <span
            class="nft-w-text text-tiny sm:text-xs lg:text-xs lg:mt-1 md:text-tiny"
            >2.4</span
          >
        </span>
      </div>
      <div
        class="nft-w-description-inner -mt-1 sm:mt-1 w-full flex grid grid-cols-6"
      >
        <span
          class="nft-w-text text-tiny sm:text-xs lg:text-xs md:text-tiny col-span-4"
        >
          {{ nft?.description }}
        </span>
        <span
          class="nft-w-text text-tiny sm:text-xs lg:text-xs md:text-tiny col-span-2 text-right"
          >Last: 4.47</span
        >
      </div>
      <div
        class="nft-w-description-inner mt-3 mb-2 w-full flex justify-between"
      >
        <span
          class="flex nft-w-buy text-xxs sm:text-xs lg:text-sm md:text-xxs xl:text-xs cursor-pointer"
          >Buy <span class="ml-1 hidden lg:block">now</span>
        </span>
        <span
          v-if="!isRecent"
          class="mt-1 sm:mt-0.5 nft-w-text text-tiny sm:text-xs lg:text-sm md:text-tiny flex cursor-pointer"
        >
          <EyeIcon class="w-3 h-3 sm:w-4 sm:h-4 xl:mt-0.5 mr-1" />
          <span class="nft-w-text">64</span>
        </span>
        <span
          v-if="!isRecent"
          class="mt-1 sm:mt-0.5 nft-w-text text-tiny sm:text-xs lg:text-sm md:text-tiny flex cursor-pointer"
        >
          <UsersIcon class="w-3 h-3 sm:w-4 sm:h-4 xl:mt-0.5 mr-1" />
          <span class="nft-w-text">1</span>
        </span>
        <span
          v-if="!isRecent"
          class="mt-1 sm:mt-0.5 nft-w-text text-tiny sm:text-xs lg:text-sm md:text-tiny flex cursor-pointer"
        >
          <QrcodeIcon class="w-3 h-3 sm:w-4 sm:h-4 xl:mt-0.5 mr-1" />
          <span class="nft-w-text">50</span>
        </span>
        <span
          class="mt-1 sm:mt-0.5 nft-w-text text-tiny sm:text-xs lg:text-sm md:text-tiny flex cursor-pointer"
        >
          <HeartIcon class="w-3 h-3 sm:w-4 sm:h-4 xl:mt-0.5 mr-1" />
          <span class="nft-w-text">24</span>
        </span>
      </div>
    </div>
  </div>
</template>
<script>
import {
  HeartIcon,
  EyeIcon,
  UsersIcon,
  QrcodeIcon,
} from '@heroicons/vue/outline';
export default {
  components: { HeartIcon, EyeIcon, UsersIcon, QrcodeIcon },
  props: {
    coverImage: {
      type: String,
      required: true,
      default: '',
    },
    isRecent: {
      type: Boolean,
      default: false,
    },
    nft: Object,
  },
  data() {
    return {};
  },
};
</script>
<style scoped>
.nft-w-container {
  filter: drop-shadow(0px 19px 46px rgba(0, 0, 0, 0.22));
}
.nft-w-description {
  /* width: 288px; */
  /* height: 91px; */
  padding: 8px;
  background: rgba(12, 8, 21, 0.4);
  backdrop-filter: blur(27px);

  border-radius: 0px 0px 12px 12px;
}
.nft-w-description-inner {
  /* display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center; */
  /* padding: 0px; */

  /* position: static; */
  /* width: 272px; */
  height: 23px;
  /* left: 0px; */
  /* top: 0px; */
}
.nft-w-text {
  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  color: #f3f3f3;
}
.nft-w-buy {
  font-family: Inter;
  font-style: normal;
  font-weight: 600;
  line-height: 19px;

  color: #00fff0;
}
.font-xxs {
  font-size: 0.55rem;
}
</style>
