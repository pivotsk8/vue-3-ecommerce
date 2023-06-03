<script setup lang="ts">
import ListItems from "@/components/ListItems.vue";
import CategoryList from '@/components/CategoryList.vue'
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
      <CategoryList/>
    </VCol>

    <VCol cols="10">
      <ListItems />
    </VCol>
  </VRow>

</template>
