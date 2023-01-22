<script>
import { ref, reactive } from 'vue';
export default {
  name: 'HomeView',
  components: {},
  setup() {
    const ironman = ref({ name: 'Tony', age: 50 });
    const hulk = reactive({ name: 'Bruce', age: 50 });

    const changeIronman = () => {
      ironman.value.name = 'Ironman';
      ironman.value.age = 21;
    };
    const changeHulk = () => {
      hulk.name = 'Hulk';
      hulk.age = 60;
    };

    const ironmanIsAlive = ref(false);
    // TODO: BAD reactive no acepta primitivos, solo objetos
    // const hulkIsAlive = reactive(false);

    const changeStatus = () => {
      ironmanIsAlive.value = !ironmanIsAlive.value;
      // hulkIsAlive = !hulkIsAlive;
    };

    return {
      ironman,
      hulk,
      ironmanIsAlive,

      changeIronman,
      changeHulk,
      changeStatus,
    };
  },
};
</script>

<template>
  <div class="home">
    <h1>{{ ironman }}</h1>
    <h1>{{ hulk }}</h1>
    <button @click="changeIronman">Change Ironman</button>
    <button @click="changeHulk">Change Hulk</button>
    <div>
      <button @click="changeStatus">Ref vs Reactive</button>
      <h2>Iron: {{ ironmanIsAlive }}</h2>
    </div>
  </div>
</template>
