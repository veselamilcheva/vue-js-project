<template>
<div>
    <p>Counter is: {{ doubleCounter }}</p>
    <p>Number of clicks is: {{ stringCounter }}</p>

    <p>My Counter: {{ myOwnComputed }}</p>
</div>
</template>

<script>
    import { mapGetters } from 'vuex'; 
    export default {
        computed: {
            ...mapGetters([
                'doubleCounter',
                'stringCounter'
            ]),
            myOwnComputed() {
                return this.$store.state.counter * 3
            }
        }
    }
</script>