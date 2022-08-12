<template>

    <div v-if="props.open" class="modal fixed w-full h-full top-0 left-0 flex items-center justify-center z-[1000]">
        <div @click.self="close_modal()" class="modal-overlay absolute w-full h-full bg-gray-900 opacity-50"></div>

        <div class="modal-container bg-white w-[600px] md:max-w-[600px] mx-auto rounded shadow-lg z-50 overflow-y-auto">

            <!-- <GradientBorderPanel> -->

            <div class="modal-content py-4 text-left px-6 grad-border-1 border-2">

                <p class="text-lg text-[#606060] font-bold">Add properties</p>
                <div class="modal-separator"></div>

                <p class="text-sm text-[#9b9b9b]">Properties are clickable and are shown up underneath your item, and
                    can be filtered</p>

                <div class="text-[#606060] font-bold traits-wrapper mt-5 mb-5">
                    <div class="flex mb-2">
                        <div class="w-[245px] text-base">Type</div>
                        <div class="w-[200px] text-base">Name</div>
                    </div>

                    <div class="flex mb-2" v-for="(trait, index) in traits" :key="index">
                        <input type="text" class="p-2" v-model="trait.trait_type" />
                        <input type="text" class="p-2" v-model="trait.value" />
                        <button class="w-6 h-6 mt-1 ml-2 bg-gray-200 rounded-md p-1 hover:bg-gray-300"
                            @click="removeTrait(index)">
                            <XIcon></XIcon>
                        </button>
                    </div>
                </div>

                <AddButton @click="addTrait"></AddButton>

                <div class="text-center">
                    <button @click="saveTrait"
                        class="w-1/2 mx-auto mt-3 bg-[#CFBEFF] p-2 font-base rounded-md text-[#3C1A9B] font-bold hover:bg-violet-400">Save</button>
                </div>

            </div>
            <!-- </GradientBorderPanel> -->
        </div>
    </div>

</template>

<script lang="ts" setup>
import { XIcon } from '@heroicons/vue/outline';
import GradientBorderPanel from "components/common/panel/GradientBorderPanel.vue";
import { getCurrentInstance, ref, Ref } from "vue";
import AddButton from './AddButton.vue';

const props = defineProps({
    open: Boolean,
    properties: Array
});
const emit = defineEmits(['closed', 'update']);

// interface Trait {
//     type: string,
//     name: string,
// }

let temp = [ ...props.properties ];
const traits = ref(temp);

const addTrait = () => {
    traits.value.push({
        trait_type: '',
        value: ''
    });
};

const removeTrait = (index: number) => {
    traits.value.splice(index, 1);
};

const saveTrait = () => {

    // Test validation

    // update v-model
    emit('update', traits.value);
    emit('closed');
};

const close_modal = () => {
    emit('closed');
};

</script>
<script lang="ts">
export default {
}
</script>

<style scoped src="../../../assets/css/modal.css">
</style>
<style lang="scss" scoped>
.traits-wrapper {

    input {
        border: 1px solid #D8D8D8;
        background: #E7E7E7;
        border-radius: 6px;
        margin-right: 5px;
        width: 240px;
        height: 33px;
        font-size: 14px;
    }

}
</style>