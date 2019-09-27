<template>
  <nav>
      <div class="left">
          <h2><router-link to="/">Fact Seeker</router-link></h2>
          <form @submit="search" v-if="url === '/search'">
            <input placeholder="Search for anything..." v-model="newQuery" />
            <button @click="search">Search</button>
          </form>
      </div>

      <div class="user-details" v-if="user">
          <p>Welcome, {{user.name.split(' ')[0]}}</p>
          <a @click="logout">Log out</a>
      </div>
      <div v-else>
          <ul>
              <li><router-link to="/login">Log in</router-link></li>
              <li><router-link to="/signup">Sign up</router-link></li>
          </ul>
      </div>
  </nav>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
import api from '../api/search';
import storageUtil from '../utils/localStorage';
import requests from '../config/requests'

export default {
    name: 'Navbar',
    data(){
        return {
            newQuery: ""
        }
    },
    computed: {
        ...mapState(['query', 'user']),
        url(){
            return this.$route.path;
        }
    },
    methods: {
    ...mapMutations(['setQuery', 'setResults', 'setResultCount', 'reset']),
    async search(e) {
      e.preventDefault();

      if (!this.newQuery) {
        return;
      }

      this.setQuery(this.newQuery);
      let results = await api.search(this.newQuery)
      console.log(results);
      this.setResults(results);

    },
    logout(){
        storageUtil.clearStorage();
        requests.removeHttpAuthHeader()
        this.reset()
        this.router.push('/')
    }
  }
}
</script>

<style scoped>

nav{
    background-color: #1a66b1;
    color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0;
    padding: 5px;
}

nav h2{
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    margin-top: 5px;
    margin-bottom: 5px;
}

nav ul {
    list-style-type: none;
    display: flex;
    padding-left: 0;
    margin-bottom: 0;
}

nav ul li {
    margin: 0 5px;
}

nav a{
    text-decoration: none;
    color: white;
}

nav a:hover{
    text-decoration: underline;
}

.left{
    display: flex;
    align-items: center;
    width: 70%;
}

.left form{
    margin-left: 50px;
    width: 60%;
}

.left form input{
    padding: 7px;
    border: none;
    width: 60%;
}

.left form button{
    background-color: #1a66b1;
    color: white;
    padding: 6px;
    border: 1px solid white;
    cursor: pointer;
}

.user-details{
    display: flex;
}

.user-details p{
    margin-right: 10px;
}

.user-details a{
    color: red;
    cursor: pointer;
}

.user-details a:hover{
    color: red;
}

</style>