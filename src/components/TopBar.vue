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
              <VAvatar
                class="me-10 ms-4"
                size="32">
                <VImg src="/logo.png"/>
              </VAvatar>

              <RouterLink custom v-slot="{navigate}" to="/">
                <VBtn 
                prepend-icon="mdi:mdi-home" 
                variant="text" @click="navigate" 
                :active="$route.name === 'home'||$route.name ==='category'">
                  Home
                 </VBtn>
              </RouterLink>
              
              <RouterLink custom v-slot="{navigate}"
               to="/cart">
                <VBadge 
                :content="itemCount()" 
                :model-value="itemCount()> 0" 
                color="orange-lighten-2">
                  <VBtn prepend-icon="mdi:mdi-cart-outline" variant="text" @click="navigate" :active="$route.name === 'cart'" >
                    Cart
                   </VBtn>
                </VBadge>
              </RouterLink>
      
              <RouterLink custom v-slot="{navigate}" to="/about">
                <VBtn prepend-icon="mdi:mdi-information" variant="text" @click="navigate" :active="$route.name === 'about'">
                About
                </VBtn>
              </RouterLink>
            </VContainer>
          </VAppBar>
    </div>
</template>