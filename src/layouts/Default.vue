<template>
  <div class="relative flex flex-col overflow-hidden">
    <TopNavBar class="z-50 fixed" />

    <div class="mt-20">
        <slot />
    </div>

    <div class="w-full h-20 bg-grad mt-10"></div>
    <div class="flex justify-center">
      <Footer class="w-full h-96" />
    </div>
  </div>
</template>
<script>
import Footer from '../components/common/Footer.vue';
import TopNavBar from '../components/common/TopNavBar.vue';
export default {
  name: 'DefaultLayout',
  components: {
    Footer,
    TopNavBar,
  },
};
</script>
