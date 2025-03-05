<template>
    <div>
        <div><img :src="imageUrl" alt=""></div>
        <div>{{ title }}</div>
        <div>
            <img src="" alt="Icon">
            {{ city }}
        </div>
    </div>
</template>
<script setup lang="ts">
import { computed, ComputedRef, PropType } from 'vue';
import { ActivitiesApi, ScenicSpotApi } from '@/types/api';

// 定義 Props 類型
const props = defineProps({
  data: {
    type: Object as PropType<ActivitiesApi | ScenicSpotApi>, 
    required: true
  },
  type: {
    type: String as PropType<'restaurant' | 'scenicspot' | 'activities'>,
    required: true
  }
});

const title: ComputedRef<string> = computed(() => {
    switch (props.type) {
        // case 'restaurant':
        //     return props.data.RestaurantName;
        case 'scenicspot':
            return (props.data as ScenicSpotApi).ScenicSpotName  ;
        case 'activities':
            return (props.data as ActivitiesApi).ActivityName;
        default:
            return '';
        
    }
})

const imageUrl: ComputedRef<string> = computed(() => {
    switch (props.type) {
        // case 'restaurant':
        //     return props.data.RestaurantName;
        case 'scenicspot':
            return (props.data as ScenicSpotApi).Picture.PictureUrl1  ;
        case 'activities':
            return (props.data as ActivitiesApi).Picture.PictureUrl1;
        default:
            return '';
        
    }
})

const city: ComputedRef<string> = computed(() => {
    switch (props.type) {
        // case 'restaurant':
        //     return props.data.RestaurantName;
        case 'scenicspot':
            return (props.data as ScenicSpotApi).City  ;
        case 'activities':
            return (props.data as ActivitiesApi).City;
        default:
            return '';
        
    }
})



</script>
<style lang="scss" scoped>

</style>