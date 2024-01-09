import { ref } from "vue";

export default function useUser() {
  const users = ref([]);
  const user = ref(null);
  const baseUrl = "https://jsonplaceholder.typicode.com/users";

  const fetchAll = async () => {
    const response = await fetch(baseUrl);
    users.value = await response.json();
  };

  const getUser = async (id) => {
    const response = await fetch(`${baseUrl}/${id}`);
    user.value = await response.json();
  };

  return {
    users,
    fetchAll,
    user,
    getUser,
  };
}
