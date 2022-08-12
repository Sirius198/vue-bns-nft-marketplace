<template>
  <div class="bg-black rounded-lg flex justify-between px-2">
    <button
      @click.prevent="goTo(1)"
      class="w-28 h-8 rounded-lg flex px-2 py-1.5 mt-2"
      :class="{
        'bg-purple-300 text-purple-900': isActive === 1,
        'text-gray-300': isActive !== 1,
      }"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="feather feather-align-center"
      >
        <line x1="18" y1="10" x2="6" y2="10"></line>
        <line x1="21" y1="6" x2="3" y2="6"></line>
        <line x1="21" y1="14" x2="3" y2="14"></line>
        <line x1="18" y1="18" x2="6" y2="18"></line>
      </svg>
      <span class="ml-1 font-semibold text-sm mt-0.5">Description</span>
    </button>
    <button
      @click.prevent="goTo(2)"
      class="w-auto h-8 rounded-lg flex py-1.5 mt-2"
      :class="{
        'bg-purple-300 text-purple-900 px-2': isActive === 2,
        'text-gray-300': isActive !== 2,
      }"
    >
      <svg
        width="16"
        height="17"
        viewBox="0 0 16 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="mr-1 mt-1"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M2 3.97906C2 3.16221 2.66218 2.50003 3.47903 2.50003H12.521C13.3378 2.50003 14 3.16221 14 3.97906V13.021C14 13.8378 13.3378 14.5 12.521 14.5H3.47903C2.66218 14.5 2 13.8378 2 13.021V3.97906Z"
          stroke="currentColor"
          stroke-width="1.47903"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M2 6.50003H14"
          stroke="currentColor"
          stroke-width="1.47903"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M6 14.5V6.50003"
          stroke="currentColor"
          stroke-width="1.47903"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>

      <span class="text-sm mt-[3px] font-semibold">About Collection</span>
    </button>
    <button
      @click.prevent="goTo(3)"
      class="w-28 h-8 rounded-lg flex px-2 py-1.5 mt-2"
      :class="{
        'bg-purple-300 text-purple-900': isActive === 3,
        'text-gray-300': isActive !== 3,
      }"
    >
      <svg
        width="16"
        height="17"
        viewBox="0 0 16 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="mt-1"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M8.00065 1.83337L1.33398 5.16671L8.00065 8.50004L14.6673 5.16671L8.00065 1.83337V1.83337Z"
          stroke="currentColor"
          stroke-width="1.47903"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1.33398 11.8334L8.00065 15.1667L14.6673 11.8334"
          stroke="currentColor"
          stroke-width="1.47903"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1.33398 8.50006L8.00065 11.8334L14.6673 8.50006"
          stroke="currentColor"
          stroke-width="1.47903"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>

      <span class="ml-1 mt-0.5 font-semibold text-sm">Properties</span>
    </button>
    <button
      @click.prevent="goTo(4)"
      class="w-28 h-8 rounded-lg flex px-2 py-1.5 mt-2"
      :class="{
        'bg-purple-300 text-purple-900': isActive === 4,
        'text-gray-300': isActive !== 4,
      }"
    >
      <svg
        width="16"
        height="17"
        viewBox="0 0 16 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="mt-1"
      >
        <path
          d="M5.33398 4.5H14.0007"
          stroke="currentColor"
          stroke-width="1.47903"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M5.33398 8.5H14.0007"
          stroke="currentColor"
          stroke-width="1.47903"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M5.33398 12.5H14.0007"
          stroke="currentColor"
          stroke-width="1.47903"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M2.66602 4.5H1.99935"
          stroke="currentColor"
          stroke-width="1.47903"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M2.66602 8.5H1.99935"
          stroke="currentColor"
          stroke-width="1.47903"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M2.66602 12.5H1.99935"
          stroke="currentColor"
          stroke-width="1.47903"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>

      <span class="ml-1 font-semibold text-sm mt-0.5">Details</span>
    </button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isActive: 1,
    };
  },
  methods: {
    goTo(value) {
      this.isActive = value;
      this.$emit('goTo', value);
    },
  },
};
</script>
