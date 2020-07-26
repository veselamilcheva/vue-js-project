<template>
  <div class="app-users-info contaner col-md-12">
    <div class="d-flex justify-content-center">
      <div class="col-md-8 mt-4">
        <vue-table-dynamic :params="params"></vue-table-dynamic>
      </div>
    </div>
  </div>
</template>

<script lang="js">
  import {mapState} from 'vuex';

  const tableHeader = ['Name', 'Email', 'zip', 'phone', 'gender', 'age', 'selectedState'];

  const initialParams = {
    data: [
      tableHeader
    ],
    header: 'row',
    border: true,
    stripe: true,
    pagination: true,
    pageSize: 5,
    pageSizes: [5, 10, 20, 50]
  };

  export default {
    name: 'app-users-info',
    data() {
      return {
      }
    },
    mounted() {
    },
    computed: {
      ...mapState({
        usersInfo: 'usersInfo'
      }),
      params() {
        initialParams.data = [];
        initialParams.data.push(tableHeader);
        this.usersInfo.forEach(item => {
          initialParams.data.push([item.name, item.email, item.zip, item.phone, item.gender, item.age, item.selectedState]);
        })
        return initialParams;
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
