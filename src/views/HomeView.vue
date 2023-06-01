<script setup lang="ts">
import ListItems from "@/components/ListItems.vue";
import CategoryList from '@/components/CategoryList.vue'
import { onBeforeRouteUpdate} from 'vue-router';
import { userProductsStore } from "@/stores/products";
import { computed, ref } from "vue";

const productStore = userProductsStore()
const {filterProducts} = productStore
const selectCategory = ref(0)

const filteredProducts = computed(() => {
  return filterProducts(selectCategory.value);
});

onBeforeRouteUpdate((to, from, next) => {
   const categoryId = Number(to.params.categoryId)
   selectCategory.value = categoryId
  next()
    });

 
    
</script>

<template>
  <VRow>
    <VCol cols="2">
      <CategoryList/>
    </VCol>

    <VCol cols="10">
      <ListItems :filteredProducts="filteredProducts"/>
    </VCol>
  </VRow>

</template>
