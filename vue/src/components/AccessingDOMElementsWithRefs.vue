<script setup>
import { ref } from "vue";

const inputRef = ref();

const focusInput = () => {
    inputRef.value.focus();
};
</script>

<template>
    <div>
        <input ref="inputRef" type="text" />
        <button @click="focusInput">Focus Input</button>
    </div>
</template>
