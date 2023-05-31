<script  setup lang="ts">
import ItemCard from './ItemCard.vue'
import type { Products} from '../model/tipos';
import { ref} from 'vue'

const products = ref <Array<Products>>([
  {
  id: 1,
  name: 'silla',
  price: 150,
  },
  {
  id: 2,
  name: 'butaco',
  price: 200,
  },
  {
  id: 3,
  name: 'mesa',
  price: 500,
  },
  {
  id: 4,
  name: 'silla',
  price: 150,
  },
  {
  id: 5,
  name: 'butaco',
  price: 200,
  },
  {
  id: 6,
  name: 'mesa',
  price: 500,
  },
])

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