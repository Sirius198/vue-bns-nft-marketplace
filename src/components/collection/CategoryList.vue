<template>
    <div class="
      mt-3
      grid grid-cols-2
      sm:grid-cols-3
      md:grid-cols-4
      lg:grid-cols-3
      xl:lg:grid-cols-4
      gap-2
      category-wrapper
    ">
        <div v-for="(category, index) in categories" :key="index" @click="onClick(index)" class="
        cursor-pointer
        bg-violet-100
        hover:bg-violet-400
        pt-[13px]
        text-violet-400
        hover:text-white
        font-semibold
        border border-violet-400 border-2
        rounded
        h-14
        w-full
        flex
        justify-center
      " :class="`${selected == index ? 'active' : ''}`">
            {{ category.name }}
        </div>
    </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue';
import { CATEGORIES } from '../../components/common/Common';

const categories = CATEGORIES;
const props = defineProps({
    modelValue: Number
});
const selected = ref(props.modelValue);

const onClick = (idx: number) => {
    selected.value = idx;
    emit('update:modelValue', idx);
};

const emit = defineEmits(['update:modelValue'])
</script>

<script lang="ts">
export default {

}
</script>

<style scoped>
.category-wrapper .active {
    background: rgb(167, 139, 250);
    color: white;
}
</style>