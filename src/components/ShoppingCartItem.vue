<script lang="ts" setup>
import { useCartStore } from '@/stores/cart';
import {type PropType } from 'vue'
import type { CartDetail } from '../model/tipos';
const carStore = useCartStore()
const {deleteProduct,increment,decrement} = carStore

const props = defineProps({
detail: {
    type: Object as PropType<CartDetail>,
    required: true
}
})

const productImage=()=>{
return props.detail.product?.image 
?? "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
}

const subTotal=()=>{
    return props.detail.product?.price * props.detail.amount
}
</script>

<template>
    <tr>
        <td>  
            <VAvatar size="30px" class="mr-3">
            <VImg :src="productImage()" />
            </VAvatar>
            {{props.detail.product.name}}  
        </td>
        <td class="text-center">
            <VBtn
            class="ml-2"
            size="x-small"
            icon="mdi:mdi-minus" 
            @click="decrement(props.detail.product.id)"/>
             cantidad: {{props.detail.amount }}
           
            <VBtn 
            size="x-small"
            icon="mdi:mdi-plus"
            @click="increment(props.detail.product.id)"/>
        </td>
        <td>
            ${{ props.detail.product.price }}
        </td>
        <td>
            ${{subTotal()}}
        </td>
        <td>
            <VBtn 
            class="ml-2"
            size="x-small"
            icon="mdi:mdi-delete"
            @click="deleteProduct(props.detail.product.id)"/>
        </td>
   </tr> 
</template>