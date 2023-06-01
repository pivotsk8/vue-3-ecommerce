<script  setup lang="ts">
import ItemCard from '@/components/cart/ItemCard.vue'
import type { Products} from '@/model/tipos';
import { ref} from 'vue'

const products = ref <Array<Products>>([
  {
  id: 1,
  name: 'silla',
  price: 150,
  image:"https://mueblesalbura.com.co/wp-content/uploads/2021/02/silla_oikos_lateral_azul_muebles_albura.jpg"
  },
  {
  id: 2,
  name: 'lampara',
  price: 200,
  image:"https://images.hola.com/imagenes/decoracion/20211022198230/lamparas-pie-iconicas-historia-diseno-nu/1-10-498/lamparas-pie-iconicas-hola-decoracion-02-a.jpg?tx=w_360"
  },
  {
  id: 3,
  name: 'mesa',
  price: 500,
  image:"https://falabella.scene7.com/is/image/FalabellaCO/3564389_1?wid=800&hei=800&qlt=70"
  },
  {
  id: 4,
  name: 'silla',
  price: 150,
  image:null
  },
  {
  id: 5,
  name: 'butaco',
  price: 200,
  image:null
  },
  {
  id: 6,
  name: 'mesa',
  price: 500,
  image:null
  },
])

const key = (id:any) => id++


</script>

<template>  
  <div>
    <VRow>
        <VCol v-for="product in products" :key="key(product.id)" cols="4">
          <ItemCard 
          :products="product" />
        </VCol>
      </VRow>
     </div>
</template>