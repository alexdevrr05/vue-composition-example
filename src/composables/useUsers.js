import { ref } from 'vue';
import axios from 'axios';

const useUsers = () => {
  const users = ref([]);
  const isLoading = ref(true);
  const currentPage = ref(1);
  const errorMsg = ref(null);

  const getUsers = async (page = 1) => {
    if (page <= 0) page = 1;

    const { data } = await axios.get(`https://reqres.in/api/users`, {
      params: {
        page,
      },
    });

    if (data.data.length > 0) {
      users.value = data.data;
      currentPage.value = page;
      errorMsg.value = null;
    } else if (currentPage.value > 0) {
      errorMsg.value = 'No hay más usuarios que mostrar';
    }

    isLoading.value = false;
  };

  getUsers();

  return {
    currentPage,
    errorMsg,
    isLoading,
    users,
    nextPage: () => getUsers(currentPage.value + 1),
    prevPage: () => getUsers(currentPage.value - 1),
  };
};

export default useUsers;
