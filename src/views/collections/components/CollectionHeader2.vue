<template>
    <div class="w-full relative flex justify-center">
        <GradientBorderPanel class="w-full">
            <img v-if="header.banner_image" :src="header.banner_image" class="object-cover w-full h-full rounded-md" />
            <div v-else class="bg-default h-full pt-60 rounded-md text-big">
                <span class="block text-center">It's kinda lonely here.</span>
                <span class="block text-center">Why don't you click on Edit button and change this banner image?</span>
            </div>
        </GradientBorderPanel>

        <div class="w-80 h-10 bg-black rounded-lg absolute -top-5 flex justify-between py-2.5 px-3">
            <EyeIcon class="xl:hidden w-6 -mt-1 mr-3 h-6 text-gray-300" />
            <i class="mr-3 cursor-pointer twitter w-6 h-6" @click="onClickTwitter"></i>
            <i class="mr-3 cursor-pointer instagram w-6 h-6"></i>
            <i class="mr-3 cursor-pointer discord w-6 h-6"></i>
            <i class="mr-3 cursor-pointer reddit w-6 h-6"></i>
            <i class="mr-3 cursor-pointer md:mt-2 lg:mt-0 share w-6 h-6"></i>
            <i class="cursor-pointer md:mt-2 lg:mt-0 telegram w-6 h-6"></i>
        </div>

        <!-- Edit, New Item -->
        <div class="bg-black rounded-lg top-10 xl:-top-6 absolute xl:right-4 w-40 h-12 flex">
            <button class="w-6 h-6 mr-2" @click="onEditCollection">
                <PencilAltIcon class="w-6 h-6 text-white mt-3 ml-2" />
            </button>

            <button class="w-28 h-8 rounded bg-purple-300 text-purple-900 flex px-2 py-1.5 mt-2 ml-2"
                @click="() => $router.push('/item/create')">
                <PlusSmIcon class="w-5 h-5 mr-1" />
                <span class="text-sm font-semibold">New item</span>
            </button>
        </div>

        <!-- Meta data -->
        <div class="rounded-lg absolute bottom-10 xl:right-4 xl:top-14 bg-gray-400 c-blur w-80 h-32 p-4">
            <div class="grid grid-cols-3 gap-4">
                <div class="relative font-light text-white text-xs flex flex-col">
                    Owners <span class="mt-1 font-bold">{{ header.owner_count }}</span>
                    <i class="border-v w-1.5 h-12 absolute right-0 -top-3"></i>
                </div>
                <div class="font-light text-white text-xs flex flex-col relative">
                    items <span class="mt-1 font-bold">{{ header.item_count }}</span>
                    <i class="border-v w-1.5 h-12 absolute right-0 -top-3"></i>
                </div>
                <div class="font-light text-white text-xs flex flex-col text-right">
                    Date created <span class="mt-1 font-bold">{{ dateCreated }}</span>
                </div>
                <div class="font-light text-white text-xs flex flex-col relative">
                    Floor price
                    <span class="flex mt-1.5 font-bold">
                        <i class="tera-icon w-4 h-4 mr-0.5"></i>
                        <span class="">{{ header.floor_price }}</span>
                    </span>
                    <i class="border-v w-1.5 h-12 absolute right-0 -top-3"></i>
                </div>
                <div class="font-light text-white text-xs flex flex-col relative">
                    Highest sale
                    <span class="flex mt-1.5 font-bold">
                        <i class="tera-icon w-4 h-4 mr-0.5"></i>
                        <span class="">{{ header.highest_sale }}</span>
                    </span>
                    <i class="border-v w-1.5 h-12 absolute right-0 -top-3"></i>
                </div>
                <div class="font-light text-white text-xs flex flex-col text-right">
                    Volume traded
                    <span class="flex mt-1.5 font-bold justify-end">
                        <i class="tera-icon w-4 h-4 mr-0.5"></i>
                        <span class="">{{ header.volume_traded }}</span>
                    </span>
                </div>
            </div>
        </div>

        <!-- Logo image & author -->
        <div class="absolute left-10 top-24 xl:top-16">
            <div class="flex">
                <div class="rounded-lg overflow-hidden c-border w-16 h-16">
                    <img :src="header.logo_image" class="w-full h-full" />
                </div>
                <span class="flex mt-3 pl-2">
                    <!-- <i class="verified-icon w-6 mx-2 mt-2"></i> -->
                    <span class="text-white mt-2 font-normal" :class="{ 'text-black': !header.banner_image }">{{
                            header.name
                    }}</span>
                </span>
            </div>
            <div class="flex mt-4">
                <span class="text-white text-tiny1 mr-3 leading-9"
                    :class="{ 'text-black': !header.banner_image }">By</span>
                <Author :name="header.wallet_address" class="text-white c-blur h-81 rounded-lg px-1.5 py-2" />
            </div>
        </div>

        <!-- Eye -->
        <div class="absolute w-10 h-10 c-blur hidden xl:flex bottom-4 left-10 flex justify-center p-2 rounded-lg">
            <EyeIcon class="w-6 h-6 text-gray-300" />
        </div>

        <!-- Tab buttons -->
        <div class="w-80 h-12 bg-black rounded-lg absolute -bottom-5 flex justify-between px-2">
            <button @click.prevent="onMenuClicked(1)" class="w-20 h-8 rounded-lg flex py-1.5 mt-2" :class="{
                'bg-purple-300 text-purple-900 px-2': isActive === 1,
                'text-gray-300': isActive !== 1,
            }">
                <ViewGridIcon class="w-5 h-5 mr-1" />
                <span class="text-sm font-semibold">Items</span>
            </button>
            <button @click.prevent="onMenuClicked(2)" class="w-28 h-8 rounded-lg flex px-2 py-1.5 mt-2" :class="{
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
            <button @click.prevent="onMenuClicked(3)" class="w-28 h-8 rounded-lg flex px-2 py-1.5 mt-2" :class="{
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

