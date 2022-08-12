<template>
    <div>
        <label class="block mt-3">
            <span class="font-bold text-gray-600">Price</span>

            <div class="mt-3 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-3 xl:lg:grid-cols-4 gap-2">
                <div v-for="(listingButton, index) in listingModes" :key="index" @click="setMode(index)"
                    :class="[mode == index ? 'bg-violet-400 text-white' : 'bg-violet-200 text-violet-500']"
                    class="cursor-pointer hover:bg-violet-400 hover:text-white py-4 font-semibold border border-violet-400 rounded h-14 w-36 flex justify-center">
                    {{ listingButton.name }}
                </div>
            </div>
        </label>

        <!-- Fixed Price -->
        <div class="block mt-3" v-show="mode == 0">
            <span class="font-bold text-gray-600">Amount</span>
            <span class="flex relative">
                <input type="text"
                    class="mt-1 h-9 text-gray-500 block w-full bg-gray-100 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    placeholder="" />

                <span class="w-20 flex px-2 py-1.5 absolute right-0 h-9 bottom-0 rounded bg-violet-200">
                    <span class="font-bold text-violet-500"> Luna </span>
                    <ChevronDownIcon class="w-4 h-4 mt-1 ml-3" />
                </span>
            </span>

            <div class="flex justify-between mt-2">
                <span class="text-gray-400">Service fee</span>
                <span class="text-gray-400">
                    <span class="flex mt-1.5">
                        <i class="tera-icon w-4 h-4 mt-1 mr-0.5"></i>
                        <span class="">0.52</span>
                    </span></span>
            </div>
            <div class="flex justify-between">
                <span class="text-gray-400">You will receive</span>
                <span class="text-gray-400">
                    <span class="flex mt-1.5">
                        <i class="tera-icon w-4 h-4 mt-1 mr-0.5"></i>
                        <span class="">19.52</span>
                    </span></span>
            </div>
        </div>

        <!-- Open for bids -->
    </div>
</template>

<script lang="ts" setup>

import { ref, watch } from 'vue';
import { ChevronDownIcon } from '@heroicons/vue/outline';

const listingModes = [{ name: 'Fixed Price', value: 'fix' }, { name: 'Open for bids', value: 'bid' }, { name: 'Timed auction', value: 'auc' }];

const props = defineProps({
    mode: Number
});
const emit = defineEmits(['properties'])

const mode = ref(props.mode);

const setMode = (index: number) => {
    mode.value = index;
};
</script>
<script lang="ts">
export default {
}
</script>