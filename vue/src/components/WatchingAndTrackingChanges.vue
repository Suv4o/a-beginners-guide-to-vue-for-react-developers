<script setup>
import { ref, watch } from "vue";

const count = ref(0);

watch(count, (newValue) => {
    console.log("Count changed:", newValue);
});
</script>

<template>
    <button @click="count++">Increment</button>
</template>
