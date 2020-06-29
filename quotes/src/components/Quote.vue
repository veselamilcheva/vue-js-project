<template lang="html">

  <section class="app-quote">
    <div class="col-sm-6 col-md-4 col-lg-3">
      <div class="panel panel-default">
        <div class="panel-body quote">
          <slot></slot>
          <span class="close-ico pull-right">&times;</span>
        </div>    
      </div>  
    </div>  
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
    margin: 30px 16px 30px 0;
  }
  .close-ico {
    display: none;
    position: absolute;
    top: 0;
    right: 10px;
  }
  .app-quote:hover .close-ico{
    display: block;
  }
  .panel-body {
    font-style: italic;
    color: #6e6e66;
    font-size: 18px;
    position: relative;
  }
  .quote {
    cursor: pointer;
  }
  .quote:hover {
    background: rgb(248, 213, 220);
  }
</style>
