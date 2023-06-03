<script setup lang="ts">
import ListItems from "@/components/ListItems.vue";
import SideBar from '@/components/SideBar.vue'
import { onBeforeRouteUpdate} from 'vue-router';
import { userProductsStore } from "@/stores/products";
import {onMounted} from 'vue'

const productStore = userProductsStore()
const{changeCategory}=productStore

onBeforeRouteUpdate((to, from, next) => {
   const categoryId = Number(to.params.categoryId)
changeCategory(categoryId)  
next()
    })

onMounted(() => {
  changeCategory(0) 
})   

 
    
</script>

<template>
  <VRow>
    <VCol cols="2">
      <SideBar/>
    </VCol>

    <VCol cols="10">
      <ListItems />
    </VCol>
  </VRow>

</template>
