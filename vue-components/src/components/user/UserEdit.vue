<template>
    <div>
        <h3>Edit the User</h3>
        <p>Locale: {{ $route.query.locale }} </p>
        <p>Analytics: {{ $route.query.q }} </p>
        <hr>
        <button class="btn btn-primary" @click="confirmed = true">Confirm</button>
        <hr>
        <div style="width: 700px; height:700px;"></div>
        <p id="data">Some test data</p>
    </div>
</template>
<script>
    export default {
        data() {
          return {
              confirmed: false
          }
        },
        beforeRouteLeave(to, from, next) { //works even for bak btn guards for routing
            if (this.confirmed) {
                next();
            } else {
                if (confirm('Are you sure?')) {
                    next();
                } else {
                    next(false);
                }
            }
        }
    }
</script>