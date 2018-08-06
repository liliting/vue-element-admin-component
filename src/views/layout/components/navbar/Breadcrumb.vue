<template>
  <div class="breadcrumb">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item>首页</el-breadcrumb-item>
      <el-breadcrumb-item v-for="item in list" :key="item.name">{{item.meta.title}}</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script>
export default {
  name: 'breadcrumb',
  data () {
    return {
      list: null
    }
  },
  created: function () {
    this.getBreadcrumb()
  },
  watch: {
    $route: function () {
      this.getBreadcrumb()
    }
  },
  mounted: function () {
    this.getBreadcrumb()
  },
  methods: {
    getBreadcrumb () {
      let match = this.$route.matched.filter(item => item.name)
      this.list = match
    }
  }
}
</script>

<style lang="scss" scoped>
.el-breadcrumb{
  line-height: 53px;
}
</style>
