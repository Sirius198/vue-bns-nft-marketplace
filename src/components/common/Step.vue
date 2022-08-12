<template>
  <div>
    <div class="flex flex-col">
      <img class="w-10 h-10" :src="step.image" alt="" />
      <div class="bns-purple mt-3 font-bold">{{ step.title }}</div>
      <div class="text-sm mt-5 text-gray-400 font-medium leading-5">
        {{ step.content }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    step: {
      type: Object,
      required: true,
    },
  },
};
</script>
<style scoped src="../../assets/css/homepage.css"></style>
