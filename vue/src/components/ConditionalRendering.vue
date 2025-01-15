<script setup>
const isLoggedIn = true;
</script>

<template>
    <p v-if="isLoggedIn">Welcome back!</p>
    <p v-else>Please log in.</p>
</template>
