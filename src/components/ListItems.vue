<script  setup lang="ts">
import ItemCard from '@/components/ItemCard.vue'
import type {Products} from "@/model/tipos"



const props = defineProps({
  filteredProducts: {
    type: Array as () => Products[],
    required: true
  },

  
});

const key = (id:any) => id++


</script>

<template>  
  <div>
    <VRow>
        <VCol v-for="product in props.filteredProducts" :key="key(product.id)" cols="4">
          <ItemCard 
          :products="product" />
        </VCol>
      </VRow>
     </div>
</template>