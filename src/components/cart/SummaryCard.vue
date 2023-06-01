<script setup lang="ts">
import { useCartStore } from '@/stores/cart';

// store
const carStore =useCartStore()
const {totalAmount} = carStore 
</script>
<template>
    <div>
        <VCard>
            <VCardTitle>
               Resumen de la compra 
            </VCardTitle>

            <VCardSubtitle>
                Total a pagar: {{totalAmount()}}
            </VCardSubtitle>

            <VCardText>
                <VBtn variant="tonal" color="orange-lighten-2">
                    Realizar pedido
                </VBtn>
            </VCardText>
        </VCard>
    </div>
</template>


