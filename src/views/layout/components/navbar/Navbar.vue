<template>
  <div class="navbar clearfix">
    <collapse class="collapse-container left" :toggleClick="toggleSidebar" :isActive="sidebar.opened"></collapse>
    <breadcrumb class="breadcrumb-container left"></breadcrumb>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Collapse from './Collapse'
import Breadcrumb from './Breadcrumb'
export default {
  name: 'navbar',
  components: {
    Collapse,
    Breadcrumb
  },
  data () {
    return {
      'msg': 'hello'
    }
  },
  computed: {
    ...mapGetters([
      'sidebar'
    ])
  },
  methods: {
    toggleSidebar () {
      this.$store.dispatch('toggleSidebar')
    }
  }
}
</script>

<style lang="scss" scoped>
.collapse-container{
  width: 50px;
  height: 50px;
  line-height: 50px;
  float: left;
}
.breadcrumb-container{
  float: left;
  height: 50px;
  line-height: 50px;
}
</style>
