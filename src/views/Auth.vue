<template>
  <div>
    <SignUp v-if="url === '/signup'" />
    <Login v-if="url === '/login'" />
  </div>
</template>

<script>
import SignUp from '../components/Auth/Signup'
import Login from '../components/Auth/Login'
export default {
    name: 'Auth',
    components: {
        SignUp,
        Login
    },
    computed: {
        url(){
            return this.$route.path;
        }
    }
}
</script>

<style>

</style>