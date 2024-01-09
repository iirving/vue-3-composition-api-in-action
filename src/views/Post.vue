<template>
  <div v-if="post && user">
    <h1 class="text-3xl">{{ post.title }}</h1>
    <div class="text-gray-500 mb-10">by {{ user.name }}</div>
    <div>{{ post.body }}</div>
  </div>
</template>
<script setup>
import { useRoute } from "vue-router";
import { watch } from "vue";
import useResource from "../composables/useResource.js";

// post
const { item: post, getItem: getPost } = useResource('posts');
const postId = useRoute().params.id;
getPost(postId)


// user
const { item: user, getItem: getUser } = useResource('users');
watch(
  () => ({ ...post.value }),
  (newpost) => {
    const userId = newpost.userId;
    getUser(userId);
  }
)


</script>
