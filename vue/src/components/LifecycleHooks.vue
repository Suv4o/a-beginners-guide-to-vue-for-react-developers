<script setup>
import { onMounted, onUnmounted } from "vue";

onMounted(() => {
    console.log("Component mounted");
});

onUnmounted(() => {
    console.log("Component unmounted");
});
</script>

<template>
    <div>Lifecycle example</div>
</template>
