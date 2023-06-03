<script  setup lang="ts">
import ItemCard from '@/components/ItemCard.vue'
import { userProductsStore } from '@/stores/products';
import { storeToRefs } from 'pinia';

const produtsStore = userProductsStore()
const {products} = storeToRefs(produtsStore)


const key = (id:any) => id++


</script>

<template>  
  <div>
    <VRow>
        <VCol v-for="product in products" :key="key(product.id)" cols="4">
          <ItemCard 
          :products="product" />
        </VCol>
      </VRow>
     </div>
</template>
