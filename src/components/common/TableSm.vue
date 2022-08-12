<template>
  <div class="drop-shadow-lg bg-white p-2 rounded-lg px-3">
    <div class="flex justify-between">
      <div class="w-auto">
        <div class="font-bold text-gray-500">Item</div>
        <span class="flex">
          <img
            class="rounded w-8 h-8 mt-0.5"
            src="https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F6170e01f8d7639b95a7f2eeb%2FSotheby-s-NFT-Natively-Digital-1-2-sale-Bored-Ape-Yacht-Club--8817-by-Yuga-Labs%2F0x0.png%3Ffit%3Dscale"
          />
          <span class="ml-2 mt-1.5 w-auto mr-10">Female punk #002</span>
        </span>
      </div>
      <div class="mr-10">
        <div class="font-bold text-gray-500 mb-1.5">
          {{ isloyalties ? 'Time' : 'Transfer' }}
        </div>
        <div>23 mins ago</div>
      </div>
      <div>
        <div class="font-bold text-gray-500">Amount</div>
        <div class="mt-1.5">1</div>
      </div>
    </div>
    <div class="mt-3 flex justify-between">
      <div class="w-auto">
        <div class="font-bold text-gray-500">Price</div>
        <div class="flex mt-1.5">
          <i class="tera-icon w-4 h-4 mr-1"></i>
          <span class="-mt-1 text-gray-500 font-semibold">18.0 2</span>
        </div>
      </div>
      <div class="w-auto" v-if="isloyalties">
        <div class="font-bold text-gray-500">Fee</div>
        <div class="flex mt-1.5">
          <i class="tera-icon w-4 h-4 mr-1"></i>
          <span class="-mt-1 text-gray-500 font-semibold">18.0 2</span>
        </div>
      </div>
      <div class="w-auto" v-if="!isloyalties">
        <div class="font-bold text-gray-500">From</div>
        <div>
          <Author
            coverImage="https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F6170e01f8d7639b95a7f2eeb%2FSotheby-s-NFT-Natively-Digital-1-2-sale-Bored-Ape-Yacht-Club--8817-by-Yuga-Labs%2F0x0.png%3Ffit%3Dscale"
            name="Flair Buchi"
            class="h-8 text-gray-500 py-1"
          />
        </div>
      </div>
      <div v-if="!isloyalties">
        <span class="font-bold text-gray-500">To</span>
        <span class="">
          <Author
            coverImage="https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F6170e01f8d7639b95a7f2eeb%2FSotheby-s-NFT-Natively-Digital-1-2-sale-Bored-Ape-Yacht-Club--8817-by-Yuga-Labs%2F0x0.png%3Ffit%3Dscale"
            name="Flair Buchi"
            class="h-8 text-gray-500 py-1"
          />
        </span>
      </div>
    </div>
  </div>
</template>
<script>
import Author from './Author.vue';
export default {
  components: { Author },
  props: {
    collection: Array,
    isloyalties: { type: Boolean, default: false },
  },
};
</script>
