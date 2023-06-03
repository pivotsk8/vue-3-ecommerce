<script setup lang="ts">
import { useRouter } from 'vue-router';
import type {Category} from '@/model/tipos';
import {ref} from 'vue'
import OrderOption from '../components/sideBar/OrderOption.vue';

//router
const router = useRouter()




const categories = ref <Array<Category>>([{
  categoryId: 1,
  name: 'mobilario',
  description:'Mobilario para tu casa.'
},
{
  categoryId: 2,
  name: 'accesorios',
  description:'Accesorios de decoracion.'
}
])

// Methods
const selectCategory = (categoryId:number) =>{
router.push({
name:"category",
params: {categoryId}
})
}



</script>

<template>
    <div>
        <v-sheet rounded="lg">
            <VList rounded="lg">

              <VListSubheader>
                CATEGORIAS
              </VListSubheader>

              <VListItem 
              link
              @click="selectCategory(0)"
              :active="$route.params.categoryId === '0' || $route.name === 'home' "
              >
                <VListItemTitle>
                  Todas
                </VListItemTitle>
              </VListItem>
            
              <VListItem
              :active="Number($route.params.categoryId) === category.categoryId || $route.name === 'categoty'"
                v-for=" category in categories"
                :key="category.categoryId"
                link
                @click="selectCategory(category.categoryId)"
              >
                <VListItemTitle>
                   {{ category.name }}
                </VListItemTitle>
              </VListItem>
      
              <v-divider class="my-2"></v-divider>
              <OrderOption/>
            </VList>
          </v-sheet>
    </div>
</template>