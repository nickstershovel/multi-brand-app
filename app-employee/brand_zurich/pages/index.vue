<template>
    <div class="zurich-card">
        <h1>Zurich Homepage</h1>
        <CommonComponent />
        <button class="zurich-button">Explore Services</button>
        <a href="#" class="zurich-link">About Zurich</a>
    </div>
</template>

<script setup>
import CommonComponent from '@common/components/CommonComponent.vue'
definePageMeta({
    layout: 'default'
})
</script>