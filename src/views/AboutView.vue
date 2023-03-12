<script setup>
import { ref, onMounted } from 'vue'

const el = ref();


onMounted(() => {
  console.log(el.value); // <div>
})

</script>



<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div ref="el"></div>
  </div>
</template>
