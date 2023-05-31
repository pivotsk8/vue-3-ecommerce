<script setup lang="ts">
import ListItems from "@/components/ListItems.vue";
import CategoryList from '@/components/CategoryList.vue'
</script>

<template>
  <VRow>
    <VCol cols="2">
      <CategoryList/>
    </VCol>

    <VCol cols="10">
      <ListItems/>
    </VCol>
  </VRow>

</template>
