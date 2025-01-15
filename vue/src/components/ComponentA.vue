<script setup>
import { useSharedCounter } from "../composables/useSharedCounter";

const { count, increment } = useSharedCounter();
</script>

<template>
    <div>
        <h2>Component A</h2>
        <button @click="increment">Increment in A</button>
        <p>Count: {{ count }}</p>
    </div>
</template>
