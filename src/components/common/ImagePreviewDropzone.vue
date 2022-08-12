<template>
    <div class="bg-gray-300 border-8 border-gray-300 rounded-lg w-full h-full">

        <div v-if="!previewImageUrl" class="p-2 flex flex-col place-content-around h-full bg-white">
            <input type="file" style="display: none" class="hidden image-preview-dropzone-file" @change="onFileSelected"
                hidden accept="image/*" />
            <svg xmlns="http://www.w3.org/2000/svg" class="h-24 w-24 text-violet-500 mx-auto" fill="none"
                viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1"
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <div class="text-xs mx-auto text-gray-500 text-center">
                <span class="text-violet-500">Browse your PC</span> or drag and drop
                your file
            </div>
        </div>

        <div v-else class="w-full h-full relative bg-gray-300">
            <button class="bg-gray-800 hover:bg-gray-600 text-white w-5 h-5 rounded absolute top-2 right-2"
                @click.stop="clearSelection">
                <XIcon class="w-4 h-4 mx-auto" />
            </button>
            <img :src="previewImageUrl" class="w-full h-full rounded-lg object-contain" />
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive, ref, Ref, toRef, toRefs, watch, defineEmits } from 'vue'
import { XIcon } from '@heroicons/vue/outline';

export default {
    components: {
        XIcon
    },
    props: {
        original_img: String
    },
    emits: ['change_src'],
    setup(props: any, ctx: any) {
        // const emit = defineEmits<{
        //     (e: 'change_src', id: object): void
        // }>();

        const { original_img } = toRefs(props);
        const previewImageUrl: Ref<string | null> = ref(null)

        const onFileSelected = (event: any) => {
            previewImageUrl.value = URL.createObjectURL(event.target.files[0]);
            ctx.emit('change_src', event.target.files[0])
        };

        function clearSelection() {
            previewImageUrl.value = null;
            // emit('change_src', null)
        }

        watch(original_img, () => {
            const img = original_img.value;
            // console.log('newValue:', );
            if (original_img != null && img !== '')
                previewImageUrl.value = img
        });

        return { previewImageUrl, onFileSelected, clearSelection };
    },
    methods: {
    }
}
</script>