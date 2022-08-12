<template>
  <div class="flex author">
    <div class="rounded mt-1 overflow-hidden border-2 border-green-300 w-4 h-4">
      <img :src="coverImage" class="w-6 h-6" />
    </div>
    <span class="flex mt-1 w-auto px-2 max-w-[120px] text-ellipse overflow-hidden">
      <!-- <i class="verified-icon w-3 mt-0.5 mr-1"></i> -->
      <span class="font-normal -mt-0.5 text-sm"> {{ name }} </span>
    </span>
  </div>
</template>
<script>
export default {
    props: { 
        coverImage: String,
        name: String,
    }
}
</script>

<style scoped>
.author {
  background-color: rgba(12, 8, 21, 0.4);
}
</style>