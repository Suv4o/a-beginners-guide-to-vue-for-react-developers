<script setup>
import { reactive } from "vue";

const state = reactive({
    count: 0,
    message: "Hello, Vue 3!",
});

const increment = () => {
    state.count++;
};

const updateMessage = () => {
    state.message = "You updated the message!";
};
</script>

<template>
    <div>
        <p>Count: {{ state.count }}</p>
        <p>Message: {{ state.message }}</p>
        <button @click="increment">Increment</button>
        <button @click="updateMessage">Change Message</button>
    </div>
</template>
