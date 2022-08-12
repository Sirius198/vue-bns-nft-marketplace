<template>
    <div v-for="(p, index) in properties" :key="index"
        class="h-20 flex p-1 rounded flex-row w-32 md:w-36 overflow-x-hidden bg-violet-200 border border-violet-600">
        <div class="relative">
            <button class="bg-violet-300 hover:bg-violet-400 text-white w-5 h-5 rounded absolute right-2 md:-right-1"
                @click="removeTrait(index)">
                <XIcon class="w-4 h-4 mx-auto" />
            </button>
            <div class="text-blue-700 text-xs">{{ p.trait_type }}</div>
            <div
                class="text-violet-700 my-1.5 w-32 overflow-x-hidden text-ellipsis whitespace-nowrap font-bold text-sm lg:text-base">
                {{ p.value }}
            </div>
            <div class="text-gray text-xs">3.4% rarity</div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { XIcon } from '@heroicons/vue/outline';
import { ref, watch } from 'vue';

const props = defineProps({
    properties: Array
});
const emit = defineEmits(['properties'])

const properties = ref(props.properties);

watch(() => props.properties, (newValue, oldValue) => {
    properties.value = newValue;
});

const removeTrait = (index: number) => {
    properties.value?.splice(index, 1);
    emit('properties', properties);
};
</script>
<script lang="ts">
export default {
}
</script>