<script lang="ts" setup>
import OrderOption from '../components/sideBar/OrderOption.vue';
import CategoiesOption from '../components/sideBar/categoriesOption.vue';
</script>

<template>
    <div>
        <v-sheet rounded="lg">
            <VList rounded="lg">
              <CategoiesOption/>

              <v-divider class="my-2"></v-divider>
              
              <OrderOption/>
            </VList>
          </v-sheet>
    </div>
</template>