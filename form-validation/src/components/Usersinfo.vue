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

const random = () => {
  return parseInt(Date.now() + Math.random() * 10000000).toString(16).slice(-6)
}


export default {
  name: 'app-users-info',
  data() {
    return {
      params: {
        data: [
          ['Index', `Data1`, `Data2`, `Data3`]
        ],
        header: 'row',
        border: true,
        stripe: true,
        pagination: true,
        pageSize: 5,
        pageSizes: [5, 10, 20, 50]
      }
    } 
  },
  mounted () {
    for (let i = 0; i < 100; i++) {
      this.params.data.push([i+1, `${random()}`, `${random()}`, `${random()}`])
    }
  },
}
</script>

<style lang="scss" scoped>

</style>
