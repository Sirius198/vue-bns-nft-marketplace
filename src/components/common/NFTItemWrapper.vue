<template>
  <div class="nft-w-container w-full relative md:mb-10 lg:mb-0 relative">
    <img :src="coverImage" />
    <div class="c-blur w-5 h-5 py-0.5 rounded absolute right-2 top-4">
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 25 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8.97266 4C9.52494 4 9.97266 3.55228 9.97266 3C9.97266 2.44772 9.52494 2 8.97266 2V4ZM2.97266 8C2.97266 8.55228 3.42037 9 3.97266 9C4.52494 9 4.97266 8.55228 4.97266 8H2.97266ZM20.9727 8C20.9727 8.55228 21.4204 9 21.9727 9C22.5249 9 22.9727 8.55228 22.9727 8H20.9727ZM16.9727 2C16.4204 2 15.9727 2.44772 15.9727 3C15.9727 3.55228 16.4204 4 16.9727 4V2ZM16.9727 20C16.4204 20 15.9727 20.4477 15.9727 21C15.9727 21.5523 16.4204 22 16.9727 22V20ZM22.9727 16C22.9727 15.4477 22.5249 15 21.9727 15C21.4204 15 20.9727 15.4477 20.9727 16H22.9727ZM4.97266 16C4.97266 15.4477 4.52494 15 3.97266 15C3.42037 15 2.97266 15.4477 2.97266 16H4.97266ZM8.97266 22C9.52494 22 9.97266 21.5523 9.97266 21C9.97266 20.4477 9.52494 20 8.97266 20V22ZM8.97266 2H5.97266V4H8.97266V2ZM5.97266 2C4.3158 2 2.97266 3.34315 2.97266 5H4.97266C4.97266 4.44772 5.42037 4 5.97266 4V2ZM2.97266 5V8H4.97266V5H2.97266ZM22.9727 8V5H20.9727V8H22.9727ZM22.9727 5C22.9727 3.34315 21.6295 2 19.9727 2V4C20.5249 4 20.9727 4.44772 20.9727 5H22.9727ZM19.9727 2H16.9727V4H19.9727V2ZM16.9727 22H19.9727V20H16.9727V22ZM19.9727 22C21.6295 22 22.9727 20.6569 22.9727 19H20.9727C20.9727 19.5523 20.5249 20 19.9727 20V22ZM22.9727 19V16H20.9727V19H22.9727ZM2.97266 16V19H4.97266V16H2.97266ZM2.97266 19C2.97266 20.6569 4.3158 22 5.97266 22V20C5.42037 20 4.97266 19.5523 4.97266 19H2.97266ZM5.97266 22H8.97266V20H5.97266V22Z"
          fill="white"
        />
      </svg>
    </div>
    <div
      class="nft-w-description h-10 absolute w-full xl:w-full absolute -bottom-10 sm:bottom-0 md:-bottom-10 lg:-bottom-16 xl:-bottom-20"
    >
      <div class="h-10 mb-2 w-full flex justify-between">
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
  ArrowsExpandIcon,
} from '@heroicons/vue/outline';
export default {
  components: { HeartIcon, EyeIcon, UsersIcon, QrcodeIcon, ArrowsExpandIcon },
  props: {
    coverImage: {
      type: String,
      required: true,
    },
    isRecent: {
      type: Boolean,
      default: false,
    },
    showBuy: {
      type: Boolean,
      default: true,
    },
    isItem: {
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
.c-blur {
  background: rgba(12, 8, 21, 0.5);
  box-shadow: 0px 19px 46px rgba(0, 0, 0, 0.22);
  backdrop-filter: blur(26px);
}
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
  /* height: 18px; */
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
