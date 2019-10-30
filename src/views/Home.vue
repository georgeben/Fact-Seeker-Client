<template>
  <div class="home">
    <img src="../assets/seeker.png" alt="Seeker Logo.">
    <SearchBox />
  </div>
</template>

<script>
// @ is an alias to /src
import SearchBox from '@/components/Search/SearchBox.vue'
import { mapState } from 'vuex'

export default {
  name: 'home',
  components: {
    SearchBox,
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
  display: block;
  margin-left: auto;
  margin-right: auto;
}
</style>
