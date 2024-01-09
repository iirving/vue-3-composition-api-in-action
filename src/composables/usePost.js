/**
 * Composable function for managing posts.
 * supperseded by useResource
 * @returns {Object} An object containing reactive properties and methods for managing posts.
 * @property {Ref<Array>} posts - A reactive reference to an array of posts.
 * @property {Ref<Object>} post - A reactive reference to a single post.
 * @property {Function} fetchAll - A function that fetches all posts from the API.
 * @property {Function} getPost - A function that fetches a single post by its ID from the API.
 */

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

  return {
    posts,
    fetchAll,
    post,
    getPost,
    // createPost,
  };
}
