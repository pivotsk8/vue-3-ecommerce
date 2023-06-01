<script  setup lang="ts">
import { storeToRefs } from "pinia";
import { RouterLink } from "vue-router";
import { useCartStore } from '@/stores/cart';
import ShoppingCartItem from '@/components/shoppingCartItem.vue'



// stores
const carStore = useCartStore()
const {details} = storeToRefs(carStore)

// methods
const key = (key : number) => {
return key++
}
</script>

<template>
  <div>
    <VCard>
      <VCardTitle>
        Productos agregados al carrito
      </VCardTitle>

      <VCardText>
      <VTable v-if="details.length > 0">
        <thead>
          <tr>
            <th class="text-left">
              Producto
            </th>
            <th class="text-center">
              Cantidad
            </th>
            <th class="text-left">
              Precio
            </th>
            <th class="text-left">
              Subtotal
            </th>
            <th class="text-left">
              Eliminar
            </th>
          </tr>
        </thead>
        <tbody>
          <ShoppingCartItem  
          v-for="detail in details " 
          :key="key(detail.product.id)" 
          :value="detail.product.id"
          :detail="detail"/>
        </tbody>
      </VTable>
      
        <p v-else>
          Aun no has agregado pproductos a tu carrito de compras
          Haz <RouterLink  to="/"> Click aqui </RouterLink> para ver los productos disponibles
        </p>
      </VCardText>
     </VCard>
  </div>
</template>