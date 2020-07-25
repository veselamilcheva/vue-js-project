<template>
  <div class="app-user container col-md-6">
    <form>
      <h1 class="p-4">Register</h1>
      <div class="form-group">
        <label for="name">Name</label>
        <input type="text" class="form-control" id="name" v-model="name" placeholder="Full name">
      </div>
      <div class="form-group">
        <label for="email">Email address</label>
        <input type="email" class="form-control" id="email" v-model="email" placeholder="E-mail">
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input type="password" class="form-control" id="password" v-model="password" placeholder="Password">
      </div>
      <div class="form-group">
        <label for="phone">Phone</label>
        <input type="text" class="form-control" id="phone" v-model="phone" placeholder="Phone">
      </div>
      <div class="form-group">
        <label for="zip">Zip</label>
        <input type="text" class="form-control" id="zip" v-model="zip" placeholder="Zip">
      </div>
      <div class="form-group mt-4 mb-4">
        <select class="form-control form-control-md" v-model="selectedState">
          <option v-for="state in arrayOfStates" :key="state.val">{{ state.name }}</option>
        </select>
      </div>
      <div class="form-group">
        <div class="form-check">
          <input class="form-check-input" type="radio" name="gender" id="male" value="male" v-model="gender" checked>
          <label class="form-check-label" for="male">
            Male
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="radio" name="gender" id="female" value="female" v-model="gender">
          <label class="form-check-label" for="female">
            Female
          </label>
        </div>
      </div>
      <div class="form-group form-check">
        <input type="checkbox" class="form-check-input" id="confirm" v-model="confirm">
        <label class="form-check-label" for="confirm">I {{ confirm ? name : '' }} give my permission to use my data</label>
      </div>
      <div class="d-flex justify-content-center">
        <button type="submit" class="btn btn-primary mt-2">Submit</button>
      </div>
    </form>
  </div>
  
</template>
<script lang="js">
import states from '../states';

export default {
  name: 'app-user',
  data() {
    return {
      arrayOfStates: states,
      name: '',
      email: '',
      password: '',
      zip: null,
      state: '',
      gender: '',
      selectedState: ''
    }
  }
}
</script>
<style lang="scss" scoped>
  .app-user form {
    padding: 40px;
    margin-top: 40px;
    -webkit-box-shadow: -2px 5px 13px 2px rgba(214,214,214,1);
    -moz-box-shadow: -2px 5px 13px 2px rgba(214,214,214,1);
    box-shadow: -2px 5px 13px 2px rgba(214,214,214,1);
    h1 {
      text-align: center;
    }
  }
</style>