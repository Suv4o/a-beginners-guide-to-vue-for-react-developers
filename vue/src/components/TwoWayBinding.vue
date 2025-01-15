<script setup>
import { ref } from "vue";

const inputValue = ref("");
</script>

<template>
    <div>
        <input v-model="inputValue" placeholder="Type something..." />
        <p>You typed: {{ inputValue }}</p>
    </div>
</template>
