<script setup>
const emit = defineEmits(["clicked"]);
</script>

<template>
    <button @click="emit('clicked')">Click me</button>
</template>
