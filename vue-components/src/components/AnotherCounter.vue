<template>
    <div>
        <p>Another counter with actions</p>
        <button class="btn btn-primary" @click="asyncIncrement({by: 50, duration: 500})">Increment</button>
        <button class="btn btn-primary" @click="decrement(50)">Decrement</button>
    </div>
</template>

<script>
    import { mapMutations } from 'vuex';
    import { mapActions } from 'vuex';

    export default {
        // methods: {
        //     increment() {
        //         this.$store.commit('increment')
        //     },
        //     decrement() {
        //         this.$store.commit('decrement')
        //     }
        // }
        //with mutations
        // methods: {
        //     ...mapMutations([
        //         'increment',
        //         'decrement'
        //     ])
        // }
         methods: {
            ...mapActions([
                'asyncIncrement',
                'decrement'
            ])
        }

    }
</script>