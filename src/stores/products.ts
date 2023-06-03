import produsctsData from '@/data/products.json'
import { defineStore } from "pinia";
import type { Products} from '@/model/tipos';
import { ref,watch} from 'vue'

export const userProductsStore = defineStore( 'products',()=>{
    const originalProducts = produsctsData
    const filteredProducts = ref <Array<Products>>([])

    const order = ref<string>("price")
    const categoryId = ref<number | null>(null)

    //action
    const filterProducts = () => {
        let updateProducts = originalProducts.slice(); 
    
        if (categoryId.value) {
            updateProducts = updateProducts.filter(product => product.categotyId === categoryId.value);
        } 
        if(!categoryId.value){
            updateProducts
        }
    
        if (order.value === 'price') {
            updateProducts.sort((a, b) => a.price - b.price);
        } 
        if (order.value === 'priceDesc') {
            updateProducts.sort((a, b) => b.price - a.price);
        } 
        if (order.value === 'name') {
            updateProducts.sort((a, b) => a.name.localeCompare(b.name));
        }
        if (order.value === 'nameDesc') {
            updateProducts.sort((a, b) => b.name.localeCompare(a.name));
        }
    
        filteredProducts.value = updateProducts;
        return filteredProducts.value;
      };
  
    
const changeOrder = (orderTocomponent:string) =>{
 order.value = orderTocomponent
} 
const changeCategory = (category:number) =>{
 categoryId.value = category
} 

watch([order, categoryId], () => {
    filterProducts();
  });


    return {
        categoryId,
        order,
        changeOrder,
        changeCategory,
        products: filteredProducts,
       filterProducts,
    }
})
