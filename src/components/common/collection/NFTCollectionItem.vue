<template>
    <div class="cursor-pointer w-full relative md:mb-10 lg:mb-0 relative nft-collection" @click.prevent="gotoCollectionPage">
        <img :src="info.logo_image" class="w-full h-full rounded-lg" />
        <!-- <img src="../../../assets/1.png" class="rounded-lg w-full h-full" /> -->

        <div class="nft-w-description absolute w-full xl:w-full absolute bottom-0">
            <div class="nft-w-description-inner w-full flex justify-between">
                <span class="flex">
                    <img class="w-3.5 h-3.5 mr-1" src="../../../assets/images/verified.png" alt="" />
                    <span class="nft-w-text text-sm">{{ info.name }}</span>
                </span>
                <span class="nft-w-text text-xs col-span-2 text-right">Volume traded</span>
            </div>
            <div class="nft-w-description-inner w-full flex justify-between">
                <span class="nft-w-text text-xs col-span-4">Items: 10,000</span>
                <span class="flex">
                    <img class="w-3.5 h-3.5 mr-1" src="../../../assets/images/tera.png" alt="" />
                    <span class="nft-w-text text-xs">2.4</span>
                </span>
            </div>

            <div class="nft-w-text text-xs text-left h-12 text-ellipsis overflow-hidden mb-1 text-gray-100 nft-cln-desc">{{ info.description }}</div>

            <div class="bg-black rounded-lg top-10 w-full h-12 flex">
                <button class="w-28 h-8 rounded bg-black text-white flex px-2 py-1.5 mt-2 ml-2" @click.stop="gotoEditPage">
                    <PencilAltIcon class="w-5 h-5 mr-1" />
                    <span class="text-sm font-semibold">Edit</span>
                </button>
                <button class="w-28 h-8 rounded bg-purple-200 text-purple-900 flex px-2 py-1.5 mt-2 ml-2 absolute right-5" @click.stop="$router.push({name: 'create-item'})">
                    <PlusSmIcon class="w-5 h-5 mr-1" />
                    <span class="text-sm font-semibold">New item</span>
                </button>
            </div>
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

export default {
    components: { PencilAltIcon, PlusSmIcon },
    props: {
        coverImage: {
            type: String,
            required: true,
        },
        isRecent: {
            type: Boolean,
            default: false,
        },
        info: {
            type: Object
        }
    },

    data() {
        return {};
    },

    methods: {
        gotoEditPage() {
            // console.log(this.$props.info)
            this.$router.push('edit/' + this.$props.info.id)
        },

        gotoCollectionPage() {
            this.$router.push('detail/' + this.$props.info.id);
        }
    }
}
</script>
<style lang="scss" scoped>

</style>
<style scoped>
.nft-w-container {
    filter: drop-shadow(0px 19px 46px rgba(0, 0, 0, 0.22));
}

.nft-w-description {
    /* width: 288px; */
    /* height: 150px; */
    padding: 8px;
    background: rgba(12, 8, 21, 0.4);
    backdrop-filter: blur(27px);

    border-radius: 0px 0px 12px 12px;
}

.nft-w-description-inner {
    /* display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center; */
    /* padding: 0px; */

    /* position: static; */
    /* width: 272px; */
    height: 23px;
    /* left: 0px; */
    /* top: 0px; */
}

.nft-w-text {
    font-family: Inter;
    font-style: normal;
    font-weight: 500;
    /* font-size: 12px; */
    line-height: 15px;
    color: #f3f3f3;
}

.nft-w-buy {
    font-family: Inter;
    font-style: normal;
    font-weight: 600;
    line-height: 19px;

    color: #00fff0;
}

.nft-cln-desc {
    color: #f3f3f3;
}
</style>