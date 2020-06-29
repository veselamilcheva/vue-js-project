<template lang="html">

  <section class="app-user-edit">
    <h1>User edit</h1>
    <p>User age: {{ userAge }}</p>
    <button @click="editAge">EditAge</button>
  </section>

</template>

<script lang="js">
  import { store } from '../main';
  export default  {
    name: 'app-user-edit',
    props: ['userAge'],
    mounted () {

    },
    data () {
      return {
      }
    },
    methods: {
      editAge() {
        this.userAge = 30;
        //this.$emit('ageWasEdited', this.userAge)
        store.changeAge(this.userAge);
      }
    },
    computed: {

    }
}
</script>

<style scoped>
.app-user-edit {
  width: 50%;
  background: #8fbc8f;
}
</style>
