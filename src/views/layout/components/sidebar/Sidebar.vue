<template>
  <div class="sidebar-container">
    <el-menu
      mode="vertical"
      :default-active="$route.path"
      :collapse="isCollapse"
      background-color="#222"
      text-color="#fff"
      active-text-color="#409EFF"
    >
      <sidebar-item
        v-for="route in routers"
        :key="route.name"
        :item="route"
        :base-path="route.path"
      ></sidebar-item>
    </el-menu>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import SidebarItem from './SidebarItem'

export default {
  name: 'sidebar',
  computed: {
    ...mapGetters(['routers', 'sidebar']),
    isCollapse() {
      return this.sidebar.opened
    },
  },
  components: {
    SidebarItem,
  },
  data() {
    return {
      msg: '',
    }
  },
}
</script>

<style lang="scss" scoped>
.sidebar-container {
  h3 {
    line-height: 1.5;
    font-weight: 300;
  }
}
.el-menu {
  height: 100%;
}
</style>
