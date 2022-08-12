<template>
  <button
    @click.prevent="$emit('close')"
    class="rounded pl-2 py-1 text-left w-auto text-xs text-sm view-all-btn bg-purple-200 relative flex justify-between"
  >
    <span class="mr-1 text-sm font-light mt-0.5 text-gray-600">
      {{ label }}:
    </span>
    <span class="text-xs mt-0.5 sm:text-sm text-blue-600 mr-4 font-semibold">
      {{ value }}
    </span>
    <svg
      class="mt-0.5 w-5 text-blue-600 h-5 mt-1 mr-1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fill-rule="evenodd"
        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
        clip-rule="evenodd"
      />
    </svg>
  </button>
</template>
<script>
export default {
  emits: ['close'],
  props: {
    value: String,
    label: String,
  },
};
</script>
