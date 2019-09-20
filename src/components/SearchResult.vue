<template>
  <div>
    <h1> <a :href="result.document.url"> {{result.document.title}} </a> </h1>
    <a :href="result.document.url"> {{result.document.url}} </a>
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

<style>

</style>
