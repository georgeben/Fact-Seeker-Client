<template>
  <nav>
      <div>
          <h2>Seeker</h2>
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
    name: 'Navbar'
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

nav ul li a{
    text-decoration: none;
    color: white;
}

nav ul li a:hover{
    text-decoration: underline;
}

</style>