<template>
    <div class="allwell-card">
        <img src="~images/logo.svg" alt="Allwell Logo" class="logo" />
        <h1>Allwell Homepage</h1>
        <CommonComponent />
        <button class="allwell-button">Learn More</button>
        <a href="#" class="allwell-link">About Allwell</a>
    </div>
</template>

<script setup>
import CommonComponent from '@common/components/CommonComponent.vue'
definePageMeta({
    layout: 'default'
})
</script>