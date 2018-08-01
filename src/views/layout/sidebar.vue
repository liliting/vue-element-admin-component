<template>
  <div class="sidebar-container">
    <h3>会员管理系统</h3>
    <el-menu mode="vertical" :collapse="collapse" background-color="#fff" text-color="#445444" active-text-color="blue"></el-menu>
  </div>
</template>

<script>
export default {
  name: 'sidebar',
  data () {
    return {
      msg: '',
      collapse: true
    }
  }
}
</script>

<style lang="scss" scoped>
.sidebar-container{
  // background: #777;
  // color: #fff;
  h3{
    line-height:1.5;
    font-weight:300;
  }
}
</style>
