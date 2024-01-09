/**
 * A composable function for managing user data.
 * supperseded by useResource
 * @returns {Object} An object containing reactive user data and methods for fetching user data.
 */
export default function useUser() {
  // Reactive variables
  const users = ref([]);
  const user = ref(null);

  const baseUrl = "https://jsonplaceholder.typicode.com/users";

  /**
   * Fetches all users from the API and updates the users array.
   * @returns {Promise<void>} A promise that resolves when the users data is fetched and updated.
   */
  const fetchAll = async () => {
    const response = await fetch(baseUrl);
    users.value = await response.json();
  };

  /**
   * Fetches a specific user from the API and updates the user object.
   * @param {number} id - The ID of the user to fetch.
   * @returns {Promise<void>} A promise that resolves when the user data is fetched and updated.
   */
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
