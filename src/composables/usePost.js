import { ref } from "vue";

export default function usePost() {
  const posts = ref([]);
  const post = ref(null);
  const baseUrl = "https://jsonplaceholder.typicode.com/posts";

  const fetchAll = async () => {
    const response = await fetch(baseUrl);
    posts.value = await response.json();
  };

  const getPost = async (id) => {
    const response = await fetch(`${baseUrl}/${id}`);
    post.value = await response.json();
  };

  // const { $http } = useQuasar();
  // const createPost = async (data) => {
  //   return await $http.post("/posts", data);
  // };
  // const getPost = async (id) => {
  //   return await $http.get(`/posts/${id}`);
  // };
  return {
    posts,
    fetchAll,
    post,
    getPost,
    // createPost,
  };
}
