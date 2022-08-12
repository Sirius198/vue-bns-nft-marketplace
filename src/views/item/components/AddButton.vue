<template>
  <button
    @click.prevent="$emit('onClick')"
    class="cursor-pointer bg-violet-400 py-4 hover:bg-violet-600 text-white border border-violet-800 rounded h-24 w-20 flex flex-col justify-center"
  >
    <PlusIcon class="w-7 font-bold h-7 mx-auto" />
    <span class="mx-auto text-xs mt-2">Add new</span>
  </button>
</template>
<script>
import { PlusIcon } from '@heroicons/vue/solid';
export default {
  components: { PlusIcon },
  name: 'add-button',
  props: {
    name: String,
    description: String,
  },
};
</script>
