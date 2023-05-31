<script  setup lang="ts">
import type {Products} from "../model/tipos"
import {type PropType } from 'vue'
import { useCartStore } from "@/stores/cart";

//Stores
const cartStore = useCartStore()

//Props
const props = defineProps({
products: {
  type: Object as PropType<Products>,
    required: true
}
})

//methodes
function addProduct(){
cartStore.addProduct(props.products.id)
}
</script>

<template>  
  <div>
    <VCard >
      <VImg
      src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
      height="200px"
      cover
      />

      <VCardTitle>
        {{products.name}}
      </VCardTitle>

      <VCardText>
        <p class="mb-4">
          Esta es una description de ejemplo
        </p>
        <VChip>
          $ {{products.price}}
        </VChip>
      </VCardText>

      <VCardActions>
         <VBtn 
         @click="addProduct" 
         color="orange-lighten-2">
         Agregar al carrito
        </VBtn>
      </VCardActions>
    </VCard>
  </div>
</template>