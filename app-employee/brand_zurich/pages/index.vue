<template>
    <div class="zurich-card">
        <img src="~images/logo.svg" alt="Zurich Logo" class="logo" />
        <h1>Zurich Homepage</h1>
        <Greeting />
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