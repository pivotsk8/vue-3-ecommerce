<script setup lang="ts">
import CartCard from '@/components/cart/CartCard.vue'
import SummaryCard from '@/components/cart/SummaryCard.vue'
</script>

<template>
<main>
    <VRow>
        <VCol cols="8">
            <CartCard/>
        </VCol>
        <VCol cols="4">
        <SummaryCard/>
        </VCol>
    </VRow>
</main>
</template>
