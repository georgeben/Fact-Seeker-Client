<template>
  <nav>
      <div class="left">
          <h2><router-link to="/">Seeker</router-link></h2>
          <form action="" v-if="url === '/search'">
            <input placeholder="Search for anything..." />
            <button >Search</button>
          </form>
      </div>

      <div>
          <ul>
              <li><router-link to="/">Log in</router-link></li>
              <li><router-link to="/">Sign up</router-link></li>
          </ul>
      </div>
  </nav>
</template>

<script>
export default {
    name: 'Navbar',
    computed: {
        url(){
            return this.$route.path;
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
    width: 70%;
}

.left form button{
    background-color: #1a66b1;
    color: white;
    padding: 6px;
    border: 1px solid white;
    cursor: pointer;
}

</style>