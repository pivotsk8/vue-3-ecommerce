<script setup lang="ts">
import { useCartStore } from '@/stores/cart';
import { storeToRefs } from 'pinia';

// store
const carStore = useCartStore()
const { totalAmount } = carStore
const { whatsAppLink } = storeToRefs(carStore)
</script>
<template>
    <div>
        <VCard>
            <VCardTitle>
                Resumen de la compra
            </VCardTitle>

            <VCardSubtitle>
                Total a pagar: {{ totalAmount() }}
            </VCardSubtitle>

            <VCardText>
                <VBtn :href="whatsAppLink" variant="tonal" target="_blank" color="orange-lighten-2">
                    Realizar pedido
                </VBtn>
            </VCardText>
        </VCard>
    </div>
</template>


