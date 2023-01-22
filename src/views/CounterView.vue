<script>
import { ref } from 'vue';

export default {
  name: 'Counter',
  props: {},
  setup() {
    const counter = ref(5);

    // const increase = () => {
    //   counter.value++;
    // };
    // const decrease = () => {
    //   counter.value--;
    // };
    return {
      counter,
      increase: () => counter.value++,
      decrease: () => counter.value--,
    };
  },
};
</script>

<template>
  <div>
    <h2>Counter view</h2>
    <h1>{{ counter }}</h1>
    <button @click="increase">+1</button>
    <button @click="decrease">-1</button>
  </div>
</template>
