import categoriesData from "@/data/categories.json"
import {defineStore} from 'pinia'
import  type {Category} from '@/model/tipos'

export const useCategoriesStore = defineStore('categories',{
  state:() => ({
    categories:categoriesData as Category[]
  }),
  getters:{

  },
  actions:{

  }
})