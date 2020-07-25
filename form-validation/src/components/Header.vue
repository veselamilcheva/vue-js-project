<template>
  <div class="app-header">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">
        <img
          width="50"
          src="https://cdn1.vectorstock.com/i/thumb-large/95/10/bald-man-with-mustache-in-business-suit-ico-vector-1979510.jpg"
        />
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <router-link tag="li" to="/" activeClass="active" class="nav-item">
            <a class="nav-link">Home</a>
          </router-link>
          <router-link tag="li" to="/user" activeClass="active" class="nav-item">
            <a class="nav-link">User</a>
          </router-link>
          <router-link tag="li" to="/userinfo" activeClass="active" class="nav-item">
            <a class="nav-link">Users Info</a>
          </router-link>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script lang="js">
export default {
  name: 'app-header',
  data() {
    return {
      
    }
  }
}
</script>

<style scoped lang="scss" scoped>
</style>