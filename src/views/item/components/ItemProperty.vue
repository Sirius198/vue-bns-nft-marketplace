<template>
  <label class="block">
    <span class="font-bold text-gray-600">{{ name }}</span>
    <span class="text-xs text-gray-400">
      <br />
      {{ description }}
    </span>
  </label>
</template>
<script>

export default {
  name: 'item-property',
  props: {
    name: String,
    description: String,
  },
};
</script>
