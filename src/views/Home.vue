<template>
  <div class="home">
    <img src="../assets/seeker.png" alt="Seeker Logo.">
    <SearchBox />
    <SearchResult v-for="(result) in results" :key="result.title" :result=result />
  </div>
</template>

<script>
// @ is an alias to /src
import SearchBox from '@/components/SearchBox.vue'
import SearchResult from '@/components/SearchResult.vue'
import { mapState } from 'vuex'

export default {
  name: 'home',
  components: {
    SearchBox,
    SearchResult
  },
  computed: {
    ...mapState(['query', 'results'])
  }
};
</script>

<style scoped>
.home{
  padding-top: 15%;
}
.home img {
  width: 200px;
  margin-bottom: 20px;
}
</style>
