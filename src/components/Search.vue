<template>
  <div class="search">
    <el-form ref="form" :inline="true">
      <component :is="item.type" :field="item" v-for="(item,index) in search.fields" :key="index">组件初始化失败</component>
      <el-form-item>
        <el-button type="primary">提交</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { CheckBox, Datetime, SkInput, SkSelect } from './form/index'
export default {
  name: 'search',
  components: {
    CheckBox,
    Datetime,
    SkInput,
    SkSelect
  },
  props: [ 'search' ],
  data () {
    return {
      msg: ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.search{
  padding:20px;
}
</style>
