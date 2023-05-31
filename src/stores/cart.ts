import { ref } from 'vue'
import { defineStore } from 'pinia'
import type {CartDetail} from '../model/tipos'


export const useCartStore = defineStore('cart', () => {
  const details = ref <Array<CartDetail>>([])

// action
  const addProduct = (productId:number) => {
    const detailFound = details.value.find(detail => detail.productId === productId)
  detailFound 
  ? detailFound.amount++
  :details.value.push({
    name:"",
  productId,
  amount: 1
  })
}

const itemCount = () => {
let count = 0;
details.value.forEach(element => {
  count += element.amount;
});
return count
}
  return {details, addProduct, itemCount }
})
