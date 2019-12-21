<template>
  <div>
    <Header :name="title"></Header>
    <div>
      <router-link class="nav-link" :to="{ name: 'Welcome' }" exact
        >Go to main page</router-link
      >
    </div>
    <div class="card-body">
      <ul v-if="posts && posts.length">
        <li v-for="post in posts" :key="post">
          <p>
            <strong>Post ID:</strong>
              {{ post.id }}
          </p>
          <p>
            <strong>Title:</strong>
            {{ post.title }}</p>
        </li>
      </ul>
      <ul v-if="errors && errors.length">
        <li v-for="error of errors" :key="error">{{ error.message }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from "axios";
// import { HTTP } from "../services/ApiTypicode";
import Header from "./Header.vue";

export default {
  data() {
    return {
      posts: [],
      errors: [],
      title: "Posts"
    };
  },
  components: {
    Header
  },
  mounted() {
    this.getPosts();
    console.log(this.posts)
  },
  methods: {
    getPosts: function() {
      axios
        .get("http://jsonplaceholder.typicode.com/todos", {
          params: {
            headers: {
              Authorization: "Bearer {token}"
            }
          }
        })
        .then(response => {
          this.posts = response.data;
          console.log(response, response.data)
        })
        .catch(e => {
          this.errors.push(e);
      }
    );
    }
  }
  // created() {
  //   HTTP.get("posts")
  //     .then(response => {
  //       this.posts = response.data;
  //     })
  //     .catch(e => {
  //       this.errors.push(e);
  //     });
  // }
};
</script>

<style scoped>
.nav-link {
  color: white;
  position: absolute;
  left: 0px;
  font-size: 15px;
  letter-spacing: 1.4px;
  padding: 12px;
  background-color: #7a1a1ae3;
  border-radius: 2px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
ul {
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
  justify-content: center;
}
li {
  width: 330px;
  border: 1px solid grey;
  padding: 1rem;
  margin: 1rem;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
.card-body {
  position: relative;
  top: 4rem;
}
p {
  font-size: 15px;
  letter-spacing: 1.3px;
}
text {
  max-width: 270px;
  margin: 0 auto;
  font-size: 13px;
}
</style>
