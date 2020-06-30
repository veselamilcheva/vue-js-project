<template>
  <div class="col-xs-12 col-sm-8 col-offset-2 col-md-6 col-md-offset-3">
    <h1 class="animate__animated animate__bounce">An animated element</h1>
    <hr>
    <select name="" id="" v-model="alertAnimation">
      <option value="fade">Fade</option>
      <option value="slide">Slide</option>
    </select>
    <button class="btn btn-primary" @click="show = !show">Show Alert</button>
    <br><br>
    <transition :name="alertAnimation">
      <div class="alert alert-info" v-if="show">This is an alert!!</div>
    </transition>
    <transition :name="alertAnimation" type="animation">
      <div class="alert alert-info" v-if="show">This is an alert!!</div>
    </transition>
    <transition
      enter-active-class="animate__animated animate__bounce"
      leave-active-class="animate__animated animate__fadeInDown"
      >
      <div class="alert alert-info" v-if="show">This is an alert!!</div>
    </transition>
    <transition :name="alertAnimation" mode="out-in">
      <div class="alert alert-info" v-if="show" key="info">This is an alert!!</div>
      <div class="alert alert-warning" v-else key="warning">This is some Warning!!</div>
    </transition>
    <button class="btn btn-primary" @click="load = !load">Load / Load Remove</button>
    <br><br>
    <transition 
      @before-enter="beforeEnter"
      @enter="enter"
      @after-enter="afterEnter"
      @enter-cancelled="enterCancelled"

      @before-leave="beforeLeave"
      @leave="leave"
      @after-leave="afterLeave"
      @leave-cancelled="leaveCancelled"
      :css="false"><!-- do not look for css animations -->
      <div style="width: 300px; height: 100px; background-color: lightgreen" v-if="load"></div>
    </transition>
    <hr>
    <button class="btn btn-primary" 
      @click="selectedComponent == 'app-success-alert' ? selectedComponent = 'app-danger-alert' : selectedComponent = 'app-success-alert'">Togle components</button>
    <br><br>
    <transition name="fade" mode="out-in"> 
      <component :is="selectedComponent"></component>
    </transition>
    <hr>
    <button class="btn btn-primary" @click="addItem">Add Item</button>
    <br><br>
    <ul class="list-group">
      <transition-group name="slide">
          <li class="list-group-item" 
            v-for="(item, index) in numbers" :key="item"
            @click="removeItem(index)"
            style="cursor:pointer">
            {{ item }}
          </li>
      </transition-group>
    </ul>
  </div>
</template>

<script>
import DangerAlert from './DangerAlert.vue';
import SuccessAlert from './SuccessAlert.vue';

export default {
  data() {
    return {
     show: false,
     load: true,
     alertAnimation: 'fade',
     elementWidth: 100,
     selectedComponent: 'app-success-alert',
     numbers: [1,2,3,4]
    };
  },
  methods: {
    addItem() {
      // const pos = Math.floor(Math.random() * this.numbers.length);
      // this.numbers.splice(pos,0,this.numbers.length + 1);

      this.numbers.push(this.numbers.length + 1);
    },
    removeItem(i) {
      this.numbers.splice(i,1);
    },
    beforeEnter(el) {
      this.elementWidth = 100;
      el.style.width = this.elementWidth + 'px';
    },
    enter(el, done) {
      let round = 1;
      const interval = setInterval(() => {
        el.style.width = (this.elementWidth + round * 10) + 'px';
        round++;
        if(round > 20) {
          clearInterval(interval);
          done();
        }
      }, 20);
    },
    afterEnter(el) {

    },
    enterCancelled(el) {

    },
    beforeLeave(el) {
      this.elementWidth = 300;
      el.style.width = this.elementWidth + 'px';
    },
    leave(el, done) {
      let round = 1;
      const interval = setInterval(() => {
        el.style.width = (this.elementWidth - round * 10) + 'px';
        round++;
        if(round > 20) {
          clearInterval(interval);
          done();
        }
      }, 20);
    },
    afterLeave(el) {

    },
    leaveCancelled(el) {

    }

  },
  components: {
   appDangerAlert: DangerAlert,
   appSuccessAlert: SuccessAlert

  }
};
</script>

<style>
  .fade-enter {
    opacity: 0;
  }
  .fade-enter-active {
    transition: opacity 1s;
  }
  .fade-leave {
    /* opacity: 1; */
  }
  .fade-leave-active {
    transition: opacity 1s;
    opacity: 0;
  }

  .slide-enter {
    opacity: 0;
  }
  .slide-enter-active {
    animation: slide-in 1s ease-out forwards;
    transition: opacity .5s;
  }

  .slide-leave {
  }

  .slide-leave-active {
     animation: slide-out 1s easy-out forwards;
     transition: opacity 1s;
     opacity: 0;
     position: absolute;
  }
  /* only for transition-group */
  .slide-move {
    transition: transform 1s;
  }

  @keyframes slide-in {
    from {
      transform: translateY(20px);
    }
    to {
      transform: translateY(0);
    }
  }

  @keyframes slide-out {
    from {
      transform: translateY(0);
    }
    to {
      transform: translateY(20px);
    }
  }
</style>
