<template>
  <div v-for="index in 5" :key="index"
    class="h-20 flex p-1 rounded flex-row w-32 md:w-36 overflow-x-hidden bg-violet-200 border border-violet-600">
    <div class="relative">
      <button class="bg-violet-300 hover:bg-violet-400 text-white w-5 h-5 rounded absolute right-2 md:-right-1">
        <XIcon class="w-4 h-4 mx-auto" />
      </button>
      <div class="text-blue-700 text-xs">body</div>
      <div
        class="text-violet-700 my-1.5 w-32 overflow-x-hidden text-ellipsis whitespace-nowrap font-bold text-sm lg:text-base">
        Light Blue somethubg
      </div>
      <div class="text-gray text-xs">3.4% rarity</div>
    </div>
  </div>
</template>
<script>
import { XIcon } from '@heroicons/vue/outline';
export default {
  name: 'property=card',
  components: { XIcon },
  props: {
    properties: Array
  }
};
</script>
