<template>
  <div class="home">
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
