<template>
  <form @submit="signUp">
      <h3>Sign up</h3>
      <div>
          <label>Name</label>
          <input type="text" placeholder="Enter your name" v-model="user.name" required/>
      </div>
      <div>
          <label>Email</label>
          <input type="email" placeholder="Enter your email" v-model="user.email" required/>
      </div>
      <div>
          <label>Password</label>
          <input type="password" placeholder="Choose a password" v-model="user.password" required/>
      </div>

      <button>Submit</button>
  </form>
</template>

<script>
import api from '../api/user'
export default {
    data(){
        return {
            user: {
                name: '',
                email: '',
                password: ''
            }
        }
    },
    methods: {
        async signUp(e){
            e.preventDefault();
            console.log("Hello")
            let createdUser = await api.signUp(this.user)
            console.log({createdUser})
        }
    }
}
</script>

<style>

</style>