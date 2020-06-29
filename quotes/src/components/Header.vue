<template lang="html">

  <section class="app-header">
    <div class="row">
      <div class="div col-sm-12">
        <h3>Quotes Added</h3>
        <div class="progress">
          <div class="progress-bar" role="progress-bar" area-valuenow="68" area-valuemin="0" area-valuemax="10"
          :style="{width: (quoteCount / maxQuotes) * 100 + '%'}">
            {{ quoteCount }} / {{ maxQuotes }}
          </div>
        </div>
      </div>
    </div>
   
  </section>

</template>

<script lang="js">

  export default  {
    name: 'app-header',
    props: ['quoteCount', 'maxQuotes'],
    mounted () {

    },
    data () {
      return {

      }
    },
    methods: {

    },
    computed: {

    }
}


</script>

<style scoped lang="css">
.app-header {
}
</style>
