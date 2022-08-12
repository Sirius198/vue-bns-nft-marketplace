<template>

    <div v-show="props.open" class="modal fixed w-full h-full top-0 left-0 flex items-center justify-center z-[1000]">
        <div @click.self="close_modal()" class="modal-overlay absolute w-full h-full bg-gray-900 opacity-50"></div>

        <div
            class="modal-container bg-white w-[600px] md:max-w-[600px] mx-auto rounded shadow-lg z-50 overflow-y-auto bg-transparent">

            <GradientBorderPanel>

                <div class="modal-content py-6 px-4 text-left border-none relative">

                    <button class="absolute top-6 right-4 bg-[#9B7DF0]/40 rounded p-0.5" @click="close_modal">
                        <XIcon class="w-4 h-4 text-[#7455C9]"></XIcon>
                    </button>

                    <p class="text-lg text-[#606060] font-bold">{{ props.title }}</p>
                    <div class="modal-separator my-3.5"></div>

                    <slot name="body"></slot>
                    <div class="modal-separator my-3.5"></div>
                    <slot name="footer"></slot>

                </div>
            </GradientBorderPanel>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { watch } from '@vue/runtime-core';
import GradientBorderPanel from '../panel/GradientBorderPanel.vue';
import { XIcon } from '@heroicons/vue/outline';
const props = defineProps({
    open: Boolean,
    properties: Array,
    title: String,
});
const emit = defineEmits(['closed', 'update']);

const close_modal = () => {
    emit('closed');
    console.log('emitted');
};
// console.log(props.open, 'mymodal', props.title);
</script>

<script lang="ts">
export default {
}
</script>

<style lang="scss">
.modal-separator {
    background: linear-gradient(to right, #FAFAFA 0%, #B9B9B9 50%, #ECECEC 100%);
    height: 1px;
    margin: 14px 0;
}
</style>