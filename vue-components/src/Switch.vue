<template lang="html">

  <section class="app-switch" style="display:flex">
    <div id="on" @click="switched(true)" :class="{active: value}">Onn</div>
    <div id="off" @click="switched(false)" :class="{active: !value}">Off</div>
  </section>

</template>

<script lang="js">

  export default  {
    name: 'app-switch',
    props: ['value'],
    mounted () {
      
    },
    data () {
      return {
  
      }
    },
    methods: {
      switched(isOn) {
        this.$emit('input', isOn)
      }
    },
    computed: {

    }
}


</script>

<style scoped lang="css">
  .app-switch {

  }
  #on, #off {
    width: 40px;
    height: 20px;
    background-color: lightgray;
    padding: 2px;
    margin: 10px -2px;
    box-sizing: content-box;
    cursor: pointer;
    text-align: center;
  }
  #on:hover, #on.active {
    background-color: lightgreen;
  }
  #off:hover, #off.active {
    background-color: lightcoral;
  }
</style>
