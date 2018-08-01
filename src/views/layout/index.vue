<template>
  <div class="app-container">
    <sidebar class="sidebar-container"></sidebar>
    <div class="main-container">
      <navbar></navbar>
      <app-main></app-main>
    </div>
  </div>
</template>

<script>
import Sidebar from './Sidebar.vue'
import Navbar from './Navbar.vue'
import AppMain from './AppMain.vue'

export default {
  name: 'login',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    Sidebar,
    Navbar,
    AppMain
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
body{
  background: #f1f1f1;
  height:100%;
}
.app-container{
  height:100%;
}
.sidebar-container{
  width: 150px;
  height: 100%;
  float: left;
}
</style>
