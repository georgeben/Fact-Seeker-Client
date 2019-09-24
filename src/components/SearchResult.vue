<template>
  <div class="result">
    <div class="vote">
      <img src="../assets/up_vote.png" alt="upvote" @click="vote('up')" />
      <p>{{voteCount}}</p>
       <img src="../assets/down_vote.png" alt="upvote" @click="vote('down')" />
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
  computed: {
    ...mapState(['errorMessage']),
    voteCount() {
      return this.result.document.upvotes - this.result.document.downvotes;
    },
  },
  methods: {
    ...mapMutations(['setResult']),
    async vote(type) {
      if (type === constants.UP_VOTE) {
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
      } else if (type == constants.DOWN_VOTE) {
        const result = await VoteApi.vote(this.result.document._id, type);
        this.setResult({id: result.data._id, document: result.data})
        this.result.document = result.data;
      }
    },
  }
};
</script>

<style scoped>
.result{
  display: flex;
  margin-bottom: 10px;
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
