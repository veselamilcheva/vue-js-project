<template>
  <div class="col-xs-12 col-sm-8 col-offset-2 col-md-6 col-md-offset-3">
   <div class="form-group">
     <label for="">Username</label>
     <input type="text" class="form-control" v-model="user.name">
   </div>
   <div class="form-group">
     <label for="">Email</label>
     <input type="text" class="form-control" v-model="user.email">
   </div>
   <button class="btn btn-primary" @click="submit">Submit</button>
   <hr>
    <input type="text" v-model="node">
   <button class="btn btn-primary" @click="fetchData">Get data</button>
   <br><br>
   <ul class="list-group">
     <li class="list-group-item" v-for="(u,i) in users" :key="i">
       {{ u.name }} - {{ u.email }}
     </li>
   </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        name: '',
        email: '',
        node: 'data'
      },
      users: [],
      resource: {}
    };
  },
  methods: {
    submit() {
      // this.$http.post('data.json', this.user)
      //   .then(response => {
      //   }, error => {
      //   })
      this.resource.saveAlt(this.user)
    },
    fetchData() {
      // this.$http.get('data.json')
      // .then(response => {
      //   return response.json();
      // })
      // .then(data => {
      //   let arr = [];
      //   for(let key in data ) {
      //     arr.push(data[key]);
      //   }
      //   this.users = arr;
      // })
      this.resource.getData({node: this.node}) //dynamic variable in url
      .then(response => {
        return response.json();
      })
      .then(data => {
        let arr = [];
        for(let key in data ) {
          arr.push(data[key]);
        }
        this.users = arr;
      })
    }
  },
  components: {

  },
  created() {
    const customActions = {
      saveAlt: {method: 'POST', url: 'alternative.json'},
      getData: {method: 'GET'}
    }
    this.resource = this.$resource('{node}.json', {}, customActions); //vue resource
  }
};
</script>

<style>
  
</style>
