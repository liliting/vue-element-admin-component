<template>
  <div class="app-container">
    <sidebar
      class="sidebar-container"
      :class="{ opened: sidebar.opened }"
    ></sidebar>
    <div class="main-container" :class="{ opened: sidebar.opened }">
      <navbar class="navbar"></navbar>
      <app-main></app-main>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { Sidebar, Navbar, AppMain } from './components'

export default {
  name: 'login',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
    }
  },
  components: {
    Sidebar,
    Navbar,
    AppMain,
  },
  computed: {
    ...mapGetters(['sidebar']),
  },
  created: function () {
    console.log(this.sidebar)
  },
  methods: {},
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
body {
  background: #f1f1f1;
  height: 100%;
}
.app-container {
  height: 100%;
  overflow: hidden;
}
.sidebar-container {
  width: 201px;
  height: 100%;
  float: left;
  position: absolute;
  .opened {
    width: 64px;
  }
}
.main-container {
  margin-left: 201px;
  &.opened {
    margin-left: 64px;
  }
}
.navbar {
  height: 53px;
  border-bottom: 1px solid #f1f1f1;
}
</style>
