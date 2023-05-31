<script setup lang="ts">
import type {Category} from '@/model/tipos';
import {ref} from 'vue'
const categories = ref <Array<Category>>([{
  categoryId: 1,
  name: 'Tecnologia'
},
{
  categoryId: 2,
  name: 'Jugetes'
}
])
</script>

<template>
    <div>
        <v-sheet rounded="lg">
            <VList rounded="lg">
              <VListItem
                v-for=" category in categories"
                :key="category.categoryId"
                link
              >
                <VListItemTitle>
                   {{ category.name }}
                </VListItemTitle>
              </VListItem>
      
              <v-divider class="my-2"></v-divider>
      
              <VListItem
                link
                color="grey-lighten-4"
              >
                <VListItemTitle>
                  Refresh
                </VListItemTitle>
              </VListItem>
            </VList>
          </v-sheet>
    </div>
</template>