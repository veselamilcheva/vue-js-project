<template lang="html">

  <section class="app-quote">
    <div class="title">
      <slot name="title"></slot>
    </div>
    <hr>
    <slot name="content"></slot>
  </section>

</template>

<script lang="js">

  export default  {
    name: 'app-quote',
    props: [],
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
  .app-quote {
  }
  .title {
    color: cornflowerblue;
  }
</style>
