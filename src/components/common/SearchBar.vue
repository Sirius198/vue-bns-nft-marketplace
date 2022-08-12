<template>
  <label class="block clear-right">
    <span class="flex p-3 relative">
      <span class="p-4 left-2 absolute">
        <svg
          class="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          ></path>
        </svg>
      </span>
      <input
        type="text"
        class="w-full ring ring-gray-200 h-11 searchBar mt-1 pl-10 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
        placeholder="Search for NFTs, collections and profiles"
      />
    </span>
  </label>
</template>
<script>
export default {
  props: {
    placeholder: String,
  },
};
</script>
