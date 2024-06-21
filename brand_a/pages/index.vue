<template>
    <div>
        <h1>Brand A Homepage</h1>
        <CommonComponent />
    </div>
</template>

<script setup>
import CommonComponent from '@common/components/CommonComponent.vue'
definePageMeta({
    layout: 'default'
})
</script>