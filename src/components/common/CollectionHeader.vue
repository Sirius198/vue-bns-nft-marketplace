<template>
  <div class="w-full relative flex justify-center bg-cover" :style="`background: url('${coverImage}') center center no-repeat`" style="background-size:cover;">
    <div class="w-80 h-10 bg-black rounded-lg absolute -top-5 flex justify-between py-2.5 px-3">
      <EyeIcon class="xl:hidden w-6 -mt-1 mr-3 h-6 text-gray-300" />
      <i class="mr-3 cursor-pointer twitter w-6 h-6"></i>
      <i class="mr-3 cursor-pointer instagram w-6 h-6"></i>
      <i class="mr-3 cursor-pointer discord w-6 h-6"></i>
      <i class="mr-3 cursor-pointer reddit w-6 h-6"></i>
      <i class="mr-3 cursor-pointer md:mt-2 lg:mt-0 share w-6 h-6"></i>
      <i class="cursor-pointer md:mt-2 lg:mt-0 telegram w-6 h-6"></i>
    </div>
    <div class="bg-black rounded-lg top-10 xl:-top-6 absolute xl:right-4 w-40 h-12 flex">
      <button class="w-6 h-6 mr-2" @click="onEditCollection">
        <PencilAltIcon class="w-6 h-6 text-white mt-3 ml-2" />
      </button>
      
      <button class="w-28 h-8 rounded bg-purple-300 text-purple-900 flex px-2 py-1.5 mt-2 ml-2" @click="() => $router.push('/item/create')">
        <PlusSmIcon class="w-5 h-5 mr-1" />
        <span class="text-sm font-semibold">New item</span>
      </button>
    </div>
    <div class="rounded-lg absolute bottom-10 xl:right-4 xl:top-14 bg-gray-400 c-blur w-80 h-32 p-4">
      <div class="grid grid-cols-3 gap-4">
        <div class="relative font-light text-white text-xs flex flex-col">
          Owners <span class="mt-1 font-bold">25</span>
          <i class="border-v w-1.5 h-12 absolute right-0 -top-3"></i>
        </div>
        <div class="font-light text-white text-xs flex flex-col relative">
          items <span class="mt-1 font-bold">16</span>
          <i class="border-v w-1.5 h-12 absolute right-0 -top-3"></i>
        </div>
        <div class="font-light text-white text-xs flex flex-col">
          Date created <span class="mt-1 font-bold">{{dateCreated}}</span>
        </div>
        <div class="font-light text-white text-xs flex flex-col relative">
          Floor price
          <span class="flex mt-1.5 font-bold">
            <i class="tera-icon w-4 h-4 mr-0.5"></i>
            <span class="">0.002</span>
          </span>
          <i class="border-v w-1.5 h-12 absolute right-0 -top-3"></i>
        </div>
        <div class="font-light text-white text-xs flex flex-col relative">
          Highest sale
          <span class="flex mt-1.5 font-bold">
            <i class="tera-icon w-4 h-4 mr-0.5"></i>
            <span class="">19.08</span>
          </span>
          <i class="border-v w-1.5 h-12 absolute right-0 -top-3"></i>
        </div>
        <div class="font-light text-white text-xs flex flex-col">
          Volume traded
          <span class="flex mt-1.5 font-bold">
            <i class="tera-icon w-4 h-4 mr-0.5"></i>
            <span class="">1.6</span>
          </span>
        </div>
      </div>
    </div>

    <div class="absolute left-10 top-24 xl:top-16">
      <div class="flex">
        <div class="rounded-lg overflow-hidden c-border w-16 h-16">
          <img :src="coverImage" class="w-16 h-16" />
        </div>
        <span class="flex mt-3">
          <i class="verified-icon w-6 mx-2 mt-2"></i>
          <span class="text-white mt-2 font-normal">{{ $props.info.name }}</span>
        </span>
      </div>
      <div class="flex mt-4">
        <span class="text-white text-tiny mr-3">By</span>
        <Author :name="$props.info.wallet_address" class="text-white c-blur h-8 rounded-lg px-1.5 py-1" />
      </div>
    </div>
    <div class="absolute w-10 h-10 c-blur hidden xl:flex bottom-4 left-10 flex justify-center p-2 rounded-lg">
      <EyeIcon class="w-6 h-6 text-gray-300" />
    </div>
    <div class="w-80 h-12 bg-black rounded-lg absolute -bottom-5 flex justify-between px-2">
      <button @click.prevent="goTo('collections-items')" class="w-20 h-8 rounded-lg flex py-1.5 mt-2" :class="{
        'bg-purple-300 text-purple-900 px-2': isActive === 1,
        'text-gray-300': isActive !== 1,
      }">
        <ViewGridIcon class="w-5 h-5 mr-1" />
        <span class="text-sm font-semibold">Items</span>
      </button>
      <button @click.prevent="goTo('collections-activity')" class="w-28 h-8 rounded-lg flex px-2 py-1.5 mt-2" :class="{
        'bg-purple-300 text-purple-900': isActive === 2,
        'text-gray-300': isActive !== 2,
      }">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="20" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
          class="feather feather-activity">
          <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
        </svg>
        <span class="ml-1 font-semibold text-sm mt-0.5">Activity</span>
      </button>
      <button @click.prevent="goTo('collections-description')" class="w-28 h-8 rounded-lg flex px-2 py-1.5 mt-2" :class="{
        'bg-purple-300 text-purple-900': isActive === 3,
        'text-gray-300': isActive !== 3,
      }">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
          class="feather feather-align-center">
          <line x1="18" y1="10" x2="6" y2="10"></line>
          <line x1="21" y1="6" x2="3" y2="6"></line>
          <line x1="21" y1="14" x2="3" y2="14"></line>
          <line x1="18" y1="18" x2="6" y2="18"></line>
        </svg>
        <span class="ml-1 font-semibold text-sm mt-0.5">Description</span>
      </button>
    </div>
  </div>
