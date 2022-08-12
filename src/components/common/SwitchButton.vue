<template>
  <div class="flex items-center w-full">
    <label for="toogleA" class="flex items-center cursor-pointer" @click.prevent="toggle">
      <!-- toggle -->
      <div class="relative">
        <!-- input -->
        <input id="toogleA" type="checkbox" :checked="state" class="sr-only" />
        <!-- line -->
        <div :class="[state ? 'bg-[#9B7DF0]' : 'bg-gray-200']" class="w-[44px] h-[23.7px]  rounded shadow-inner"></div>
        <!-- dot -->
        <div class="dot absolute w-5 h-[17.37px] bg-gray-400 rounded shadow left-0.5 top-[3px] transition"></div>
      </div>

    </label>
  </div>
</template>
<script>
export default {
  props: ['state'],
  methods: {
    toggle() {
      this.$emit('toggle');
    },
  },
};
</script>
<style>
input:checked~.dot {
  transform: translateX(100%);
  background-color: #ffffff;
}
</style>
