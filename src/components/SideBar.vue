<script lang="ts" setup>
import OrderOption from '../components/sideBar/OrderOption.vue';
import CategoriesOption from '@/components/sideBar/CategoriesOption.vue';
</script>

<template>
    <div>
        <v-sheet rounded="lg">
            <VList rounded="lg">
              <CategoriesOption/>

              <v-divider class="my-2"></v-divider>
              
              <OrderOption/>
            </VList>
          </v-sheet>
    </div>
</template>