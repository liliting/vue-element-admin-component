<template>
  <div class="navbar clearfix">
    <collapse
      class="collapse-container left"
      :toggleClick="toggleSidebar"
      :isActive="sidebar.opened"
    ></collapse>
    <breadcrumb class="breadcrumb-container left"></breadcrumb>
    <div class="right">
      <el-dropdown trigger="click">
        <span class="el-dropdown-link">
          <span>{{ username }}</span>
          <el-icon class="el-icon--right"><el-icon-arrow-down /></el-icon>
        </span>
        <template v-slot:dropdown>
          <el-dropdown-menu>
            <el-dropdown-item index="logout" class="text-center">
              <el-button type="text" v-on:click="logout">退出</el-button>
            </el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
import { ArrowDown as ElIconArrowDown } from '@element-plus/icons'
import { mapGetters } from 'vuex'
import Collapse from './Collapse'
import Breadcrumb from './Breadcrumb'
export default {
  components: {
    Collapse,
    Breadcrumb,
    ElIconArrowDown,
  },
  name: 'navbar',
  data() {
    return {
      msg: 'hello',
    }
  },
  computed: {
    ...mapGetters(['sidebar', 'username']),
  },
  methods: {
    toggleSidebar() {
      this.$store.dispatch('toggleSidebar')
    },
    logout() {
      this.$store.dispatch('Logout').then(() => {
        this.$router.push('/login')
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.collapse-container {
  width: 60px;
  height: 53px;
  line-height: 53px;
  float: left;
}
.breadcrumb-container {
  float: left;
  height: 53px;
  line-height: 53px;
  margin-left: 10px;
}
.logo-container {
  height: 53px;
  line-height: 53px;
  display: inline-block;
}
.logo {
  width: 70px;
  vertical-align: middle;
  margin-top: -10px;
}
.right {
  height: 53px;
  line-height: 53px;
  margin-right: 10px;
}
.logos {
  display: inline-block;
  line-height: 53px;
  -webkit-margin-before: 0;
  -webkit-margin-after: 0;
}
</style>
