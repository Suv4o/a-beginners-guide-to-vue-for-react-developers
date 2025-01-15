<script setup>
import { useSharedCounter } from "../composables/useSharedCounter";

const { count, decrement } = useSharedCounter();
</script>

<template>
    <div>
        <h2>Component B</h2>
        <button @click="decrement">Decrement in B</button>
        <p>Count: {{ count }}</p>
    </div>
</template>
