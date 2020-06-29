<template lang="html">

  <section class="app-quote-grid">
    <div class="row">
      <app-quote v-for="(quote, index) in quotes" :key="quote" @click.native="deleteQuote(index)">{{ quote }}</app-quote>
    </div>
  </section>

</template>

<script lang="js">
  import Quote from './Quote.vue';
  export default  {
    name: 'app-quote-grid',
    props: ['quotes'],
    components: {
      appQuote: Quote
    },
    mounted () {

    },
    data () {
      return {

      }
    },
    methods: {
      deleteQuote(i) {
        this.$emit('quoteDelete', i);
      }
    },
    computed: {

    }
}


</script>

<style scoped lang="css">
  .app-quote-grid {

  }
</style>
