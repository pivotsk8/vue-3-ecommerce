<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <VApp>
    <VAppBar flat>
      <VContainer class="fill-height d-flex align-center">
        <v-avatar
          class="me-10 ms-4"
          color="grey-darken-1"
          size="32"
        ></v-avatar>
        <RouterLink to="/">
          <VBtn variant="text">
            Home
           </VBtn>
        </RouterLink>
        
        <RouterLink to="/cart">
          <VBtn variant="text">
            Cart
           </VBtn>
        </RouterLink>

        <RouterLink to="/about">
          <VBtn variant="text">
          About
          </VBtn>
        </RouterLink>

        <v-spacer></v-spacer>

        <v-responsive max-width="260">
          <v-text-field
            density="compact"
            hide-details
            variant="solo"
          ></v-text-field>
        </v-responsive>
      </VContainer>
    </VAppBar>
   
    <VMain>
      <VContainer>
       <RouterView />
      </VContainer>
    </VMain>
  
  </VApp>
   
</template>


