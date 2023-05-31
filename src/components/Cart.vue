<script  setup lang="ts">
import  { ref} from "vue"
import { useCartStore } from '@/stores/cart';

// stores
const carStore = useCartStore()

//data
const details = ref (carStore.details)

const key = () => {
  let key = 1
  return key++
}
</script>

<template>
  <div>
    <VCard class="mt-4">
      <VCardTitle>
        Productos agregados al carrito
      </VCardTitle>
      
      <VCardText>
        <VList>
          <VListItem v-for="detail in details " :key="key" :value="detail.productId">
            <VListItemTitle>
              {{detail.productId}}  Qty: {{detail.amount }}
            </VListItemTitle>
          </VListItem>
        </VList>
      </VCardText>
     </VCard>
  </div>
</template>