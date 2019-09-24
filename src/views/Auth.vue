<template>
  <div>
    <SignUp v-if="url === '/signup'" />
    <Login v-if="url === '/login'" />
  </div>
</template>

<script>
import SignUp from '../components/Signup'
import Login from '../components/Login'
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