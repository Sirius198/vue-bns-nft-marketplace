<template>
    <button :class="getClass">
        <slot></slot>
    </button>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps([
    'type'
]);

const getClass = computed(() => {
    var baseStyle = 'py-1 px-3 rounded-[6px] text-base font-bold ';
    if (props.type == 'primary')
        baseStyle += 'bg-lavendar text-persian-indigo';
    if (props.type == 'secondary')
        baseStyle += 'border-gray-dim border-2 text-gray-dim font-bold hover:bg-gray-dim hover:text-white';
    if (props.type == 'danger')
        baseStyle += 'bg-red border-red border-2 text-white font-bold';

    return baseStyle;
});
</script>

<script>
export default {
}
</script>