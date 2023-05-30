<script  setup lang="ts">
import type {Products} from "../model/tipos"
import { ref, type PropType } from 'vue'

const emit = defineEmits<{
  (e: "AddProduct", id:number):void
}>()

defineProps({
products: {
  type: Object as PropType<Products>,
    required: true
}
})
function addProduct(productId: number){
  emit("AddProduct", productId)
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
         @click="addProduct(products.id)" 
         color="orange-lighten-2">
         agrgar al carrito
        </VBtn>
      </VCardActions>
    </VCard>
  </div>
</template>