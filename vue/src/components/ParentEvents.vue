<script setup>
import Children from "./Children.vue";

const handleClick = () => console.log("Button clicked!");
</script>

<template>
    <Children @clicked="handleClick" />
</template>
