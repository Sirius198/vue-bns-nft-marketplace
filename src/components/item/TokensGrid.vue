<template>
    <div class="flex justify-center">
        <div class="grid grid-cols-4 gap-3">
            <TokenItem v-for="(token, index) in $props.tokens" :key="index" :token="token"></TokenItem>
        </div>
    </div>
</template>

<script lang="ts" setup>
import TokenItem from './TokenItem.vue';

const props = defineProps(['tokens']);
</script>

<script lang="ts">
export default {}
</script>