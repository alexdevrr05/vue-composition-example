<script>
import useCounter from '@/composables/useCounter';

export default {
  name: 'Counter',
  props: {},
  setup() {
    const { counter, increase, decrease, reset } = useCounter(5);
    return { counter, increase, decrease, reset };
  },
};
</script>

<template>
  <div>
    <h2>Counter view</h2>
    <h1>{{ counter }}</h1>
    <button @click="increase">+1</button>
    <button @click="reset">reset</button>
    <button @click="decrease">-1</button>
  </div>
</template>
