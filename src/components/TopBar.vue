<script lang="ts" setup>
import { RouterLink } from 'vue-router'
import { useCartStore } from '@/stores/cart'

//store
const cartStore = useCartStore()

//variables
const itemCount = () => {
  return cartStore.itemCount()
}
</script>
<template>
  <div>
    <VAppBar flat>
      <VContainer class="fill-height d-flex align-center">
        <VAvatar class="me-10 ms-4" size="32">
          <VImg src="/logo.png" />
        </VAvatar>

        <RouterLink custom v-slot="{ navigate }" to="/">
          <VBtn variant="text" @click="navigate" :active="$route.name === 'home' || $route.name === 'category'">
            <VIcon class="mr-0 mr-sm-2" icon="mdi:mdi-home" />

            <span class="d-none d-sm-flex">Home</span>
          </VBtn>
        </RouterLink>

        <RouterLink custom v-slot="{ navigate }" to="/cart">
          <VBadge :content="itemCount()" :model-value="itemCount() > 0" color="orange-lighten-2">
            <VBtn variant="text" @click="navigate" :active="$route.name === 'cart'">
              <VIcon class="mr-0 mr-sm-2" icon="  mdi:mdi-cart-outline" />

              <span class="d-none d-sm-flex">Cart</span>
            </VBtn>
          </VBadge>
        </RouterLink>

        <RouterLink custom v-slot="{ navigate }" to="/about">
          <VBtn variant="text" @click="navigate" :active="$route.name === 'about'">
            <VIcon class="mr-0 mr-sm-2" icon="  mdi:mdi-information" />

            <span class="d-none d-sm-flex">About</span>
          </VBtn>
        </RouterLink>
      </VContainer>
    </VAppBar>
  </div>
</template>