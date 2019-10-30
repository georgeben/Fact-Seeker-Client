<template>
  <div id="app">
    <Navbar />
    <router-view/>
  </div>
</template>

<script>
import Navbar from '@/components/Shared/Navbar.vue';
import { mapMutations } from 'vuex';
import constants from './constants';
import storageUtil from './utils/localStorage';

export default {
  name: 'App',
  components: {
    Navbar,
  },
  methods: {
    ...mapMutations(['setUser'])
  },
  created(){
    let user = storageUtil.loadState(constants.currentUser);
    if(user){
      this.setUser(user)
    }
  }
}
</script>

<style>

body{
  margin: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.action-btn{
    background-color: #1a66b1;
    color: white;
    border: none;
    padding: 7px;
    border-radius: 3px;
}

.nav-link{
  color: white !important;
}

</style>
