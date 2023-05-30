<script  setup lang="ts">
import ItemCard from './ItemCard.vue'
import Cart from './Cart.vue'
import type { Products,CartDetail } from '../model/tipos';
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
])
const details = ref <Array<CartDetail>>([])

const key = (id:any) => id++

const addProduct = (productId:number) => {
  const detailFound = details.value.find(detail => detail.productId === productId)
  detailFound 
  ? detailFound.amount++
  :details.value.push({
  productId,
  amount: 1
})
}
</script>

<template>  
  <div>
    <VRow>
        <VCol v-for="product in products" :key="key(product.id)" cols="4">
          <ItemCard 
          :products="product" 
          @add-product="addProduct(product.id)"/>
        </VCol>
      </VRow>
  
      <Cart :details="details"/>
  </div>
</template>