<template>
  <div class="btn-group">
    <el-button v-for="(item,index) in actions" :type="item.type" :icon="item.icon" size="small" :key="index" v-on:click="item.callback">{{item.name}}</el-button>
  </div>
</template>

<script>
export default {
  name: 'btn-group',
  props: [ 'actions' ],
  data () {
    return {
      msg: ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.btn-group{
  text-align: left;
  margin-left: 20px;
}
</style>
