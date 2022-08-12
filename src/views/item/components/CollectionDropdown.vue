<template>
    <div class="relative">
        <!-- Dropdown toggle button -->
        <button @click.stop="show = !show"
            class="flex text-[#606060] font-medium bg-transparent1 border border-gray-300 rounded-md focus:outline-none w-full h-9 pl-2 pt-1">
            <span class=""><img class="w-5 h-5 rounded inline mr-1" v-if="selectedItem.logo_image" :src="selectedItem.logo_image" />{{
                    selectedItem.name
            }}</span>
            <ChevronDownIcon class="absolute right-3 top-2 w-5 h-5 text-blue-600"></ChevronDownIcon>
        </button>

        <!-- Dropdown menu -->
        <div v-show="show" @blur="onBlur" class="bg-white rounded-md shadow-xl absolute left-0 top-0 w-full z-10">
            <button v-for="(c, idx) in collections" :key="idx" @click="onClick(c)"
                class="block px-4 py-2 text-sm text-[#606060] font-medium hover:bg-gray-400 hover:text-gray-100 w-full text-left">
                <img :src="c.logo_image" class="w-5 h-5 rounded inline" />
                {{ c.name }}
            </button>

            <button @click.prevent="() => $router.push({ name: 'collections-create' })"
                class="mt-3 ml-4 mb-3 bg-[#9B7DF0] border-color-[#7455C9] xl:w-60 text-white flex justify-center rounded px-3 py-1.5">
                <PlusIcon class="w-5 h-5 mr-2 mt-0.5" />
                <span class="font-bold">Create new collection</span>
            </button>
        </div>

    </div>
</template>

<script lang="ts" setup>
import { onBeforeUnmount, onMounted, ref, watch } from 'vue';
import { PlusIcon } from '@heroicons/vue/solid';
import { ChevronDownIcon } from '@heroicons/vue/outline';

const props = defineProps({
    collections: Array
});
const emit = defineEmits(['change']);
const collections = ref(props.collections);

watch(() => props.collections, (newValue, oldValue) => {
    collections.value = newValue;
    console.log(newValue);
});
const show = ref(false);
const selectedItem = ref({});

const onClick = (c: any) => {
    selectedItem.value = c;
    show.value = false;
    emit('change', String(c.id));
};

onBeforeUnmount(() => { document.removeEventListener('click', () => (show.value = false)) });
onMounted(() => { document.addEventListener('click', () => (show.value = false)); });

</script>

<script lang="ts">
export default {
}
</script>