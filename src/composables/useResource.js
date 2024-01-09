import { ref } from "vue";
import usePageRequests from "./usePageRequests.js";

export default function useResource(resourceEndPoint) {
  const { makeRequest } = usePageRequests();
  const items = ref([]);
  const item = ref(null);
  const baseUrl = `https://jsonplaceholder.typicode.com/${resourceEndPoint}`;

  const fetchAll = async () => (items.value = await makeRequest(baseUrl));
  const getItem = async (id) =>
    (item.value = await makeRequest(`${baseUrl}/${id}`));

  return {
    items,
    fetchAll,
    item,
    getItem,
  };
}
