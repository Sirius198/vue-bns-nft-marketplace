<script setup lang="ts">
import { initController } from 'controller';
import { ref } from 'vue';
import Loader from './components/common/Loader.vue'
const initialized = ref<boolean>(false);

initController().then(() => {
  initialized.value = true;
});
</script>

<template>
  <div v-if="!initialized"> <Loader :isLoading="true" /> </div>
  <div v-else>
   <router-view></router-view>
  </div>
</template>
