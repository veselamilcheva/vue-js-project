<template>
  <div id="dashboard">
    <h1>That's the dashboard!</h1>
    <p>You should only get here if you're authenticated!</p>
    <p>Your email: {{ email }}</p>
  </div>
</template>


<script>
  import axios from 'axios';

  export default {
    data() {
      return {
        email: ''
      }
    },
    created() {
      axios.get('/users.json')
      .then(res => {
        const data = res.data;
        const usersArr = [];
        for(let key in data) {
          const user = data[key];
          user.id = key;
          usersArr.push(user)
        }
        this.email = usersArr[0].email;
      })
      .catch(err => console.log('err on get', err))
    }
  }
</script>
<style scoped>
  h1, p {
    text-align: center;
  }

  p {
    color: red;
  }
</style>