<script lang="ts" setup>
import { RouterLink} from 'vue-router'
import {useCartStore} from '@/stores/cart'

//store
const cartStore = useCartStore()

//variables
const itemCount =()=>{
  return cartStore.itemCount()
}
</script>
<template>
    <div>
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
                <VBadge 
                :content="itemCount()" 
                :model-value="itemCount()> 0" 
                color="orange-lighten-2">
                  <VBtn variant="text">
                    Cart
                   </VBtn>
                </VBadge>
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
    </div>
</template>