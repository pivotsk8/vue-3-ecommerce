<script  setup lang="ts">
import ItemCard from '@/components/ItemCard.vue'
import type { Products} from '@/model/tipos';
import { ref} from 'vue'

const products = ref <Array<Products>>([
  {
  id: 1,
  name: 'Silla',
  price: 150,
  categotyId:1,
  image:"https://mueblesalbura.com.co/wp-content/uploads/2021/02/silla_oikos_lateral_azul_muebles_albura.jpg"
  },
  {
  id: 2,
  name: 'Lampara',
  price: 200,
  categotyId:2,
  image:"https://images.hola.com/imagenes/decoracion/20211022198230/lamparas-pie-iconicas-historia-diseno-nu/1-10-498/lamparas-pie-iconicas-hola-decoracion-02-a.jpg?tx=w_360"
  },
  {
  id: 3,
  name: 'Mesa',
  price: 500,
  categotyId:1,
  image:"https://falabella.scene7.com/is/image/FalabellaCO/3564389_1?wid=800&hei=800&qlt=70"
  },
  {
  id: 4,
  name: 'Florero',
  price: 150,
  categotyId:2,
  image:"https://i.pinimg.com/originals/bc/6c/38/bc6c38fb1d260c597f6b782db13a70de.jpg"
  },
  {
  id: 5,
  name: 'Cuadro en madera',
  price: 200,
  categotyId:2,
  image:"https://img.freepik.com/fotos-premium/accesorios-decorativos-hogar-sala-estar_593294-453.jpg"
  },
  {
  id: 6,
  name: 'Silla acapulco',
  price: 500,
  categotyId:1,
  image:"https://mxcity.mx/wp-content/uploads/2018/03/silla.jpg"
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