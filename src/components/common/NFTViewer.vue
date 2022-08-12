<template>
    <div class="relative">
        <img :src="$props.token_uri" class="w-full h-auto rounded-[25px]" />
        <!-- <img src="../../assets/nft.png" class="w-full h-auto rounded-[25px]" /> -->

        <slot></slot>

        

        <div v-show="props.showMetadata" class="absolute bottom-0 w-full p-3 metadata-box">
            <div class="flex justify-between">
                <span class="mt-1 sm:mt-0.5 nft-w-text text-tiny sm:text-xs lg:text-sm md:text-tiny flex ">
                    <EyeIcon class="w-3 h-3 sm:w-4 sm:h-4 xl:mt-0.5 mr-1" />
                    <span class="nft-w-text">64</span>
                </span>
                <span class="mt-1 sm:mt-0.5 nft-w-text text-tiny sm:text-xs lg:text-sm md:text-tiny flex ">
                    <UsersIcon class="w-3 h-3 sm:w-4 sm:h-4 xl:mt-0.5 mr-1" />
                    <span class="nft-w-text">1</span>
                </span>
                <span class="mt-1 sm:mt-0.5 nft-w-text text-tiny sm:text-xs lg:text-sm md:text-tiny flex ">
                    <QrcodeIcon class="w-3 h-3 sm:w-4 sm:h-4 xl:mt-0.5 mr-1" />
                    <span class="nft-w-text">50</span>
                </span>
                <span class="mt-1 sm:mt-0.5 nft-w-text text-tiny sm:text-xs lg:text-sm md:text-tiny flex ">
                    <HeartIcon class="w-3 h-3 sm:w-4 sm:h-4 xl:mt-0.5 mr-1" />
                    <span class="nft-w-text">24</span>
                </span>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
const props = defineProps(['token_uri', 'onExpandView', 'showMetadata', 'sensitive']);
// console.log(props.showMetadata);
</script>

<script lang="ts">
import {
    HeartIcon,
    EyeIcon,
    UsersIcon,
    QrcodeIcon,
    ArrowsExpandIcon,
} from '@heroicons/vue/outline';
export default {}
</script>

<style scoped>
.nft-w-text {
    font-family: Inter;
    font-style: normal;
    font-weight: 500;
    color: #f3f3f3;
}

.expand-button {
    background: rgba(12, 8, 21, 0.5);
    box-shadow: 0px 19px 46px rgba(0, 0, 0, 0.22);
    backdrop-filter: blur(26px);
}

.expand-button:hover {
    background: rgba(12, 8, 21, 0.7);
    transition: all 0.3s;
}

.metadata-box {
    background: rgba(12, 8, 21, 0.4);
    backdrop-filter: blur(55.4631px);
    border-radius: 0px 0px 25px 25px;
}
</style>