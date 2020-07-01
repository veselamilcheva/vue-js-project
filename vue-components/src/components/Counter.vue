<template>
    <div>
        <button class="btn btn-primary" @click="increment">Increment</button>
        <button class="btn btn-primary" @click="decrement(50)">Decrement</button>
    </div>
</template>

<script>
    // export default {
    //     methods: {
    //         increment() {
    //             this.$store.state.counter++;
    //         },
    //         decrement() {
    //             this.$store.state.counter--;
    //         }
    //     }
    // }
    import { mapActions } from 'vuex';
    export default {
        methods: {
            ...mapActions([
                'increment',
                'decrement'
            ])
        }
    }
</script>