<script setup>
import { useCounter } from "../composables/useCounter";

const { count, increment } = useCounter();
</script>

<template>
    <button @click="increment">Count: {{ count }}</button>
</template>
