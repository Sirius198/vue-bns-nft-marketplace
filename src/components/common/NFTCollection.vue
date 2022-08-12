<template>
  <!-- :style="`background: url('${coverImage}') center center no-repeat`" -->
  <!-- :style="`background: url('${coverImage}') center no-repeat; background-size: 350px 400px;`" -->
  <div
    class="w-full relative md:mb-10 lg:mb-0 relative"
  >
    <img :src="coverImage" />
    <div
      class="nft-w-description absolute w-full xl:w-full absolute bottom-0 xl:-bottom-12"
    >
      <div class="nft-w-description-inner w-full flex justify-between">
        <span class="flex">
          <img
            class="w-3.5 h-3.5 mr-1"
            src="../../assets/images/verified.png"
            alt=""
          />
          <span class="nft-w-text text-xs">Josie</span>
        </span>
        <span class="nft-w-text text-xs col-span-2 text-right"
          >Volume traded</span
        >
      </div>
      <div class="nft-w-description-inner w-full flex justify-between">
        <span class="nft-w-text text-xs col-span-4">Items: 10,000</span>
        <span class="flex">
          <img
            class="w-3.5 h-3.5 mr-1"
            src="../../assets/images/tera.png"
            alt=""
          />
          <span class="nft-w-text text-xs">2.4</span>
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
    },
    isRecent: {
      type: Boolean,
      default: false,
    },
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
  height: 57px;
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
</style>