<script lang="ts" setup>
import GradientBorderPanel from 'components/common/panel/GradientBorderPanel.vue';
import { PencilAltIcon, PlusSmIcon, EyeIcon, ViewGridIcon, } from '@heroicons/vue/outline';
import Author from 'components/common/Author.vue';
import { computed, Ref, ref } from 'vue';
import router from 'router';

const props = defineProps({
    header: Object,
});
const emit = defineEmits(['change']);

const isActive: Ref<Number> = ref(1);

const dateCreated = computed(() => {
    const d = new Date(props.header?.created_at);
    if (isNaN(d.getMonth())) return '';
    return d.getMonth() + 1 + '.' + d.getDate() + '.' + d.getFullYear();
});
const goTo = (value: any) => {
    router.push({ name: value });
};

const onMenuClicked = (index: Number) => {
    isActive.value = index;
    emit('change', index);
};
const onEditCollection = () => {
    router.push('/collections/edit/' + props.header?.id);
};
const onClickTwitter = () => { console.log(props.header); };
</script>

<script lang="ts">
export default {
}
</script>

<style scoped>
.c-blur {
    background: rgba(12, 8, 21, 0.5);
    box-shadow: 0px 19px 46px rgba(0, 0, 0, 0.22);
    backdrop-filter: blur(26px);
}

.c-border {
    border: 6px solid rgba(0, 255, 240, 0.39);
}

.bg-default {
    background: url('../../../assets/images/default-bg.png');
    background-repeat: space repeat;
    background-blend-mode: color;
    background-color: rgba(255, 255, 255, 0.9);
}

.twitter {
    background: url('../../../assets/images/twitter-white.svg');
    background-repeat: no-repeat;
    background-size: 20px;
}

.instagram {
    background: url('../../../assets/images/instagram-white.svg');
    background-repeat: no-repeat;
    background-size: 20px;
}

.telegram {
    background: url('../../../assets/images/telegram-white.svg');
    background-repeat: no-repeat;
    background-size: 20px;
}

.reddit {
    background: url('../../../assets/images/reddit-white.svg');
    background-repeat: no-repeat;
    background-size: 20px;
}

.share {
    background: url('../../../assets/images/share.svg');
    background-repeat: no-repeat;
    background-size: 20px;
}

.discord {
    background: url('../../../assets/images/discord-white.svg');
    background-repeat: no-repeat;
    background-size: 20px;
}
</style>