<template>
  <section>
      <div v-if="verifyEmailSuccess">
          <h3>Congratulations</h3>
          <p v-if="verifyEmailSuccess">You have successfully verified your email</p>
          <button class="action-btn"><router-link to="/login">Log in</router-link></button>
      </div>
      <div v-else>

          <h3>{{msg}}</h3>
          <button class="action-btn"><router-link to="/login">Log in</router-link></button>
      </div>
  </section>
</template>

<script>
import api from '../../api/user'
import { mapState, mapMutations } from 'vuex';
export default {
    name: 'VerifyEmail',
    data(){
        return {
            verifyEmailSuccess: false,
            msg: ''
        }
    },
    computed: {
        ...mapState(['errorMessage'])
    },
    async created(){
        let token = this.$route.params.token;
        //Send req to the backend
        let result = await api.verifyUserEmail(token);
        if (!result){
            //Check if there was an error
            if(this.errorMessage){
            //Show toast
                this.$toasted.show(this.errorMessage, {
                    position: 'bottom-center',
                    duration: 2000,
                    type: 'error'
                })
            }
          this.msg = this.errorMessage
          return;
        }
        this.verifyEmailSuccess = true;
        this.setUser(result.data)
    },
    methods: {
        ...mapMutations(['setUser'])
    }
}
</script>

<style>

section{
    width: 60%;
    margin-left: auto;
    margin-right: auto;
    margin-top: 10%;
    text-align: center;
}

.action-btn a{
    color: white;
    text-decoration: none;
}

</style>