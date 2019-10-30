<template>
  <nav class="navbar navbar-light navbar-expand-md">
      <div class="left">
          <h2 class="navbar-brand"><router-link to="/">Fact Seeker</router-link></h2>

          <form @submit="search" v-if="url === '/search'" class="form-inline my-2 my-lg-0">
            <input class="form-control mr-sm-2" type="search" placeholder="Search for anything..." v-model="newQuery" aria-label="Search">
            <button @click="search" class="btn btn-outline-primary my-2 my-sm-0" type="submit">Search</button>
          </form>
      </div>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent" >
        <ul class="navbar-nav mr-auto" v-if="user">
            <li class="nav-item active">
                <p class="nav-link username">{{user.name.split(' ')[0]}} <span class="sr-only">(current)</span></p>
            </li>
            <li class="nav-item">
                <a class="nav-link logout" @click="logout" href="#">Log out</a>
            </li>
        </ul>
        <ul class="navbar-nav mr-auto" v-else>
            <li class="nav-item active">
                    <router-link class="nav-link" to="/login">Log in</router-link>
            </li>
            <li class="nav-item">
                    <router-link class="nav-link" to="/signup">Sign up</router-link>
            </li>
        </ul>
      </div>

  </nav>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
import api from '../../api/search';
import storageUtil from '../../utils/localStorage';
import requests from '../../config/requests'

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
        this.$router.push('/')
    }
  }
}
</script>

<style scoped>

.navbar{
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
    width: 80%;
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

.username{
    color: white !important;
}

.logout{
    color: red !important;
    cursor: pointer;
}

.logout:hover{
    color: red !important;
}

</style>