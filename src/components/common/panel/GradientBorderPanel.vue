<template>
    <div class="grad-background">
        <div class="bg-white h-full">
            <slot></slot>
        </div>
    </div>
</template>

<style scoped>
.grad-background {
    background: linear-gradient(182.44deg, #00FFF0 -22.72%, #FF00E5 140.57%);
    padding: 2px;
    border-radius: 8px;
}
.grad-background > div {
    border-radius: 8px;
}
</style>