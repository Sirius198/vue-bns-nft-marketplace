<template>
  <table class="">
    <thead class="text-center bg-gray-200 h-10 rounded-md">
      <tr>
        <th v-for="(header, index) in headers" :key="index">{{ header }}</th>
      </tr>
    </thead>
    <tbody class="text-center">
      <slot />
    </tbody>
  </table>
</template>
<script>
export default {
  props: {
    headers: Array,
  },
};
</script>
