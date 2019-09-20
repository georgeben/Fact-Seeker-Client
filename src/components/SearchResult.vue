<template>
  <div class="result">
    <h3> <a :href="result.document.url"> {{result.document.title}} </a> </h3>
    <a :href="result.document.url" class="url"> {{result.document.url}} </a>
    <p>{{result.document.body}}</p>
  </div>
</template>

<script>
export default {
  name: 'SearchResult',
  props: {
    result: {
      type: Object,
    },
  },
  mounted() {
    console.log(this.result);
  },
};
</script>

<style scoped>
.result h3{
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: normal;
  margin-bottom: 3px;
}

.result h3 a{
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
