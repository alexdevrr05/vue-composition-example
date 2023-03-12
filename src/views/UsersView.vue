<script setup>
import useUsers from '@/composables/useUsers.js';

const { currentPage, errorMsg, isLoading, users, nextPage, prevPage } = useUsers();
</script>

<template>
  <div>
    <h2 v-if="isLoading">Espere por favor...</h2>
    <h2 v-else>Usuarios</h2>
    <h2 v-if="errorMsg">{{ errorMsg }}</h2>

    <div v-if="users.length > 0">
      <ul>
        <li v-for="user in users" :key="user.id">
          <h4>{{ user.first_name }}</h4>
          <h6>{{ user.email }}</h6>
        </li>
      </ul>
    </div>

    <div class="pagination-container">
      <div class="pagination-buttons-container">
        <button @click="prevPage">Atrás</button>
        <button @click="nextPage">Siguiente</button>
      </div>

      <h3>Página: {{ currentPage }}</h3>

    </div>

  </div>
</template>

<style scoped>
ul {
  list-style: none;
}

h2 {
  text-align: center;
}

.pagination-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.pagination-buttons-container {
  display: flex;
  margin-bottom: 1rem;
}
</style>