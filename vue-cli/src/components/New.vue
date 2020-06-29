<template lang="html">

  <section class="app-new">
    <p>New</p>
    <button @click="counter++">Counter</button>
    {{ counter }}
  </section>

</template>

<script lang="js">

  export default  {
    name: 'app-new',
    props: [],
    mounted () {

    },
    data () {
      return {
          counter: 0
      }
    },
    methods: {

    },
    computed: {

    },
    destroyed() {
        console.log('destroyed');
    },
    deactivated() {
        console.log('deactivated');
    },
    activated() {
        console.log('activated')
    },
}

</script>

<style scoped lang="css">
  .app-new {
   
  }
</style>
