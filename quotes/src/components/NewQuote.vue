<template lang="html">

  <section class="app-new-quote">
    <div class="row">
      <form>
        <div class="form-group col-sm-8 col-sm-offset-2 col-xs-12 col-md-6 col-md-offset-3">
          <label>Quote</label>
          <textarea name="" id="" cols="30" rows="3" class="form-control" v-model="quote"></textarea>
        </div>
        <div class="form-group col-sm-8 col-sm-offset-2 col-xs-12 col-md-6 col-md-offset-3">
          <button class="btn-primary" @click.prevent="createNew($event)" :disabled="showAlert">Add Quote {{ showAlert }}</button>
        </div>
      </form>
    </div>
  </section>

</template>

<script lang="js">

  export default  {
    name: 'app-new-quote',
    props: ['showAlert'],
    mounted () {

    },
    data () {
      return {
        quote: ''
      }
    },
    methods: {
      createNew() {
        this.$emit('quoteAdded', this.quote);
        this.quote = '';
      }
    },
    computed: {

    }
}
</script>

<style scoped lang="css">
  .app-new-quote {

  }
  .btn-primary:disabled {
    opacity: 50%;
  }
</style>
