<template>
  <div>
    <div class="welcome-page">
    <router-link class="nav-link" :to="{name: 'Welcome'}" exact>Go to main page</router-link>
    </div>
    <h1>Typicode Posts</h1>
    <div class="card-body">
      <ul v-if="posts && posts.length">
        <li v-for="post in posts" :key="post">
          <p>{{post.id}}</p>
          <p><strong>{{post.title}}</strong></p>
          <p>{{post.body}}</p>
        </li>
      </ul>
      <ul v-if="errors && errors.length">
        <li v-for="error of errors" :key="error">{{error.message}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import { HTTP } from '../services/ApiTypicode';

export default {
  data() {
    return {
      posts: [],
      errors: [],
    };
  },

  created() {
    HTTP.get('posts')
      .then((response) => {
        this.posts = response.data;
        console.log(typeof(this.posts))
        console.log(this.posts)

      })
      .catch((e) => {
        this.errors.push(e);
      });
  },
};

</script>

<style scoped>
</style>