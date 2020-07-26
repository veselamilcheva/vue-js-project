<template>
  <div class="app-user container col-md-6">
    <form @submit.prevent="submit">
      <h1 class="p-4">Register</h1>
      <div class="form-group" :class="{ 'invalid': $v.name.$error }">
        <label for="name">Name</label>
        <input type="text" class="form-control" id="name" v-model="name" @input="$v.name.$touch()" placeholder="Full name">
        <div class="error" v-if="!$v.name.alphaNum">Please enter a valid name</div>
        <div class="error" v-if="!$v.name.required && $v.name.$error">Field is required</div>
        <div class="error" v-if="!$v.name.minLength">Name must have at least {{$v.name.$params.minLength.min}} letters.</div>
      </div>
      <div class="form-group" :class="{ 'invalid': $v.email.$error }">
        <label for="email">Email address</label>
        <input type="email" class="form-control" id="email" v-model="email" @input="$v.email.$touch()" placeholder="E-mail">
        <div class="error" v-if="!$v.email.email">Please enter a valid email</div>
        <div class="error" v-if="!$v.email.required && $v.email.$error">Field is required</div>
      </div>
      <div class="form-group" :class="{ 'invalid': $v.password.$error }">
        <label for="password">Password</label>
        <input type="password" class="form-control" id="password" v-model="password" @input="$v.password.$touch()" placeholder="Password">
        <div class="error" v-if="!$v.password.required && $v.password.$error">Password is required.</div>
        <div class="error" v-if="!$v.password.minLength">Password must have at least {{ $v.password.$params.minLength.min }} characters.</div>
      </div>
      <div class="form-group" :class="{ 'invalid': $v.repeatPassword.$error }">
        <label for="repeatPassword">Confirm Password</label>
        <input type="password" class="form-control" id="repeatPassword" v-model="repeatPassword" @input="$v.password.$touch()" placeholder=" Confirm Password">
        <div class="error" v-if="!$v.repeatPassword.required && $v.repeatPassword.$error">Passwords must be identical.</div>
        <div class="error" v-if="!$v.repeatPassword.sameAsPassword && $v.repeatPassword.required">Passwords must be identical.</div>
      </div>
      <p>The following information is not required. By clicking on the checkbox you agree to provide more personal information.</p>
      <div class="form-group form-check">
        <input type="checkbox" class="form-check-input" id="personalInfo" v-model="personalInfo">
        <label class="form-check-label" for="personalInfo">Add personal information</label>
      </div>
      <div v-show="personalInfo === true">
        <div class="form-group">
          <label for="phone">Phone</label>
          <input type="text" class="form-control" id="phone" v-model="phone" @input="$v.phone.$touch()" placeholder="Phone">
          <div class="error" v-if="!$v.phone.mustBePhone && $v.phone.$error">Enter valid phone</div>
        </div>
        <div class="form-group" :class="{ 'invalid': $v.zip.$error }">
          <label for="zip">Zip</label>
          <input type="text" class="form-control" id="zip" v-model.number="zip" @input="$v.zip.$touch()" placeholder="Zip">
          <div class="error" v-if="!$v.zip.numeric && $v.zip.$error">Zip is numeric.</div>
          <div class="error" v-if="!$v.zip.minLength">Zip must have at least {{$v.zip.$params.minLength.min}} digits.</div>
          <div class="error" v-if="!$v.zip.maxLength">Zip must have at most {{$v.zip.$params.maxLength.max}} digits.</div>
        </div>
        <div class="form-group mt-4 mb-4">
          <select class="form-control form-control-md" id="selectedState" v-model="selectedState">
            <option v-for="state in arrayOfStates" :value="state.value" :key="state.value">{{ state.name }}</option>
          </select>
        </div>
        <div class="form-group" :class="{ 'invalid': $v.age.$error }">
          <label for="age">Age</label>
          <input type="text" class="form-control" id="age" v-model.number="age" @input="$v.age.$touch()" placeholder="Age">
          <div class="error" v-if="!$v.age.between">Must be between {{$v.age.$params.between.min}} and {{$v.age.$params.between.max}}</div>
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
      </div>
      <div class="form-group">
        <div class="hobby-list">
          <div
            class="hobby mb-2"
            v-for="(hobbyInput, index) in hobbyInputs"
            :key="hobbyInput.id">
            <label :for="hobbyInput.id">Hobby #{{ index }}</label>&nbsp;
            <input
              type="text"
              :id="hobbyInput.id"
              :name="hobbyInput.id"
              :disabled="disabledHobbyAdded"
              v-model="hobbyInput.value">
            <button class="button-delete ml-2" @click="onDeleteHobby(hobbyInput.id)" type="button">
              <img width="20" src="https://static.thenounproject.com/png/3058-200.png" alt="delete">
            </button>
          </div>
          <div class="add-hobby" :class="{ 'invalid': $v.newHobbyInput.$error }">
            <label for="newHobbyInput">New hobby</label>&nbsp;
            <input
              type="text"
              id="newHobbyInput"
              name="newHobbyInput"
              placeholder="Add hobby"
              @change="getNewHobby(newHobbyInput)"
              v-model="newHobbyInput">
            <button type="button" @click="onAddHobby()" class="btn btn-primary mt-2 mb-2 ml-3">Add new hobby</button>
          </div>
          <div class="error" v-if="$v.newHobbyInput.$error && hobbyInputs.length === 0">Hobby is required.</div>
        </div>
      </div>
      <div class="form-group form-check" :class="{ 'invalid': $v.terms.$invalid }">
        <input type="checkbox" @change="termsChecked" class="form-check-input" id="terms" v-model="terms">
        <label class="form-check-label" for="terms">
          I {{ terms && name !== 'Vesela' ? name : '' }} give permission my data to be used in user info table unless my name is "Vesela"
        </label>
        <div class="error" v-if="!$v.terms.required && $v.terms.$error">Terms are required unless your name is Vesela.</div>
      </div>
      <div class="d-flex justify-content-center">
        <button type="submit" class="btn btn-primary mt-2" :disabled="$v.$error">Submit</button><br />
        <p class="error" v-if="submitStatus === 'OK'">Thanks for your submission!</p>
        <p class="error" v-if="submitStatus === 'ERROR'">Please fill the form correctly.</p>
        <p class="error" v-if="submitStatus === 'PENDING'">Sending...</p>
      </div>
    </form>
  </div>

