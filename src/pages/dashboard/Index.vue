<template>
  <div class="login-container">
    <el-row :gutter="20">
      <el-col :span="6">
        <el-card>
          <template v-slot:header>
            <div class="blue">昨日访问量</div>
          </template>
          <div>10000</div>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card>
          <template v-slot:header>
            <div class="success">用户量</div>
          </template>
          <div>5000</div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import config from './config'
export default {
  name: 'example',
  created() {
    this.config = config
    console.log(config)
  },
  data() {
    return {
      config: null,
    }
  },
}
</script>

<style lang="scss" scoped>
.login-container {
  padding: 20px;
}
</style>
