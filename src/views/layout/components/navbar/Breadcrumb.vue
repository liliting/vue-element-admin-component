<template>
  <div class="breadcrumb">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item>首页</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script>
export default {
  name: 'breadcrumb',
  data () {
    return {
      msg: ''
    }
  },
  created: function () {
    console.log(this.$route)
  }
}
</script>

<style lang="scss" scoped>
.el-breadcrumb{
  line-height: 50px;
}
</style>
