<template>
  <SignUp />
</template>

<script>
import SignUp from '../components/Signup'
export default {
    name: 'Auth',
    components: {
        SignUp,
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