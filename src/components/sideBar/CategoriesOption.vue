<script setup lang="ts">
import { useRouter } from 'vue-router';
import { userProductsStore } from "@/stores/products";
import { useCategoriesStore } from "@/stores/categories";
import { storeToRefs } from 'pinia';

const productStore = userProductsStore()
const categoriesStore = useCategoriesStore()
const {categories} = storeToRefs(categoriesStore)
const{changeCategory}=productStore

//router
const router = useRouter()

// Methods
const selectCategory = (categoryId:number | null ) =>{
categoryId === 0 ?(
  router.push({
name:"home",
}), changeCategory(0)
)

 : router.push({
name:"category",
params: {categoryId}
})
}

</script>

<template>
    <VListSubheader>
        CATEGORIAS
      </VListSubheader>

      <VListItem 
      link
      @click="selectCategory(0)"
      :active="$route.name === 'home' "
      >
        <VListItemTitle>
          Todas
        </VListItemTitle>
      </VListItem>

      <VProgressLinear v-if="categories.length === 0" indeterminate></VProgressLinear>
      <VListItem
      :active="Number($route.params.categoryId) === category.categoryId || $route.name === 'categoty'"
      v-for=" category in categories"
      :key="category.categoryId"
      link
      @click="selectCategory(category.categoryId)"
      >
      <VListItemTitle>
        {{ category.name }}
      </VListItemTitle>
    </VListItem>
</template>


<style scoped>

</style>