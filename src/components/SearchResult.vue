<template>
  <div class="result">
    <div class="vote">
      <img :src="getImage('up')" alt="upvote" @click="vote('up')" />
      <p>{{voteCount}}</p>
       <img :src="getImage('down')" alt="upvote" @click="vote('down')" />
    </div>
    <div class="text">
      <h3> <a :href="result.document.url"> {{result.document.title}} </a> </h3>
      <a :href="result.document.url" class="url"> {{result.document.url}} </a>
      <p>{{result.document.body}}</p>
    </div>
  </div>
</template>

<script>
import VoteApi from '@/api/vote';
import constants from '../constants';
import { mapMutations, mapState } from 'vuex'

export default {
  name: 'SearchResult',
  props: {
    result: {
      type: Object,
    },
  },
  data() {
    return {
      img: 'up_vote.png'
    }
  },
  computed: {
    ...mapState(['user','errorMessage']),
    voteCount() {
      return this.result.document.upvotes - this.result.document.downvotes;
    },
  },
  methods: {
    ...mapMutations(['setResult']),
    getImage(type){
      if(!this.user){
        return require(`../assets/${type}_vote.png`)
      }
      let voterIndex;
      this.result.document.voters.forEach(async (voter, i) => {
          if(voter.user.toString() == this.user._id.toString()){
              voterIndex = i;
          }
      })
      if(voterIndex == undefined){
        return require(`../assets/${type}_vote.png`)
      }

      if(type == this.result.document.voters[voterIndex].type){
        return require(`../assets/${type}_voted.png`)
      }

      return require(`../assets/${type}_vote.png`)
    },
    async vote(type) {
      console.log(this.user)
      if(!this.user){
        this.$toasted.show('You have to sign in before you can give feedback', {
            position: 'bottom-center',
            duration: 2000,
            type: 'error'
          })
        return;
      }

      if(!this.user.verifiedEmail){
        this.$toasted.show('Please verify your email before you can vote', {
            position: 'bottom-center',
            duration: 2000,
            type: 'error'
          })
        return;
      }
      const result = await VoteApi.vote(this.result.document._id, type);
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

        return;
      }
      //Update the store
      this.setResult({id: result.data._id, document: result.data})
      this.result.document = result.data;
      this.$toasted.show('Thank you for your feedback', {
        position: 'bottom-center',
        duration: 2000,
        type: 'success'
      })
    },
  }
};
</script>

<style scoped>
.result{
  display: flex;
  margin-top: 10px;
  align-items: center;
}

.vote{
  width: 5%;
  margin-right: 10px;
}

.vote img{
  height: 25px;
  cursor: pointer;
  width: 80%;
  display: block;
  margin-left: auto;
  margin-right: auto;
}

.text{
  width: 94%;
  display: block;
}

.vote p{
  text-align: center;
  margin: 2px 0;
}

.text h3{
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: normal;
  margin-bottom: 3px;
  font-size: 1.3em;
}

.text h3 a{
  text-decoration: none;
}

.url{
  color: green;
  display: block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

p{
  margin-top: 3px;
  font-size: 0.9rem;
}
</style>
