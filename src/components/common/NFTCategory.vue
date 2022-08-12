<template>
  <div
    class="nft-w-container cursor-pointer relative"
    :style="`background: url('${coverImage}') center no-repeat;`"
  >
    <div class="nft-w-description w-full xl:w-full absolute bottom-0">
      <div class="nft-w-description-inner w-full flex flex-auto justify-center">
        <span class="nft-w-buy text-sm xl:text-base mt-3">{{
          categoryName
        }}</span>
      </div>
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
    categoryName: {
      type: String,
      required: true,
    },
  },
  data() {
    return {};
  },
};
</script>
<style scoped>
.nft-w-container {
  width: 389px;
  height: 432.15px;
  filter: drop-shadow(0px 25.6632px 62.1319px rgba(0, 0, 0, 0.22));
}
.nft-w-description {
  /* width: 288px; */
  height: 63px;
  padding: 8px;
  background: rgba(12, 8, 21, 0.4);
  backdrop-filter: blur(27px);

  border-radius: 0px 0px 12px 12px;
}
.nft-w-description-inner {
  height: 23px;
}
.nft-w-text {
  font-family: Inter;
  font-style: normal;
  font-weight: 500;
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
@media (max-width: 639px) {
  .nft-w-container {
    width: 355px;
    height: 132.15px;
  }
}
@media (min-width: 640px) and (max-width: 767px) {
  .nft-w-container {
    width: 305px;
    height: 332.15px;
  }
}
@media (min-width: 768px) and (max-width: 1023px) {
  .nft-w-container {
    width: 329px;
    height: 332.15px;
  }
}
@media (min-width: 1024px) and (max-width: 1279px) {
  .nft-w-container {
    width: 302px;
  }
}
</style>