</template>
<script lang="js">
import states from '../states';
import { required, minLength, maxLength, between, sameAs, alphaNum, numeric, email, alpha, requiredUnless } from 'vuelidate/lib/validators'
import { mapActions } from 'vuex';

export default {
  name: 'app-user',
  data() {
    return {
      arrayOfStates: states,
      name: null,
      email: '',
      password: '',
      repeatPassword: '',
      zip: null,
      phone: null,
      gender: '',
      age: null,
      terms: null,
      selectedState: states[0].value,
      personalInfo: false,
      hobbyInputs: [],
      newHobbyInput: '',
      disabledHobbyAdded: false,
      submitStatus: null
    }
  },
  validations: {
    name: {
      required,
      alphaNum,
      minLength: minLength(2)
    },
    email: {
      required,
      email
    },
    password: {
      required,
      minLength: minLength(6),
    },
    repeatPassword: {
      required,
      sameAsPassword: sameAs('password')
    },
    phone: {
      mustBePhone: function(vm) {
        let phoneReg = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
        return vm ? phoneReg.test(vm) : true;
      }
    },
    zip: {
      numeric,
      minLength: minLength(5),
      maxLength: maxLength(5)
    },
    age: {
      between: between(20,30)
    },
    terms: {
      required: requiredUnless(vm => {
        return 'Vesela' === vm.name;
      })
    },
    newHobbyInput: {
      required: requiredUnless(function () {
        return this.hobbyInputs.length > 0;
      }),
      minLength: minLength(2)
    }
  },
  methods: {
    ...mapActions({
      addUser: 'addUser'
    }),
    termsChecked() {
      this.$v.terms.$touch();
      if (!this.terms) {
        this.terms = null;
      }
    },
    getNewHobby(hobby) {
      this.newHobbyInput = hobby;
      console.log(hobby)
    },
    onAddHobby() {
      this.$v.newHobbyInput.$touch();
      if (this.$v.newHobbyInput.$error) {
        return;
      }

      this.disabledHobbyAdded = true;
      const hobby = {
        id: Math.floor(Math.random()*10),
        value: this.newHobbyInput
      }
      this.hobbyInputs.push(hobby);
      this.newHobbyInput = '';
    },
    onDeleteHobby(id) {
      this.$v.newHobbyInput.$touch();
      this.hobbyInputs = this.hobbyInputs.filter(hobby => hobby.id !== id)
    },
    submit() {
      this.$v.$touch()
      if (this.$v.$invalid) {
        this.submitStatus = 'ERROR'
        return;
      }

      const formData = {
        name: this.name,
        email: this.email,
        password: this.password,
        zip: this.zip,
        phone: this.phone,
        gender: this.gender,
        age: this.age,
        selectedState: this.selectedState,
        hobbyInputs: this.hobbyInputs
      }

      // do your submit logic here
      this.submitStatus = 'PENDING'
      setTimeout(() => {
        this.addUser(formData);
        this.submitStatus = 'OK'
      }, 500)
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
    .form-group.invalid label {
      color: #f77d7d;
    }
    .form-group.invalid input {
      border: 2px solid #f77d7d;
    }
    .error {
      color: #f77d7d;
    }
    .button-delete {
      border: 0;
      outline: 0;
      background: none;
    }
    .hobby {
      display: flex;
      align-items: center;
      label {
        margin: 0;
        width: 90px;
      }
    }
    .add-hobby {
      display: flex;
      align-items: center;
      label {
        margin: 0;
        width: 90px;
      }
    }
  }
</style>
