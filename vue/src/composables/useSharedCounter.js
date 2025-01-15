import { ref } from "vue";

const count = ref(0);

export function useSharedCounter() {
    const increment = () => count.value++;
    const decrement = () => count.value--;
    return { count, increment, decrement };
}
