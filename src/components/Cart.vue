<script  setup lang="ts">
import {ref,type PropType} from "vue"
import type{ CartDetail } from '../model/tipos';

defineProps({
  details:{
    type: Object as PropType<Array<CartDetail>>,
    required: true
  }
})

const key = () => {
  let key = 1
  return key++
}
</script>

<template>
  <div>
    <VCard class="mt-4">
      <VCardTitle>
        Producto agregados al carrito
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