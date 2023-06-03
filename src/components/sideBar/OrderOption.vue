<script setup lang="ts">
import { userProductsStore } from '@/stores/products';
import { storeToRefs } from 'pinia'

//store

const productStore = userProductsStore();
const {order} = storeToRefs(productStore)
const {changeOrder} = productStore

</script>
<template>
    <VListSubheader> Ordenar por </VListSubheader>

    <VListItem 
    link  @click="changeOrder('price')"
    :active="order ==='price'">
      <VListItemTitle>
        Precio (menor a mayor)
      </VListItemTitle>
     </VListItem>

    <VListItem 
    link  @click="changeOrder('priceDesc')"
    :active="order ==='priceDesc'">
      <VListItemTitle>
        Precio (mayor a menor)
      </VListItemTitle>
     </VListItem>

    <VListItem 
    link  @click="changeOrder('name')"
    :active="order ==='name'">
      <VListItemTitle>
        Nombre (A-Z)
      </VListItemTitle>
     </VListItem>

    <VListItem 
    link  @click="changeOrder('nameDesc')"
    :active="order ==='nameDesc'">
      <VListItemTitle>
        Nombre (Z-A)
      </VListItemTitle>
    </VListItem>
</template>

