<template>
  <div class="navbar clearfix">
    <collapse class="collapse-container left" :toggleClick="toggleSidebar" :isActive="sidebar.opened"></collapse>
    <breadcrumb class="breadcrumb-container left"></breadcrumb>
    <div class="right">
      <el-dropdown trigger="click">
        <span class="el-dropdown-link logo-container">
          <img src="@/assets/4klogo.png" class="logo" width="100%" alt="4Klogo">
          <span>4K花园会员管理系统</span>
          <i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item index="logout" class="text-center">退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
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
  width: 60px;
  height: 53px;
  line-height: 53px;
  float: left;
}
.breadcrumb-container{
  float: left;
  height: 53px;
  line-height: 53px;
}
.logo-container{
  height:53px;
  line-height: 53px;
}
.logo{
  width: 53px;
}
</style>
