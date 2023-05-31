<script setup lang="ts">
import { RouterView } from 'vue-router'
import TopBar from '@/components/TopBar.vue'
</script>

<template>
  <VApp>
    <TopBar/>
   <VMain>
      <VContainer>
       <RouterView />
      </VContainer>
   </VMain>
</VApp>
   
</template>


