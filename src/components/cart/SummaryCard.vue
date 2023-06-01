<script setup lang="ts">
import { useCartStore } from '@/stores/cart';

const carStore =useCartStore()
const {totalAmount} = carStore 
</script>
<template>
    <div>
        <VCard>
            <VCardTitle>
               Resumen de la compra 
            </VCardTitle>
            <VCardText>
                <p>
                    Total a pagar: {{totalAmount()}}
                </p>
            </VCardText>
            <VBtn color="success">
                Realizar pedido
            </VBtn>
        </VCard>
    </div>
</template>


