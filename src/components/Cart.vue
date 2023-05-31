<script  setup lang="ts">
import  { ref} from "vue"
import { useCartStore } from '@/stores/cart';
import { RouterLink } from "vue-router";

// stores
const carStore = useCartStore()

//data
const details = ref (carStore.details)

// methods
const key = (key : number) => {
return key++
}

const decrementAmount = (productId:number) => {
  carStore.decrement(productId)
}

const incrementAmount = (productId: number) => {
  carStore.increment(productId)
}

const deleteProduct = (productId: number) => {
  carStore.deleteProduct(productId)
}

</script>

<template>
  <div>
    <VCard class="mt-4">
      <VCardTitle>
        Productos agregados al carrito
      </VCardTitle>
      
      <VCardText>
        <VList v-if="details.length > 0">
          <VListItem v-for="detail in details " :key="key(detail.productId)" :value="detail.productId">
            <VListItemTitle>
              {{detail.productId}}  
            <VBtn
            class="ml-2"
            size="x-small"
            icon="mdi:mdi-minus" 
              @click="decrementAmount(detail.productId)"/>
              Qty: {{detail.amount }}
            <VBtn 
            size="x-small"
            icon="mdi:mdi-plus"
            @click="incrementAmount(detail.productId)"/>
     
            <VBtn 
            class="ml-2"
            size="x-small"
            icon="mdi:mdi-delete"
            @click="deleteProduct(detail.productId)"/>
            </VListItemTitle>
          </VListItem>
        </VList>
        <p v-else>
          Aun no has agregado pproductos a tu carrito de compras
          Haz <RouterLink  to="/"> Click aqui </RouterLink> para ver los productos disponibles
        </p>
      </VCardText>
     </VCard>
  </div>
</template>