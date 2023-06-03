<script setup lang="ts">
import { userProductsStore } from '@/stores/products';
import { storeToRefs } from 'pinia'

//store

const productStore = userProductsStore();
const {order} = storeToRefs(productStore)
const {changeOrder} = productStore

</script>
<template>
    <VListSubheader> FILTROS </VListSubheader>

    <VListItem 
    link  @click="changeOrder('price')"
    :active="order ==='price'">
      <VListItemTitle>
        Por precio
      </VListItemTitle>
     </VListItem>

    <VListItem 
    link  @click="changeOrder('name')"
    :active="order ==='name'">
      <VListItemTitle>
        Por nombre
      </VListItemTitle>
    </VListItem>
</template>

