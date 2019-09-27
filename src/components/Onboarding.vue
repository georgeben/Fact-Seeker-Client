<template>
  <section>
      <div v-if="pageID === '1'">
          <h3>Weclome to Fact Seeker, {{user.name.split(' ')[0]}}</h3>
          <p>We are so glad you joined Fact seeker. Fact Seeker is a search engine that enables
            users to collectively identify fake and poor quality content on the internet. The internet
            is replete with false and sometimes harmful information. Together, we can work together
            to identify these false information and prevent others from being misled.</p>

          <h4>Just one more step...</h4>
          <p>An verification email has been sent to you. Please verify your email in order to 
            complete your registration. If you have not received an email, please click on the
            resend email button. Thank you.</p>
          <button class="action-btn" @click="resendEmail">Resend email</button>
      </div>
  </section>
</template>

<script>
import api from '../api/user'
import { mapState } from 'vuex'
export default {
    name: 'Onboarding',
    computed: {
        ...mapState(['user']),
        pageID(){
            return this.$route.params.pageID;
        }
    },
    methods: {
        async resendEmail(){
            let result = await api.resendConfirmationEmail();
            if(!result){
                if(this.errorMessage){
                    //Show toast
                    this.$toasted.show(this.errorMessage, {
                        position: 'bottom-center',
                        duration: 2000,
                        type: 'error'
                    })
                }

                return;
            }

            this.$toasted.show(result.data, {
                position: 'bottom-center',
                duration: 2000,
                type: 'success'
            })

        }
    }
}
</script>

<style scoped>

section{
    width: 90%;
    margin-left: auto;
    margin-right: auto;
    margin-top: 10%;
}

section h3{
    text-align: center;
}

section p{
    text-align: justify
}

</style>