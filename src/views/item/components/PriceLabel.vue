<template>
    <div class="flex justify-between">
        <span class="text-nobel text-sm">{{ $props.text }}</span>
        <span class="text-gray-dim font-bold">
            <span class="flex mt-1.5">
                <i class="tera-icon w-4 h-4 mt-1 mr-0.5"></i>
                <span class="min-w-[65px] max-w-[100px] text-right">{{ $props.price }}</span>
            </span>
        </span>
    </div>
</template>

<script lang="ts">
export default {
    props: {
        text: String,
        price: String
    }
}
</script>