<template lang="html">

  <section class="app-user">
    Awesome user!!
    age: {{ age }}
    <button @click="changeName">Change my name</button>
    <hr>
    <app-user-detail 
      :name="name" 
      @resetName="name = $event"
      :resetFn="resetName"
      :userAge="age"
      ></app-user-detail>
    <app-user-edit :userAge="age" @ageWasEdited="age = $event"></app-user-edit>
  </section>

</template>

<script lang="js">
  import  UserDetail from './UserDetail';
  import  UserEdit from './UserEdit';

  export default  {
    components: {
      'app-user-detail': UserDetail,
      'app-user-edit': UserEdit
    },
    name: 'app-user',
    props: [],
    mounted () {

    },
    data () {
      return {
        name: 'Vess',
        age: 7
      }
    },
    methods: {
      changeName() {
        this.name = 'Anna';
      },
      resetName() {
        this.name = 'Max'
      }
    },
    computed: {

    }
}
</script>

<style scoped>
.app-user {
  background-color: #f0f8ff;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  flex-direction: column;
}
</style>
