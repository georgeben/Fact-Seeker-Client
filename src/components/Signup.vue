<template>
  <form @submit="signUp">
      <h3>Sign up</h3>
      <div class="alert alert-danger" role="alert" v-if="errorMessage">
        {{errorMessage}}
      </div>
      <div class="form-group">
          <label for="name">Name</label>
          <input type="text" class="form-control" id="name" placeholder="Enter your name" v-model="user.name" required/>
      </div>
      <div class="form-group">
          <label for="email">Email</label>
          <input type="email" class="form-control" id="email" placeholder="Enter your email" v-model="user.email" required/>
      </div>
      <div class="form-group">
          <label for="password">Password</label>
          <input type="password"  class="form-control" id="password" placeholder="Choose a password" v-model="user.password" required/>
      </div>

      <button>Submit</button>
  </form>
</template>

<script>
import { mapMutations, mapState } from 'vuex';
import api from '../api/user';

export default {
  data() {
    return {
      user: {
        name: '',
        email: '',
        password: '',
      },
    };
  },
  methods: {
    ...mapMutations(['setUser', 'setErrorMsg']),
    async signUp(e) {
      e.preventDefault();
      const createdUser = await api.signUp(this.user);
      if(!createdUser){
          return;
      }
      console.log({ createdUser });
      this.setUser(createdUser.data);
      this.$router.push('/onboarding/1')
    },
  },
  computed: {
      ...mapState(['errorMessage'])
  },
  mounted(){
      this.setErrorMsg('')
  }
};
</script>

<style scoped>

form{
    width: 50%;
    margin-left: auto;
    margin-right: auto;
    margin-top: 60px;
    border: 1px solid #d9d9d9;
    padding: 15px;
    border-radius: 20px;
}

form h3{
    text-align: center;
}

form button{
    background-color: #1a66b1;
    color: white;
    border: none;
    padding: 7px;
    border-radius: 3px;
}

</style>
