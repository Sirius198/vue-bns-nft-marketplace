<template>
    <div class="w-[300px] h-80 relative cursor-pointer nft-item" @click="gotoTokenDetail">
        <!-- <img v-show="props.token.token_uri" class="w-full h-full"
            src="https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F6170e01f8d7639b95a7f2eeb%2FSotheby-s-NFT-Natively-Digital-1-2-sale-Bored-Ape-Yacht-Club--8817-by-Yuga-Labs%2F0x0.png%3Ffit%3Dscale"
            alt=""> -->
        <img v-show="props.token.token_uri" class="w-full h-full rounded-[12px]" :src="props.token.token_uri" alt="">

        <div class="absolute h-24 w-full p-2 text-[#F3F3F3] text-base bottom-0 token-desc">
            <div class="w-full flex justify-between">
                <span class="flex">
                    <!-- <img class="w-3.5 h-3.5 xl:mt-1 mr-1" src="../../assets/images/verified.png" alt="" /> -->
                    <span class="text-base sm:text-xs lg:text-sm lg:mt-1 md:text-tiny">{{ props.token.extension?.name }}</span>
                </span>
                <span class="flex">
                    <img class="w-3.5 h-3.5 xl:mt-1 mr-1" src="../../assets/images/tera.png" alt="" />
                    <span class="text-tiny sm:text-xs lg:text-xs lg:mt-1 md:text-tiny">2.4</span>
                </span>
            </div>
            <div class=" -mt-1 sm:mt-1 w-full flex grid grid-cols-6">
                <span class="text-tiny sm:text-xs lg:text-xs md:text-tiny col-span-4">
                    {{ props.token.extension?.collection?.name }}
                </span>
                <!-- <span class="text-tiny sm:text-xs lg:text-xs md:text-tiny col-span-2 text-right">Last:
                    4.47</span> -->
            </div>

            <div class="mt-3 mb-2 w-full flex justify-between">
                <button @click.stop="onBuy"
                    class="flex text-xxs sm:text-xs lg:text-sm md:text-xxs xl:text-base cursor-pointer text-cyan-300">Buy
                    <span class="ml-1 hidden lg:block">now</span>
                </button>
                <span v-if="!isRecent" class="mt-1 sm:mt-0.5 text-tiny sm:text-xs lg:text-sm md:text-tiny flex">
                    <EyeIcon class="w-3 h-3 sm:w-4 sm:h-4 xl:mt-0.5 mr-1" />
                    <span class="nft-w-text">1</span>
                </span>
                <span v-if="!isRecent" class="mt-1 sm:mt-0.5 text-tiny sm:text-xs lg:text-sm md:text-tiny flex">
                    <UsersIcon class="w-3 h-3 sm:w-4 sm:h-4 xl:mt-0.5 mr-1" />
                    <span class="nft-w-text">1</span>
                </span>
                <span v-if="!isRecent" class="mt-1 sm:mt-0.5 text-tiny sm:text-xs lg:text-sm md:text-tiny flex">
                    <QrcodeIcon class="w-3 h-3 sm:w-4 sm:h-4 xl:mt-0.5 mr-1" />
                    <span class="nft-w-text">1</span>
                </span>
                <span class="mt-1 sm:mt-0.5 text-tiny sm:text-xs lg:text-sm md:text-tiny flex">
                    <HeartIcon class="w-3 h-3 sm:w-4 sm:h-4 xl:mt-0.5 mr-1" />
                    <span class="nft-w-text">1</span>
                </span>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { HeartIcon, EyeIcon, UsersIcon, QrcodeIcon } from '@heroicons/vue/outline';
import router from 'router';
import { ref } from 'vue';

const props = defineProps(['token']);
const isRecent = ref(false);

const onBuy = () => { };
const gotoTokenDetail = () => {
    // router.push('ttt');
    router.push('/item/detail/' + props.token.token_id);
    // useRouter().push('test');
};
</script>
<script lang="ts">
export default {

}
</script>

<style scoped>
.nft-item {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.token-desc {
    background: rgba(12, 8, 21, 0.4);
    backdrop-filter: blur(27px);
    border-radius: 0px 0px 12px 12px;
}
</style>