</template>
<script>
import {
  PencilAltIcon,
  PlusSmIcon,
  EyeIcon,
  ViewGridIcon,
} from '@heroicons/vue/outline';
import Author from './Author.vue';
export default {
  components: { PencilAltIcon, PlusSmIcon, EyeIcon, ViewGridIcon, Author },
  props: {
    coverImage: {
      type: String,
      required: true,
    },
    name: String,
    info: Object,
  },
  mounted() {
    console.log(this.$props);
  },
  data() {
    return {
      isActive: 1,
    }
  },
  methods: {
    goTo(value) {
      this.$router.push({ name: value });
    },
    onEditCollection() {
      this.$router.push('/collections/edit/' + this.$props.info.id);
    },
  },
  computed: {
    dateCreated() {
      const d = new Date(this.$props.info.created_at);
      console.log(d.getMonth())
      if (isNaN(d.getMonth())) return '';
      return d.getMonth()+1 + '.' + d.getDate() + '.' + d.getFullYear();
    }
  },
  created() {
    const name = this.$route.name;
    switch (name) {
      case 'collections-activity':
        this.isActive = 2;
        break;
      case 'collections-description':
        this.isActive = 3;
        break;
      default:
        this.isActive = 1;
        break;
    }
  },
};
</script>
<!-- <style scoped src="../../assets/css/icons.css"></style> -->
<style scoped>
.c-border {
  border: 6px solid rgba(0, 255, 240, 0.39);
}

.c-blur {
  background: rgba(12, 8, 21, 0.5);
  box-shadow: 0px 19px 46px rgba(0, 0, 0, 0.22);
  backdrop-filter: blur(26px);
}

.c-blur {
  background: rgba(12, 8, 21, 0.5);
  box-shadow: 0px 19px 46px rgba(0, 0, 0, 0.22);
  backdrop-filter: blur(26px);
}

.border-v {
  background: url('../../assets/images/border.svg');
  background-repeat: no-repeat;
  background-size: 20px;
}

.twitter {
  background: url('../../assets/images/twitter-white.svg');
  background-repeat: no-repeat;
  background-size: 20px;
}

.instagram {
  background: url('../../assets/images/instagram-white.svg');
  background-repeat: no-repeat;
  background-size: 20px;
}

.telegram {
  background: url('../../assets/images/telegram-white.svg');
  background-repeat: no-repeat;
  background-size: 20px;
}

.reddit {
  background: url('../../assets/images/reddit-white.svg');
  background-repeat: no-repeat;
  background-size: 20px;
}

.share {
  background: url('../../assets/images/share.svg');
  background-repeat: no-repeat;
  background-size: 20px;
}

.discord {
  background: url('../../assets/images/discord-white.svg');
  background-repeat: no-repeat;
  background-size: 20px;
}
</style>
