<template>
  <div>
    <h3>Contador: {{ count }}</h3>
    <button @click="increment">Incrementar</button>
    <button @click="decrement">Decrementar</button>
    <button @click="reset">Reiniciar</button>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const count = ref(0);

    const increment = () => count.value++;
    const decrement = () => count.value--;
    const reset = () => (count.value = 0);

    return { count, increment, decrement, reset };
  },
};
</script>

<style scoped>
button {
  margin: 0.5rem;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  background-color: #42b883;
  color: white;
}

button:hover {
  background-color: #42b883;
}
</style>
