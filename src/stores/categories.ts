import {defineStore} from 'pinia'
import  type {Category} from '@/model/tipos'

export const useCategoriesStore = defineStore('categories',{
  state:() => ({
    categories:[{
        categoryId: 1,
        name: 'mobilario',
        description:'Mobilario para tu casa.'
      },
      {
        categoryId: 2,
        name: 'accesorios',
        description:'Accesorios de decoracion.'
      }] as Category[]
  }),
  getters:{

  },
  actions:{

  }
})